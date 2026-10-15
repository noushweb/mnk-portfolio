"use client";

import { useCallback, useState } from "react";
import ContactModal from "./ContactModal";
import { trackLeadEvent } from "@/lib/lead-analytics-client";
import type { LeadPlacement } from "@/lib/lead-events";

export function ContactButton({ label = "Send Me a Message", id, placement = "contact" }: { label?: string; id?: string; placement?: LeadPlacement }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const enquiryPlacement = id === "hero-cta-contact" ? "hero" : placement;

  return (
    <>
      <button
        id={id}
        type="button"
        onClick={() => {
          if (!open) trackLeadEvent("enquiry_open", enquiryPlacement);
          setOpen(true);
        }}
        className="btn-primary"
      >
        {label}
      </button>
      <ContactModal open={open} placement={enquiryPlacement} onClose={close} />
    </>
  );
}
