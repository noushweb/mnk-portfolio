#!/usr/bin/env python3
"""Deterministic site health + aggregate lead reports; never submits a real lead."""
import argparse
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import subprocess
import time
import urllib.error
import urllib.request
import uuid

EVENT_LABELS = {"page_view": "Page views (not unique visitors)", "enquiry_open": "Enquiry CTA opens", "form_start": "Form starts", "form_submit": "Submission attempts", "form_error": "Client form errors", "email_click": "Email link clicks", "lead_received": "Owner-notification accepted submissions"}


def utc_now():
    return datetime.now(timezone.utc).isoformat()


def read_env(path):
    result = {}
    for line in Path(path).read_text().splitlines():
        if "=" in line and not line.lstrip().startswith("#"):
            key, value = line.split("=", 1)
            result[key.strip()] = value.strip().strip('"').strip("'")
    return result


def atomic_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    temporary = path.with_name(path.name + ".tmp")
    temporary.write_text(json.dumps(value, indent=2))
    os.chmod(temporary, 0o600)
    temporary.replace(path)


def http_check(name, url, expected=(200,), payload=None, host=None):
    headers = {"User-Agent": "Mozilla/5.0 (EnkayHealthcheck/1.0)", "Accept": "application/json,text/html,application/xml"}
    if host:
        headers.update({"Host": host, "Origin": "https://enkay.dev", "Referer": "https://enkay.dev/ux-audit"})
    if payload is not None:
        headers["Content-Type"] = "application/json"
    request = urllib.request.Request(url, data=payload, headers=headers, method="POST" if payload is not None else "GET")
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            status = response.status
            response.read(512)
    except urllib.error.HTTPError as error:
        status = error.code
    except Exception as error:
        return {"name": name, "ok": False, "error": type(error).__name__}
    return {"name": name, "ok": status in expected, "status": status}


def storage_check(data_dir):
    directory = Path(data_dir)
    if not directory.is_dir():
        return {"name": "aggregate-storage", "ok": False, "error": "StorageDirectoryMissing"}
    lock = directory / ".write-lock"
    try:
        if time.time() - lock.stat().st_mtime > 120:
            # Alert; never remove a lock from under a potentially active writer.
            return {"name": "aggregate-storage", "ok": False, "error": "WriterLockNeedsInspection"}
    except FileNotFoundError:
        pass
    except OSError:
        return {"name": "aggregate-storage", "ok": False, "error": "StorageInspectionFailed"}
    today = directory / (datetime.now(timezone.utc).date().isoformat() + ".json")
    try:
        if today.exists():
            data = json.loads(today.read_text())
            if not isinstance(data, dict) or data.get("version") != 1 or not isinstance(data.get("counts"), list):
                raise ValueError("Invalid aggregate schema")
    except (OSError, ValueError):
        return {"name": "aggregate-storage", "ok": False, "error": "AggregateNeedsInspection"}
    return {"name": "aggregate-storage", "ok": True, "status": "ready"}


def live_checks(origin, container, data_dir=None):
    checks = [http_check(path, origin.rstrip("/") + path) for path in ["/", "/ux-audit", "/design-system-consultant", "/saas-product-design", "/sitemap.xml"]]
    try:
        result = subprocess.run(["docker", "inspect", container, "--format", "{{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}"], capture_output=True, text=True, check=True, timeout=15)
        addresses = result.stdout.split()
        if not addresses:
            raise RuntimeError("No container network address")
        # Empty JSON validates reachability/configuration only: no AI or email is invoked.
        checks.append(http_check("contact-validation-origin", f"http://{addresses[0]}:3000/api/contact", expected=(400,), payload=b"{}", host="enkay.dev"))
    except Exception as error:
        checks.append({"name": "contact-validation-origin", "ok": False, "error": type(error).__name__})
    if data_dir is not None:
        checks.append(storage_check(data_dir))
    return checks


def send_owner_email(subject, text, env_file, idempotency_key):
    key = read_env(env_file).get("RESEND_API_KEY")
    if not key:
        raise RuntimeError("Resend is not configured")
    payload = {"from": "Enkay Site Monitor <hello@enkay.dev>", "to": ["hello@enkay.dev"], "subject": subject, "text": text}
    request = urllib.request.Request("https://api.resend.com/emails", data=json.dumps(payload).encode(), headers={"Authorization": "Bearer " + key, "Content-Type": "application/json", "Idempotency-Key": idempotency_key}, method="POST")
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            data = json.load(response)
    except urllib.error.HTTPError as error:
        # Do not print credentials, recipient details or provider response bodies.
        raise RuntimeError(f"Owner email provider returned HTTP {error.code}") from error
    if not data.get("id"):
        raise RuntimeError("Owner email provider did not return a message ID")
    return data["id"]


def update_health(previous, checks, send, now=None):
    now = now or utc_now()
    state = dict(previous)
    failed = [check for check in checks if not check["ok"]]
    state.update({"checked_at": now, "checks": checks, "healthy": not failed})
    if failed:
        state["consecutive_failures"] = int(state.get("consecutive_failures", 0)) + 1
        if not state.get("incident_id"):
            state["incident_id"] = str(uuid.uuid4())
        if state["consecutive_failures"] >= 2 and not state.get("alerted"):
            details = "\n".join(f"- {item['name']}: HTTP {item.get('status', item.get('error', 'unknown'))}" for item in failed)
            message_id = send("[Enkay] Website/enquiry-path health alert", "Repeated health checks failed.\n\n" + details + "\n\nThis check never sends a customer enquiry and does not prove email inbox placement.", "enkay-health:" + state["incident_id"] + ":down")
            state.update({"alerted": True, "last_alert_message_id": message_id, "last_alert_at": now})
    else:
        if state.get("alerted"):
            message_id = send("[Enkay] Website health recovered", "The monitored public pages and contact validation are responding again.\n\nChecked at: " + now, "enkay-health:" + state["incident_id"] + ":up")
            state.update({"last_recovery_message_id": message_id, "last_recovery_at": now})
        state.update({"consecutive_failures": 0, "alerted": False, "incident_id": None})
    return state


