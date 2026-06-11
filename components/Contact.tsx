import ScrollReveal from "./ScrollReveal";
import { ContactButton } from "./ContactButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-accent)] py-32 px-8 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-12 text-center lg:text-left">
        <ScrollReveal>
          <div className="space-y-4">
            <span className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm font-bold opacity-80">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--color-bg)]">
              Open to new ventures &amp; bold ideas.
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-[var(--color-bg)] opacity-80 text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I&apos;m currently open to senior product design roles and freelance
            engagements across the UAE — and open to remote collaboration
            globally.
          </p>
          <p className="text-[var(--color-bg)] opacity-50 text-sm mt-3">Typically respond within 24 hours.</p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="py-8">
            <a
              href="mailto:hello@enkay.dev"
              id="contact-email-main"
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter hover:text-[var(--color-accent-warm)] transition-all duration-300 break-all underline-reveal text-[var(--color-bg)]"
            >
              hello@enkay.dev
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 border-t border-[var(--color-bg)]/10">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-bg)] opacity-60 uppercase tracking-widest font-medium">
              <span>Based in Dubai, UAE</span>
              <span>·</span>
              <span>Available Immediately</span>
              <span>·</span>
              <span>Hybrid &amp; Remote</span>
            </div>
            <div className="flex gap-4 text-sm text-[var(--color-bg)] opacity-50 font-medium">
              <a href="https://linkedin.com/in/m-noushad" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-[var(--color-accent-warm)] transition-all">LinkedIn</a>
              <a href="https://behance.net/mohammednoushad" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-[var(--color-accent-warm)] transition-all">Behance</a>
              <a href="https://github.com/noushweb" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-[var(--color-accent-warm)] transition-all">GitHub</a>
            </div>
            <ContactButton />
          </div>
        </ScrollReveal>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full contact-bg-circle">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            className="text-[var(--color-bg)]"
          />
        </svg>
      </div>
    </section>
  );
}
