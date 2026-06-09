import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hand, Navigation, BarChart2, Crosshair, CheckCircle2, Layers } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Field Layout Tool — Case Study | Mohammed Noushad",
  description: "A GPS-powered tablet app for agricultural pivot planning — real-time field mapping, zone layout, and crop planning tools built for farm technicians in the field.",
  openGraph: {
    title: "Field Layout Tool — Case Study",
  },
};

const WARM = "var(--color-accent-warm)";

export default function FltPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <ScrollReveal><div className="max-w-7xl mx-auto mb-12"><div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold"><Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link><span className="text-xs">›</span><span className="text-[var(--color-text-primary)]">Field Layout Tool</span></div></div></ScrollReveal>
        <Hero />
      </div>
      <Overview />
      <Challenge />
      <Process />
      <Screens />
      <DesignDecisions />
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
          <ScrollReveal><span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">Agriculture · iPad App</span><h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">A GPS-powered tablet app for agricultural pivot planning.</h1></ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                {[{l:"Platform",v:"iPad (Tablet)"},{l:"Industry",v:"Agriculture / Irrigation"},{l:"Role",v:"Product Designer — End-to-End"},{l:"Duration",v:"2022 – 2025"}].map(m=><div key={m.l}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>)}
              </div>
              <div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Tools</p><div className="flex flex-wrap gap-2">{["Figma","FigJam","Google Maps API","GPS Integration"].map(t=><span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>)}</div></div>
            </div>
            <Link href="/valmont-legacy-redesign" className="btn-primary">Next Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2"><ScrollReveal direction="right"><div className="relative aspect-[4/3] bg-[var(--color-bg-alt)] border border-[var(--color-border)] overflow-hidden"><Image src="/casestudy/images/FLT/hero.webp" alt="Field Layout Tool" fill className="object-cover object-top" /><div className="absolute top-4 right-4 bg-[var(--color-surface)] px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#27AE60]"/><span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">Deployed</span></div></div></ScrollReveal></div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <div className="px-8 md:px-20 mb-32"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">01 / Overview</p></ScrollReveal></div>
      <div className="lg:col-span-5"><ScrollReveal delay={100}>
        <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-secondary)]">The Field Layout Tool is a professional-grade iPad application for agricultural dealers who plan and install center-pivot irrigation systems — entirely in the field, not at a desk.</p>
        <p className="text-lg leading-relaxed text-[var(--color-text-secondary)] mt-6">Before this app, dealers depended on a legacy desktop tool that required them to be at a computer, offered no GPS precision, and had no elevation awareness. This project replaced that workflow entirely with a connected, GPS-accurate, field-first experience.</p>
      </ScrollReveal></div>
      <div className="lg:col-span-4 mt-12 lg:mt-0"><ScrollReveal delay={200}>{[{l:"Duration",v:"3 Years",accent:true},{l:"Platform",v:"iPad App"},{l:"Screens Delivered",v:"50+ Screens"}].map((s,i)=><div key={s.l} className={`border-l-2 pl-6 ${i>0?"mt-8":""}`} style={{borderColor:s.accent?WARM:"var(--color-border)"}}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{s.l}</p><p className="text-xl font-medium">{s.v}</p></div>)}</ScrollReveal></div>
    </div></div></div>
  );
}

