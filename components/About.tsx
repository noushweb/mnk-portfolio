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
        </div>
      </div>
    </section>
  );
}
