import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Valley Design System — Case Study | Mohammed Noushad",
  description: "A production-ready design system bridging design and engineering.",
};

export default function DsPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <ScrollReveal><div className="max-w-7xl mx-auto mb-12"><div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold"><Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link><span className="text-xs">›</span><span className="text-[var(--color-text-primary)]">Valley Design System</span></div></div></ScrollReveal>
        <Hero />
      </div>
      <Overview />
      <Challenge />
      <Foundations />
      <ComponentLibrary />
      <Principles />
      <Outcome />
      <NextProject />
    </main>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto mb-32">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-[500px] flex-shrink-0">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">DESIGN SYSTEM · ENTERPRISE</span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light tracking-tighter leading-[1.1] mb-8">A production-ready design system bridging design and engineering.</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                {[{l:"Company",v:"Valmont Industries"},{l:"Platform",v:"Web App · Tablet"},{l:"Role",v:"Product Designer — End-to-End"},{l:"Components",v:"15+ Categories"}].map(m=><div key={m.l}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>)}
              </div>
              <div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Tools</p><div className="flex flex-wrap gap-2">{["Figma","Tailwind CSS","Auto-Layout","Dev Mode"].map(t=><span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>)}</div></div>
            </div>
            <Link href="/field-layout-tool" className="btn-primary">NEXT PROJECT <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
        </div>
        <div className="flex-1"><ScrollReveal direction="right"><div className="bg-[var(--color-surface)] rounded-xl overflow-hidden">                      <Image src="/casestudy/images/design%20system/hero_design_%20system.webp" alt="Valley Design System" width={593} height={450} className="w-full h-auto block" /></div></ScrollReveal></div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <div className="px-8 md:px-20 py-32 bg-[var(--color-bg)]"><div className="max-w-7xl mx-auto"><div className="flex flex-col md:flex-row gap-8 md:gap-20">
      <div className="md:w-[240px] flex-shrink-0"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">01 / Overview</p></ScrollReveal></div>
      <div className="flex-1 max-w-full md:max-w-[533px]">
        <ScrollReveal delay={100}>
          <p className="text-xl leading-relaxed text-[var(--color-text-secondary)] mb-6">A comprehensive, production-ready design system built on Tailwind CSS conventions — delivering full component coverage, state documentation, and developer-handoff annotations across Valmont&apos;s Valley product suite.</p>
          <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">Every token maps directly to a Tailwind class name. Every interactive component documents all six states. Every annotation was built for developer clarity — not designer satisfaction.</p>
        </ScrollReveal>
      </div>
      <div className="flex flex-col gap-5 md:ml-auto">
        <ScrollReveal delay={200}>
          {[{l:"Components",v:"15+ Categories",accent:true},{l:"State Coverage",v:"6 States Each"},{l:"Token Alignment",v:"Tailwind CSS"}].map((s,i)=><div key={s.l} className={`border-l-2 pl-6 ${i>0?"mt-4":""}`} style={{borderColor:s.accent?"var(--color-accent-warm)":"var(--color-border)"}}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{s.l}</p><p className="text-xl font-medium">{s.v}</p></div>)}
        </ScrollReveal>
      </div>
    </div></div></div>
  );
}

function Challenge() {
  const cards = [{t:"Inconsistency",d:"Same components, different sizes and colours across screens built by different teams."},{t:"Slow Handoff",d:"Developers re-interpreted designs rather than implementing a named spec — introducing drift on every sprint."},{t:"No States",d:"Components existed in one state — the happy path. Hover, disabled, error, and validation were built ad hoc."}];
  return (
    <div className="px-8 md:px-20 py-32 bg-[var(--color-bg-alt)]"><div className="max-w-7xl mx-auto"><div className="flex flex-col md:flex-row gap-8 md:gap-20">
      <div className="md:w-[240px] flex-shrink-0"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">02 / Challenge</p></ScrollReveal></div>
      <div className="flex-1">
        <ScrollReveal delay={100}>
          <h2 className="text-[28px] font-medium tracking-tight mb-6">Without a system, every screen is a new decision.</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-12">Valmont&apos;s Valley product suite spans enterprise web applications and field tablet tools — multiple surfaces, multiple teams, multiple engineering stacks. Without a unified design language, the same button appeared in four different sizes across six different screens.</p>
          <div className="flex flex-wrap gap-6">{cards.map((c,i)=><ScrollReveal key={i} delay={200+i*100}><div className="bg-[var(--color-surface)] border border-[var(--color-border)] w-full md:max-w-[298px] p-6"><span className="text-[22px] font-medium text-[var(--color-text-primary)]">{c.t}</span><p className="text-sm text-[var(--color-text-secondary)] mt-3">{c.d}</p></div></ScrollReveal>)}</div>
        </ScrollReveal>
      </div>
    </div></div></div>
  );
}

