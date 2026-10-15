"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export function ContactButton({ label = "Send Me a Message", id }: { label?: string; id?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id={id}
        type="button"
        onClick={() => setOpen(true)}
        className="btn-primary"
      >
        {label}
      </button>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
