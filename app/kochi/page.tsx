import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Product Designer Kochi | Mohammed Noushad",
  description:
    "Senior Product Designer in Kochi — 11+ years shipping global products from Kerala's startup hub. Enterprise UX/UI, design systems, and AI-powered workflows.",
  alternates: {
    canonical: "https://enkay.dev/kochi",
  },
  openGraph: {
    title: "Product Designer Kochi",
    description:
      "Senior Product Designer in Kochi, Kerala — enterprise UX/UI, design systems, and AI-powered product development.",
    url: "https://enkay.dev/kochi",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Kochi Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noushad_design",
    creator: "@noushad_design",
    title: "Product Designer Kochi",
    description:
      "Senior Product Designer in Kochi, Kerala — 11+ years in enterprise UX/UI, design systems, and AI-powered product development.",
    images: ["/og-image.jpg"],
  },
};

export default function KochiPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">
              Product Designer in Kochi, Kerala
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              I design products from Kochi — for startups, enterprises, and global markets.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Kochi has one of the most exciting emerging tech scenes in India, and I&apos;ve
              had the privilege of mentoring product designers here while building global
              products from my studio. There&apos;s a unique energy in Kochi — startup founders
              who think big, talent that&apos;s hungrier than anywhere else, and a city that
              connects Kerala to the world.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium">What I do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Startup Product Design (0→1)", desc: "From idea to shipped product — research, UX strategy, wireframes, and high-fidelity UI" },
                { title: "Enterprise UX", desc: "Data-heavy B2B applications and dashboards used across 40 countries" },
                { title: "Design Systems", desc: "Component libraries and tokens that scale from one product to five" },
                { title: "AI-Augmented Delivery", desc: "Design-to-code pipelines and automated QA that compress delivery timelines" },
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
              {["FinFlow", "Voyacher", "Valmont Industries", "Road Show"].map((company) => (
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
                { href: "/finflow", title: "FinFlow — Behavioral Savings App", desc: "Fintech from concept to prototype — gamified goal tracking, nudges, and AI-powered financial literacy." },
                { href: "/voyacher", title: "Voyacher — Voucher Travel Platform", desc: "Voucher-first travel UX built for the Middle East market — discovery flows and cross-device checkout." },
                { href: "/roadshow", title: "Road Show — Delivery Management", desc: "Route planning, real-time tracking, and settlement workflows for delivery networks." },
              ].map((project) => (
                <Link key={project.href} href={project.href} className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/articles/product-designer-kochi" className="block p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 transition-all hover:shadow-lg bg-[var(--color-surface)]/30">
            <h3 className="font-semibold text-lg mb-1">Read: Im a Product Designer Working from Kochi</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Designing global products from Kochi — remote-first, async-friendly, and proudly Kerala-based.</p>
          </Link>

          <div className="pt-8 border-t border-[var(--color-border)] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s talk</h2>
              <LeadForm source="kochi" />
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
