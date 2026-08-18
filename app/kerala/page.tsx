import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Product Designer Kerala | Mohammed Noushad",
  description:
    "Senior Product Designer from Kerala — remote-first, 11+ years of global product design. Enterprise UX/UI, design systems, and fintech for global clients.",
  alternates: {
    canonical: "https://enkay.dev/kerala",
  },
  openGraph: {
    title: "Product Designer Kerala",
    description:
      "Senior Product Designer from Kerala, India — enterprise UX/UI, design systems, and AI-powered product development.",
    url: "https://enkay.dev/kerala",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Kerala Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noushad_design",
    creator: "@noushad_design",
    title: "Product Designer Kerala",
    description:
      "Senior Product Designer from Kerala, India — 11+ years in enterprise UX/UI, design systems, and AI-powered product development.",
    images: ["/og-image.jpg"],
  },
};

export default function KeralaPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Product Designer from Kerala, India
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              I design products for Kerala — from Kochi to the world.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I grew up in Kerala and my design sensibilities were shaped here — the colour,
              the craft, the attention to detail that runs through our culture. Even though I
              work with clients globally, the way I approach product design still carries that
              Kerala influence: thoughtful, deliberate, and human-first.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Global Product Design", desc: "Enterprise-grade UX designed remotely from Kerala for US, UAE, and India clients" },
                { title: "Design Systems", desc: "60+ component libraries with tokens and governance, maintained across product teams" },
                { title: "Fintech UX", desc: "FinFlow — zero-based budgeting and goal-based round-ups for India's aspirational middle class" },
                { title: "Multilingual UX", desc: "Products in 8 Indian languages plus Arabic and English, designed with cultural nuance" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Companies I&apos;ve designed for</h2>
            <div className="flex flex-wrap gap-3">
              {["FinFlow", "Valmont Industries", "Voyacher", "Road Show"].map((company) => (
                <span key={company} className="px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-sm">
                  {company}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Featured work</h2>
            <div className="space-y-4">
              {[
                { href: "/finflow", title: "FinFlow — Behavioral Savings App", desc: "Designed for India's middle class — zero-based budgeting, goal-based round-ups, and AI-powered financial literacy in 8 Indian languages." },
                { href: "/roadshow", title: "Road Show — Delivery Management", desc: "End-to-end logistics platform — route planning, real-time tracking, and settlement workflows for Indian delivery networks." },
                { href: "/valmont-legacy-redesign", title: "Valmont Industries — Legacy Redesign", desc: "5 legacy enterprise apps modernised into one unified web suite serving 40 countries." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/articles/product-designer-kerala" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Im a Product Designer from Kerala</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Growing up in Kerala shaped my design sensibilities — colour, craft, and human-first thinking.</p>
          </Link>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="kerala" />
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
