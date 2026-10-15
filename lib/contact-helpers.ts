import { createHash, timingSafeEqual } from "node:crypto";

export function isDiagnostic(request: Request): boolean {
  const expected = process.env.ENKAY_DIAGNOSTICS_TOKEN;
  const actual = request.headers.get("x-enkay-diagnostics");
  if (!expected || !actual || actual.length > 1024) return false;
  return timingSafeEqual(createHash("sha256").update(actual).digest(), createHash("sha256").update(expected).digest());
}
export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin || request.headers.get("sec-fetch-site") === "cross-site") return false;
  try {
    const parsed = new URL(origin);
    if (parsed.origin !== origin) return false;
    // Canonical origin also works behind TLS-terminating reverse proxies.
    return origin === new URL(request.url).origin || origin === (process.env.CONTACT_SITE_ORIGIN || "https://enkay.dev");
  } catch { return false; }
}
export class InputError extends Error {
  constructor(public status: number, message: string) { super(message); }
}
export async function boundedJson(request: Request, maxBytes: number): Promise<Record<string, unknown>> {
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") throw new InputError(415, "JSON required.");
  if (Number(request.headers.get("content-length")) > maxBytes) throw new InputError(413, "Request too large.");
  if (!request.body) throw new InputError(400, "Invalid JSON.");
  const reader = request.body.getReader();
  let size = 0;
  const chunks: Uint8Array[] = [];
  let timedOut = false;
  const timer = setTimeout(() => { timedOut = true; void reader.cancel().catch(() => {}); }, 5000);
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) { void reader.cancel().catch(() => {}); throw new InputError(413, "Request too large."); }
      chunks.push(value);
    }
    if (timedOut) throw new InputError(408, "Request timed out.");
    let body: unknown;
    try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { throw new InputError(400, "Invalid JSON."); }
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new InputError(400, "Invalid JSON object.");
    return body as Record<string, unknown>;
  } finally { clearTimeout(timer); reader.releaseLock(); }
}
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
// Global per-process burst cap, with no IP, address, cookie or session keys.
let windowStart = 0;
let attempts = 0;
export function allowContactAttempt(): boolean {
  if (Date.now() - windowStart >= 60000) { windowStart = Date.now(); attempts = 0; }
  return ++attempts <= 30;
}
