"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-primary"
      >
        Send Me a Message
      </button>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
