import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Product Designer Abu Dhabi | Mohammed Noushad",
  description:
    "Senior Product Designer in Abu Dhabi, UAE — 11+ years in enterprise UX/UI, design systems, and AI-powered development. Portfolio of shipped products for Valmont, Voyacher, and FinFlow.",
  alternates: {
    canonical: "https://enkay.dev/abu-dhabi",
  },
  openGraph: {
    title: "Product Designer Abu Dhabi",
    description:
      "Senior Product Designer in Abu Dhabi, UAE — enterprise UX/UI, design systems, and AI-powered product development.",
    url: "https://enkay.dev/abu-dhabi",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Abu Dhabi Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Designer Abu Dhabi",
    description:
      "Senior Product Designer in Abu Dhabi, UAE — 11+ years in enterprise UX/UI, design systems, and AI-powered development.",
    images: ["/og-image.jpg"],
  },
};

export default function AbuDhabiPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Product Designer in Abu Dhabi, UAE
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              I design products for Abu Dhabi — government, enterprise, and fintech.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Abu Dhabi&apos;s government and enterprise sectors are transforming fast, and
              I&apos;ve been fortunate to work on products that serve this space — from
              bilingual enterprise dashboards to fintech platforms built for the UAE&apos;s
              regulatory environment. I understand the compliance, the cultural nuance, and
              the level of polish that Abu Dhabi clients expect.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Enterprise Product Design", desc: "Complex B2B applications, dashboards, data-heavy interfaces" },
                { title: "Design Systems", desc: "Scalable component libraries powering 5+ enterprise products" },
                { title: "UX/UI for Middle East Markets", desc: "Bilingual interfaces, RTL/LTR, cultural UX patterns" },
                { title: "AI-Powered Development", desc: "Design-to-code pipelines, agent workflows, automated QA" },
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
              {["Valmont Industries", "Voyacher", "FinFlow", "Road Show", "KartBlue"].map((company) => (
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
                { href: "/valmont-legacy-redesign", title: "Valmont Industries — Legacy Redesign", desc: "5 legacy enterprise apps modernised into one unified web suite." },
                { href: "/voyacher", title: "Voyacher — Voucher Travel Platform", desc: "Dubai-based travel platform — voucher-first UX for the Middle East market." },
                { href: "/valley-dealer-suite", title: "Valley Dealer Suite", desc: "Dealer-facing mobile suite for irrigation sales in the US and Middle East." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/articles/product-designer-abu-dhabi" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Working in Abu Dhabi</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Product design for Abu Dhabi's growing digital landscape — from government to fintech.</p>
          </Link>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="abu-dhabi" />
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
