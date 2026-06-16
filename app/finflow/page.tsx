import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, TrendingDown, LayoutDashboard, HeartOff, ShieldOff,
  XCircle, Home, BarChart2, Coins, Users, GraduationCap, ShieldCheck,
  Check, Layers, Heart, Eye, Smartphone, Sparkles, Globe2,
  Lightbulb,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FinFlow — Case Study | Mohammed Noushad",
  description: "A savings app designed to change how India thinks about money — behavioral nudges, goal-based tracking, and a gamified rewards layer that builds lasting financial habits.",
  openGraph: {
    title: "FinFlow — Case Study",
    images: [
      {
        url: "/casestudy/images/finflow/hero.webp",
        width: 1200,
        height: 630,
        alt: "FinFlow — Savings App Case Study",
      },
    ],
  },
};

const ACCENT = "var(--color-accent-warm)";

export default function FinflowPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <Breadcrumb />
        <Hero />
      </div>
      <Overview />
      <Problem />
      <DesignProcess />
      <Features />
      <UXDecisions />
      <VisualDesign />
      <NextProjectCTA />
    </main>
  );
}

function Breadcrumb() {
  return (
    <ScrollReveal>
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold">
          <Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link>
          <span className="text-xs">›</span>
          <span className="text-[var(--color-text-primary)]">FinFlow</span>
        </div>
      </div>
    </ScrollReveal>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full">Behavioral Finance · Mobile App</span>
              <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full">Under Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">A savings app that changes how India thinks about money.</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                <MetaItem label="Client" value="FinFlow (Client Project)" />
                <MetaItem label="Platform" value="iOS & Android" />
                <MetaItem label="Market" value="India · Middle Class" />
                <MetaItem label="Year" value="2025 – 2026" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Figma","FigJam","FigmaMake","Claude AI","Manus AI"].map(t=>(
                    <span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/roadshow" className="btn-primary">
              Next Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 flex items-center">
          <ScrollReveal direction="right">
            <Image src="/casestudy/images/finflow/hero.webp" alt="FinFlow App" width={800} height={600} className="w-full rounded-xl object-cover" style={{aspectRatio:"4/3"}} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function MetaItem({label,value}:{label:string;value:string}) {
  return <div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{label}</p><p className="text-sm font-medium">{value}</p></div>;
}

function SectionLabel({num,label}:{num:string;label:string}) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">{num} / {label}</p>;
}

function Overview() {
  return (
    <div className="px-8 md:px-20 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="01" label="Overview"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-6 max-w-3xl">Millions of working Indians earn a modest salary every month — and spend most of it within days of payday. Not because they lack discipline, but because they lack a system.</p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-12 max-w-3xl">A client approached me to design a mobile application that doesn&apos;t just track money, but <em>changes how people think about money</em> — making saving feel natural, rewarding, and achievable for everyday salaried workers in India.</p>
              <blockquote className="pl-6 border-l-4 border-[var(--color-accent-warm)] mb-12">
                <p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">&ldquo;The problem isn&apos;t income. The problem is behavior. People need a gentle system that builds saving as a habit — not a burden.&rdquo;</p>
              </blockquote>
              <StatsGrid items={[{n:"50+",l:"Screens Designed"},{n:"5",l:"Core Modules"},{n:"2",l:"Plan Tiers"},{n:"100%",l:"Dev-Ready Figma"}]} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsGrid({items}:{items:{n:string;l:string}[]}) {
  return <div className={`grid gap-px bg-[var(--color-border)]`} style={{gridTemplateColumns:`repeat(${items.length},1fr)`}}>
    {items.map(s=><div key={s.l} className="bg-[var(--color-bg)] px-6 py-8"><p className="text-5xl font-black tracking-tighter mb-2 text-[var(--color-text-primary)]">{s.n}</p><p className="text-sm text-[var(--color-text-muted)]">{s.l}</p></div>)}
  </div>;
}

function Problem() {
  const stats = [{n:"78%",l:"of middle-class workers spend 70%+ of salary in the first week"},{n:"3 in 5",l:"salaried Indians have less than one month's salary saved"},{n:"62%",l:"intend to save every month — but don't follow through"}];
  const cards = [
    {icon:TrendingDown,title:"No Saving Habit",desc:"Spending happens first; saving is an afterthought — often leaving nothing behind by month's end."},
    {icon:LayoutDashboard,title:"Over-Complex Apps",desc:"Existing finance tools are built for investors, not everyday earners — intimidating dashboards drive disengagement."},
    {icon:HeartOff,title:"No Motivation Layer",desc:"People need encouragement, progress visibility, and small wins to build lasting behavior — tools rarely provide this."},
    {icon:ShieldOff,title:"Trust Deficit",desc:"Users are hesitant to invest or link accounts without a clear, trustworthy, and locally familiar experience."},
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="02" label="The Problem"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-6 max-w-2xl">Paycheck to paycheck — a behavior problem, not an income problem.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">Through AI-assisted research using Manus AI, I explored the financial behavior patterns of India&apos;s salaried middle-class population. The findings painted a vivid, common, and rarely-addressed picture.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {stats.map((s,i)=><ScrollReveal key={i} delay={200+i*80}><div className="bg-[var(--color-surface)] p-6 rounded-xl text-center"><p className="text-4xl font-black tracking-tighter mb-2 text-[var(--color-text-primary)]">{s.n}</p><p className="text-xs text-[var(--color-text-secondary)]">{s.l}</p></div></ScrollReveal>)}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cards.map((c,i)=><ScrollReveal key={c.title} delay={300+i*80}><div className="bg-[var(--color-surface)] p-6 rounded-xl">                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#FEE2E2] dark:bg-[#2d1515]"><c.icon className="w-[18px] h-[18px] text-[#DC2626] dark:text-[#fca5a5]"/></div><h3 className="font-bold text-sm mb-2">{c.title}</h3><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c.desc}</p></div></ScrollReveal>)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function DesignProcess() {
  const phases = [
    {num:"Phase 01",title:"Research",desc:"AI-assisted behavioral analysis via Manus AI. 5 key user insights: payday impulse spending, small-salary reality, cultural peer lending, gold trust, and simplicity-first language."},
    {num:"Phase 02",title:"Define",desc:"Identified core pain points. Defined product goals, user personas (24–40, salaried, ₹15K–₹40K), and feature priorities."},
    {num:"Phase 03",title:"Design",desc:"Wireframes in Figma. High-fidelity UI with FigmaMake & Claude AI. 50+ screens across 5 modules.",hl:true},
    {num:"Phase 04",title:"Deliver",desc:"Full screen designs, design system, and developer-ready Figma handoff for engineering teams."},
  ];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="03" label="Design Process"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Discover. Define. Design. Deliver.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8">AI-accelerated research and design — Manus AI for behavioral analysis, FigmaMake + Claude AI for UI generation. Faster iteration, more time on UX decisions.</p>
              <Image src="/casestudy/images/finflow/wide1.webp" alt="Design Process Overview" width={1200} height={514} className="w-full rounded-xl object-cover mb-10" style={{aspectRatio:"21/9"}} />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {phases.map((p,i)=><ScrollReveal key={p.title} delay={200+i*80}><div className="p-6 rounded-xl bg-[var(--color-surface)]"><span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">{p.num}</span><h3 className="font-bold text-base mt-2 mb-2">{p.title}</h3><p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{p.desc}</p></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Features() {
  const features = [
    {icon:Home,title:"Smart Dashboard",subtitle:"Salary-aware home screen",items:["Personalized greeting with salary cycle awareness","Balance, income, expense & savings at a glance","Daily spending tracker for mindfulness"]},
    {icon:BarChart2,title:"Expense Tracking",subtitle:"Categorized spending insights",items:["Categorized spending with visual breakdowns","Payment reminders to prevent missed bills","Gently reveals spending patterns over time"]},
    {icon:Coins,title:"Gold & Silver Investment",subtitle:"Culturally familiar micro-investing",items:["Micro-investment starting from ₹100","Live price charts, buy/sell in small amounts","Portfolio view with full transaction history"]},
    {icon:Users,title:"Peer Lending Tracker",subtitle:"Digitizing a cultural behavior",items:["Track money lent to and borrowed from friends","Payment schedules, reminders & progress bars","Send money requests directly in-app"]},
    {icon:GraduationCap,title:"Saving Education",subtitle:"Built-in behavioral nudges",items:["Nudges to encourage consistent saving behavior","Simple, friendly language — no financial jargon","Progress milestones to celebrate small wins"]},
    {icon:ShieldCheck,title:"Security & Trust",subtitle:"Designed to build long-term trust",items:["Biometric login, 2FA, visible security score","Device activity log for full transparency","Security score (85/100) as a visible trust signal"]},
  ];
  const screens = ["/casestudy/images/finflow/work_screens1.webp","/casestudy/images/finflow/work_screens2.webp","/casestudy/images/finflow/work_screens3.webp","/casestudy/images/finflow/work_screens4.webp"];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="04" label="Features"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Six modules. One coherent system built for real life.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8">Every feature was designed to solve a real behavioral or cultural challenge — not to pad a feature list.</p>
              <Image src="/casestudy/images/finflow/all_work_page.webp" alt="FinFlow All Screens" width={1200} height={540} className="w-full rounded-xl object-cover mb-12" style={{aspectRatio:"20/9"}} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {screens.map((s,i)=><ScrollReveal key={i} delay={200+i*80}><Image src={s} alt={`Screenshot ${i+1}`} width={300} height={400} className="w-full rounded-xl object-cover" style={{aspectRatio:"4/3"}} /></ScrollReveal>)}
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f,i)=><ScrollReveal key={f.title} delay={300+i*80}><div className="rounded-xl overflow-hidden border border-[var(--color-border)]"><div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[var(--color-tag-bg)]"><f.icon className="w-3.5 h-3.5 text-[var(--color-text-secondary)]"/></div><div><p className="font-bold text-sm text-[var(--color-text-primary)]">{f.title}</p><p className="text-xs text-[var(--color-text-secondary)]">{f.subtitle}</p></div></div></div><div className="p-4 bg-[var(--color-surface)] space-y-2">{f.items.map((item,j)=><div key={j} className="flex items-start gap-2 text-sm"><Check className="w-3 h-3 flex-shrink-0 mt-0.5 text-[var(--color-text-muted)]"/><span className="text-[var(--color-text-secondary)]">{item}</span></div>)}</div></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UXDecisions() {
  const decisions = [
    {d:"Phone + OTP Login",p:"Users distrust complex sign-up forms",i:"Reduces friction, India-first UX patterns"},
    {d:"Currency Selection at Onboarding",p:"App needs to feel locally relevant from the start",i:"Instant personalization, local trust"},
    {d:"Daily Spending Tracker on Home",p:"Users are unaware of daily spending patterns",i:"Creates spending mindfulness daily"},
    {d:"Gold Micro-Investment",p:"Traditional savings options feel abstract or boring",i:"Leverages deep cultural trust in gold"},
    {d:"Security Score (85/100)",p:"Users anxious about data and financial security",i:"Visual trust signal, reduces anxiety"},
    {d:"Free vs Premium Plan",p:"Not all users can afford subscriptions",i:"Lowers barrier to entry, earns trust first"},
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="05" label="UX Decisions"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Every decision solves a problem.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">No feature was added for its own sake — each design decision was traced back to a specific user problem.</p>
            </ScrollReveal>
            <div className="space-y-4">
              {decisions.map((d,i)=><ScrollReveal key={i} delay={200+i*80}><div className="bg-[var(--color-surface)] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start"><div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">Decision</p><p className="font-bold text-sm">{d.d}</p></div><div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">Problem Solved</p><p className="text-sm text-[var(--color-text-secondary)]">{d.p}</p></div><div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">Impact</p><p className="text-sm font-medium text-[var(--color-text-primary)]">{d.i}</p></div></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function VisualDesign() {
  const principles = [
    {icon:Layers,title:"Clarity First",desc:"Information hierarchy is always clear — no cognitive overload"},
    {icon:Heart,title:"Warm Confidence",desc:"Blue tones signal trust; soft whites reduce financial anxiety"},
    {icon:Eye,title:"Progressive Disclosure",desc:"Complex features revealed gradually — beginners never overwhelmed"},
    {icon:Smartphone,title:"Familiar Patterns",desc:"OTP login, UPI-style flows — patterns users already know"},
    {icon:Sparkles,title:"Rewarding Moments",desc:"Micro-celebrations for saving milestones — behavior reinforcement"},
    {icon:Globe2,title:"Cultural Context",desc:"Gold, peer lending, ₹ notation — design that speaks India"},
  ];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="06" label="Visual Design"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Warm confidence. Built for trust, not performance.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">Blue signals trust. Gold signals cultural familiarity. Soft whites reduce financial anxiety. Every visual decision had a behavioral rationale.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {principles.map((pr,i)=><ScrollReveal key={pr.title} delay={200+i*80}><div className="bg-[var(--color-surface)] p-5 rounded-xl border border-[var(--color-border)]"><div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[var(--color-tag-bg)]"><pr.icon className="w-[18px] h-[18px] text-[var(--color-text-secondary)]"/></div><h3 className="font-bold text-sm mb-2">{pr.title}</h3><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{pr.desc}</p></div></ScrollReveal>)}
            </div>
            <ScrollReveal delay={400}>
              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <div className="py-3 px-5 font-bold text-sm bg-[var(--color-surface)] border-b border-[var(--color-border)]">AI-Assisted Design Stack</div>
                <div className="p-5 bg-[var(--color-surface)] space-y-3">
                  {[{t:"Figma",r:"Main design tool"},{t:"FigmaMake",r:"AI-assisted UI generation"},{t:"Claude AI",r:"UX copy & design logic"},{t:"Manus AI",r:"Research & behavioral analysis"},{t:"FigJam",r:"User flows & ideation"}].map(x=><div key={x.t} className="flex justify-between text-sm"><span className="font-medium">{x.t}</span><span className="text-[var(--color-text-secondary)]">{x.r}</span></div>)}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}


function NextProjectCTA() {
  return (
    <section className="px-8 md:px-20 py-32 bg-[var(--color-accent)]">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-6">Next Project</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[var(--color-bg)] mb-8">Road Show</h2>
          <p className="text-[var(--color-bg)]/60 text-lg mb-12 max-w-xl mx-auto">An end-to-end delivery management platform connecting supervisors, cashiers, and field delivery agents across web and mobile.</p>
          <Link href="/roadshow" className="btn-primary">View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
