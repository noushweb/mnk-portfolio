"use client";

import { useRef, useState } from "react";
import { trackLeadEvent } from "@/lib/lead-analytics-client";

interface LeadFormProps {
  source: string;
}

export default function LeadForm({ source }: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const started = useRef(false);
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("sending");
    trackLeadEvent("form_submit", "lead-form");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source, company_website: companyWebsite, pagePath: window.location.pathname, placement: "lead-form" }),
      });
      const data = await res.json();

      if (res.ok && data.success === true && !data.error) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        trackLeadEvent("form_error", "lead-form");
        setStatus("error");
      }
    } catch {
      trackLeadEvent("form_error", "lead-form");
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 text-center">
        <p className="text-lg font-medium text-[var(--color-accent)]">
          Thanks for reaching out. Your enquiry was accepted; I&apos;ll reply as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={status === "sending"} onChange={(event) => {
      const field = event.target;
      if ((field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) && field.name !== "company_website" && field.value.trim() && !started.current) {
        started.current = true;
        trackLeadEvent("form_start", "lead-form");
      }
    }} className="space-y-5">
      <div hidden aria-hidden="true">
        <label>Leave this empty<input type="text" name="company_website" autoComplete="off" tabIndex={-1} value={companyWebsite} onChange={(event) => setCompanyWebsite(event.target.value)} /></label>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          autoComplete="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          What are you looking for?
        </label>
        <textarea
          id="message"
          name="message"
          minLength={10}
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
          placeholder="Tell me about your project or role..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Get in touch →"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-500 text-center">
          Something went wrong. Please email hello@enkay.dev directly.
        </p>
      )}
    </form>
  );
}
