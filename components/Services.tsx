import ScrollReveal from "./ScrollReveal";
import { PenTool, Layers, Code, Search } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Product Design",
    description:
      "End-to-end UX/UI. Research, flows, wireframes, polished interfaces — 11+ years of craft. Every project starts by understanding the people who'll use it.",
    isWarm: true,
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Scalable design systems built faster with AI. I design components in Claude, then convert to Figma — consistent, production-ready, and built in hours, not weeks.",
  },
  {
    icon: Code,
    title: "AI-Powered Development",
    description:
      "I build what I design — fully functional apps, not just mockups. Claude, OpenCode, Next.js — from concept to deployed product. Same person, same vision, no handoff delays.",
  },
  {
    icon: Search,
    title: "SEO & Automation",
    description:
      "AI-driven SEO, n8n workflows, agent platforms — getting products found and automating the boring stuff so teams focus on what actually matters.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-8 md:px-20 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 space-y-4 text-center">
            <span className="section-number">02 / WHAT I DO</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Design first. Then build, automate, and grow.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 120}>
              <div className="bg-[var(--color-surface)] p-10 border border-[var(--color-border)] rounded-lg card-hover-lift group">
                <s.icon
                  className={`w-10 h-10 mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    s.isWarm
                      ? "text-[var(--color-accent-warm)]"
                      : "text-[var(--color-accent)]"
                  }`}
                />
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
