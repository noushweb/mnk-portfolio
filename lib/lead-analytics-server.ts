import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { articles } from "./articles-data";
import { LEAD_EVENTS, LEAD_PLACEMENTS, type LeadEventName, type LeadPlacement } from "./lead-events";

export const PUBLIC_LEAD_PATHS = new Set([
  "/", "/work", "/articles", "/articles/archive", "/valmont-legacy-redesign", "/voyacher", "/finflow", "/roadshow", "/valley-dealer-suite", "/field-layout-tool", "/design-tool-calculator", "/design-system", "/dubai", "/india", "/riyadh", "/uae", "/kerala", "/kochi", "/bangalore", "/abu-dhabi", "/sharjah", "/umm-al-quwain", "/ux-audit", "/design-system-consultant", "/saas-product-design",
  ...articles.map((article) => `/articles/${article.slug}`),
]);
export function isPublicLeadPath(value: unknown): value is string {
  return typeof value === "string" && PUBLIC_LEAD_PATHS.has(value);
}
export function leadPlacement(value: unknown): LeadPlacement {
  return LEAD_PLACEMENTS.includes(value as LeadPlacement) ? value as LeadPlacement : "other";
}
type Row = { path: string; event: LeadEventName; placement: LeadPlacement; count: number };
type Aggregate = { version: 1; day: string; counts: Row[] };
let pending: Promise<void> = Promise.resolve();
const RETENTION_DAYS = 90;

// Serialized in-process and across Node workers sharing the same local volume.
// Never steal a stale lock: a paused writer must not race a replacement writer.
export async function recordLeadEvent(event: LeadEventName, pagePath: string, placement: LeadPlacement = "other"): Promise<void> {
  if (!LEAD_EVENTS.includes(event) || !isPublicLeadPath(pagePath) || !LEAD_PLACEMENTS.includes(placement)) throw new Error("Invalid aggregate dimensions");
  const task = pending.then(async () => {
    const dir = process.env.LEAD_ANALYTICS_DIR || path.join(/* turbopackIgnore: true */ process.cwd(), "data", "lead-analytics");
    await fs.mkdir(dir, { recursive: true, mode: 0o700 });
    const lock = path.join(dir, ".write-lock");
    const deadline = Date.now() + 5000;
    for (;;) {
      try { await fs.mkdir(lock, { mode: 0o700 }); break; }
      catch (error) {
        if ((error as NodeJS.ErrnoException).code !== "EEXIST" || Date.now() >= deadline) throw new Error("Analytics lock unavailable");
        await new Promise((resolve) => setTimeout(resolve, 15));
      }
    }
    let temporary: string | undefined;
    try {
      const day = new Date().toISOString().slice(0, 10);
      const file = path.join(dir, `${day}.json`);
      let aggregate: Aggregate = { version: 1, day, counts: [] };
      try {
        aggregate = JSON.parse(await fs.readFile(file, "utf8"));
        if (!aggregate || Object.keys(aggregate).sort().join(",") !== "counts,day,version" || aggregate.version !== 1 || aggregate.day !== day || !Array.isArray(aggregate.counts) || aggregate.counts.length > PUBLIC_LEAD_PATHS.size * LEAD_EVENTS.length * LEAD_PLACEMENTS.length || aggregate.counts.some((r) => !r || Object.keys(r).sort().join(",") !== "count,event,path,placement" || !isPublicLeadPath(r.path) || !LEAD_EVENTS.includes(r.event) || !LEAD_PLACEMENTS.includes(r.placement) || !Number.isSafeInteger(r.count) || r.count < 1)) throw new Error("Invalid aggregate file");
        const keys = aggregate.counts.map((r) => JSON.stringify([r.path, r.event, r.placement]));
        if (new Set(keys).size !== keys.length) throw new Error("Duplicate aggregate dimensions");
      } catch (error) { if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error; }
      const row = aggregate.counts.find((r) => r.path === pagePath && r.event === event && r.placement === placement);
      if (row) { if (row.count >= Number.MAX_SAFE_INTEGER) throw new Error("Count overflow"); row.count++; }
      else aggregate.counts.push({ path: pagePath, event, placement, count: 1 });
      temporary = path.join(dir, `.${day}-${randomUUID()}.tmp`);
      const handle = await fs.open(temporary, "wx", 0o600);
      try { await handle.writeFile(JSON.stringify(aggregate) + "\n"); await handle.sync(); } finally { await handle.close(); }
      await fs.rename(temporary, file);
      temporary = undefined;
      const directory = await fs.open(dir, "r");
      try { await directory.sync(); } finally { await directory.close(); }
      const cutoff = new Date(Date.parse(`${day}T00:00:00Z`) - (RETENTION_DAYS - 1) * 86400000).toISOString().slice(0, 10);
      for (const name of await fs.readdir(dir)) {
        if (/^\d{4}-\d{2}-\d{2}\.json$/.test(name) && (name.slice(0, 10) < cutoff || name.slice(0, 10) > day)) await fs.unlink(path.join(dir, name));
        // Remove abandoned temporary files only while holding the exclusive lock.
        if (/^\.\d{4}-\d{2}-\d{2}-[a-f0-9-]+\.tmp$/.test(name)) await fs.unlink(path.join(dir, name));
      }
    } finally {
      if (temporary) await fs.unlink(temporary).catch(() => {});
      await fs.rmdir(lock);
    }
  });
  pending = task.catch(() => {});
  return task;
}
