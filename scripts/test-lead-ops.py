#!/usr/bin/env python3
"""Unit tests using explicitly simulated checks; no network/email is sent."""
import importlib.util
import io
import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location("lead_ops", Path(__file__).with_name("lead-ops.py"))
assert spec is not None and spec.loader is not None
ops = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ops)


class LeadOpsTests(unittest.TestCase):
    def test_notification_request_has_explicit_user_agent_and_idempotency(self):
        captured = []
        def simulated_urlopen(request, timeout):
            captured.append(request)
            return io.BytesIO(b'{"id":"UNIT_TEST_NOT_A_REAL_MESSAGE_ID"}')
        with patch.object(ops, "read_env", return_value={"RESEND_API_KEY": "UNIT_TEST_NOT_A_REAL_KEY"}), patch.object(ops.urllib.request, "urlopen", side_effect=simulated_urlopen):
            result = ops.send_owner_email("UNIT TEST", "Simulated, not sent", "UNIT_TEST_ENV", "UNIT_TEST_IDEMPOTENCY")
        self.assertEqual(result, "UNIT_TEST_NOT_A_REAL_MESSAGE_ID")
        self.assertIn("EnkayLeadOps", captured[0].get_header("User-agent"))
        self.assertEqual(captured[0].get_header("Idempotency-key"), "UNIT_TEST_IDEMPOTENCY")

    def test_storage_checks_report_corruption_without_suppressing_it(self):
        with tempfile.TemporaryDirectory(dir=Path.home() / ".hermes/cache/scratch") as directory:
            self.assertFalse(ops.storage_check(Path(directory) / "missing")["ok"])
            self.assertTrue(ops.storage_check(directory)["ok"])
            today = Path(directory) / (ops.datetime.now(ops.timezone.utc).date().isoformat() + ".json")
            today.write_text("not json")
            self.assertEqual(ops.storage_check(directory)["error"], "AggregateNeedsInspection")
            today.write_text(ops.json.dumps({"version": 1, "counts": []}))
            self.assertTrue(ops.storage_check(directory)["ok"])

    def test_stale_writer_lock_alert_never_steals_the_lock(self):
        with tempfile.TemporaryDirectory(dir=Path.home() / ".hermes/cache/scratch") as directory:
            lock = Path(directory) / ".write-lock"
            lock.mkdir()
            self.assertTrue(ops.storage_check(directory)["ok"])
            os.utime(lock, (ops.time.time() - 180, ops.time.time() - 180))
            self.assertEqual(ops.storage_check(directory)["error"], "WriterLockNeedsInspection")
            self.assertTrue(lock.is_dir())

    def test_repeated_failure_alert_is_deduplicated_and_recovery_is_once(self):
        sent = []
        def send(subject, body, key):
            sent.append((subject, body, key))
            return "UNIT_TEST_NOT_A_REAL_MESSAGE_ID"
        failed = [{"name": "/", "ok": False, "status": 503}]
        healthy = [{"name": "/", "ok": True, "status": 200}]
        state = ops.update_health({}, failed, send, "UNIT_TEST_TIME")
        self.assertEqual(len(sent), 0)
        state = ops.update_health(state, failed, send, "UNIT_TEST_TIME")
        self.assertEqual(len(sent), 1)
        state = ops.update_health(state, failed, send, "UNIT_TEST_TIME")
        self.assertEqual(len(sent), 1)
        state = ops.update_health(state, healthy, send, "UNIT_TEST_TIME")
        self.assertEqual(len(sent), 2)
        state = ops.update_health(state, healthy, send, "UNIT_TEST_TIME")
        self.assertEqual(len(sent), 2)
        self.assertTrue(state["healthy"])
        self.assertFalse(state["alerted"])
        self.assertTrue(sent[0][2].endswith(":down"))
        self.assertTrue(sent[1][2].endswith(":up"))

    def test_healthy_start_sends_nothing(self):
        sent = []
        state = ops.update_health({}, [{"name": "/", "ok": True, "status": 200}], lambda *args: sent.append(args))
        self.assertEqual(sent, [])
        self.assertEqual(state["consecutive_failures"], 0)

    def test_private_state_atomic_round_trip(self):
        with tempfile.TemporaryDirectory(dir=Path.home() / ".hermes/cache/scratch") as directory:
            path = Path(directory) / "health.json"
            ops.atomic_json(path, {"healthy": True})
            self.assertEqual(ops.json.loads(path.read_text()), {"healthy": True})
            self.assertEqual(path.stat().st_mode & 0o777, 0o600)
            self.assertFalse(path.with_name("health.json.tmp").exists())

    def test_report_distinguishes_counts_from_paid_work_and_gsc(self):
        text = ops.make_weekly_text({"generated_at": "UNIT_TEST_TIME", "total": {"page_view": 0, "lead_received": 0}, "by_path": [], "notes": []}, [{"name": "/", "ok": True, "status": 200}], "UNIT_TEST_INSTALL_TIME")
        self.assertIn("not contain authenticated GSC data", text)
        self.assertIn("not verified inbox delivery, qualified leads or paid projects", text)
        self.assertIn("no earlier tracking history is reconstructed", text)
        self.assertIn("UNIT_TEST_INSTALL_TIME", text)


if __name__ == "__main__":
    unittest.main()
