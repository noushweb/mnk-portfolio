import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Valmont Legacy Redesign — Case Study | Mohammed Noushad",
  description: "Five legacy applications modernised into one unified enterprise web experience.",
};

export default function ValmontPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <ScrollReveal><div className="max-w-7xl mx-auto mb-12"><div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold"><Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link><span className="text-xs">›</span><span className="text-[var(--color-text-primary)]">Valmont Legacy Redesign</span></div></div></ScrollReveal>
        <Hero />
      </div>
      <Overview />
      <Process />
      <Applications />
      <Outcome />
      <NextProject />
    </main>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <ScrollReveal><span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">Enterprise Web · Legacy Redesign</span><h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">Five legacy applications. One unified enterprise experience.</h1></ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                {[{l:"Client",v:"Valmont Industries"},{l:"Platform",v:"Enterprise Web Applications"},{l:"Role",v:"Product Designer — Embedded"},{l:"Duration",v:"Aug 2022 – Dec 2025"}].map(m=><div key={m.l}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>)}
              </div>
              <div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Tools</p><div className="flex flex-wrap gap-2">{["Figma","FigJam","Design Systems","UX Research","Dev Handoff"].map(t=><span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>)}</div></div>
            </div>
            <Link href="/valley-dealer-suite" className="btn-primary">Next Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2"><ScrollReveal direction="right"><div className="rounded-xl overflow-hidden"><Image src="/casestudy/images/redesign/hero.png" alt="Valmont Industries — AG Portal" width={1200} height={750} className="w-full h-auto block" /></div></ScrollReveal></div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <div className="px-8 md:px-20 mb-32"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">01 / Overview</p></ScrollReveal></div>
      <div className="lg:col-span-9">
        <ScrollReveal delay={100}>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-4 max-w-3xl">Valmont Industries — a global leader in infrastructure and agricultural irrigation systems — was running critical internal operations on a suite of aging desktop applications. Built on outdated UI frameworks, they were difficult to use, inconsistent in experience, and costly to maintain.</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-12 max-w-3xl">As the embedded Product Designer, I was responsible for researching the legacy systems, understanding how field teams and internal staff actually used them, and translating those workflows into a cohesive, modern enterprise web experience.</p>
          <blockquote className="pl-6 border-l-4 border-[var(--color-accent-warm)] mb-12"><p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">&ldquo;Five applications. Five different eras of UI. One mission — bring them all into a single, unified, modern experience that people actually want to use.&rdquo;</p></blockquote>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]">{[{n:"5",l:"Apps Redesigned"},{n:"50+",l:"Screens Designed"},{n:"3+",l:"Years Embedded"},{n:"1",l:"Unified Design System"}].map(s=><div key={s.l} className="bg-[var(--color-bg)] px-6 py-8"><p className="text-5xl font-black tracking-tighter text-[var(--color-text-primary)] mb-2">{s.n}</p><p className="text-sm text-[var(--color-text-muted)]">{s.l}</p></div>)}</div>
        </ScrollReveal>
      </div>
    </div></div></div>
  );
}

