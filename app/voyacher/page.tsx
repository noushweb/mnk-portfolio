import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  CreditCard,
  Gift,
  ShoppingBag,
  Wallet,
  CheckCircle,
  List,
  Send,
  ShieldCheck,
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

      {/* 03 / How It Works */}
      <HowItWorksSection />

      {/* 04 / The Wallet */}
      <WalletSection />

      {/* 05 / Redemption */}
      <RedemptionSection />

      {/* 06 / Transfer */}
      <TransferSection />

      {/* 07 / Decisions */}
      <DecisionsSection />

      {/* 08 / Outcome */}
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
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-12 max-w-3xl">
                The services — flights, Hajj &amp; Umrah packages, healthcare
                travel to UK hospitals, international tours — are not separate
                products. They are redemption destinations. Everything flows
                through the voucher.
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

function HowItWorksSection() {
  const steps = [
    {
      icon: ShoppingBag,
      step: "Step 01",
      title: "Buy a Voucher",
      desc: "Choose a QAR denomination — from QAR 50 to QAR 5,000. Pay once. For yourself, or as a gift for someone else. The voucher lands instantly in your wallet.",
    },
    {
      icon: Wallet,
      step: "Step 02",
      title: "Your Wallet",
      desc: "Check your balance, view active vouchers, and manage transfers — all in one place. Your voucher balance is visible across every checkout flow on the platform.",
    },
    {
      icon: CheckCircle,
      step: "Step 03",
      title: "Redeem Anywhere",
      desc: "When booking any service — flights, Umrah packages, Cleveland Clinic healthcare, international tours — apply your voucher balance at checkout. One tap. Done.",
    },
  ];

  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                03 / How It Works
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">
                Three steps. One wallet. Any journey.
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8">
                The entire platform logic lives in this loop — and the design
                had to make each step feel effortless.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
              <div className="hidden md:block absolute top-10 left-[33%] right-[33%] h-px bg-[var(--color-border)] z-0" />
              {steps.map((s, i) => (
                <ScrollReveal key={s.title} delay={200 + i * 100}>
                  <div
                    className={`relative z-10 text-center px-6 ${i > 0 ? "mt-8 md:mt-0" : ""}`}
                  >
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg bg-[#5B21B6]">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <p
                      className="text-[10px] uppercase tracking-widest font-bold mb-2"
                      style={{ color: "#5B21B6" }}
                    >
                      {s.step}
                    </p>
                    <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {s.desc}
                    </p>
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

function WalletSection() {
  const features = [
    {
      icon: Wallet,
      title: "Balance at a Glance",
      desc: "Total available balance shown prominently — QAR 3,250 in a bold, high-contrast hero card. No hunting for numbers, no ambiguity.",
    },
    {
      icon: List,
      title: "Voucher Source Breakdown",
      desc: "Each active voucher shows its source — purchased, gifted, or transferred — with expiry date and individual amounts.",
    },
    {
      icon: Send,
      title: "Transfer to Anyone",
      desc: "Send any amount from your balance to another Voyacher user — in four steps with OTP confirmation.",
    },
    {
      icon: ShieldCheck,
      title: "OTP-Secured Transfers",
      desc: "Every transfer is verified with a 6-digit OTP. Users never feel exposed — the security step is visible, quick, and reassuring.",
    },
  ];

  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                  04 / The Wallet
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">
                  A travel wallet that works like a bank — but feels like a
                  gift.
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">
                  The wallet dashboard was the centrepiece of the platform. It
                  needed to communicate trust and clarity — showing exactly how
                  much is available, where it came from, and how to use or send
                  it.
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={200 + i * 100}>
                <div className="bg-[var(--color-surface)] rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#5B21B6]">
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">{f.title}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RedemptionSection() {
  const services = [
    {
      icon: Plane,
      bg: "bg-[#E8F0FE] dark:bg-[#0d1b3e]",
      iconBg: "#0052A3",
      title: "Flights",
      subtitle: "Domestic & international",
      desc: "Search flights from Doha to anywhere. Apply voucher balance at checkout — or use the full balance to cover the fare entirely.",
      tag: "Voucher applies at checkout",
    },
    {
      icon: MoonStar,
      bg: "bg-[#F0FDF4] dark:bg-[#0d2818]",
      iconBg: "#0A5C55",
      title: "Hajj & Umrah",
      subtitle: "Sacred journey packages",
      desc: "Book Umrah packages, Hajj itineraries, group tours, and VIP services — with a tone that never feels transactional.",
      tag: "Voucher applies at checkout",
    },
    {
      icon: HeartPulse,
      bg: "bg-[#FEF2F2] dark:bg-[#2d1515]",
      iconBg: "#DC2626",
      title: "Healthcare Travel",
      subtitle: "UK hospitals · QAR pricing",
      desc: "Book medical procedures at UK hospitals like Cleveland Clinic London. All QAR-priced with full transparency.",
      tag: "Voucher applies at checkout",
    },
    {
      icon: Globe2,
      bg: "bg-[#FFF3E0] dark:bg-[#2d1f0a]",
      iconBg: "#D4890A",
      title: "International Tours",
      subtitle: "Europe · Middle East · beyond",
      desc: "Tour packages across Europe, the Middle East, and beyond. Destination cards give enough to decide without overwhelm.",
      tag: "Voucher applies at checkout",
    },
    {
      icon: CreditCard,
      bg: "bg-[#ECFDF5] dark:bg-[#0d2818]",
      iconBg: "#059669",
      title: "Fly Now, Pay Later",
      subtitle: "0% interest · Instant approval",
      desc: "Use voucher as deposit, split remaining into installments. BNPL at checkout — never forced.",
      tag: "Voucher + BNPL at checkout",
    },
    {
      icon: Gift,
      bg: "bg-[#F5F3FF] dark:bg-[#1a1530]",
      iconBg: "#5B21B6",
      title: "Gift & Corporate",
      subtitle: "QAR denominations · P2P transfer",
      desc: "Buy a voucher for someone else. Corporate incentives, wedding gifts, family top-ups — all P2P with OTP security.",
      tag: "Transfer via wallet",
    },
  ];

  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                05 / Redemption
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">
                Where your voucher takes you.
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8">
                The six services on the platform are not separate products —
                they are the destinations your voucher unlocks. Each was
                designed with its own emotional language, but all share the same
                checkout moment: your voucher balance, right there, ready to
                apply.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <Image
                src="/casestudy/images/voyacher/work_screens1.webp"
                alt="Voyacher Wallet Dashboard"
                width={800}
                height={500}
                className="w-full rounded-xl object-cover"
                style={{ aspectRatio: "16/10" }}
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/casestudy/images/voyacher/work_screens3.webp"
                  alt="Voyacher Service Screenshot 1"
                  width={400}
                  height={300}
                  className="w-full rounded-xl object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                <Image
                  src="/casestudy/images/voyacher/work_screens4.webp"
                  alt="Voyacher Service Screenshot 2"
                  width={400}
                  height={300}
                  className="w-full rounded-xl object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="rounded-xl overflow-hidden border border-[var(--color-border)]"
                >
                  <div
                    className={`p-4 border-b border-[var(--color-border)] ${svc.bg}`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: svc.iconBg }}
                      >
                        <svc.icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{svc.title}</p>
                        <p className="text-xs text-[var(--color-text-secondary)]">
                          {svc.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[var(--color-bg)]">
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {svc.desc}
                    </p>
                    <p
                      className="text-xs font-bold mt-2"
                      style={{ color: "#5B21B6" }}
                    >
                      {svc.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function TransferSection() {
  const steps = [
    {
      num: "1",
      title: "Your Balance",
      desc: "The starting point — total balance shown with a clear \"Transfer\" action. No hidden navigation.",
    },
    {
      num: "2",
      title: "Enter Amount",
      desc: "Choose how much to transfer. Remaining balance updates live so users never accidentally over-send.",
    },
    {
      num: "3",
      title: "Recipient Details",
      desc: "Enter the recipient's phone number or Voyacher username. A preview of their display name confirms the right person before proceeding.",
    },
    {
      num: "4",
      title: "Review & OTP Confirm",
      desc: "Full summary — amount, recipient, remaining balance — before the OTP screen. 6-digit code sent to the sender's mobile.",
    },
  ];

  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                  06 / Transfer
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">
                  Send your balance. Four steps. Full confidence.
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">
                  Peer-to-peer voucher transfer was the most trust-sensitive
                  flow on the platform. Money is moving between people. Every
                  step had to be explicit, reversible up to the final
                  confirmation, and secured with OTP verification.
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
                    className="bg-[var(--color-surface)] rounded-xl p-5 flex items-start gap-4"
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
                <div className="bg-[#5B21B6] rounded-xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/20">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white mb-1">
                      Transfer Initiated
                    </p>
                    <p className="text-sm leading-relaxed text-white/75">
                      Success screen with full transfer summary and next steps —
                      confirmation of amount, recipient, and updated balance. No
                      ambiguity about what just happened.
                    </p>
                  </div>
                </div>
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
                07 / Decisions
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
                  08 / Outcome
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
