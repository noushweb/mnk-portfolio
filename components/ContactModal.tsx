"use client";

import { useState, useEffect, useCallback, useRef, useId } from "react";
import { createPortal } from "react-dom";
import { X, Send } from "lucide-react";
import { motion } from "framer-motion";
import { trackLeadEvent } from "@/lib/lead-analytics-client";
import type { LeadPlacement } from "@/lib/lead-events";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  placement?: LeadPlacement;
}

function BackdropAnimation({ visible }: { visible: boolean }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`,
    width: 0.5 + i * 0.02,
  }));

  return (
    <div className={`fixed inset-0 z-[99] pointer-events-none transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
      <svg className="w-full h-full text-[var(--color-accent-warm)]" viewBox="0 0 696 316" fill="none">
        <title>Background animation</title>
        {paths.map((p, i) => {
          const isAccent = i === 5 || i === 16;
          return (
            <motion.path
              key={p.id}
              d={p.d}
              stroke={isAccent ? "#E8521A" : "currentColor"}
              strokeWidth={isAccent ? p.width * 1.8 : p.width}
              strokeOpacity={isAccent ? 0.4 : 0.06 + i * 0.01}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2], pathOffset: [0, 1, 0] }}
              transition={{ duration: 18 + (i % 9), repeat: Infinity, ease: "linear" }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default function ContactModal({ open, onClose, placement = "contact" }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const started = useRef(false);
  const submitting = useRef(false);
  const generation = useRef(0);
  const dialog = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  const reset = useCallback(() => {
    setName("");
    setEmail("");
    setMessage("");
    setCompanyWebsite("");
    started.current = false;
    generation.current += 1;
    setStatus("idle");
    setErrorMsg("");
  }, []);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  useEffect(() => {
    let secondFrame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const frame = requestAnimationFrame(() => {
      if (open) {
        setAnimating(true);
        secondFrame = requestAnimationFrame(() => setVisible(true));
      } else {
        setVisible(false);
        timer = setTimeout(() => {
          setAnimating(false);
          reset();
        }, 300);
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(secondFrame);
      clearTimeout(timer);
    };
  }, [open, reset]);

  useEffect(() => {
    if (!animating) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "Tab") {
        const focusable = dialog.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not([tabindex="-1"]), textarea, a[href]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog.current)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (document.activeElement === last || document.activeElement === dialog.current)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    dialog.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [animating, handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const requestGeneration = generation.current;
    setStatus("sending");
    trackLeadEvent("form_submit", placement);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company_website: companyWebsite, pagePath: window.location.pathname, placement }),
      });
      const data = await res.json();

      if (!res.ok || data.success !== true || data.error) {
        trackLeadEvent("form_error", placement);
        if (requestGeneration !== generation.current) return;
        setErrorMsg("Unable to send your enquiry. Try again or email hello@enkay.dev directly.");
        setStatus("error");
        return;
      }

      if (requestGeneration === generation.current) setStatus("sent");
    } catch {
      trackLeadEvent("form_error", placement);
      if (requestGeneration !== generation.current) return;
      setErrorMsg("Failed to send. Try again or email me directly.");
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  if (!animating) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[98] bg-black/50 transition-all duration-300 ${
          visible ? "backdrop-blur-sm opacity-100" : "backdrop-blur-none opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />

      {/* Animated paths */}
      <BackdropAnimation visible={visible} />

      {/* Modal */}
      <div className={`fixed inset-0 z-[110] flex items-end justify-center pb-[12vh] p-4 pointer-events-none`}>
        <div
          ref={dialog}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className={`relative w-full max-w-md bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] transition-all duration-300 pointer-events-auto ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[var(--color-border)] transition-colors text-[var(--color-text-muted)]"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {status === "sent" ? (
          <div role="status" className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[var(--color-accent-warm)]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[var(--color-accent-warm)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p id={titleId} className="text-lg font-medium text-[var(--color-text-primary)] mb-1">Thanks for reaching out</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Your enquiry was accepted. I&apos;ll reply as soon as I can.</p>
          </div>
        ) : (
          <>
            <p id={titleId} className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)] mb-6">Drop me a message</p>
            <form onSubmit={handleSubmit} aria-busy={status === "sending"} onChange={(event) => {
              const field = event.target;
              if ((field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) && field.name !== "company_website" && field.value.trim() && !started.current) {
                started.current = true;
                trackLeadEvent("form_start", placement);
              }
            }} className="space-y-4">
              <div hidden aria-hidden="true">
                <label>Leave this empty<input type="text" name="company_website" autoComplete="off" tabIndex={-1} value={companyWebsite} onChange={(event) => setCompanyWebsite(event.target.value)} /></label>
              </div>
              <input
                type="text"
                name="name"
                aria-label="Your name"
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent-warm)] transition-colors text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm"
              />
              <input
                type="email"
                name="email"
                aria-label="Your email"
                autoComplete="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent-warm)] transition-colors text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm"
              />
              <textarea
                name="message"
                aria-label="Your message"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                minLength={10}
                className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent-warm)] transition-colors text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm resize-none"
              />
              {status === "error" && (
                <p role="alert" className="text-[var(--color-accent-warm)] text-sm">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
        </div>
      </div>
    </>
    , document.body
  );
}