function Challenge() {
  const pains = [{accent:true,t:"No field mobility",d:"Dealers had to operate the desktop tool before going outdoors, then manually transfer observations."},{t:"Imprecise point placement",d:"Desktop planning couldn't match on-the-ground realities."},{t:"No elevation data",d:"Dealers couldn't account for terrain."},{t:"Disconnected data flow",d:"Field and desktop data lived in separate silos."},{t:"No real-time navigation",d:"No GPS guidance while walking the field."},{t:"No live draw capability",d:"Boundaries couldn't be drawn in real-time on site."}];
  return (
    <div className="bg-[var(--color-bg-alt)] py-32"><div className="px-8 md:px-20"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">02 / Challenge</p></ScrollReveal></div>
      <div className="lg:col-span-9">
        <ScrollReveal delay={100}><h2 className="text-3xl font-medium mb-8 tracking-tight">A desktop workflow that didn&apos;t survive the outdoors.</h2><p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12">How do you take a complex, desktop-first engineering workflow and rebuild it as a precise, intuitive, GPS-powered tablet experience that works in harsh outdoor field conditions?</p></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{pains.map((p,i)=><ScrollReveal key={i} delay={200+i*80}><div className="flex gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] p-5"><div className="w-1 flex-shrink-0 rounded" style={{background:p.accent?WARM:"var(--color-border)"}}/><div><p className="font-bold text-sm text-[var(--color-text-primary)] mb-1">{p.t}</p><p className="text-sm text-[var(--color-text-secondary)]">{p.d}</p></div></div></ScrollReveal>)}</div>
      </div>
    </div></div></div></div>
  );
}

function Process() {
  const steps = [{t:"Legacy Audit",d:"Deeply studied the existing desktop application — documented every screen, every user action, every pain point. Mapped the old workflow step by step."},{t:"User Flow Mapping",d:"Used FigJam to map the complete new user journey — from syncing a project, through GPS drawing and navigation, to syncing data back to the desktop."},{t:"Design System",d:"Built a full design system following Valley brand guidelines — tablet-first, outdoor-use conditions: large touch targets, high contrast, clear hierarchy."},{t:"Feature Design",d:"Each core feature designed with its full range of states: empty, loading, active, success, error, and edge cases. Nothing was left undocumented."},{t:"Developer Handoff",d:"Restructured the final Figma file from the ground up for developer clarity — named layers, organized components, annotated interactions, 50+ screens."}];
  return (
    <div className="px-8 md:px-20 py-32"><div className="max-w-7xl mx-auto">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] mb-4">03 / Process</p><h3 className="text-4xl font-light tracking-tight mb-16">Research → Architecture → Design → Prototype → Handoff</h3></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{steps.slice(0,3).map((s,i)=><ScrollReveal key={s.t} delay={100+i*80}><div className="relative"><span className="text-8xl font-bold text-[var(--color-text-primary)]/5 absolute -top-8 -left-2">{i+1}</span><h4 className="font-bold text-lg mb-3 relative z-10 pt-8">{s.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.d}</p></div></ScrollReveal>)}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-2xl">{steps.slice(3).map((s,i)=><ScrollReveal key={s.t} delay={300+i*80}><div className="relative"><span className="text-8xl font-bold text-[var(--color-text-primary)]/5 absolute -top-8 -left-2">{i+4}</span><h4 className="font-bold text-lg mb-3 relative z-10 pt-8">{s.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.d}</p></div></ScrollReveal>)}</div>
    </div></div>
  );
}

function Screens() {
  return (
    <div className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] mb-8 px-4">04 / Screens</p></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[{src:"/casestudy/images/FLT/one.webp",alt:"Navigation Screen"},{src:"/casestudy/images/FLT/2@2x.webp",alt:"Line Tool & Live Draw"},{src:"/casestudy/images/FLT/3@2x.webp",alt:"Pivot Planning"},{src:"/casestudy/images/FLT/4@2x.webp",alt:"Boundary Drawing"}].map((img,i)=><ScrollReveal key={i} delay={i*100}><Image src={img.src} alt={img.alt} width={600} height={450} className="w-full rounded-lg" /></ScrollReveal>)}
      </div>
    </div>
  );
}

