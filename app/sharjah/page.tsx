import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Product Designer Sharjah | Mohammed Noushad",
  description:
    "Senior Product Designer in Sharjah — 11+ years designing for education, culture, and enterprise. Clear, purposeful UX for the UAE's cultural capital.",
  alternates: {
    canonical: "https://enkay.dev/sharjah",
  },
  openGraph: {
    title: "Product Designer Sharjah",
    description:
      "Senior Product Designer in Sharjah, UAE — enterprise UX/UI, design systems, and AI-powered product development.",
    url: "https://enkay.dev/sharjah",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Sharjah Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noushad_design",
    creator: "@noushad_design",
    title: "Product Designer Sharjah",
    description:
      "Senior Product Designer in Sharjah, UAE — 11+ years in enterprise UX/UI, design systems, and AI-powered development.",
    images: ["/og-image.jpg"],
  },
};

export default function SharjahPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Product Designer in Sharjah, UAE
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              I design products for Sharjah — culture, education, and enterprise.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Sharjah has a distinct identity — it&apos;s the cultural and educational heart
              of the UAE, and I&apos;ve worked on projects that require that same thoughtful,
              detail-oriented approach. From edtech platforms to cultural institution
              websites, I bring the same design rigour that works for enterprise — adapted
              for audiences who value clarity and purpose over flash.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Edtech & Cultural UX", desc: "Clear, purposeful interfaces for education and cultural institutions" },
                { title: "Enterprise Product Design", desc: "The rigour that serves enterprise — adapted for audiences who value clarity over flash" },
                { title: "Design Systems", desc: "Component libraries that keep multi-team products coherent and maintainable" },
                { title: "Bilingual Interfaces", desc: "Arabic and English UX, RTL layouts, and typography tuned for UAE audiences" },
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
              {["Valmont Industries", "FinFlow", "Voyacher", "Road Show"].map((company) => (
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
                { href: "/finflow", title: "FinFlow — Behavioral Savings App", desc: "Clear, trustworthy fintech UX — behavioral savings designed for India's middle class." },
                { href: "/voyacher", title: "Voyacher — Voucher Travel Platform", desc: "Voucher-first travel platform — discovery flows, voucher management, and cross-device checkout." },
                { href: "/valmont-legacy-redesign", title: "Valmont Industries — Legacy Redesign", desc: "5 legacy enterprise apps modernised into one unified web suite." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/articles/product-designer-sharjah" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Working in Sharjah</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Designing for Sharjah's unique market — culture, education, and enterprise.</p>
          </Link>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="sharjah" />
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
