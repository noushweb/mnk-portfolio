export const LEAD_EVENTS = [
  "page_view", "enquiry_open", "form_start", "form_submit", "form_error", "email_click", "lead_received",
] as const;
export type LeadEventName = typeof LEAD_EVENTS[number];
export const LEAD_PLACEMENTS = ["hero", "contact", "lead-form", "email", "other"] as const;
export type LeadPlacement = typeof LEAD_PLACEMENTS[number];
export interface LeadEventPayload {
  event: LeadEventName;
  path: string;
  placement?: LeadPlacement;
}
