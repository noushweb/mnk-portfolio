"use client";

import { LEAD_EVENTS, LEAD_PLACEMENTS, type LeadEventName, type LeadPlacement } from "./lead-events";

/** Aggregate event counts, not unique users. No identifiers or persisted state. */
export function trackLeadEvent(event: LeadEventName, placement: LeadPlacement = "other"): void {
  if (typeof window === "undefined" || event === "lead_received" || !LEAD_EVENTS.includes(event)) return;

  try {
    const privacy = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
    const preferences = window as Window & { doNotTrack?: string; enkayAnalyticsOptOut?: boolean };
    if (
      new URLSearchParams(window.location.search).getAll("enkay_test").includes("1") ||
      [navigator.doNotTrack, preferences.doNotTrack, privacy.msDoNotTrack].some((value) => value === "1" || value === "yes") ||
      privacy.globalPrivacyControl === true || preferences.enkayAnalyticsOptOut === true
    ) return;

    // Omit credentials explicitly: analytics must not transmit cookies either.
    void fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
      referrerPolicy: "no-referrer",
      keepalive: true,
      body: JSON.stringify({
        event,
        path: window.location.pathname,
        placement: LEAD_PLACEMENTS.includes(placement) ? placement : "other",
      }),
    }).catch(() => {});
  } catch {
    // Telemetry must never interrupt navigation or an enquiry.
  }
}
