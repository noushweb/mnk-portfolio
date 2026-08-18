import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Freelance Product Designer UAE | Mohammed Noushad",
  description:
    "Freelance Product Designer in UAE — 11+ years of UX/UI for enterprise SaaS, fintech, and travel. Design systems, Figma, and AI-powered workflows. Dubai-based.",
  alternates: {
    canonical: "https://enkay.dev/uae",
  },
  openGraph: {
    title: "Freelance Product Designer UAE",
    description:
      "Freelance Product Designer in UAE — enterprise UX/UI, design systems, Figma, and AI-powered workflows. Available for contracts across Dubai and UAE.",
    url: "https://enkay.dev/uae",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — UAE Freelance Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noushad_design",
    creator: "@noushad_design",
    title: "Freelance Product Designer UAE",
    description:
      "Freelance Product Designer in UAE — 11+ years in enterprise UX/UI, design systems, and AI-powered product development. Available for contracts across UAE.",
    images: ["/og-image.jpg"],
  },
};

export default function UAEPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Freelance Product Designer — UAE
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              Freelance product designer in the UAE — I ship, you scale.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              11+ years designing and shipping products for companies in the UAE,
              US, and India. I work with startups and enterprises — from 0→1 product
              design to scaling design systems across multiple teams. Based in Dubai,
              available for freelance contracts across the UAE.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Product Design (0→1)", desc: "From concept to shipped product — research, UX strategy, wireframes, and high-fidelity UI" },
                { title: "Design Systems", desc: "Component libraries, design tokens, documentation, and governance for scaling teams" },
                { title: "UX Audits & Redesigns", desc: "Heuristic evaluation, usability testing, and redesign of existing products for better conversion" },
                { title: "AI-Enhanced Workflows", desc: "Design-to-code pipelines, AI-assisted prototyping, and automated QA workflows" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Clients & projects</h2>
            <div className="space-y-4">
              {[
                { href: "/valmont-legacy-redesign", title: "Valmont Industries (US)", desc: "Enterprise legacy redesign — 5 apps into one platform, 1,000+ users, 40 countries." },
                { href: "/voyacher", title: "Voyacher (Qatar)", desc: "Voucher travel platform — end-to-end UX redesign for the GCC market." },
                { href: "/finflow", title: "FinFlow (India/UAE)", desc: "Behavioral savings app — concept to prototype with gamified goal tracking." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
            <Link href="/articles/auto-uae-20260720" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
              <h3 className="font-semibold text-lg mb-1">Latest article: The Dubai Freelance Trap</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">The real landscape of freelancing across the UAE emirates — and why Dubai isn't the only opportunity.</p>
            </Link>
          </div>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="uae" />
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