function Process() {
  const phases = [
    {n:"Phase 01",t:"Research",d:"Studied legacy desktop apps, documented existing user flows, identified pain points and missing UX patterns."},
    {n:"Phase 02",t:"Information Architecture",d:"Restructured navigation, content hierarchy, and data groupings to match real user mental models."},
    {n:"Phase 03",t:"Wireframing",d:"Low-fidelity wireframes to validate layout decisions and flow logic before committing to visual design."},
    {n:"Phase 04",t:"Visual Design",d:"High-fidelity UI built on Valmont brand guidelines — clean, neutral, data-forward with Valley blue."},
    {n:"Phase 05",t:"Design System",d:"Shared component library and decision system used across all five applications for full consistency.",hl:true},
    {n:"Phase 06",t:"Dev Handoff",d:"Structured, developer-friendly Figma files with annotations and spacing specs for seamless implementation."},
    {n:"Phase 07",t:"Prototyping",d:"Interactive prototypes for stakeholder reviews and usability walkthroughs — testing before building."},
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]"><div className="px-8 md:px-20"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">02 / Process</p></ScrollReveal></div>
      <div className="lg:col-span-9">
        <ScrollReveal delay={100}><h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight max-w-2xl">Research-first. Workflow-faithful. Delivered across seven phases.</h2><p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10">Before touching a single frame in Figma, I spent considerable time understanding how each legacy application functioned — not just technically, but behaviourally. The key principle: fidelity to original workflows. Not reinventing processes — elevating them.</p></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{phases.map((p,i)=><ScrollReveal key={p.n} delay={i*80}><div className="p-6 rounded-xl bg-[var(--color-surface)]"><span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">{p.n}</span><h3 className="font-bold text-base mt-2 mb-2">{p.t}</h3><p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{p.d}</p></div></ScrollReveal>)}</div>
      </div>
    </div></div></div></div>
  );
}

function Applications() {
  const apps = [
    {n:"01",name:"AG Portal",sub:"Central launchpad for Valmont's internal applications",before:"/casestudy/images/redesign/ag%20portal%20-before.png",after:"/casestudy/images/redesign/ag%20portal%20-after.png",changes:[{b:"Image-card nav, no hierarchy",a:"Icon card launcher grid"},{b:"No search or filtering",a:"Global search + region tabs"},{b:"No brand alignment",a:"Valley brand system applied"},{b:"No personalisation",a:"Favourite App feature"}],insight:"The portal redesign set the tone for the entire suite — establishing the Valley brand header, navigation patterns, and component language used across all five applications."},
    {n:"02",name:"SPIN II",sub:"Production planning tool — scheduling data and planner management",before:"/casestudy/images/redesign/spin%20-%20before.png",after:"/casestudy/images/redesign/spin%20-%20after.png",changes:[{b:"Plain instruction text, no nav",a:"Valley header + tabbed nav"},{b:"Unstyled table, raw delete links",a:"Sortable grid + pagination"}],insight:null},
    {n:"03",name:"Security App",sub:"User access, roles, and permissions management across Valmont's systems",before:"/casestudy/images/redesign/Security%20App-%20beforev.png",after:"/casestudy/images/redesign/Security%20App-%20After.png",changes:[{b:"Heavy green Windows-era UI",a:"Valley header + clean white"},{b:"Raw table + arrow transfer widget",a:"Structured sidebar + card grid"}],insight:"One of the most complex redesigns — managing nested permission structures required careful IA to keep all controls accessible without overwhelming administrators."},
    {n:"04",name:"SOS — Schedule of Supply",sub:"Weekly supply scheduling across production sites",before:"/casestudy/images/redesign/SOS%20-%20Before.png",after:"/casestudy/images/redesign/v.png",changes:[{b:"Dense spreadsheet, yellow headers",a:"Clean 5-week grid, Valley brand"},{b:"Tiny controls, no breathing room",a:"Spacious dropdowns + slot counters"}],insight:null},
    {n:"05",name:"OJV — Order Jacket Viewer",sub:"Order documentation lookup and management",before:"/casestudy/images/redesign/ojv%20-%20before.png",after:"/casestudy/images/redesign/ojv%20-%20after.png",changes:[{b:"Old Valmont Irrigation blue blocks",a:"Unified Valley header + DB selector"},{b:"Raw table, VIEW/Delete text links",a:"Sortable columns + pagination"}],insight:null},
  ];
  return (
    <div className="px-8 md:px-20 py-32"><div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-20">
        <div className="lg:col-span-3"><ScrollReveal><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">03 / Applications</p></ScrollReveal></div>
        <div className="lg:col-span-9"><ScrollReveal delay={100}><h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight">Five applications transformed — before and after.</h2><p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">Each application presented unique challenges — from Windows-era desktop UIs to raw data tables with no visual hierarchy.</p></ScrollReveal></div>
      </div>
      {apps.map((app,i)=><ScrollReveal key={app.n} delay={i*100}><div className={`mb-24 ${i<apps.length-1?"pb-24 border-b border-[var(--color-border)]":""}`}>
        <div className="flex items-center gap-4 mb-10"><div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 bg-[var(--color-text-muted)]">{app.n}</div><div><h3 className="font-bold text-2xl">{app.name}</h3><p className="text-sm text-[var(--color-text-muted)]">{app.sub}</p></div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-[var(--color-border)] overflow-hidden"><Image src={app.before} alt={`${app.name} — Before`} width={600} height={400} className="w-full h-auto block" /></div>
          <div className="rounded-xl border border-[var(--color-border)] overflow-hidden"><Image src={app.after} alt={`${app.name} — After`} width={600} height={400} className="w-full h-auto block" /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-3">{app.changes.map((kc,j)=><div key={j} className="flex items-center gap-2 col-span-1"><X className="w-3 h-3 text-[#EB5757] flex-shrink-0"/><p className="text-sm text-[var(--color-text-secondary)]">{kc.b}</p></div>)}</div>
          <div className="grid grid-cols-2 gap-3">{app.changes.map((kc,j)=><div key={`ch-${j}`} className="flex items-center gap-2 col-span-1"><Check className="w-3 h-3 text-[var(--color-accent-warm)] flex-shrink-0"/><p className="text-sm text-[var(--color-text-primary)]">{kc.a}</p></div>)}</div>
        </div>
        {app.insight && <div className="mt-4 bg-[var(--color-bg-alt)] rounded-xl p-4 flex items-start gap-3 border border-[var(--color-border)]"><Lightbulb className="w-4 h-4 text-[var(--color-accent-warm)] flex-shrink-0 mt-0.5"/><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{app.insight}</p></div>}
      </div></ScrollReveal>)}
    </div></div>
  );
}

function Outcome() {
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]"><div className="px-8 md:px-20"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">04 / Outcome</p></ScrollReveal></div>
      <div className="lg:col-span-9">
        <ScrollReveal delay={100}>
          <blockquote className="text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] italic mb-12">&ldquo;Across three years of embedded design work, five disconnected, aging desktop applications became a cohesive, modern enterprise web experience — built on a shared design system and ready for development handoff.&rdquo;</blockquote>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] mb-16">{[{n:"5",l:"Apps Unified"},{n:"50+",l:"Screens"},{n:"1",l:"Design System"},{n:"100%",l:"Dev-Ready"}].map(s=><div key={s.l} className="bg-[var(--color-bg)] px-6 py-8"><p className="text-5xl font-black tracking-tighter text-[var(--color-text-primary)] mb-2">{s.n}</p><p className="text-sm text-[var(--color-text-muted)]">{s.l}</p></div>)}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[{t:"Design System",d:"Shared component library following Valmont brand guidelines — used across all 5 apps."},{t:"50+ Screens",d:"Wireframes, high-fidelity UI, and interactive prototypes for every flow and state."},{t:"Dev-Ready Files",d:"Structured, annotated Figma files for seamless engineering handoff."},{t:"Unified UX",d:"Consistent navigation, patterns, and visual language across all 5 applications."}].map((x,i)=><ScrollReveal key={i} delay={200+i*80}><div className="bg-[var(--color-surface)] p-8 rounded-xl border border-[var(--color-border)]"><h4 className="font-bold text-lg mb-3">{x.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{x.d}</p></div></ScrollReveal>)}</div>
        </ScrollReveal>
      </div>
    </div></div></div></div>
  );
}

function NextProject() {
  return (
    <section className="bg-[var(--color-accent)] py-24 px-8 md:px-20"><div className="max-w-7xl mx-auto text-center"><ScrollReveal><span className="text-[var(--color-bg)]/50 uppercase tracking-widest text-xs font-bold">Next Project</span><h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4 mb-6 text-[var(--color-bg)]">Valley Dealer Suite</h2><p className="text-[var(--color-bg)]/60 max-w-xl mx-auto mb-10">A centralized mobile hub for the Valley® dealer ecosystem — order tracking, notifications, and app launchpad in one iOS application.</p><Link href="/valley-dealer-suite" className="btn-primary">View Case Study <ArrowRight className="w-4 h-4" /></Link></ScrollReveal></div></section>
  );
}
