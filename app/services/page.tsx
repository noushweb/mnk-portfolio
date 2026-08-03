import type { Metadata } from "next";
import Link from "next/link";
import {
  PenTool,
  Layers,
  Code,
  Smartphone,
  Palette,
  ArrowRight,
  Check,
  MessageSquare,
  FileSearch,
  Rocket,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services & Pricing | Mohammed Noushad — Senior Product Designer",
  description:
    "Product design services with transparent pricing — UI/UX audits, landing pages, mobile app UI, design systems, and design-to-code for startups and enterprises in Dubai & worldwide.",
  alternates: {
    canonical: "https://enkay.dev/services",
  },
  openGraph: {
    title: "Services & Pricing | Mohammed Noushad",
    description:
      "Senior Product Designer — 11+ years. UI/UX audits, landing pages, mobile app UI, design systems, design-to-code. Fixed prices for defined work, custom quotes for big builds.",
    url: "https://enkay.dev/services",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Services & Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Pricing | Mohammed Noushad",
    description:
      "Senior Product Designer — UI/UX audits, landing pages, app UI, design systems, design-to-code.",
    images: ["/og-image.jpg"],
  },
};

const fixedPriceServices = [
  {
    icon: FileSearch,
    title: "UI/UX Audit",
    price: "AED 2,500 – 4,500",
    priceNote: "Fixed price · 3–5 days",
    description:
      "A senior-level review of your product. I find the friction points killing conversion and give you a prioritized, fix-ready roadmap — not just a list of opinions.",
    includes: [
      "Full product walkthrough (web or mobile)",
      "Heuristic evaluation against 10 UX principles",
      "Conversion & usability issue report",
      "Prioritized fix roadmap (impact × effort)",
      "Figma annotations + 60-min walkthrough call",
    ],
    highlight: false,
  },
  {
    icon: PenTool,
    title: "Landing Page Design",
    price: "AED 4,500 – 8,000",
    priceNote: "Fixed price · 5–7 days",
    description:
      "A conversion-focused landing page designed in Figma with copy structure included. Built for one goal: getting visitors to take action.",
    includes: [
      "High-converting page structure & copy blocks",
      "Full desktop + mobile design",
      "Hero, sections, CTA strategy",
      "2 rounds of revisions",
      "Developer-ready handoff (Figma + specs)",
    ],
    highlight: true,
  },
  {
    icon: Palette,
    title: "Social Media Brand Kit",
    price: "AED 1,500 – 2,500",
    priceNote: "Fixed price · 3 days",
    description:
      "A consistent visual identity for your channels. Logo refresh, brand colors, typography, and 10 ready-to-post templates your team can reuse.",
    includes: [
      "Logo refresh & brand mark options",
      "Color palette + typography system",
      "10 social media post templates (Figma)",
      "Profile/banner artwork for main platforms",
      "Brand usage guidelines (1-pager)",
    ],
    highlight: false,
  },
];

const startingFromServices = [
  {
    icon: Smartphone,
    title: "Mobile App UI",
    price: "From AED 4,000",
    priceNote: "Starting from · 5 days",
    description:
      "Polished UI for your app — 5–8 core screens designed in Figma with a mini design system to keep it consistent as you build more.",
    includes: [
      "5–8 core screens (iOS/Android)",
      "Interactive prototype for testing",
      "Reusable component set (mini system)",
      "2 rounds of revisions",
      "Developer handoff with specs",
    ],
  },
  {
    icon: Code,
    title: "Design-to-Code (Figma → React)",
    price: "From AED 6,000",
    priceNote: "Starting from · 5–7 days",
    description:
      "I design AND build. Your Figma design becomes a working React/Next.js page or component — no handoff gaps, no translation loss.",
    includes: [
      "Pixel-accurate React/Next.js implementation",
      "Responsive across all breakpoints",
      "Tailwind CSS + component structure",
      "TypeScript, accessible markup",
      "1–3 pages or a component library",
    ],
  },
];

const customQuoteServices = [
  {
    icon: Layers,
    title: "Design Systems",
    price: "Custom quote",
    priceNote: "2–3+ weeks",
    description:
      "A production-ready design system — tokens, components, documentation — that scales with your team. Scope varies widely, so pricing follows the scope.",
    deliverables: [
      "Design tokens (color, type, spacing, elevation)",
      "20–40 core components with variants",
      "Figma library + documented usage",
      "Developer handoff (CSS/React-ready specs)",
      "Adoption support & team training",
    ],
  },
  {
    icon: Rocket,
    title: "End-to-End Product Design",
    price: "Custom quote",
    priceNote: "4–8+ weeks",
    description:
      "From research to shipped UI. Discovery, flows, wireframes, high-fidelity design, and (optionally) build — the full senior product designer engagement.",
    deliverables: [
      "Discovery & UX research",
      "User flows & information architecture",
      "Wireframes → high-fidelity UI",
      "Usability testing & iteration",
      "Design-to-code if you need it",
    ],
  },
];

const process = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery call",
    description: "A 20-minute call to understand your product, users, and goals. Free, no obligation.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "Proposal & scope",
    description: "A clear fixed-price proposal with deliverables, timeline, and what's in/out of scope.",
  },
  {
    step: "03",
    icon: PenTool,
    title: "Design & iterate",
    description: "You see progress weekly. Revisions are built into the scope — no surprise costs.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Handoff & launch",
    description: "Developer-ready files, specs, and a walkthrough call. You ship with confidence.",
  },
];

