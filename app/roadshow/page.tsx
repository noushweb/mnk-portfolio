import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, MonitorOff, Banknote, Smartphone, LayoutDashboard, Users,
  Route, Wallet, ListChecks, Truck, PieChart, CalendarDays, BellRing,
  BarChart2, Grid3x3, UsersRound, Lock, ToggleRight, List, UserRound,
  ShieldCheck, CircleX, MapPin, BarChartHorizontal, Sun, Layers, Shield, Check,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Road Show — Case Study | Mohammed Noushad",
  description: "End-to-end delivery management platform connecting supervisors, cashiers, and drivers — route planning, real-time tracking, and settlement workflows in one mobile dashboard.",
  openGraph: {
    title: "Road Show — Case Study",
  },
};

const ACCENT = "var(--color-accent-warm)";

export default function RoadshowPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold">
              <Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link>
              <span className="text-xs">›</span>
              <span className="text-[var(--color-text-primary)]">Road Show</span>
            </div>
          </div>
        </ScrollReveal>
        <Hero />
      </div>
      <Overview />
      <Problem />
      <BackendDashboard />
      <MobileApp />
      <KeyFlows />
      <OutcomeRS />
      <NextProjectCTA />
    </main>
  );
}

function MetaItem({label,value}:{label:string;value:string}) {
  return <div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{label}</p><p className="text-sm font-medium">{value}</p></div>;
}

