import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import EngagementOptions from "@/components/EngagementOptions";

export const metadata: Metadata = {
  title: "Freelance Product Designer Dubai | Mohammed Noushad",
  description:
    "Hire a freelance product designer in Dubai for SaaS UX, enterprise dashboards and design systems. Review relevant work and discuss your project with Mohammed Noushad.",
  alternates: {
    canonical: "https://enkay.dev/dubai",
  },
  openGraph: {
    title: "Freelance Product Designer Dubai",
    description:
      "Freelance product design for Dubai teams: SaaS UX, enterprise dashboards and design systems. Review case studies and discuss your project.",
    url: "https://enkay.dev/dubai",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Dubai Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noushad_design",
    creator: "@noushad_design",
    title: "Freelance Product Designer Dubai",
    description:
      "Freelance product design for Dubai teams: SaaS UX, enterprise dashboards and design systems. Review case studies and discuss your project.",
    images: ["/og-image.jpg"],
  },
};

export default function DubaiPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Freelance Product Designer in Dubai, UAE
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              Freelance product design for SaaS and enterprise teams in Dubai.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;ve been based in Dubai for 11 years, designing and shipping products
              for companies across the UAE, India, and the US. From the enterprise dashboards
              at Valmont to the travel platform at Voyacher, my work is rooted in the region&apos;s
              ambition — building for fast-growing markets where trust, bilingual UX, and
              performance matter.
            </p>
            <a href="#project-enquiry" className="btn-primary inline-flex">Discuss your project →</a>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Enterprise Product Design", desc: "B2B dashboards and data-heavy interfaces for Dubai's enterprise and government sector" },
                { title: "Bilingual UX (EN/AR)", desc: "Arabic and English interfaces, RTL layouts, and cultural patterns built for GCC users" },
                { title: "Design Systems", desc: "Token-based component libraries that cut design-to-dev handoff time by 40%" },
                { title: "AI-Powered Delivery", desc: "Design-to-code pipelines and agent workflows that ship UI faster without cutting corners" },
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
          <Link href="/articles/senior-product-designer-dubai" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Being a Senior Product Designer in Dubai</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">What 11 years in Dubai taught me about product design, client relationships, and building for the Middle East market.</p>
          </Link>

          <EngagementOptions market="Dubai" />

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Discuss your freelance project</h2>
              <div id="project-enquiry" className="scroll-mt-24">
              <LeadForm source="dubai" />
              </div>
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
