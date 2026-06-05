import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, TrendingDown, LayoutDashboard, HeartOff, ShieldOff,
  XCircle, Home, BarChart2, Coins, Users, GraduationCap, ShieldCheck,
  Check, Layers, Heart, Eye, Smartphone, Sparkles, Globe2,
  Lightbulb, CheckCircle2, Rocket, Clock,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FinFlow — Case Study | Mohammed Noushad",
  description: "A savings app designed to change how India thinks about money.",
};

const FF_BLUE = "#1845A8";
const FF_GOLD = "#C9860A";
const FF_LIGHT = "#E8F0FE";
const FF_GOLD_BG = "#FEF3C7";

export default function FinflowPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <Breadcrumb />
        <Hero />
      </div>
      <Overview />
      <Problem />
      <Research />
      <Process />
      <Features />
      <UXDecisions />
      <VisualDesign />
      <Reflection />
      <Status />
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
              <span className="inline-block px-3 py-1 bg-[#E8F0FE] dark:bg-[#0d1b3e] text-[#1845A8] dark:text-[#60a5fa] text-[11px] font-bold uppercase tracking-wider rounded-full">Behavioral Finance · Mobile App</span>
              <span className="inline-block px-3 py-1 bg-[#FEF3C7] dark:bg-[#3d2e0a] text-[#C9860A] dark:text-[#fbbf24] text-[11px] font-bold uppercase tracking-wider rounded-full">Under Development</span>
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
            <Link href="/hala-app" className="group inline-flex items-center gap-4 bg-[#323232] text-white px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-accent-warm)] transition-all w-fit">
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
              <blockquote className="pl-6 border-l-4 mb-12" style={{borderColor:FF_BLUE}}>
                <p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">&ldquo;The problem isn&apos;t income. The problem is behavior. People need a gentle system that builds saving as a habit — not a burden.&rdquo;</p>
              </blockquote>
              <StatsGrid items={[{n:"50+",l:"Screens Designed"},{n:"5",l:"Core Modules"},{n:"2",l:"Plan Tiers"},{n:"100%",l:"Dev-Ready Figma"}]} color={FF_BLUE} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsGrid({items,color}:{items:{n:string;l:string}[],color:string}) {
  return <div className={`grid gap-px bg-[var(--color-border)]`} style={{gridTemplateColumns:`repeat(${items.length},1fr)`}}>
    {items.map(s=><div key={s.l} className="bg-[var(--color-bg)] px-6 py-8"><p className="text-5xl font-black tracking-tighter mb-2" style={{color}}>{s.n}</p><p className="text-sm text-[var(--color-text-muted)]">{s.l}</p></div>)}
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
                {stats.map((s,i)=><ScrollReveal key={i} delay={200+i*80}><div className="bg-[var(--color-surface)] p-6 rounded-xl text-center"><p className="text-4xl font-black tracking-tighter mb-2" style={{color:FF_BLUE}}>{s.n}</p><p className="text-xs text-[var(--color-text-secondary)]">{s.l}</p></div></ScrollReveal>)}
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

function Research() {
  const insights = [
    {n:1,title:"Payday Impulse Spending",desc:"Users make large non-essential purchases immediately after salary — clothing, dining, electronics — leaving saving as a low priority."},
    {n:2,title:"Small Salary Reality",desc:"Average target users earn ₹15,000–₹40,000/month. Any solution must work within tight budgets without making users feel inadequate."},
    {n:3,title:"Peer Lending is Cultural",desc:"Informal money lending among friends and family is deeply ingrained in Indian culture — a feature to track and manage this was essential."},
    {n:4,title:"Gold as a Savings Vehicle",desc:"Many Indian households trust gold as a savings form. Integrating gold micro-investment aligned with cultural saving behavior."},
    {n:5,title:"Language of Simplicity",desc:"Users respond to plain, friendly language — not financial jargon. The tone had to feel like a helpful friend, not a bank."},
  ];
  const gaps = ["Too investment-focused, not beginner-friendly","No behavioral nudges or saving education","Complex onboarding with too many steps","No peer lending or informal money tracking","Lacks emotional design — cold and corporate"];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="03" label="Research"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">AI-assisted research. Human-centered insights.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">Using Manus AI to conduct structured research — analyzing behavioral patterns, financial literacy gaps, and existing app shortcomings for India&apos;s salaried middle class.</p>
            </ScrollReveal>
            <div className="space-y-3 mb-12">
              {insights.map((ins,i)=><ScrollReveal key={i} delay={200+i*80}><div className="bg-[var(--color-surface)] rounded-xl p-5 flex items-start gap-4"><div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style={{background:FF_BLUE}}>{ins.n}</div><div><p className="font-bold text-sm mb-1">{ins.title}</p><p className="text-sm text-[var(--color-text-secondary)]">{ins.desc}</p></div></div></ScrollReveal>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={300}>
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <div className="py-3 px-5 text-white font-bold text-sm" style={{background:FF_BLUE}}>User Persona</div>
                  <div className="p-5 bg-[var(--color-surface)] space-y-3">
                    {[{l:"Age",v:"24–40 years"},{l:"Occupation",v:"Salaried employee"},{l:"Monthly Income",v:"₹15,000 – ₹40,000"},{l:"Location",v:"Tier 1 & 2 cities"},{l:"Goal",v:"Save, reduce stress"}].map(r=><div key={r.l} className="flex justify-between text-sm"><span className="text-[var(--color-text-muted)]">{r.l}</span><span className="font-medium">{r.v}</span></div>)}
                    <div className="flex justify-between text-sm pt-2 border-t border-[var(--color-border)]"><span className="text-[#DC2626] font-bold">Pain Point</span><span className="text-[#DC2626] font-medium">Spends impulsively</span></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <div className="py-3 px-5 font-bold text-sm bg-[var(--color-surface)] border-b border-[var(--color-border)]">Competitor Gaps</div>
                  <div className="p-5 bg-[var(--color-surface)] space-y-3">
                    {gaps.map((g,i)=><div key={i} className="flex items-start gap-2 text-sm"><XCircle className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5"/><span className="text-[var(--color-text-secondary)]">{g}</span></div>)}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  const phases = [
    {num:"Phase 01",title:"Discover",desc:"AI-assisted research via Manus AI. Behavioral analysis & competitor audit of India's fintech landscape."},
    {num:"Phase 02",title:"Define",desc:"Identified core user pain points. Defined product goals, user personas, and feature priorities."},
    {num:"Phase 03",title:"Design",desc:"Wireframes in Figma. High-fidelity UI with FigmaMake & Claude AI. 50+ screens across 5 modules.",hl:true},
    {num:"Phase 04",title:"Deliver",desc:"Full screen designs, design system, and developer-ready Figma handoff for engineering teams."},
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="04" label="Process"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Discover. Define. Design. Deliver.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8">I used FigmaMake and Claude AI to accelerate UI generation — allowing me to explore more design directions, iterate faster, and focus energy on the UX decisions that matter most.</p>
              <Image src="/casestudy/images/finflow/wide1.webp" alt="Design Process Overview" width={1200} height={514} className="w-full rounded-xl object-cover mb-10" style={{aspectRatio:"21/9"}} />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {phases.map((p,i)=><ScrollReveal key={p.title} delay={200+i*80}><div className={`p-6 rounded-xl ${p.hl?"text-white":"bg-[var(--color-surface)]"}`} style={p.hl?{background:FF_BLUE}:{}}><span className={`text-[10px] font-bold uppercase tracking-widest`} style={{color:p.hl?"rgba(255,255,255,0.6)":FF_BLUE}}>{p.num}</span><h3 className="font-bold text-base mt-2 mb-2">{p.title}</h3><p className={`text-sm leading-relaxed`} style={{color:p.hl?"rgba(255,255,255,0.7)":"var(--color-text-secondary)"}}>{p.desc}</p></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function Features() {
  const features = [
    {icon:Home,title:"Smart Dashboard",subtitle:"Salary-aware home screen",bg:FF_LIGHT,darkBg:"#1a2540",iconBg:FF_BLUE,color:FF_BLUE,items:["Personalized greeting with salary cycle awareness","Balance, income, expense & savings at a glance","Daily spending tracker for mindfulness"]},
    {icon:BarChart2,title:"Expense Tracking",subtitle:"Categorized spending insights",bg:FF_LIGHT,darkBg:"#1a2540",iconBg:FF_BLUE,color:FF_BLUE,items:["Categorized spending with visual breakdowns","Payment reminders to prevent missed bills","Gently reveals spending patterns over time"]},
    {icon:Coins,title:"Gold & Silver Investment",subtitle:"Culturally familiar micro-investing",bg:FF_GOLD_BG,darkBg:"#3d2e0a",iconBg:FF_GOLD,color:FF_GOLD,items:["Micro-investment starting from ₹100","Live price charts, buy/sell in small amounts","Portfolio view with full transaction history"]},
    {icon:Users,title:"Peer Lending Tracker",subtitle:"Digitizing a cultural behavior",bg:FF_LIGHT,darkBg:"#1a2540",iconBg:FF_BLUE,color:FF_BLUE,items:["Track money lent to and borrowed from friends","Payment schedules, reminders & progress bars","Send money requests directly in-app"]},
    {icon:GraduationCap,title:"Saving Education",subtitle:"Built-in behavioral nudges",bg:FF_LIGHT,darkBg:"#1a2540",iconBg:FF_BLUE,color:FF_BLUE,items:["Nudges to encourage consistent saving behavior","Simple, friendly language — no financial jargon","Progress milestones to celebrate small wins"]},
    {icon:ShieldCheck,title:"Security & Trust",subtitle:"Designed to build long-term trust",bg:FF_LIGHT,darkBg:"#1a2540",iconBg:FF_BLUE,color:FF_BLUE,items:["Biometric login, 2FA, visible security score","Device activity log for full transparency","Security score (85/100) as a visible trust signal"]},
  ];
  const screens = ["/casestudy/images/finflow/work_screens1.webp","/casestudy/images/finflow/work_screens2.webp","/casestudy/images/finflow/work_screens3.webp","/casestudy/images/finflow/work_screens4.webp"];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="05" label="Features"/></ScrollReveal></div>
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
              {features.map((f,i)=><ScrollReveal key={f.title} delay={300+i*80}><div className="rounded-xl overflow-hidden border border-[var(--color-border)]"><div className={`p-4 border-b border-[var(--color-border)] ${f.bg === FF_GOLD_BG ? "bg-[#FEF3C7] dark:bg-[#3d2e0a]" : "bg-[#E8F0FE] dark:bg-[#0d1b3e]"}`}><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:f.iconBg}}><f.icon className="w-3.5 h-3.5 text-white"/></div><div><p className="font-bold text-xs text-[var(--color-text-primary)]">{f.title}</p><p className="text-[10px] text-[var(--color-text-secondary)]">{f.subtitle}</p></div></div></div><div className="p-4 bg-[var(--color-surface)] space-y-2">{f.items.map((item,j)=><div key={j} className="flex items-start gap-2 text-xs"><Check className="w-3 h-3 flex-shrink-0 mt-0.5" style={{color:f.color}}/><span className="text-[var(--color-text-secondary)]">{item}</span></div>)}</div></div></ScrollReveal>)}
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
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="06" label="UX Decisions"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Every decision solves a problem.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">No feature was added for its own sake — each design decision was traced back to a specific user problem.</p>
            </ScrollReveal>
            <div className="space-y-4">
              {decisions.map((d,i)=><ScrollReveal key={i} delay={200+i*80}><div className="bg-[var(--color-surface)] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start"><div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">Decision</p><p className="font-bold text-sm">{d.d}</p></div><div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">Problem Solved</p><p className="text-sm text-[var(--color-text-secondary)]">{d.p}</p></div><div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">Impact</p><p className="text-sm font-medium" style={{color:FF_BLUE}}>{d.i}</p></div></div></ScrollReveal>)}
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
    {icon:Sparkles,title:"Rewarding Moments",desc:"Micro-celebrations for saving milestones — behavior reinforcement",gold:true},
    {icon:Globe2,title:"Cultural Context",desc:"Gold, peer lending, ₹ notation — design that speaks India"},
  ];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="07" label="Visual Design"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-4 max-w-2xl">Warm confidence. Built for trust, not performance.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">Blue signals trust. Gold signals cultural familiarity. Soft whites reduce financial anxiety. Every visual decision had a behavioral rationale.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {principles.map((pr,i)=><ScrollReveal key={pr.title} delay={200+i*80}><div className="bg-[var(--color-surface)] p-5 rounded-xl border border-[var(--color-border)]"><div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:pr.gold?FF_GOLD_BG:FF_LIGHT}}><pr.icon className="w-[18px] h-[18px]" style={{color:pr.gold?FF_GOLD:FF_BLUE}}/></div><h3 className="font-bold text-sm mb-2">{pr.title}</h3><p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{pr.desc}</p></div></ScrollReveal>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={400}>
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <div className="py-3 px-5 font-bold text-sm bg-[var(--color-surface)] border-b border-[var(--color-border)]">AI-Assisted Design Stack</div>
                  <div className="p-5 bg-[var(--color-surface)] space-y-3">
                    {[{t:"Figma",r:"Main design tool"},{t:"FigmaMake",r:"AI-assisted UI generation"},{t:"Claude AI",r:"UX copy & design logic"},{t:"Manus AI",r:"Research & behavioral analysis"},{t:"FigJam",r:"User flows & ideation"}].map(x=><div key={x.t} className="flex justify-between text-sm"><span className="font-medium">{x.t}</span><span className="text-[var(--color-text-secondary)]">{x.r}</span></div>)}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-8">
                  <StatsGrid items={[{n:"50+",l:"Screens Designed"},{n:"5",l:"Core Modules"},{n:"2",l:"Plan Tiers"},{n:"100%",l:"Dev-Ready Figma"}]} color={FF_BLUE} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reflection() {
  const cards = [
    "AI accelerates, but doesn't replace design thinking. The decisions that mattered most were still human ones.",
    "Cultural context is a design asset. Gold, peer lending, and local UX patterns are competitive advantages.",
    "Simplicity is the hardest thing to design. Removing things takes more skill than adding them.",
    "Behavior change starts with trust. You can't nudge someone who doesn't trust the product.",
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="08" label="Reflection"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}><h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-10 max-w-2xl">What this project taught me.</h2></ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {cards.map((c,i)=><ScrollReveal key={i} delay={200+i*80}><div className="bg-[var(--color-surface)] rounded-xl p-5 flex items-start gap-4"><Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color:FF_BLUE}}/><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c}</p></div></ScrollReveal>)}
            </div>
            <ScrollReveal delay={400}>
              <blockquote className="pl-6 border-l-4" style={{borderColor:FF_BLUE}}>
                <p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed mb-2">&ldquo;Design that changes behavior is the highest form of product design — it goes beyond pixels and into people&apos;s lives.&rdquo;</p>
                <p className="text-sm text-[var(--color-text-muted)]">— Mohammed Noushad, Product Designer</p>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function Status() {
  const completed = ["Full UI design — 50+ screens","Onboarding & authentication flow","Dashboard & expense tracking","Gold & silver investment module","Peer lending & borrowing tracker","Profile, settings & security","Free vs Premium plan screens","Developer-ready Figma file"];
  const coming = ["User testing & usability study","Hindi & regional language support","App Store & Play Store launch","Saving goal & gamification layer","Outcome metrics & success data"];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="09" label="Status"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}><h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-10 max-w-2xl">Design complete. Launch coming.</h2></ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={200}>
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <div className="p-4 border-b border-[var(--color-border)] bg-[#F0FDF4] dark:bg-[#0d2818] flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4CAF50] dark:text-[#4ade80]"/><span className="font-bold text-sm text-[#166534] dark:text-[#4ade80]">Design Completed</span></div>
                  <div className="p-5 bg-[var(--color-surface)] space-y-2">{completed.map((c,i)=><div key={i} className="flex items-start gap-2 text-sm"><Check className="w-3.5 h-3.5 text-[#4CAF50] flex-shrink-0 mt-0.5"/><span className="text-[var(--color-text-secondary)]">{c}</span></div>)}</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <div className="p-4 border-b border-[var(--color-border)] bg-[#E8F0FE] dark:bg-[#0d1b3e] flex items-center gap-2"><Rocket className="w-4 h-4 text-[#1845A8] dark:text-[#60a5fa]"/><span className="font-bold text-sm text-[#1845A8] dark:text-[#60a5fa]">Coming Soon</span></div>
                  <div className="p-5 bg-[var(--color-surface)] space-y-2">{coming.map((c,i)=><div key={i} className="flex items-start gap-2 text-sm"><Clock className="w-3.5 h-3.5 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5"/><span className="text-[var(--color-text-secondary)]">{c}</span></div>)}</div>
                </div>
              </ScrollReveal>
            </div>
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
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[var(--color-bg)] mb-8">Hala App</h2>
          <p className="text-[var(--color-bg)]/60 text-lg mb-12 max-w-xl mx-auto">A bilingual B2B directory and premium space booking platform designed to connect Qatar&apos;s businesses and communities.</p>
          <Link href="/hala-app" className="group inline-flex items-center gap-4 border border-[var(--color-bg)] text-[var(--color-bg)] px-10 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] transition-all">View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
