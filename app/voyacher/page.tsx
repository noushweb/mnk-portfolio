import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  CreditCard,
  Gift,
  Plane,
  MoonStar,
  HeartPulse,
  Globe2,
  Check,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Voyacher — Case Study | Mohammed Noushad",
  description:
    "Voyacher is a Qatar-based travel platform — buy a voucher, book anything.",
};

export default function VoyacherPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        {/* Breadcrumb */}
        <ScrollReveal>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold">
              <Link
                href="/work"
                className="hover:text-[var(--color-text-primary)] transition-colors"
              >
                Work
              </Link>
              <span className="text-xs">›</span>
              <span className="text-[var(--color-text-primary)]">Voyacher</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <ScrollReveal>
                <span className="inline-block px-3 py-1 rounded-full w-fit mb-6 text-[#5B21B6] dark:text-[#a78bfa] text-[11px] font-bold uppercase tracking-wider" style={{background: "#F5F3FF"}}>
                  Travel Voucher Platform · Web · Qatar
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">
                  Buy a voucher.
                  <br />
                  Book anything.
                </h1>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-sm">
                  Voyacher is a Qatar-based travel platform built around a
                  single idea — purchase a digital voucher in QAR, then use it
                  to book any service on the platform. Flights, Umrah packages,
                  healthcare travel, tours. One balance. Every journey.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="grid grid-cols-2 gap-y-6 mb-10">
                  <MetaItem label="Client" value="Voyasa Travels" />
                  <MetaItem label="Platform" value="Web (Responsive)" />
                  <MetaItem label="Role" value="Product Designer — End-to-End" />
                  <MetaItem label="Market" value="Qatar · QAR-first" />
                </div>
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    "UX Research",
                    "Information Architecture",
                    "Hi-Fi UI",
                    "Design System",
                    "Prototypes",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/finflow"
                  className="group inline-flex items-center gap-4 bg-[#323232] text-white px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-accent-warm)] transition-all w-fit"
                >
                  Next Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 flex items-center">
              <ScrollReveal direction="right">
                <Image
                  src="/casestudy/images/voyacher/hero.webp"
                  alt="Voyacher Platform"
                  width={800}
                  height={500}
                  className="w-full rounded-xl object-cover"
                  style={{ aspectRatio: "16/10" }}
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      {/* 01 / Overview */}
      <OverviewSection />

      {/* 02 / The Problem */}
      <ProblemSection />

      {/* 03 / Platform */}
      <PlatformSection />

      {/* 04 / Transfer */}
      <TransferSection />

      {/* 05 / Decisions */}
      <DecisionsSection />

      {/* 06 / Outcome */}
      <OutcomeSectionVoyacher />

      {/* Next Project */}
      <NextProjectSectionVoyacher />
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">
        {label}
      </p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

