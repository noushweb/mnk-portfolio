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
                Design is where I started. AI is where I&apos;m going.
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
                Over the past year, I&apos;ve added something new: I can now build what I design. Using Claude and tools like OpenCode, I develop full applications — concept to deployed product. No handoff, no waiting. I also handle SEO — using AI tools to get products found, not just built.
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
