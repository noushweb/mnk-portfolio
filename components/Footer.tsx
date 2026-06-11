"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/work" || pathname.startsWith("/articles")) {
    return (
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Let&apos;s create something<br />meaningful together.
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Available for roles and freelance work across the UAE.
            </p>
            <div className="flex gap-6 pt-4">
              <a
                href="https://linkedin.com/in/m-noushad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-widest hover:text-[var(--color-accent-warm)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://behance.net/mohammednoushad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-widest hover:text-[var(--color-accent-warm)] transition-colors"
              >
                Behance
              </a>
              <a
                href="https://github.com/noushweb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-widest hover:text-[var(--color-accent-warm)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:hello@enkay.dev"
                className="text-sm font-semibold uppercase tracking-widest hover:text-[var(--color-accent-warm)] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[var(--color-text-muted)] text-sm mb-2">
              Get in touch
            </p>
            <a
              href="mailto:hello@enkay.dev"
              className="text-xl md:text-2xl font-medium hover:text-[var(--color-accent-warm)] transition-colors"
            >
              hello@enkay.dev
            </a>
            <p className="mt-8 text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Mohammed Noushad · Dubai, UAE
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="py-12 px-8 md:px-20 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <Logo />
          <p className="text-[var(--color-text-secondary)] text-sm">
            Design meets code.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://linkedin.com/in/m-noushad"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.behance.net/mohammednoushad"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-behance"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
          </a>
          <a
            href="https://github.com/noushweb"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:hello@enkay.dev"
            id="footer-email"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="text-[var(--color-text-muted)] text-xs font-medium uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Mohammed Noushad. Built in Dubai.
        </div>
      </div>
    </footer>
  );
}
