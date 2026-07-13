import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Product Designer India | Mohammed Noushad",
  description:
    "Senior Product Designer from India — 11+ years designing for global products. Enterprise UX/UI, design systems, and fintech. Remote-ready, shipped for Valmont, FinFlow, and Voyacher.",
  alternates: {
    canonical: "https://enkay.dev/india",
  },
  openGraph: {
    title: "Product Designer India | Mohammed Noushad",
    description:
      "Senior Product Designer from India — enterprise UX/UI, design systems, and fintech. Remote-ready product designer for global teams.",
    url: "https://enkay.dev/india",
    type: "website",
  },
};

export default function IndiaPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Product Designer from India
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              Product designer from India, building for the world.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I design products from India for companies in the US, UAE, and beyond.
              11+ years across enterprise software, fintech, travel, and agritech.
              Remote-first, async-friendly, shipping from Kerala.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I bring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Full-Stack Product Design", desc: "From research and strategy to UI, prototyping, and design-to-code delivery" },
                { title: "Fintech UX", desc: "Designed FinFlow — a behavioral savings app for India's aspirational middle class" },
                { title: "Design Systems at Scale", desc: "Built and governed a design system across 5+ enterprise products" },
                { title: "Remote Collaboration", desc: "Worked with distributed teams across US, UAE, and India time zones" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">India-focused work</h2>
            <div className="space-y-4">
              {[
                { href: "/finflow", title: "FinFlow — Behavioral Savings App", desc: "Designed for India's middle class — zero-based budgeting, goal-based round-ups, and AI-powered financial literacy in 8 Indian languages." },
                { href: "/roadshow", title: "Road Show — Delivery Management", desc: "End-to-end logistics platform — route planning, real-time tracking, and settlement workflows for Indian delivery networks." },
                { href: "/articles/ai-and-product-design", title: "AI and Product Design: Not What I Expected", desc: "How AI changed product design — from a designer building in India for global products." },
                { href: "/articles/auto-india-20260713", title: "Why I Charge More Than the Average UI UX Designer Freelance Rate in India", desc: "11 years in product design, multilingual UX, and why I charge more than the average Indian freelance designer." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="india" />
            </div>
            <Link href="/work" className="text-[var(--color-accent)] hover:underline font-medium">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
