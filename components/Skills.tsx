import ScrollReveal from "./ScrollReveal";

const designTools = [
  "UX/UI Design",
  "Product Design",
  "Design Systems",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Motion Design",
  "Visual Design",
  "Interaction Design",
  "Adobe Creative Suite",
];

const aiDev = [
  "Claude Code",
  "OpenCode",
  "Figma AI",
  "Figma",
  "Hermes",
  "Agent Platforms",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "React",
];

const delivery = [
  "AI-Accelerated Design Systems",
  "AI-Powered SEO",
  "MVP Delivery",
  "Dev-Ready Handoff",
  "Agentic Workflows",
];

const warm = "var(--color-accent-warm)";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-8 md:px-20 border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <ScrollReveal>
            <div className="space-y-4">
              <span className="section-number">04 / SKILLS &amp; TOOLS</span>
              <h2 className="text-4xl font-medium tracking-tight">
                Design, AI, and everything in between.
              </h2>
            </div>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-8 space-y-12">
          <SkillGroup title="Design & Research" items={designTools} delay={100} />
          <SkillGroup title="AI & Development" items={aiDev} delay={200} highlight />
          <SkillGroup title="Design + Code + SEO" items={delivery} delay={300} />
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items, delay, highlight }: { title: string; items: string[]; delay: number; highlight?: boolean }) {
  return (
    <ScrollReveal delay={delay}>
      <div>
        <h3 className="text-sm uppercase tracking-widest font-bold mb-6" style={{ color: highlight ? warm : "var(--color-text-secondary)" }}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((m, i) => (
            <span
              key={m}
              className={`px-4 py-2 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-sm font-medium rounded-full transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:scale-105 ${highlight ? "border border-[var(--color-accent-warm)]/20" : ""}`}
              style={{
                animationDelay: `${i * 50}ms`,
                animation: "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                opacity: 0,
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