const faqs = [
  {
    q: "How fast can you start?",
    a: "Usually within a few days. Audit and brand kit work can start almost immediately; larger engagements are scheduled based on current workload.",
  },
  {
    q: "What if I need more revisions?",
    a: "Fixed-price packages include 2 rounds of revisions. Additional rounds are charged at an hourly rate agreed upfront — always communicated before work begins.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. I've shipped for enterprise (Valmont) and startups (Voyacher, FinFlow). Fixed-price packages are designed to be startup-friendly.",
  },
  {
    q: "Can you also build the design?",
    a: "Yes — that's the advantage of a designer who codes. If you need working React/Next.js pages from your design, the design-to-code service covers it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl space-y-6">
              <span className="section-number">SERVICES & PRICING</span>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight">
                Senior product design,{" "}
                <span className="text-[var(--color-accent)]">priced for clarity.</span>
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                11+ years designing for fintech, enterprise, and startups. Fixed prices for
                defined work, custom quotes for big builds — so you always know what
                you&apos;re getting before you commit.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--color-border)] pt-10">
              {[
                ["11+", "years experience"],
                ["40+", "products shipped"],
                ["3", "design-to-code (designer who builds)"],
                ["5", "day average start time"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl md:text-4xl font-medium tracking-tight">{num}</div>
                  <div className="text-sm text-[var(--color-text-secondary)] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fixed price services */}
      <section className="py-24 px-8 md:px-20 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 space-y-4">
              <span className="section-number">FIXED PRICE</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Defined work, defined price.
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
                Well-scoped deliverables with a price that doesn&apos;t move. You know the
                cost and timeline before we start.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fixedPriceServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div
                  className={`h-full flex flex-col p-8 border rounded-lg ${
                    s.highlight
                      ? "bg-[var(--color-surface)] border-[var(--color-accent)] card-hover-lift"
                      : "bg-[var(--color-surface)] border-[var(--color-border)] card-hover-lift"
                  }`}
                >
                  <s.icon
                    className={`w-8 h-8 mb-5 ${
                      s.highlight ? "text-[var(--color-accent)]" : "text-[var(--color-accent-warm)]"
                    }`}
                  />
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <div className="mt-3 mb-1">
                    <span className="text-2xl font-medium tracking-tight">{s.price}</span>
                  </div>
                  <div className="text-[13px] uppercase tracking-[1px] text-[var(--color-text-secondary)] mb-5">
                    {s.priceNote}
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-[15px] mb-6">
                    {s.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px]">
                        <Check className="w-4 h-4 mt-1 shrink-0 text-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="mailto:hello@enkay.dev?subject=Project%20inquiry%20—%20UI%2FUX%20services"
                      className="btn-primary w-full justify-center"
                    >
                      Get started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Starting from */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 space-y-4">
              <span className="section-number">STARTING FROM</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Scope-dependent, transparently priced.
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
                These depend on scope — the starting price reflects the smallest version.
                You&apos;ll get an exact quote after the discovery call.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {startingFromServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className="h-full flex flex-col p-8 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-lg card-hover-lift">
                  <s.icon className="w-8 h-8 mb-5 text-[var(--color-accent-warm)]" />
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <div className="mt-3 mb-1">
                    <span className="text-2xl font-medium tracking-tight">{s.price}</span>
                  </div>
                  <div className="text-[13px] uppercase tracking-[1px] text-[var(--color-text-secondary)] mb-5">
                    {s.priceNote}
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-[15px] mb-6">
                    {s.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px]">
                        <Check className="w-4 h-4 mt-1 shrink-0 text-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="mailto:hello@enkay.dev?subject=Project%20inquiry"
                      className="btn-primary w-full justify-center"
                    >
                      Get a quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom quote */}
      <section className="py-24 px-8 md:px-20 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 space-y-4">
              <span className="section-number">CUSTOM QUOTE</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Big builds, scoped to fit.
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
                Design systems and end-to-end product design vary too much for a fixed price.
                Tell us about your product — we&apos;ll scope it properly and quote fairly.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customQuoteServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className="h-full flex flex-col p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg card-hover-lift">
                  <s.icon className="w-8 h-8 mb-5 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <div className="mt-3 mb-1">
                    <span className="text-2xl font-medium tracking-tight text-[var(--color-accent)]">
                      {s.price}
                    </span>
                  </div>
                  <div className="text-[13px] uppercase tracking-[1px] text-[var(--color-text-secondary)] mb-5">
                    {s.priceNote}
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-[15px] mb-6">
                    {s.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px]">
                        <Check className="w-4 h-4 mt-1 shrink-0 text-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="mailto:hello@enkay.dev?subject=Custom%20quote%20request"
                      className="btn-primary w-full justify-center"
                    >
                      Request a quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 space-y-4">
              <span className="section-number">HOW IT WORKS</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                From hello to shipped in four steps.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 120}>
                <div className="p-6 border border-[var(--color-border)] rounded-lg h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-[var(--color-accent)]">{p.step}</span>
                    <p.icon className="w-5 h-5 text-[var(--color-accent-warm)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8 md:px-20 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 space-y-4 text-center">
              <span className="section-number">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Questions, answered.
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 80}>
                <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <ScrollReveal>
            <Sparkles className="w-10 h-10 mx-auto text-[var(--color-accent)]" />
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Not sure which service fits? Let&apos;s talk it through.
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A 20-minute call costs nothing. You&apos;ll walk away knowing exactly what your
              product needs — even if you don&apos;t hire me.
            </p>
            <Link
              href="mailto:hello@enkay.dev?subject=Discovery%20call%20request"
              className="btn-primary inline-flex mt-4"
            >
              Book a free discovery call <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
