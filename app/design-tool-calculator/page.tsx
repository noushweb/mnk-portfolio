import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Valley Design Tool Calculator — Case Study | Mohammed Noushad",
  description: "Precision engineering calculations built for the field — structural load analysis and irrigation planning tools that work offline on any device, anywhere.",
  openGraph: {
    title: "Valley Design Tool Calculator — Case Study",
    description: "Precision engineering calculations built for the field — structural load analysis and irrigation planning tools that work offline on any device, anywhere.",
    type: "article",
    images: [{ url: "/casestudy/images/DTC/hero.webp", width: 1200, height: 630, alt: "Valley Design Tool Calculator — Engineering Case Study" }],
  },
};

export default function DtcPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <ScrollReveal><div className="max-w-7xl mx-auto mb-12"><div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold"><Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link><span className="text-xs">›</span><span className="text-[var(--color-text-primary)]">Valley Design Tool Calculator</span></div></div></ScrollReveal>
        <Hero />
      </div>
      <Overview />
      <Challenge />
      <Screens />
      <Process />
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
          <ScrollReveal><span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">iOS Mobile · Agricultural Tech</span><h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">Precision engineering calculations — built for the field.</h1></ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                {[{l:"Client",v:"Valmont Industries · Valley"},{l:"Platform",v:"iOS Mobile Application"},{l:"Role",v:"Product Designer"},{l:"Duration",v:"2022 – 2025"}].map(m=><div key={m.l}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>)}
              </div>
              <div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Tools</p><div className="flex flex-wrap gap-2">{["Figma","FigJam","iOS Design System"].map(t=><span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>)}</div></div>
            </div>
            <Link href="/valley-dealer-suite" className="btn-primary">Next Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2"><ScrollReveal direction="right"><div className="aspect-[16/10] bg-[var(--color-bg-alt)] rounded border border-[var(--color-border)] overflow-hidden"><Image src="/casestudy/images/DTC/hero.webp" alt="Design Tool Calculator" width={800} height={500} className="w-full h-full object-cover" /></div></ScrollReveal></div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <div className="px-8 md:px-20 mb-32"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">01 / Overview</p></ScrollReveal></div>
      <div className="lg:col-span-5"><ScrollReveal delay={100}><p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-secondary)]">Valley Irrigation needed a mobile companion for dealers and field engineers — a tool that could perform complex irrigation system calculations on the go.</p></ScrollReveal></div>
      <div className="lg:col-span-4 mt-12 lg:mt-0"><ScrollReveal delay={200}>{[{l:"Duration",v:"3 Years",accent:true},{l:"Pages",v:"17 Designed"},{l:"Modules",v:"7 Calculator Modules"}].map((s,i)=><div key={s.l} className={`border-l-2 pl-6 ${i>0?"mt-8":""}`} style={{borderColor:s.accent?"var(--color-accent-warm)":"var(--color-border)"}}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{s.l}</p><p className="text-xl font-medium">{s.v}</p></div>)}</ScrollReveal></div>
    </div></div></div>
  );
}

function Challenge() {
  return (
    <div className="bg-[var(--color-bg-alt)] py-32"><div className="px-8 md:px-20"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">02 / Challenge</p></ScrollReveal></div>
      <div className="lg:col-span-7">
        <ScrollReveal delay={100}>
          <h2 className="text-3xl font-medium mb-8">Complexity Meets Mobility</h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">Dealers relied on a desktop-based calculation tool that required a workstation — creating friction when meeting clients in the field. The challenge: bring precision engineering calculations into the field, without making the interface feel like a spreadsheet.</p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">Key pain points: desktop-only access, cluttered interface with no progressive disclosure, no mobile experience, and a disconnected brand identity.</p>
        </ScrollReveal>
      </div>
    </div></div></div></div>
  );
}

function Screens() {
  const imgs = [{src:"/casestudy/images/DTC/work_screens.webp",alt:"Calculator Interface"},{src:"/casestudy/images/DTC/work_screens1.webp",alt:"Summary Output"},{src:"/casestudy/images/DTC/work_screens3.webp",alt:"Settings & Preferences"},{src:"/casestudy/images/DTC/work_screens4.webp",alt:"Module Selection"}];
  return (
    <div className="px-8 md:px-20 py-32"><div className="max-w-7xl mx-auto">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] mb-8">03 / Screens</p></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">{imgs.map((img,i)=><ScrollReveal key={i} delay={i*100}><div className="bg-[var(--color-bg-alt)] rounded-lg border border-[var(--color-border)] overflow-hidden"><Image src={img.src} alt={img.alt} width={600} height={450} className="w-full h-auto block" /></div></ScrollReveal>)}</div>
      <ScrollReveal delay={400}><div className="bg-[var(--color-bg-alt)] rounded-lg border border-[var(--color-border)] overflow-hidden"><Image src="/casestudy/images/DTC/wide.webp" alt="App Overview" width={1200} height={500} className="w-full h-auto block" /></div></ScrollReveal>
    </div></div>
  );
}

function Process() {
  return (
    <div className="px-8 md:px-20 pb-32"><div className="max-w-7xl mx-auto">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] mb-4">04 / Process</p>      <h2 className="text-4xl font-light tracking-tight mb-12">Methodical execution.</h2></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{["Discovery — Stakeholder workshops and field research to understand dealer workflows.","UX Strategy — Translating requirements into logical user flows and wireframes.","High-Fi Design — Applying the Valley brand system across 17 pages.","Handoff — Developer-ready Figma file with components and annotations."].map((p,i)=><ScrollReveal key={i} delay={i*100}><div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-xl"><span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">0{i+1}</span><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">{p.split(" — ")[1]}</p></div></ScrollReveal>)}</div>
    </div></div>
  );
}

function Outcome() {
  return (
    <div className="bg-[var(--color-bg-alt)] py-24 px-8 md:px-20"><div className="max-w-7xl mx-auto">
      <ScrollReveal><blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-[var(--color-text-secondary)] max-w-3xl mb-16">&ldquo;The Valley Design Tool Calculator transformed a desktop-bound, friction-heavy workflow into a sleek, field-ready mobile experience.&rdquo;</blockquote></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">{[{t:"Mobile First",d:"Complex calculations now run on iOS — wherever dealers need them."},{t:"Complete Modules",d:"7 calculator modules: System Flow, Pressure, Electrical, Operating Cost, Slab Volume, and Summary."},{t:"Brand Aligned",d:"Deep navy (#003B6F) as primary color — consistent with Valley brand standards."},{t:"Developer Ready",d:"Structured components, annotations, and design tokens for clean handoff."}].map((x,i)=><ScrollReveal key={i} delay={100+i*100}><div><p className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-text-primary)] mb-4">{x.t}</p><p className="text-[var(--color-text-secondary)] leading-relaxed">{x.d}</p></div></ScrollReveal>)}</div>
    </div></div>
  );
}

function NextProject() {
  return (
    <section className="bg-[var(--color-accent)] py-32 px-8 md:px-20"><Link href="/valley-dealer-suite" className="max-w-7xl mx-auto block group"><ScrollReveal><p className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold mb-6">Next Project</p><h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[var(--color-bg)] tracking-tighter mb-10 group-hover:text-[var(--color-accent-warm)] transition-colors">Valley Dealer Suite</h2><div className="w-16 h-16 rounded-full border border-[var(--color-bg)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent-warm)] group-hover:border-[var(--color-accent-warm)] transition-all"><ArrowRight className="w-6 h-6 text-[var(--color-bg)]" /></div></ScrollReveal></Link></section>
  );
}
