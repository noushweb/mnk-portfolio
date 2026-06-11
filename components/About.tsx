import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-8 md:px-20 border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <ScrollReveal>
            <div className="sticky top-32 space-y-4">
              <span className="section-number">01 / ABOUT</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                What happens when a Product Designer starts building with AI?
              </h2>
            </div>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-8 space-y-12">
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-xl md:text-2xl font-light text-[var(--color-text-primary)] leading-relaxed md:col-span-2">
                I&apos;ve been a Product Designer for over 10 years, based in Dubai. Design is my foundation — understanding users, crafting flows, building design systems that actually work.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Over the past year, I have added a powerful new capability: I build what I design, end to end. Using Claude for architecture and reasoning, OpenCode for implementation, and agent platforms like Hermes with n8n for workflow automation, I take products from concept to deployed application without relying on engineering handoffs. I handle SEO as part of the build process — using AI tools to audit, optimise, and ensure products get found by the right users. My stack is Next.js, TypeScript, React, and Tailwind CSS — technologies I learned through hands-on building, not theory. Every project ships with production-grade code, structured metadata, AI-crawler-accessible content, and search-engine-optimised architecture built in from day one.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                I still build design systems, but faster — directly with Claude, then into Figma. What used to take weeks now happens in hours. I learn something new every day. The tools change fast, and I keep up because I genuinely enjoy it.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="left">
            <blockquote className="border-l-4 border-[var(--color-accent)] pl-8 py-4">
              <p className="display-font italic text-3xl md:text-4xl text-[var(--color-text-primary)] leading-tight font-light">
                &ldquo;Good design is still the foundation. AI just lets me take it further.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="space-y-6 pt-4">
              <h3 className="text-sm uppercase tracking-widest font-bold text-[var(--color-text-muted)]">Industries I&apos;ve designed for</h3>
              <div className="flex flex-wrap gap-2">
                {["Enterprise / B2B", "FinTech", "Travel", "Logistics", "Agritech", "SaaS"].map((industry) => (
                  <span key={industry} className="px-4 py-2 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-sm font-medium rounded-full">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="space-y-6 pt-4 border-t border-[var(--color-border)]">
              <h3 className="text-sm uppercase tracking-widest font-bold text-[var(--color-text-muted)]">Frequently Asked</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="text-lg font-medium text-[var(--color-text-primary)] cursor-pointer hover:text-[var(--color-accent-warm)] transition-colors">What does a Product Designer actually do?</summary>
                  <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">A Product Designer shapes the entire user experience of a digital product — from research and strategy through to visual interface design. I go further: I also build what I design, using AI-powered development to ship working products, not just mockups.</p>
                </details>
                <details className="group">
                  <summary className="text-lg font-medium text-[var(--color-text-primary)] cursor-pointer hover:text-[var(--color-accent-warm)] transition-colors">How do you combine design and AI?</summary>
                  <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">I use Claude for design reasoning and architecture, OpenCode for implementation inside my editor, and agent platforms like Hermes with n8n for workflow automation. AI handles the production grunt work — I provide the design judgment, taste, and strategic direction.</p>
                </details>
                <details className="group">
                  <summary className="text-lg font-medium text-[var(--color-text-primary)] cursor-pointer hover:text-[var(--color-accent-warm)] transition-colors">What makes your workflow different?</summary>
                  <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">No handoffs. No waiting for engineering. I design in Figma, build in Next.js, and ship directly — with SEO, metadata, and performance optimised from day one. What used to take two sprints and three handoff meetings now happens in days, end to end.</p>
                </details>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
