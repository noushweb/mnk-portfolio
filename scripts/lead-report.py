#!/usr/bin/env python3
"""Read aggregate counters only. No network, email, user IDs or raw event logs."""
import argparse
from datetime import datetime, timedelta, timezone
import json
import os
from pathlib import Path
import re
import sys

EVENTS = ("page_view", "enquiry_open", "form_start", "form_submit", "form_error", "email_click", "lead_received")
PLACEMENTS = ("hero", "contact", "lead-form", "email", "other")


def empty():
    return dict.fromkeys(EVENTS, 0)


def report(data_dir, days):
    now = datetime.now(timezone.utc)
    total, paths, daily = empty(), {}, []
    notes = [
        "Counts are events, not unique people, sessions, or deduplicated enquiries.",
        "No qualified-lead, conversion attribution, or revenue inference is made.",
        "lead_received means owner email provider acceptance, not delivery or a qualified lead.",
        "Diagnostic requests are excluded; client test mode opts out before sending events.",
        "Window includes today (partial UTC day); missing days count as zero; retention is 90 days.",
    ]
    if not data_dir.exists():
        notes.append("Aggregate storage does not exist yet; no recorded counters available.")
    for offset in reversed(range(days)):
        day = (now.date() - timedelta(days=offset)).isoformat()
        events = empty()
        file = data_dir / (day + ".json")
        try:
            value = json.loads(file.read_text(encoding="utf-8"))
        except FileNotFoundError:
            daily.append({"day": day, "events": events})
            continue
        if set(value) != {"version", "day", "counts"} or value["version"] != 1 or value["day"] != day or not isinstance(value["counts"], list):
            raise ValueError("Invalid aggregate file for " + day)
        seen = set()
        for row in value["counts"]:
            if not isinstance(row, dict) or set(row) != {"path", "event", "placement", "count"}:
                raise ValueError("Invalid aggregate row for " + day)
            page, event, placement, count = row["path"], row["event"], row["placement"], row["count"]
            if not isinstance(page, str) or not re.fullmatch(r"/(?:[a-z0-9-]+(?:/[a-z0-9-]+)*)?", page) or event not in EVENTS or placement not in PLACEMENTS or type(count) is not int or count < 1 or count > 9007199254740991:
                raise ValueError("Invalid aggregate dimensions for " + day)
            key = (page, event, placement)
            if key in seen:
                raise ValueError("Duplicate aggregate row for " + day)
            seen.add(key)
            paths.setdefault(page, empty())[event] += count
            events[event] += count
            total[event] += count
        daily.append({"day": day, "events": events})
    return {"generated_at": now.isoformat().replace("+00:00", "Z"), "days": days, "total": total,
            "by_path": [{"path": page, "events": paths[page]} for page in sorted(paths)], "daily": daily, "notes": notes}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data-dir", type=Path, default=Path(os.environ.get("LEAD_ANALYTICS_DIR", str(Path.cwd() / "data" / "lead-analytics"))))
    parser.add_argument("--days", type=int, default=7)
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    if not 1 <= args.days <= 90:
        parser.error("--days must be between 1 and 90")
    try:
        result = report(args.data_dir, args.days)
    except (OSError, ValueError, TypeError, KeyError):
        print("Could not read aggregate storage: unreadable or invalid aggregate data.", file=sys.stderr)
        return 1
    if args.json:
        print(json.dumps(result, indent=2))
    else:
        print("Lead funnel event counts — last %d UTC days (including today)" % args.days)
        for event, count in result["total"].items():
            print("%s: %d" % (event, count))
        for row in result["by_path"]:
            print("%s: %s" % (row["path"], json.dumps(row["events"], sort_keys=True)))
        for note in result["notes"]:
            print("Note: " + note)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