function Foundations() {
  return (
    <div className="px-8 md:px-20 py-32 bg-[var(--color-bg)]"><div className="max-w-7xl mx-auto">
      <ScrollReveal>      <h2 className="text-4xl font-light tracking-tight mb-12">Tokens first. Components second.</h2></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal delay={100}>
          <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-muted)] mb-6">Typography Scale</h3>
          <div className="space-y-4">{[{s:"text-3xl",d:"30px · SemiBold"},{s:"text-2xl",d:"24px · SemiBold"},{s:"text-lg Body",d:"18px · Regular"},{s:"text-sm Body / Label",d:"14px · Regular"},{s:"TEXT-XS CAPTION",d:"12px · Uppercase"}].map(t=><div key={t.s} className="flex justify-between items-center py-2 border-b border-[var(--color-border)]"><span className="font-bold text-sm">{t.s}</span><span className="text-xs text-[var(--color-text-muted)]">{t.d}</span></div>)}</div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-muted)] mb-6">Color Tokens</h3>
          <div className="space-y-3">
            <div><p className="text-[10px] text-[var(--color-text-muted)] mb-2">Brand</p><div className="flex gap-2">{[{c:"#005DAA",l:"Valley Blue"},{c:"#003D72",l:"Valley Dark"},{c:"#D6E8F5",l:"Valley Light"}].map(x=><div key={x.c} className="flex items-center gap-2"><div className="w-8 h-8 rounded" style={{background:x.c}}/><span className="text-[10px] text-[var(--color-text-secondary)]">{x.l}</span></div>)}</div></div>
            <div><p className="text-[10px] text-[var(--color-text-muted)] mb-2">Status</p><div className="flex gap-2">{[{c:"#27AE60",l:"Success"},{c:"#F2994A",l:"Warning"},{c:"#EB5757",l:"Error"},{c:"#F2C94C",l:"Alert"}].map(x=><div key={x.c} className="flex items-center gap-2"><div className="w-8 h-8 rounded" style={{background:x.c}}/><span className="text-[10px] text-[var(--color-text-secondary)]">{x.l}</span></div>)}</div></div>
          </div>
        </ScrollReveal>
      </div>
    </div></div>
  );
}