def make_weekly_text(report, checks, installed_at):
    lines = ["enkay.dev — Weekly lead & health report", "", "ഈ report anonymous aggregate event counts ആണ്; unique visitors അല്ല.", "Tracking enabled at: " + (installed_at or "not established"), "Generated at: " + report.get("generated_at", utc_now()), "", "FUNNEL COUNTS (no earlier tracking history is reconstructed)"]
    total = report.get("total", {})
    for event, label in EVENT_LABELS.items():
        lines.append(f"- {label}: {int(total.get(event, 0))}")
    lines.extend(["", "PAGES"])
    for item in report.get("by_path", []):
        events = item.get("events", {})
        lines.append(f"- {item['path']}: {events.get('page_view', 0)} views, {events.get('enquiry_open', 0)} CTA opens, {events.get('lead_received', 0)} accepted submissions")
    if not report.get("by_path"):
        lines.append("- No measured page events in this period. This does not establish zero visitors before tracking was installed.")
    lines.extend(["", "HEALTH"])
    lines.extend(f"- {item['name']}: {'OK' if item['ok'] else 'CHECK REQUIRED'} ({item.get('status', item.get('error', 'unknown'))})" for item in checks)
    lines.extend(["", "NEXT BUSINESS REVIEW", "- Enquiries യഥാർത്ഥ paid-project fit ആണോ എന്ന് പരിശോധിക്കുക; calls/proposals/wins manually record ചെയ്യുക.", "- Service-page query impressions/clicks Search Console-ൽ review ചെയ്യുക. This email does not contain authenticated GSC data.", "- Compare relevant pages and proof before deciding to publish another article.", "", "LIMITATIONS", "Counts are not unique visitors or a conversion rate. Accepted submissions are not verified inbox delivery, qualified leads or paid projects. Internal diagnostic submissions are excluded."])
    lines.extend(str(note) for note in report.get("notes", []))
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--origin", default="https://enkay.dev")
    parser.add_argument("--container", default="mnk-portfolio-portfolio-1")
    parser.add_argument("--repo", default="/root/mnk-portfolio")
    parser.add_argument("--env-file")
    parser.add_argument("--state-dir")
    parser.add_argument("--data-dir")
    parser.add_argument("--notify", action="store_true")
    parser.add_argument("--weekly-report", action="store_true")
    parser.add_argument("--send-test-alert", action="store_true")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    repo = Path(args.repo)
    env_file = args.env_file or str(repo / ".env")
    state_dir = Path(args.state_dir or repo / ".lead-monitor")
    data_dir = Path(args.data_dir or repo / ".lead-analytics")
    send = lambda subject, text, key: send_owner_email(subject, text, env_file, key)
    if args.send_test_alert:
        message_id = send("[TEST] Enkay monitoring notification", "Internal setup test, not a client enquiry or a real outage. No response is required.", "enkay-monitor-test:" + datetime.now(timezone.utc).date().isoformat())
        print(json.dumps({"test": True, "provider_accepted_message_id": message_id, "delivered": "not independently verified"}))
        return 0
    checks = live_checks(args.origin, args.container, data_dir)
    healthy = all(item["ok"] for item in checks)
    if args.weekly_report:
        week_key = datetime.now(timezone.utc).strftime("%G-W%V")
        prior_path = state_dir / "last-weekly-report.json"
        if args.notify and prior_path.exists():
            prior = json.loads(prior_path.read_text())
            if prior.get("week_key") == week_key and prior.get("provider_accepted_message_id"):
                print(json.dumps({"kind": "weekly-report", "skipped": "already accepted this week", "week_key": week_key, "provider_accepted_message_id": prior["provider_accepted_message_id"]}))
                return 0
        result = subprocess.run(["python3", str(repo / "scripts/lead-report.py"), "--data-dir", str(data_dir), "--days", "7", "--json"], capture_output=True, text=True, check=True, timeout=30)
        report = json.loads(result.stdout)
        installed = data_dir / ".installed_at"
        text = make_weekly_text(report, checks, installed.read_text().strip() if installed.exists() else None)
        summary = {"kind": "weekly-report", "week_key": week_key, "generated_at": utc_now(), "healthy": healthy, "totals": report.get("total", {}), "checks": checks, "notes": report.get("notes", [])}
        if args.notify:
            key = "enkay-weekly:" + week_key
            summary["provider_accepted_message_id"] = send("[Enkay] Weekly lead & health report", text, key)
            atomic_json(state_dir / "last-weekly-report.json", summary)
        else:
            summary["preview_text"] = text
        print(json.dumps(summary, ensure_ascii=False))
        return 0
    state_path = state_dir / "health.json"
    previous = json.loads(state_path.read_text()) if state_path.exists() else {}
    if args.notify:
        state = update_health(previous, checks, send)
        atomic_json(state_path, state)
    else:
        state = {"healthy": healthy, "checked_at": utc_now(), "checks": checks, "notification": "not sent (read-only check)"}
    print(json.dumps(state if args.json else {"checked_at": state["checked_at"], "healthy": healthy, "checks": len(checks), "failed": sum(not item["ok"] for item in checks)}, ensure_ascii=False))
    return 0 if healthy else 1


if __name__ == "__main__":
    raise SystemExit(main())