function SectionLabel({num,label}:{num:string;label:string}) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">{num} / {label}</p>;
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">Web + Mobile · Delivery Management</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">One platform connecting supervisors, cashiers, and drivers.</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                <MetaItem label="Platform" value="Web + iOS / Android" />
                <MetaItem label="Screens" value="21 Backend · 9 Mobile" />
                <MetaItem label="Role" value="Product Designer — End-to-End" />
                <MetaItem label="Year" value="2021" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Responsibilities</p>
                <div className="flex flex-wrap gap-2">
                  {["UX Research","Interaction Design","UI Design","Prototyping","Design System"].map(t=><span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>)}
                </div>
              </div>
            </div>
            <Link href="/design-tool-calculator" className="btn-primary">Next Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <ScrollReveal direction="right">
            <Image src="/casestudy/images/roadshow/hero.webp" alt="Road Show Dashboard & Mobile App" width={800} height={600} className="w-full rounded-xl object-cover" style={{aspectRatio:"16/12",minHeight:440}} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <div className="px-8 md:px-20 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="01" label="Overview"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-12 max-w-3xl"><span className="text-[var(--color-text-primary)] font-medium">Road Show</span> is an end-to-end delivery management platform built to streamline the workflow between operations teams, cashiers, and field delivery agents. A powerful web-based dashboard for supervisors, and a companion mobile app for drivers — creating a single, connected source of truth for every delivery task.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--color-border)]">
                {[{n:"21",l:"Backend Screens"},{n:"9",l:"Mobile Screens"},{n:"2",l:"Platforms · Web + Mobile"}].map(s=><div key={s.l} className="bg-[var(--color-bg)] px-8 py-8"><p className="text-5xl font-black tracking-tighter text-[var(--color-text-primary)] mb-2">{s.n}</p><p className="text-sm text-[var(--color-text-muted)]">{s.l}</p></div>)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function Problem() {
  const cards = [
    {icon:MonitorOff,t:"No Live Dashboard",d:"Supervisors had no unified view of pending, in-progress, or completed deliveries across their fleet. Status required phone calls."},
    {icon:Banknote,t:"Cash Chaos",d:"Cash collection from customers was unverified, prone to discrepancies, and had no audit trail — creating disputes between drivers and the back office."},
    {icon:Smartphone,t:"No Driver App",d:"Field agents received tasks verbally or on paper — no navigation, no confirmation, no structured status flow. Delivery failures went undocumented."},
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="02" label="The Problem"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-6 max-w-2xl">Delivery operations were running on spreadsheets, phone calls, and guesswork.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">Delivery companies were managing complex, high-volume logistics through disconnected tools. Field agents had no structured workflow. Supervisors had no live view of what was happening on the ground. Cash reconciliation was manual and prone to disputes.</p>
              <blockquote className="pl-6 border-l-4 mb-12" style={{borderColor:ACCENT}}><p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">&ldquo;The design needed to serve two very different users at the same time — a supervisor sitting at a desktop managing hundreds of tasks, and a driver on the road needing instant, eyes-up clarity on their next step.&rdquo;</p></blockquote>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cards.map((c,i)=><ScrollReveal key={c.t} delay={200+i*80}><div className="bg-[var(--color-surface)] p-8 border-l-4" style={{borderColor:ACCENT}}><c.icon className="w-6 h-6 mb-3" style={{color:ACCENT}}/><h3 className="font-bold text-lg mb-2">{c.t}</h3><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c.d}</p></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function BackendDashboard() {
  const modules = [
    {icon:LayoutDashboard,n:"Main Dashboard",r:"Operations Manager",d:"Live task status, driver status, delivery heatmap, and calendar overview — the command centre for the entire fleet."},
    {icon:Users,n:"Customer Management",r:"Admin",d:"View, search, filter, and export customer records with bulk import — reducing data-heavy operations from 6+ clicks to 2."},
    {icon:Route,n:"Route Management",r:"Operations Manager",d:"Create and manage delivery routes; assign routes to specific drivers for structured, repeatable delivery workflows."},
    {icon:Wallet,n:"Cashier Management",r:"Admin",d:"Add cashiers with customer assignment and mobile number linking — establishing the cash reconciliation chain before the shift starts."},
    {icon:ListChecks,n:"Task Management",r:"Operations Manager",d:"Filter by route, status, or driver — view detailed task breakdowns with full delivery and cash status at a glance."},
    {icon:Truck,n:"Driver Management",r:"Admin",d:"View driver profiles with photo, on-duty / on-leave status, and performance data — fleet awareness without phone calls."},
  ];
  const components = [
    {icon:PieChart,t:"Task Status Ring",d:"A donut chart gives an instant split between Pending, Sending, and Completed tasks — color-coded for zero-delay recognition."},
    {icon:CalendarDays,t:"Calendar Picker",d:"A compact inline calendar lets supervisors switch date views without navigating away from the dashboard — preserving context."},
    {icon:BellRing,t:"Alert Feed",d:"Real-time missing sequence alerts surface in a right-panel feed with one-click delete — exceptions, not noise."},
    {icon:BarChart2,t:"Bar Chart Timeline",d:"A grouped bar chart shows live delivery status across time slots — tracking velocity across the shift at a glance."},
    {icon:Grid3x3,t:"Delivery Heatmap",d:"A color-coded grid maps delivery status per driver per time window — instantly surfacing which drivers are behind."},
    {icon:UsersRound,t:"Driver Status Panel",d:"On-Leave and On-Duty driver counts displayed alongside the task ring — fleet availability at a glance."},
  ];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="03" label="Backend Dashboard"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Command-level visibility for operations teams.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">The backend is a modular web dashboard giving operations managers and admins a live, structured view of the entire delivery pipeline. Seven distinct modules each serve a specific user role and workflow need.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {modules.map((m,i)=><ScrollReveal key={m.n} delay={200+i*80}><div className="bg-[var(--color-bg-alt)] p-6 rounded-xl"><div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 bg-[var(--color-bg-alt)]"><m.icon className="w-4 h-4 text-[var(--color-text-secondary)]"/></div><h3 className="font-bold text-sm mb-1">{m.n}</h3><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">{m.r}</p><p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{m.d}</p></div></ScrollReveal>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <ScrollReveal><Image src="/casestudy/images/roadshow/wide.webp" alt="Dashboard Overview" width={600} height={420} className="w-full rounded-xl object-cover" style={{height:420}} /></ScrollReveal>
              <ScrollReveal delay={100}><Image src="/casestudy/images/roadshow/wide1.webp" alt="Dashboard Detail" width={600} height={420} className="w-full rounded-xl object-cover" style={{height:420}} /></ScrollReveal>
            </div>
            <div className="border-t border-[var(--color-border)] pt-16">
              <ScrollReveal><h3 className="font-bold text-2xl mb-4">Dashboard Deep Dive</h3><p className="text-[var(--color-text-secondary)] max-w-xl mb-10">Six purpose-built components give supervisors instant situational awareness without navigating away from a single screen.</p></ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {components.map((c,i)=><ScrollReveal key={c.t} delay={100+i*80}><div className="flex gap-3 p-4 border border-[var(--color-border)] rounded-xl"><c.icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-text-muted)]"/><div><h4 className="font-bold text-sm mb-1">{c.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c.d}</p></div></div></ScrollReveal>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileApp() {
  const screens = [
    {n:"01",name:"Login Screen",desc:"Username & Password login — simple and fast.",icon:Lock},
    {n:"02",name:"On-Duty Toggle",desc:"Drivers manually activate their shift before tasks appear.",icon:ToggleRight},
    {n:"03",name:"Task List",desc:"45 pending tasks surfaced immediately on duty activation.",icon:List},
    {n:"04",name:"Cash Collection List",desc:"Total customer count and collected amounts at a glance.",icon:Banknote},
    {n:"05",name:"Customer Detail",desc:"ACC NO, customer name, amounts due vs. collected.",icon:UserRound},
    {n:"06",name:"OTP Verification",desc:"Secure OTP-based cash confirmation screen — dispute-proof record for every transaction.",icon:ShieldCheck,hl:true},
    {n:"07",name:"Fail Reason Entry",desc:"Submit or Discard with a Fail–Success status slider for documented delivery outcomes.",icon:CircleX},
    {n:"08",name:"Navigate Button",desc:"Direct map navigation triggered from the task detail — one tap to route.",icon:MapPin},
    {n:"09",name:"Status Overview",desc:"Assigned, Finished, Pending, Cancelled with counts — driver's personal scoreboard.",icon:BarChartHorizontal},
  ];
  const principles = [
    {icon:Sun,t:"High Contrast, Large Targets",d:"Readable even in direct sunlight. Tap targets sized for gloved hands and bumpy roads."},
    {icon:Layers,t:"Progressive Disclosure",d:"Each screen reveals only what the driver needs at that moment — no information overload."},
    {icon:Shield,t:"Verification-First Cash Flow",d:"OTP confirmation before finalizing collection — zero ambiguity, full accountability."},
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="04" label="Mobile Application"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">A guided experience for field delivery agents.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">Every interaction optimised for one-handed use, outdoor readability, and minimal cognitive load. The mobile app walks drivers step-by-step through their shift — from duty activation to cash verification.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {["work_screens1","work_screens2","work_screens3","work_screens4"].map((s,i)=><ScrollReveal key={s} delay={200+i*80}><Image src={`/casestudy/images/roadshow/${s}.webp`} alt={`Screenshot ${i+1}`} width={280} height={280} className="w-full rounded-xl object-cover" style={{height:280}} /></ScrollReveal>)}
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
                  {screens.map((sc,i)=><ScrollReveal key={sc.n} delay={300+i*60}><div className="p-4 flex items-start gap-3 bg-[var(--color-surface)]"><span className="flex-shrink-0 w-6 text-xs font-bold text-[var(--color-text-muted)]">{sc.n}</span><sc.icon className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--color-text-muted)]"/><div><h4 className="font-bold text-sm">{sc.name}</h4><p className="text-sm text-[var(--color-text-secondary)]">{sc.desc}</p></div></div></ScrollReveal>)}
                </div>
              </div>
              <div>
                <ScrollReveal delay={500}><h3 className="font-bold text-lg mb-4">Design Principles</h3></ScrollReveal>
                <div className="space-y-4">
                  {principles.map((p,i)=><ScrollReveal key={p.t} delay={500+i*80}><div className="bg-[var(--color-surface)] p-5 rounded-xl"><p.icon className="w-5 h-5 mb-2 text-[var(--color-text-muted)]"/><h4 className="font-bold text-sm mb-1">{p.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.d}</p></div></ScrollReveal>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function KeyFlows() {
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="05" label="Key User Flows"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}><h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-12 max-w-2xl">Complex operations reduced to clear, auditable sequences.</h2></ScrollReveal>

            <div className="space-y-12 mb-12">
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 bg-[var(--color-bg-alt)] text-[var(--color-text-secondary)]">W</div><h3 className="font-bold text-lg">Backend — Adding a Cashier</h3></div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {["Admin","Cashier Mgmt","Add Cashier","Modal Form"].map((s,i)=><span key={i} className="flex items-center gap-2">{i>0&&<ArrowRight className="w-3 h-3 text-[var(--color-text-muted)]"/>}<span className="px-3 py-1.5 bg-[var(--color-bg-alt)] text-[var(--color-text-secondary)] text-xs font-medium rounded-lg">{s}</span></span>)}
                  <ArrowRight className="w-3 h-3 text-[var(--color-text-muted)]"/><span className="px-3 py-1.5 text-[var(--color-text-secondary)] text-xs font-medium rounded-lg bg-[var(--color-bg-alt)]">Add / Add & Another</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">Bulk &apos;Add & Another&apos; action reduces repetitive form cycles by 60% for high-volume cashier setup.</p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 bg-[var(--color-bg-alt)] text-[var(--color-text-secondary)]">M</div><h3 className="font-bold text-lg">Mobile — Cash Collection</h3></div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {["Login","On Duty","Task List","Navigate","Enter Amount","Verify"].map((s,i)=><span key={i} className="flex items-center gap-2">{i>0&&<ArrowRight className="w-3 h-3 text-[var(--color-text-muted)]"/>}<span className="px-3 py-1.5 bg-[var(--color-bg-alt)] text-[var(--color-text-secondary)] text-xs font-medium rounded-lg">{s}</span></span>)}
                  <ArrowRight className="w-3 h-3 text-[var(--color-text-muted)]"/><span className="px-3 py-1.5 text-white text-xs font-medium rounded-lg" style={{background:"#4CAF50"}}>OTP Confirmed</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">9 steps from login to confirmed collection — no ambiguity, no disputes, fully auditable.</p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <Image src="/casestudy/images/roadshow/wide2.webp" alt="User Flow Diagram" width={1200} height={320} className="w-full rounded-xl object-cover mb-12" style={{height:320}} />
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="p-8 rounded-2xl border-l-4 flex items-start gap-4 bg-[#FEE2E2] dark:bg-[#2d1515]" style={{borderColor:"#DC2626"}}>
                <ShieldCheck className="w-8 h-8 flex-shrink-0 text-[#DC2626]"/>
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2">OTP Verification — A Critical UX Decision</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">By requiring both driver and customer to confirm via OTP, the system created an <strong className="text-[var(--color-text-primary)]">auditable, dispute-proof record</strong> for every transaction — reducing cash discrepancy complaints and building driver accountability without added friction. The OTP screen was designed to feel like a confirmation, not an interrogation.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutcomeRS() {
  const items = [
    "Real-time operational visibility — supervisors monitor live task and delivery progress from one dashboard.",
    "Structured cash reconciliation — OTP verification eliminated ambiguity and created an auditable trail for every transaction.",
    "Driver accountability system — fail-reason logging gave managers documented insight into delivery failures for the first time.",
    "Scalable admin tooling — bulk import/export on every module reduced data entry time significantly.",
    "Guided mobile workflow — step-by-step task flow reduced driver errors and support calls in the field.",
    "30-screen system delivered — 21 backend + 9 mobile screens with a unified design system, developer-ready.",
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="06" label="Outcome"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed tracking-tight text-[var(--color-text-secondary)] max-w-3xl mb-12">&ldquo;Designed with intention. Built for the field. Road Show bridges the gap between operational complexity and human simplicity — every screen crafted to reduce friction, build trust, and move deliveries forward.&rdquo;</blockquote>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] mb-14">
                {[{n:"30",l:"Total Screens"},{n:"7",l:"Dashboard Modules"},{n:"2→1",l:"Bulk Import Clicks"},{n:"0",l:"Cash Disputes"}].map(s=><div key={s.l} className="bg-[var(--color-bg)] px-8 py-8 text-center"><p className="text-4xl font-black tracking-tighter text-[var(--color-text-primary)] mb-2">{s.n}</p><p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-bold">{s.l}</p></div>)}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item,i)=><ScrollReveal key={i} delay={200+i*80}><div className="flex items-start gap-4"><div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-[var(--color-text-muted)]"><Check className="w-3 h-3 text-white"/></div><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item}</p></div></ScrollReveal>)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function NextProjectCTA() {
  return (
    <section className="px-8 md:px-20 py-32 bg-[var(--color-accent)]">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-6">Next Project</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[var(--color-bg)] mb-8">Valley Design Tool Calculator</h2>
          <p className="text-[var(--color-bg)]/60 text-lg mb-12 max-w-xl mx-auto">Precision irrigation system calculations — built for dealers in the field as a native iOS mobile app.</p>
          <Link href="/design-tool-calculator" className="btn-primary">View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