function ComponentLibrary() {
  const comps = [
    {img:"/casestudy/images/design%20system/comp-1-inputs.png",t:"Inputs",d:"Text, textarea, suffix/prefix, labeled. 4 sizes × 6 states.",tags:["XS·SM·MD·LG","6 States"]},
    {img:"/casestudy/images/design%20system/comp-3-dropdown.png",t:"Dropdown",d:"Simple, multiselect, grouped, search with inline add.",tags:["Single·Multi","Search"]},
    {img:"/casestudy/images/design%20system/comp-4-buttons.png",t:"Buttons",d:"Primary, secondary, ghost, destructive. Icon-only buttons with tooltips.",tags:["4 Variants","Accessibility"]},
    {img:"/casestudy/images/design%20system/comp-6-selectors.png",t:"Selectors",d:"Toggle, Checkbox, Radio button and Radio group. All 4 states.",tags:["Toggle·Check·Radio"]},
    {img:"/casestudy/images/design%20system/comp-8-tabs.png",t:"Tabs",d:"Desktop (MD/LG) and Mobile variants. Active: blue underline.",tags:["Desktop·Mobile"]},
    {img:"/casestudy/images/design%20system/comp-12-modal.png",t:"Dialog / Modal",d:"Scrollable body with fixed header + footer. Max height 95vh.",tags:["Compact·Full-Width"]},
  ];
  return (
    <div className="px-8 md:px-20 py-32 bg-[var(--color-bg)]"><div className="max-w-7xl mx-auto">
      <ScrollReveal>      <h2 className="text-4xl font-light tracking-tight mb-4">Every component. Every state. Every size.</h2><p className="text-[var(--color-text-secondary)] mb-12 max-w-2xl">A comprehensive library of production-ready UI components, each documented with full state coverage, size variants, and annotation for developer handoff.</p></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{comps.map((c,i)=><ScrollReveal key={c.t} delay={i*60}><div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8"><div className="h-[260px] bg-[var(--color-bg-alt)] overflow-hidden mb-6 rounded"><Image src={c.img} alt={c.t} width={400} height={260} className="w-full h-full object-cover" /></div><h4 className="font-bold text-lg mb-2">{c.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{c.d}</p><div className="flex flex-wrap gap-2">{c.tags.map(t=><span key={t} className="px-2 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] font-medium rounded-full">{t}</span>)}</div></div></ScrollReveal>)}</div>
    </div></div>
  );
}

function Principles() {
  const prs = [
    {t:"Tailwind Alignment",d:"All tokens map directly to Tailwind class names. The language of design matches the language of code — no translation layer."},
    {t:"State Completeness",d:"Every interactive component covers Default, Hover, Active, Focus, Disabled, and Validation. No state is left to developer interpretation."},
    {t:"Accessibility First",d:"Icon-only buttons always paired with tooltips. Destructive actions use red. Minimum 44pt touch targets on tablet surfaces."},
    {t:"Responsive Awareness",d:"Desktop and Mobile variants documented separately wherever behaviour differs — not assumed to be the same at a smaller size."},
    {t:"Figma-Ready",d:"All components use dashed purple annotation borders, full auto-layout, named effect styles and color styles. Dev Mode ready on delivery."},
  ];
  return (
    <div className="px-8 md:px-20 py-32 bg-[var(--color-bg-alt)]"><div className="max-w-7xl mx-auto">
      <ScrollReveal>      <h2 className="text-4xl font-light tracking-tight mb-12">The system follows five non-negotiables.</h2></ScrollReveal>
      <div className="flex flex-wrap gap-6">
        {prs.map((p,i)=><ScrollReveal key={i} delay={i*80}><div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 w-full md:w-[410px]"><span className="text-[22px] font-medium text-[var(--color-text-muted)]">0{i+1}</span><h4 className="font-bold text-lg mt-1 mb-2 text-[var(--color-text-primary)]">{p.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.d}</p></div></ScrollReveal>)}
      </div>
    </div></div>
  );
}

function Outcome() {
  return (
    <div className="px-8 md:px-20 py-32 bg-[var(--color-bg)]"><div className="max-w-7xl mx-auto"><div className="flex flex-col md:flex-row gap-8 md:gap-20">
      <div className="md:w-[240px] flex-shrink-0"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">06 / Outcome</p></ScrollReveal></div>
      <div className="flex-1 max-w-full md:max-w-[920px]">
        <ScrollReveal delay={100}><blockquote className="text-[28px] font-light leading-[40px] text-[var(--color-text-primary)] mb-16">&ldquo;Standardized 200+ UI components into a master design system — increasing designer-to-developer handoff speed by 25% across the Valley product suite.&rdquo;</blockquote></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">{[{t:"Single Source of Truth",d:"One Figma file serves as the definitive component reference for all Valley products — web and tablet — eliminating per-project design drift."},{t:"25% Faster Handoffs",d:"Named components, annotated interactions, and Tailwind-aligned tokens mean developers implement rather than interpret."},{t:"Full State Coverage",d:"Every component ships with all 6 interaction states. Edge cases, validation, disabled, and error flows are designed before a line of code is written."},{t:"Field-Tested",d:"The same token set that powers enterprise web dashboards is deployed directly in the Field Layout Tool iPad app — one system, two surfaces."}].map((x,i)=><ScrollReveal key={i} delay={200+i*100}><div><p className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-text-primary)] mb-4">{x.t}</p><p className="text-[var(--color-text-secondary)] leading-relaxed">{x.d}</p></div></ScrollReveal>)}</div>
      </div>
    </div></div></div>
  );
}

function NextProject() {
  return (
    <section className="bg-[var(--color-accent)] py-32 px-8 md:px-20"><Link href="/field-layout-tool" className="max-w-7xl mx-auto block group"><ScrollReveal><p className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold mb-6">NEXT PROJECT</p><h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[var(--color-bg)] tracking-tighter mb-10 group-hover:text-[var(--color-accent-warm)] transition-colors">Field Layout Tool</h2><div className="w-16 h-16 rounded-full border border-[var(--color-bg)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent-warm)] group-hover:border-[var(--color-accent-warm)] transition-all"><ArrowRight className="w-6 h-6 text-[var(--color-bg)]" /></div></ScrollReveal></Link></section>
  );
}
