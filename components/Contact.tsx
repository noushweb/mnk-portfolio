import EmailLink from "@/components/EmailLink";
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
              Need a designer for your next product project?
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-[var(--color-bg)] opacity-80 text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Tell me about your product, the users it serves, and what needs to improve.
            We can start with a focused UX review, product design, or design-system work.
            Based in Dubai, working with teams across the UAE and remotely worldwide.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="py-8">
            <EmailLink
              href="mailto:hello@enkay.dev"
              id="contact-email-main"
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter hover:text-[var(--color-accent-warm)] transition-all duration-300 break-all underline-reveal text-[var(--color-bg)]"
            >
              hello@enkay.dev
            </EmailLink>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 border-t border-[var(--color-bg)]/10">
            <div id="contact-availability" className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-[var(--color-bg)] opacity-60 uppercase tracking-widest font-medium">
              <span>Based in Dubai, UAE</span>
              <span>·</span>
              <span>Available Immediately</span>
              <span>·</span>
              <span>Hybrid &amp; Remote</span>
              <span className="inline-flex items-center gap-6">
                <span aria-hidden="true">·</span>
                <a
                  id="contact-cv"
                  href="/casestudy/cv/mohammed_noushad_cv_ats.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohammed_Noushad_CV.pdf"
                  className="inline-flex min-h-11 items-center whitespace-nowrap underline-offset-4 hover:underline focus-visible:underline"
                >
                  Download CV
                </a>
              </span>
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
