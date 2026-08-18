import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Product Designer Umm Al Quwain | Mohammed Noushad",
  description:
    "Senior Product Designer for Umm Al Quwain — 11+ years of world-class product design, delivered remotely across the UAE. Tourism, logistics, and services.",
  alternates: {
    canonical: "https://enkay.dev/umm-al-quwain",
  },
  openGraph: {
    title: "Product Designer Umm Al Quwain",
    description:
      "Senior Product Designer for Umm Al Quwain, UAE — enterprise UX/UI, design systems, and AI-powered product development.",
    url: "https://enkay.dev/umm-al-quwain",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Umm Al Quwain Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noushad_design",
    creator: "@noushad_design",
    title: "Product Designer Umm Al Quwain",
    description:
      "Senior Product Designer for Umm Al Quwain, UAE — 11+ years in enterprise UX/UI, design systems, and AI-powered development.",
    images: ["/og-image.jpg"],
  },
};

export default function UmmAlQuwainPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Product Designer for Umm Al Quwain, UAE
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              I design products for Umm Al Quwain — remote, reliable, results-driven.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Umm Al Quwain might be one of the smaller emirates, but it&apos;s home to
              ambitious businesses that are digitising fast. I help companies here — whether
              in tourism, logistics, or local services — build polished digital products that
              feel world-class. Being based in the UAE means I can collaborate in person
              whenever needed, with the full weight of 11+ years of global experience.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Product Design (0→1)", desc: "End-to-end design for tourism, logistics, and local services companies" },
                { title: "Logistics & Ops UX", desc: "Route planning, tracking, and settlement workflows — from Road Show and Valley Dealer Suite" },
                { title: "Design Systems", desc: "Scalable component libraries that give small teams enterprise-grade consistency" },
                { title: "On-Site Collaboration", desc: "Based in the UAE — available in person across the emirates whenever needed" },
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
              {["Road Show", "Valmont Industries", "FinFlow", "Voyacher"].map((company) => (
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
                { href: "/roadshow", title: "Road Show — Delivery Management", desc: "End-to-end delivery management — route planning, real-time tracking, and settlement workflows." },
                { href: "/field-layout-tool", title: "Field Layout Tool", desc: "GPS-powered tablet app for agricultural pivot planning — built for field technicians." },
                { href: "/valley-dealer-suite", title: "Valley Dealer Suite", desc: "Dealer-facing mobile suite — inventory management, order tracking, and customer support." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/articles/product-designer-umm-al-quwain" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Im a Product Designer Based in Umm Al Quwain</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Product design from Umm Al Quwain — why this UAE emirate is an underrated design hub.</p>
          </Link>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="umm-al-quwain" />
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