function DesignDecisions() {
  const decisions = [
    {icon:Hand,t:"Oversized Vertex Handles",d:"Standard 24pt touch targets become unusable in gloved-hand, direct-sunlight conditions. All interactive map elements use a minimum 44pt touch target — significantly larger than convention."},
    {icon:Navigation,t:"Yellow Navigation Line",d:"Valley blue would blend into sky-tone satellite imagery. Bright yellow (#F2C94C) provides maximum contrast against all terrain types — green fields, brown soil, grey roads — and remains visible in direct sunlight."},
    {icon:BarChart2,t:"Color Gradient Proximity Bar",d:"A full-width Red → Green gradient bar replaces a numeric countdown during navigation. A dealer walking a large field can look up and know instantly how close they are — no reading required."},
    {icon:Crosshair,t:"Vertex Offset — Precision Input",d:"A 5mm drag error on a tablet screen represents 20–50 feet of misalignment in the field. Vertex Offset lets dealers input exact angle + distance — GPS-accurate repositioning without physical drag error."},
    {icon:CheckCircle2,t:"Full-Screen Sync Confirmation",d:"Dealers upload irreplaceable field survey data in remote locations with unreliable connectivity. A small toast is not enough. A large centered green checkmark — impossible to miss before closing the app."},
    {icon:Layers,t:"Dual Progress Indicators",d:"During Sync Up, both percentage (57%) and item count (14/28) are shown simultaneously. Percentage gives a quick gestalt. Item count gives precise tracking — especially critical over slow rural connections."},
  ];
  return (
    <div className="px-8 md:px-20 py-32"><div className="max-w-7xl mx-auto">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] mb-4">05 / Design Decisions</p><h2 className="text-4xl font-light tracking-tight max-w-2xl mb-16">Every decision was filtered through one reality: a dealer standing in a large field, in direct sunlight, wearing gloves.</h2></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{decisions.map((d,i)=><ScrollReveal key={d.t} delay={i*80}><div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8"><div className="w-10 h-10 bg-[var(--color-tag-bg)] flex items-center justify-center mb-6 rounded"><d.icon className="w-5 h-5 text-[var(--color-text-secondary)]" /></div><h4 className="font-bold text-sm mb-3">{d.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{d.d}</p></div></ScrollReveal>)}</div>
    </div></div>
  );
}

function Outcome() {
  return (
    <div className="px-8 md:px-20 py-24 bg-[var(--color-bg-alt)]"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
      <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">06 / Outcome</p></ScrollReveal></div>
      <div className="lg:col-span-9">
        <ScrollReveal delay={100}><blockquote className="text-3xl lg:text-4xl font-light leading-tight italic text-[var(--color-text-primary)] mb-16 relative"><span className="absolute -top-10 -left-6 text-6xl text-[var(--color-accent-warm)]/10">&ldquo;</span>The result is an app that looks simple — because the complexity was absorbed into the design. The dealer experience is clean, direct, and confidence-inspiring.</blockquote></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">{[{t:"GPS Accuracy",d:"GPS-accurate field surveys replaced imprecise desktop point placement — eliminating the guesswork that drove costly on-site errors."},{t:"Elevation Intelligence",d:"Real-time elevation data introduced for the first time in the dealer workflow — enabling accurate slope-sensitive pivot engineering from the field."},{t:"Connected Pipeline",d:"Sync pipeline connects tablet field data directly to desktop engineering calculations — zero manual re-entry, zero transcription errors."},{t:"In Production",d:"50+ screens delivered, full design system production-ready, and the Navigation tool eliminated the need for separate GPS devices on field visits."}].map((x,i)=><ScrollReveal key={i} delay={200+i*100}><div><p className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-accent-warm)] mb-4">{x.t}</p><p className="text-[var(--color-text-secondary)] leading-relaxed">{x.d}</p></div></ScrollReveal>)}</div>
      </div>
    </div></div></div>
  );
}

function NextProject() {
  return (
    <section className="bg-[var(--color-accent)] py-32 px-8 md:px-20"><Link href="/valmont-legacy-redesign" className="max-w-7xl mx-auto block group"><ScrollReveal><p className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold mb-6">Next Project</p><h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[var(--color-bg)] tracking-tighter mb-10 group-hover:text-[var(--color-accent-warm)] transition-colors">Valmont Industries — Legacy Redesign</h2><div className="w-16 h-16 rounded-full border border-[var(--color-bg)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent-warm)] group-hover:border-[var(--color-accent-warm)] transition-all"><ArrowRight className="w-6 h-6 text-[var(--color-bg)]" /></div></ScrollReveal></Link></section>
  );
}
