import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Senior UI Designer Riyadh | Mohammed Noushad",
  description:
    "Senior Product & UI Designer available for Riyadh roles — 11+ years in enterprise UX/UI, design systems, fintech, and banking products. Figma mastery, embedded team experience, Arabic-speaking region.",
  alternates: {
    canonical: "https://enkay.dev/riyadh",
  },
  openGraph: {
    title: "Senior UI Designer Riyadh",
    description:
      "Senior Product & UI Designer available for Riyadh — enterprise UX/UI, design systems, fintech, banking products. Figma mastery, embedded team experience.",
    url: "https://enkay.dev/riyadh",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Riyadh Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior UI Designer Riyadh",
    description:
      "Senior UI & Product Designer available for Riyadh — 11+ years in enterprise UX/UI, Fintech, and banking products across the region.",
    images: ["/og-image.jpg"],
  },
};

export default function RiyadhPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Senior UI Designer — Riyadh, Saudi Arabia
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              Designing for Saudi&apos;s digital future — from Riyadh.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m a Senior Product Designer with 11+ years building enterprise
              products, design systems, and fintech experiences. Based in Dubai, ready
              for Riyadh — I speak the region, understand the market, and bring the
              visual craft that Saudi&apos;s banking and digital sectors demand.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I bring to Riyadh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Enterprise Design Systems", desc: "Built and governed a 60+ component design system across 5 products and 3 engineering teams" },
                { title: "Banking & Fintech UX", desc: "Designed FinFlow — a behavioral savings app. Fintech domain experience with compliance-aware design thinking" },
                { title: "Figma Mastery", desc: "Component architecture, auto-layout, variables, design tokens, and token-based developer handoff that cut delivery time by 40%" },
                { title: "Embedded Team Experience", desc: "Collaborated directly with client-side product and engineering teams in hybrid, autonomous settings" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Relevant work</h2>
            <div className="space-y-4">
              {[
                { href: "/design-system", title: "Valley Design System", desc: "Production design system with tokens, 60+ components, and governance adopted across 3 teams and 5 products." },
                { href: "/finflow", title: "FinFlow — Behavioral Savings App", desc: "Fintech app from concept to prototype — gamified goal tracking, nudges, and AI-powered financial literacy." },
                { href: "/valmont-legacy-redesign", title: "Valmont Legacy Redesign", desc: "Consolidated 5 enterprise apps into a unified platform serving 1,000+ users across 40 countries." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/articles/senior-product-designer-riyadh" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Designing for Riyadh</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">What it means to design for Saudi Arabia's digital transformation — banking, fintech, and bilingual UX.</p>
          </Link>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="riyadh" />
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