function OverviewSection() {
  const stats = [
    { number: "6", label: "Redemption services" },
    { number: "6", label: "Voucher denominations" },
    { number: "1", label: "Unified design system" },
    { number: "100%", label: "Dev-ready Figma" },
  ];

  return (
    <div className="px-8 md:px-20 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                01 / Overview
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-6 max-w-3xl">
                Voyacher is not a typical travel booking platform. At its core,
                it&apos;s a voucher ecosystem — users buy a QAR-denominated
                digital voucher and use that balance to book anything the
                platform offers.
              </p>
              <Image
                src="/casestudy/images/voyacher/all_work_page.webp"
                alt="Voyacher Platform Overview"
                width={1200}
                height={675}
                className="w-full rounded-xl object-cover mb-12"
                style={{ aspectRatio: "16/9" }}
              />
              <blockquote
                className="pl-6 border-l-4 mb-12"
                style={{ borderColor: "#5B21B6" }}
              >
                <p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">
                  &ldquo;The hardest design problem wasn&apos;t building six
                  service flows. It was making the voucher feel like the
                  natural, obvious way to start — not a workaround.&rdquo;
                </p>
              </blockquote>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[var(--color-bg)] px-6 py-8"
                  >
                    <p
                      className="text-5xl font-black tracking-tighter mb-2"
                      style={{ color: "#5B21B6" }}
                    >
                      {s.number}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  const cards = [
    {
      icon: Layers,
      title: "Fragmented Services",
      desc: "Six product categories — flights, Umrah, healthcare, tours, BNPL, support — each with different logic. Without a unifying layer, the experience fractures.",
    },
    {
      icon: CreditCard,
      title: "Payment Friction",
      desc: "Re-entering payment details for each booking creates drop-off. A pre-loaded voucher wallet removes that friction entirely — the balance is already there.",
    },
    {
      icon: Gift,
      title: "No Gift or Corporate Use",
      desc: "Companies and individuals needed a way to gift travel. You can't gift a flight search. But you can gift a QAR 2,500 voucher — and let the recipient choose their journey.",
    },
  ];

  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                  02 / The Problem
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-6 max-w-2xl">
                  Travel platforms overwhelm. Voyacher had to unify.
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">
                  Voyasa Travels needed to offer six very different services —
                  each with its own booking logic, pricing structure, and
                  emotional context — without making users feel like they&apos;re
                  navigating six separate apps.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {cards.map((card, i) => (
                    <ScrollReveal key={card.title} delay={200 + i * 100}>
                      <div className="bg-[var(--color-surface)] p-6 rounded-xl">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#FEE2E2] dark:bg-[#2d1515]">
                          <card.icon className="w-[18px] h-[18px] text-[#DC2626]" />
                        </div>
                        <h3 className="font-bold text-sm mb-2">{card.title}</h3>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformSection() {
  const steps = [
    { num: "01", title: "Buy a Voucher", desc: "Choose QAR 50–5,000. For yourself or as a gift. Instant delivery to your wallet." },
    { num: "02", title: "Your Wallet", desc: "Check balance, view active vouchers, manage transfers — one place." },
    { num: "03", title: "Redeem Anywhere", desc: "Apply your balance at checkout — flights, Umrah, healthcare, tours. One tap." },
  ];

  const services = [
    { icon: Plane, iconBg: "#0052A3", title: "Flights", subtitle: "Domestic & international" },
    { icon: MoonStar, iconBg: "#0A5C55", title: "Hajj & Umrah", subtitle: "Sacred journey packages" },
    { icon: HeartPulse, iconBg: "#DC2626", title: "Healthcare Travel", subtitle: "UK hospitals · QAR pricing" },
    { icon: Globe2, iconBg: "#D4890A", title: "International Tours", subtitle: "Europe · Middle East · beyond" },
    { icon: CreditCard, iconBg: "#059669", title: "Fly Now, Pay Later", subtitle: "0% interest · voucher + BNPL" },
    { icon: Gift, iconBg: "#5B21B6", title: "Gift & Corporate", subtitle: "P2P transfer · OTP secured" },
  ];

  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                03 / Platform
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">
                Buy → Wallet → Redeem. The voucher loop.
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">
                The entire platform runs on one loop — buy a voucher, hold it in your wallet,
                redeem it on any service. Six services. One balance. Every journey.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={200 + i * 100}>
              <div className="bg-[var(--color-surface)] rounded-xl p-6 text-center border border-[var(--color-border)]">
                <p className="text-3xl font-black tracking-tighter mb-2" style={{ color: "#5B21B6" }}>
                  {s.num}
                </p>
                <p className="font-bold text-sm mb-2">{s.title}</p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {services.map((svc) => (
            <ScrollReveal key={svc.title} delay={300}>
              <div className="bg-[var(--color-surface)] rounded-xl p-4 flex items-center gap-3 border border-[var(--color-border)]">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: svc.iconBg }}
                >
                  <svc.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">{svc.title}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {svc.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <Image
            src="/casestudy/images/voyacher/work_screens1.webp"
            alt="Voyacher Platform Screenshots"
            width={1200}
            height={600}
            className="w-full rounded-xl object-cover"
            style={{ aspectRatio: "2/1" }}
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
function TransferSection() {
  const steps = [
    { num: "1", title: "Enter Amount", desc: "Choose how much to send. Remaining balance updates live — never over-send." },
    { num: "2", title: "Recipient", desc: "Phone number or username. Display name preview confirms the right person." },
    { num: "3", title: "OTP Confirm", desc: "6-digit code sent to your mobile. Full summary before final confirmation." },
  ];

  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                  04 / Transfer
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">
                  Send your balance. Three steps. OTP secured.
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">
                  Peer-to-peer voucher transfer with live balance tracking
                  and OTP verification — every step explicit, reversible
                  until confirmed.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ScrollReveal>
              <div className="space-y-3">
                {steps.map((s) => (
                  <div
                    key={s.num}
                    className="bg-[var(--color-surface)] rounded-xl p-5 flex items-start gap-4 border border-[var(--color-border)]"
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-sm bg-[#5B21B6]">
                      {s.num}
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">{s.title}</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <Image
                src="/casestudy/images/voyacher/work_screens2.webp"
                alt="Voyacher Transfer OTP Flow"
                width={480}
                height={360}
                className="w-full rounded-xl object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionsSection() {
  const decisions = [
    {
      decision: "Voucher nudge, never a blocker",
      why: "Forcing voucher use at checkout would create anxiety and abandonment. The balance appears as a helpful prompt — users can ignore it and pay normally.",
      outcome:
        "User agency preserved. Voucher feels like a benefit, not a restriction.",
    },
    {
      decision: "QAR everywhere, always",
      why: "The voucher balance is in QAR. If service pricing appeared in foreign currency, the redemption moment would create friction and distrust.",
      outcome:
        "Seamless voucher application. Zero currency confusion at any point.",
    },
    {
      decision: "OTP as a trust signal, not a hurdle",
      why: "Money transfers require a moment of visible security. The OTP step was designed to feel reassuring — a confirmation that the system is protecting the user, not slowing them down.",
      outcome:
        "Users feel protected. Transfer flow completes with confidence.",
    },
    {
      decision: "What happens next — always visible",
      why: "After every voucher purchase, every service booking, every transfer — the confirmation screen shows what happens next.",
      outcome:
        "Reduced post-booking anxiety. Clear next steps build long-term trust.",
    },
  ];

  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                05 / Decisions
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">
                The decisions that held the voucher model together.
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">
                A voucher-first platform only works if the voucher feels like an
                asset — not a constraint. These four decisions ensured that.
              </p>
            </ScrollReveal>
            <div className="space-y-4">
              {decisions.map((d, i) => (
                <ScrollReveal key={i} delay={200 + i * 100}>
                  <div className="bg-[var(--color-surface)] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">
                        Decision
                      </p>
                      <p className="font-bold text-sm">{d.decision}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">
                        Why
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {d.why}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">
                        Outcome
                      </p>
                      <p className="text-sm font-medium" style={{ color: "#5B21B6" }}>
                        {d.outcome}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutcomeSectionVoyacher() {
  const stats = [
    { number: "6", label: "Services unified" },
    { number: "6", label: "Denominations" },
    { number: "1", label: "Design system" },
    { number: "100%", label: "Dev-ready" },
  ];

  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                  06 / Outcome
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed tracking-tight text-[var(--color-text-secondary)] max-w-3xl mb-12">
                  &ldquo;Voyacher turned six separate travel services into one
                  wallet experience. The voucher isn&apos;t a payment method —
                  it&apos;s the product. Everything else is where it takes
                  you.&rdquo;
                </blockquote>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] mb-14">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-[var(--color-bg)] px-8 py-8 text-center"
                    >
                      <p
                        className="text-4xl font-black tracking-tighter mb-2"
                        style={{ color: "#5B21B6" }}
                      >
                        {s.number}
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-bold">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="border-l-4 pl-8"
                  style={{ borderColor: "#5B21B6" }}
                >
                  <p className="text-lg font-light text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    &ldquo;Designing Voyacher taught me that the hardest part of
                    complex product design is not making things look good. It is
                    making decisions — about hierarchy, about flow, about what
                    to show and what to hide — that serve very different users
                    without feeling designed for any one of them specifically.
                    The pilgrim booking Umrah and the executive booking a
                    cardiac screening at Cleveland Clinic are both on Voyacher.
                    They both start the same way: buy a voucher.&rdquo;
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    — Mohammed Noushad, Product Designer
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextProjectSectionVoyacher() {
  return (
    <section className="px-8 md:px-20 py-32 bg-[var(--color-accent)]">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-6">
            Next Project
          </p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[var(--color-bg)] mb-8">
            FinFlow
          </h2>
          <p className="text-[var(--color-bg)]/60 text-lg mb-12 max-w-xl mx-auto">
            A behavioral savings app for India&apos;s middle class — designed to
            change how people think about money.
          </p>
          <Link
            href="/finflow"
            className="group inline-flex items-center gap-4 border border-[var(--color-bg)] text-[var(--color-bg)] px-10 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] transition-all"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
