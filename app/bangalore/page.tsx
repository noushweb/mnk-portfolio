import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Product Designer Bangalore | Mohammed Noushad",
  description:
    "Senior Product Designer for Bangalore — 11+ years of fintech UX, design systems, and enterprise software. A remote-first partner for Indian startups.",
  alternates: {
    canonical: "https://enkay.dev/bangalore",
  },
  openGraph: {
    title: "Product Designer Bangalore",
    description:
      "Senior Product Designer for Bangalore Companies — enterprise UX/UI, design systems, and AI-powered product development.",
    url: "https://enkay.dev/bangalore",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Bangalore Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noushad_design",
    creator: "@noushad_design",
    title: "Product Designer Bangalore",
    description:
      "Senior Product Designer for Bangalore Companies — 11+ years in enterprise UX/UI, design systems, and AI-powered development.",
    images: ["/og-image.jpg"],
  },
};

export default function BangalorePage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Product Designer for Bangalore Companies
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              I design products for Bangalore — India's tech capital, served remotely.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;ve collaborated closely with Bangalore-based teams and startups over the
              years, and I love how the city pushes product thinking forward. Whether it&apos;s
              fintech UX for India&apos;s middle class or enterprise tools for global markets,
              I bring a remote-first, async-friendly approach that fits Bangalore&apos;s
              fast-paced product culture.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Fintech UX for India", desc: "FinFlow — behavioral savings design for India's aspirational middle class" },
                { title: "Enterprise Software", desc: "Complex B2B products shipped for Valmont and deployed across 40 countries" },
                { title: "Design Systems", desc: "Scalable component libraries that keep 5+ enterprise products consistent" },
                { title: "Remote Collaboration", desc: "Async-friendly, remote-first delivery that fits Bangalore's fast-paced product culture" },
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
              {["FinFlow", "Valmont Industries", "Road Show", "Voyacher"].map((company) => (
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
                { href: "/finflow", title: "FinFlow — Behavioral Savings App", desc: "Behavioral savings for India's middle class — goal-based round-ups and AI-powered financial literacy." },
                { href: "/roadshow", title: "Road Show — Delivery Management", desc: "End-to-end delivery management — route planning, real-time tracking, and settlements for Indian networks." },
                { href: "/valley-dealer-suite", title: "Valley Dealer Suite", desc: "Dealer-facing mobile suite for irrigation sales in the US and Middle East." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/articles/product-designer-bangalore" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Standing Out in Bangalore</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">How I differentiate myself in Bangalore's competitive product design scene.</p>
          </Link>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="bangalore" />
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
