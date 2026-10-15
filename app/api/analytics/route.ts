import { LEAD_EVENTS, LEAD_PLACEMENTS } from "@/lib/lead-events";
import { isPublicLeadPath, recordLeadEvent } from "@/lib/lead-analytics-server";
import { boundedJson, InputError, isDiagnostic, sameOrigin } from "@/lib/contact-helpers";

export const runtime = "nodejs";
let windowStarted = 0;
let acceptedInWindow = 0;
function allowAnalyticsAttempt(): boolean {
  if (Date.now() - windowStarted >= 60000) { windowStarted = Date.now(); acceptedInWindow = 0; }
  return ++acceptedInWindow <= 600;
}
export async function POST(request: Request) {
  const diagnostic = isDiagnostic(request);
  if (request.headers.has("x-enkay-diagnostics") && !diagnostic) return Response.json({ error: "Forbidden." }, { status: 403 });
  if (!sameOrigin(request) && !diagnostic) return Response.json({ error: "Forbidden." }, { status: 403 });
  try {
    const body = await boundedJson(request, 1024);
    if (Object.keys(body).some((key) => !["event", "path", "placement"].includes(key)) || !LEAD_EVENTS.includes(body.event as never) || body.event === "lead_received" || !isPublicLeadPath(body.path) || (body.placement !== undefined && !LEAD_PLACEMENTS.includes(body.placement as never))) throw new InputError(400, "Invalid event.");
    if (!diagnostic) {
      if (!allowAnalyticsAttempt()) throw new InputError(429, "Please try again later.");
      try { await recordLeadEvent(body.event as Parameters<typeof recordLeadEvent>[0], body.path, body.placement as Parameters<typeof recordLeadEvent>[2]); }
      catch { return Response.json({ error: "Metrics temporarily unavailable." }, { status: 503 }); }
    }
    return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return Response.json({ error: error instanceof InputError ? error.message : "Invalid request." }, { status: error instanceof InputError ? error.status : 400 });
  }
}
