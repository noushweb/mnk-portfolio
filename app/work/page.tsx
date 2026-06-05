import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Work | Mohammed Noushad — Product Designer",
  description:
    "A selection of projects across product design and design systems.",
};

const projects = [
  {
    href: "/valmont-legacy-redesign",
    image: "/casestudy/images/redesign/home.png",
    tags: ["Enterprise", "B2B"],
    title: "Valmont Industries — Legacy Redesign",
    description: "5 legacy apps modernised into one unified enterprise web suite.",
  },
  {
    href: "/voyacher",
    image: "/casestudy/images/voyacher/hero.webp",
    tags: ["Travel", "Web Platform"],
    title: "Voyacher — Voucher Travel Platform",
    description:
      "Buy a voucher. Book anything. A unified travel platform built around voucher-first UX.",
  },
  {
    href: "/finflow",
    image: "/casestudy/images/finflow/hero.webp",
    tags: ["FinTech", "Mobile"],
    title: "FinFlow — Behavioral Savings App",
    description:
      "Behavioral savings app designed for India's aspirational middle class.",
  },
  {
    href: "/roadshow",
    image: "/casestudy/images/roadshow/hero.webp",
    tags: ["Logistics", "Mobile"],
    title: "Road Show — Delivery Management",
    description:
      "End-to-end delivery management platform spanning web dashboard and driver mobile app.",
  },
  {
    href: "/valley-dealer-suite",
    image: "/casestudy/images/Dealer/hero.webp",
    tags: ["Mobile", "B2B"],
    title: "Valley Dealer Suite",
    description:
      "Dealer-facing mobile suite for Valley's irrigation sales network.",
  },
  {
    href: "/field-layout-tool",
    image: "/casestudy/images/FLT/main.png",
    tags: ["AgTech", "Tablet"],
    imageBg: "#F0FDF4",
    title: "Field Layout Tool",
    description:
      "GPS-powered tablet app for agricultural pivot planning in the field.",
  },
  {
    href: "/design-tool-calculator",
    image: "/casestudy/images/DTC/all_work_page.webp",
    tags: ["iOS", "AgTech"],
    title: "Valley Design Tool Calculator",
    description:
      "Streamlined quote and design calculation tool for Valley's sales engineers.",
  },
  {
    href: "/design-system",
    image: "/casestudy/images/design%20system/hero_design_%20system.webp",
    tags: ["Design System", "B2B"],
    title: "Valley Design System",
    description:
      "Scalable component library powering 5+ enterprise applications.",
  },
];

export default function WorkPage() {
  return (
    <main className="flex-1 pt-32 pb-20 px-8 md:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <header className="mb-20">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              All Work
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-12">
              A selection of projects across product design and design systems.
            </p>
          </header>
        </ScrollReveal>

        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
                01 / Product Design
              </span>
              <div className="h-[1px] flex-1 bg-[var(--color-border)]" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <Link href={p.href} className="group block">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)]/50 bg-[var(--color-surface)]/30 backdrop-blur-md transition-all duration-300 hover:border-[var(--color-accent-warm)]/50 hover:shadow-xl hover:shadow-[var(--color-accent-warm)]/5">
                    <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: p.imageBg ?? "var(--color-bg-alt)" }}>
                      <Image src={p.image} alt={p.title} width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {p.tags.map((tag) => (
                          <span key={tag} className="bg-[var(--color-surface)]/60 backdrop-blur-sm text-[var(--color-text-secondary)] dark:text-white/90 text-[10px] px-3 py-1 uppercase tracking-wider font-semibold rounded-full border border-[var(--color-border)]/30">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 p-6">
                      <h2 className="text-2xl font-medium tracking-tight group-hover:text-[var(--color-accent-warm)] transition-colors duration-300">{p.title}</h2>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{p.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pt-2 border-b-2 border-transparent group-hover:border-[var(--color-accent-warm)] transition-all group-hover:text-[var(--color-accent-warm)]">View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
