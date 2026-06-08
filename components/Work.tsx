import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    id: "project-valmont",
    href: "/valmont-legacy-redesign",
    tag: "Enterprise · B2B",
    title: "Valmont Industries",
    meta: "Enterprise Product Design · Dubai, UAE",
    description: "Designing clarity into complex industrial software.",
    linkText: "View Project",
    image: "/casestudy/images/redesign/home.png",
  },
  {
    id: "project-voyacher",
    href: "/voyacher",
    tag: "Travel · Web Platform",
    title: "Voyacher",
    meta: "Product Designer · Qatar",
    description:
      "Buy a voucher. Book anything. A unified travel platform built around voucher-first UX.",
    linkText: "View Case Study",
    image: "/casestudy/images/voyacher/hero.webp",
  },
  {
    id: "project-finflow",
    href: "/finflow",
    tag: "FinTech · Mobile",
    title: "FinFlow",
    meta: "Product Designer · India",
    description:
      "Behavioral savings app designed for India's aspirational middle class.",
    linkText: "View Case Study",
    image: "/casestudy/images/finflow/hero.webp",
  },
  {
    id: "project-roadshow",
    href: "/roadshow",
    tag: "Logistics · Web + Mobile",
    title: "Road Show",
    meta: "Product Designer · End-to-End",
    description:
      "End-to-end delivery management platform connecting supervisors, cashiers, and drivers.",
    linkText: "View Case Study",
    image: "/casestudy/images/roadshow/hero.webp",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="section-number">03 / SELECTED WORK</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Featured Projects
              </h2>
            </div>
            <p className="text-[var(--color-text-secondary)] max-w-sm">
              A selection of projects across product design, systems, and
              enterprise platforms.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 120}>
                <Link href={p.href} id={p.id} className="group block">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)]/50 bg-[var(--color-surface)]/30 backdrop-blur-md transition-all duration-300 hover:border-[var(--color-accent-warm)]/50 hover:shadow-xl hover:shadow-[var(--color-accent-warm)]/5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={p.image} alt={p.title} width={800} height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block px-3 py-1 bg-[var(--color-surface)]/60 backdrop-blur-sm text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest rounded-full border border-[var(--color-border)]/30">{p.tag}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <h3 className="text-2xl font-medium tracking-tight group-hover:text-[var(--color-accent-warm)] transition-colors duration-300">{p.title}</h3>
                      <div className="text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-text-muted)]">{p.meta}</div>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{p.description}</p>
                      <div className="pt-2 flex items-center gap-2 text-sm font-semibold border-b border-transparent group-hover:border-[var(--color-accent-warm)] transition-all group-hover:text-[var(--color-accent-warm)] w-fit">
                        {p.linkText} <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
        </div>
        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b-2 border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent-warm)] hover:border-[var(--color-accent-warm)] transition-all group"
            >
              View All Work{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
