import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bell, Search, Stethoscope, Utensils, Car, Cpu, Plane,
  GraduationCap, Building2, Check, Globe, Lock, ClipboardList, Home,
  Grid2X2, Gem, List, MapPin, Languages, Star, Navigation, Briefcase,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hala App — Case Study | Mohammed Noushad",
  description: "A smart bilingual directory connecting Qatar's businesses and communities.",
};

const NAVY = "#1A1A6E";
const GOLD = "#F7B500";
const CORAL = "#E05A5A";

export default function HalaAppPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold">
              <Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link>
              <span className="text-xs">›</span>
              <span className="text-[var(--color-text-primary)]">Hala App</span>
            </div>
          </div>
        </ScrollReveal>
        <Hero />
      </div>
      <Overview />
      <Problem />
      <DesignProcess />
      <KeyScreens />
      <UXDecisions />
      <OutcomeHala />
      <NextProjectCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">iOS & Android · Qatar · Bilingual</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">A smart bilingual directory connecting Qatar&apos;s businesses and communities.</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                <MetaItem label="Platform" value="iOS & Android" />
                <MetaItem label="Market" value="Qatar" />
                <MetaItem label="Role" value="Lead Product Designer" />
                <MetaItem label="Languages" value="English · Arabic (RTL)" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Features</p>
                <div className="flex flex-wrap gap-2">
                  {["Directory","Premium Booking","Subscription Plans","Map & Location","Bilingual UI"].map(t=>(
                    <span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/roadshow" className="group inline-flex items-center gap-4 bg-[#323232] text-white px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-accent-warm)] transition-all w-fit">Next Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <ScrollReveal direction="right">
            <div className="flex items-end justify-center gap-3 lg:gap-6">
              <PhoneMockup1 />
              <PhoneMockup2 />
              <PhoneMockup3 />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup1() {
  return (
    <div className="hidden lg:block w-44 rounded-2xl overflow-hidden border border-[#2A2A8E] flex-shrink-0" style={{background:NAVY,minHeight:320}}>
      <div className="flex flex-col items-center px-6 pt-10 pb-8 text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{background:GOLD}}>
          <span className="font-black text-xl" style={{color:NAVY}}>H</span>
        </div>
        <p className="font-bold text-lg text-white">Hala</p>
        <p className="text-[9px] uppercase tracking-widest mb-8" style={{color:"rgba(247,181,0,0.6)"}}>Qatar Directory</p>
        <div className="w-full space-y-3">
          <p className="text-[9px] uppercase tracking-widest text-center" style={{color:"rgba(255,255,255,0.5)"}}>Choose Language</p>
          <div className="flex justify-center gap-3">
            <span className="px-4 py-1.5 rounded-lg text-xs font-bold" style={{background:GOLD,color:NAVY}}>EN</span>
            <span className="px-4 py-1.5 rounded-lg text-xs font-bold" style={{color:"rgba(255,255,255,0.5)"}}>ع</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup2() {
  const cats = [
    {icon:Stethoscope,label:"Medical"},{icon:Utensils,label:"Food"},{icon:Car,label:"Car"},
    {icon:Cpu,label:"Electronic"},{icon:Plane,label:"Travel"},{icon:GraduationCap,label:"Education"},
  ];
  return (
    <div className="w-56 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 bg-white" style={{minHeight:420}}>
      <div className="px-4 pt-4 pb-3" style={{background:NAVY}}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{background:GOLD}}>
              <span className="font-bold text-sm" style={{color:NAVY}}>H</span>
            </div>
            <span className="font-bold text-sm text-white">Hala</span>
          </div>
          <Bell className="w-4 h-4 text-white/60" />
        </div>
        <div className="bg-white/10 rounded-lg flex items-center gap-2 px-3 py-1.5">
          <Search className="w-3 h-3 text-white/40" />
          <span className="text-[10px]" style={{color:"rgba(255,255,255,0.4)"}}>Search businesses...</span>
        </div>
      </div>
      <div className="mx-3 mt-3 rounded-xl p-3" style={{background:"linear-gradient(135deg,#1A1A6E,#2E2E9E)"}}>
        <p className="text-[10px] uppercase tracking-widest" style={{color:GOLD}}>Premium Space</p>
        <p className="font-bold text-xs text-white mt-1 mb-2">Book your Space</p>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded bg-white/20" /><div className="w-6 h-6 rounded bg-white/20" />
        </div>
      </div>
      <div className="p-3">
        <p className="text-[9px] text-[#9A9A94] uppercase tracking-widest mb-3">Browse Categories</p>
        <div className="grid grid-cols-3 gap-3">
          {cats.map(c=><div key={c.label} className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:"#FDECEA"}}><c.icon className="w-4 h-4" style={{color:CORAL}}/></div><span className="text-[10px] text-[#5A5A56] font-medium">{c.label}</span></div>)}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup3() {
  return (
    <div className="hidden lg:block w-44 rounded-2xl overflow-hidden border border-[var(--color-border)] flex-shrink-0 bg-white" style={{minHeight:320}}>
      <div className="px-4 py-3" style={{background:NAVY}}>
        <p className="font-bold text-sm text-white">Choose Plan</p>
        <p className="text-[9px]" style={{color:"rgba(255,255,255,0.5)"}}>Select your subscription</p>
      </div>
      <div className="p-3 space-y-2">
        <div className="p-3 rounded-xl border-2" style={{background:"#FFF9E6",borderColor:GOLD}}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{color:GOLD}}>Platinum</span>
            <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center" style={{borderColor:GOLD}}><div className="w-2 h-2 rounded-full" style={{background:GOLD}}/></div>
          </div>
          <p className="text-base font-black" style={{color:NAVY}}>QAR 29<span className="text-[9px] text-[#9A9A94] font-normal">/mo</span></p>
          <div className="mt-2 py-1.5 rounded-lg text-center text-[9px] font-bold" style={{background:GOLD,color:NAVY}}>Book Now</div>
        </div>
        <div className="flex items-center justify-between py-1"><span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A94]">Gold</span><div className="w-4 h-4 rounded-full border-2 border-[#E2E2DC]"/></div>
        <div className="flex items-center justify-between py-1"><span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A94]">Silver</span><div className="w-4 h-4 rounded-full border-2 border-[#E2E2DC]"/></div>
      </div>
    </div>
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
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-12 max-w-3xl"><span className="text-[var(--color-text-primary)] font-medium">Hala</span> is a Qatar-based mobile application that bridges businesses and consumers through a smart, bilingual directory and premium advertising platform. Companies list their services and book premium placement spaces. Users discover local businesses by category — in both Arabic and English, seamlessly.</p>
              <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
                {[{n:"20+",l:"Screens Designed"},{n:"2",l:"Languages · EN + AR"},{n:"3",l:"Subscription Tiers"}].map(s=><div key={s.l} className="bg-[var(--color-bg)] px-8 py-8"><p className="text-5xl font-black tracking-tighter text-[var(--color-text-primary)] mb-2">{s.n}</p><p className="text-sm text-[var(--color-text-muted)]">{s.l}</p></div>)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="02" label="The Problem"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-6 max-w-2xl">Qatar&apos;s businesses had no mobile-first platform to reach their audience — in their language.</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-12">Qatar&apos;s diverse, multilingual population needs a single trusted platform to discover and engage with local businesses — in both Arabic and English. Most existing apps had poor RTL support or inconsistent visual hierarchy when switching languages. Both sides of the market were underserved.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal delay={200}><div className="bg-[var(--color-surface)] p-8 rounded-xl border-l-4" style={{borderColor:NAVY}}><div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:NAVY}}><Building2 className="w-5 h-5 text-white"/></div><h3 className="font-bold text-lg mb-2">Businesses</h3><p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">Lacked a centralized, mobile-first platform to showcase their services and reach targeted local audiences in Qatar.</p><ul className="space-y-2">{[["List services in directory"],["Book premium ad spaces"],["Choose subscription plan (Platinum / Gold / Silver)"]].map((c,i)=><li key={i} className="flex items-start gap-2 text-sm"><Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{color:NAVY}}/><span className="text-[var(--color-text-secondary)]">{c[0]}</span></li>)}</ul></div></ScrollReveal>
                <ScrollReveal delay={300}><div className="bg-[var(--color-surface)] p-8 rounded-xl border-l-4" style={{borderColor:GOLD}}><div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:GOLD}}><Search className="w-5 h-5" style={{color:NAVY}}/></div><h3 className="font-bold text-lg mb-2">Consumers</h3><p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">Had no single app to browse vetted local services by category, language preference, or location — leading to fragmented discovery experiences.</p><ul className="space-y-2">{[["Discover businesses by category"],["Call or get directions instantly"],["Switch between English and Arabic effortlessly"]].map((c,i)=><li key={i} className="flex items-start gap-2 text-sm"><Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{color:GOLD}}/><span className="text-[var(--color-text-secondary)]">{c[0]}</span></li>)}</ul></div></ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function DesignProcess() {
  const steps = [
    {n:"01",t:"Discovery & Research",d:"Analyzed competitor apps in the MENA region and identified a critical gap: most apps either had poor RTL support or inconsistent visual hierarchy when switching languages. Mapped out both business-side and consumer-side user journeys to understand divergent needs within a single product."},
    {n:"02",t:"IA & Flows",d:"Structured two core flows — onboarding & registration (for businesses and users) and the discovery & engagement flow. Defined the plan selection screen (Platinum, Gold, Silver) as the key business conversion touchpoint, requiring focused hierarchy and pricing clarity."},
    {n:"03",t:"Visual Design",d:"Built the UI around a deep navy blue (#1A1A6E) and golden yellow (#F7B500) palette — evoking Qatar's authoritative, premium market feel. High contrast ensured readability across Arabic and English text at all sizes. Coral-red icons created clear, warm category signifiers."},
    {n:"04",t:"Bilingual UX",d:"Designed language selection as the very first interaction — giving users immediate agency before entering any flow. Every screen was built with RTL/LTR mirroring in mind. Text alignment, icon placement, and navigation direction all adapt to the selected language, creating a truly native experience in both directions."},
    {n:"05",t:"Prototyping & Handoff",d:"Delivered high-fidelity prototypes covering all user flows. Developer handoff included annotated Figma files with spacing, component states, and bilingual layout notes — ensuring the engineering team could implement both language directions without guesswork."},
  ];
  const swatches = [{hex:NAVY,label:"NAVY BLUE"},{hex:GOLD,label:"GOLDEN"},{hex:CORAL,label:"CORAL"}];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="03" label="Design Process"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-6 max-w-2xl">From dual-user research to bilingual, high-fidelity screens.</h2>
              <blockquote className="pl-6 border-l-4 mb-12" style={{borderColor:GOLD}}><p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">&ldquo;The language toggle was not a feature — it was the first UX decision. The moment a user picks their language, the entire app speaks their world.&rdquo;</p></blockquote>
            </ScrollReveal>
            <div className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
              {steps.map((s,i)=><ScrollReveal key={s.n} delay={200+i*80}><div className="py-8 flex gap-6"><div className="text-3xl font-black tracking-tighter flex-shrink-0 w-12" style={{color:NAVY}}>{s.n}</div><div><h3 className="font-bold text-base mb-2">{s.t}</h3><p className="text-[var(--color-text-secondary)] leading-relaxed">{s.d}</p>{s.n==="03" && <div className="flex gap-4 mt-4">{swatches.map(sw=><div key={sw.label} className="flex items-center gap-2"><div className="w-10 h-10 rounded-xl" style={{background:sw.hex}}/><div><p className="text-[9px] font-bold text-[var(--color-text-muted)]">{sw.label}</p><p className="text-xs font-medium text-[var(--color-text-primary)]">{sw.hex}</p></div></div>)}</div>}</div></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyScreens() {
  const screens = [
    {icon:Globe,bg:NAVY,t:"Splash & Language Selection",d:"Bold navy canvas with the golden Hala logo. A bilingual toggle lets users choose English or Arabic before entering the app — the entire experience localizes from the first tap."},
    {icon:Lock,bg:NAVY,t:"Login Screen",d:"Clean, minimal login on dark navy. A golden CTA button draws the eye immediately. Reset password and register links reduce friction for users who land here by mistake."},
    {icon:ClipboardList,bg:NAVY,t:"Registration Screen",d:"Business registration collects personal then professional identity in a single scrollable form — mirroring natural onboarding logic for a zero-friction sign-up."},
    {icon:Home,bg:GOLD,iconColor:NAVY,t:"Home / Premium Space",d:"Leads with a \"Premium Space\" banner showcasing partner brand logos — immediately communicating value to businesses. A \"Book your Space\" CTA drives the core business action. The category search grid follows for consumer discovery."},
    {icon:Grid2X2,bg:CORAL,t:"Category Search",d:"Six bold tiles (Medical, Food, Car, Electronic, Travel, Education) with coral-red circular icons. A search bar above serves both browse and intent-driven users in a single view."},
    {icon:Gem,bg:GOLD,iconColor:NAVY,t:"Plan Selection",d:"Platinum expanded by default, pricing (QAR 29) and \"Book Now\" CTA prominently placed. A conversion-focused touchpoint designed with clear hierarchy, pricing transparency, and minimal cognitive load."},
    {icon:List,bg:NAVY,t:"Category Listing",d:"\"Premium\" tags on select listings create a visual hierarchy rewarding businesses who invest in the platform — and signaling quality to users browsing the directory."},
    {icon:MapPin,bg:NAVY,t:"Location / Map View",d:"Embedded map with a \"Drive\" CTA — reducing the steps from discovery to navigation to a single tap. Business name displayed clearly above the action button."},
  ];
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="04" label="Key Screens"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}><h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-12 max-w-2xl">Eight screens. Every touchpoint in the user journey, considered.</h2></ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screens.map((sc,i)=><ScrollReveal key={sc.t} delay={200+i*80}><div className="bg-[var(--color-surface)] p-7 rounded-xl flex gap-4"><div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:sc.bg}}>{sc.iconColor?<sc.icon className="w-4 h-4" style={{color:sc.iconColor}}/>:<sc.icon className="w-4 h-4 text-white"/>}</div><div><h3 className="font-bold text-base mb-1.5">{sc.t}</h3><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{sc.d}</p></div></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function UXDecisions() {
  const decisions = [
    {icon:Languages,bg:NAVY,t:"Language-First Onboarding",d:"Placing language selection before login or registration ensures that every subsequent interaction — from form labels to navigation direction — feels native to the user's preferred language. It's not a setting buried in a menu. It's the first screen. The first handshake between the app and the user."},
    {icon:Star,bg:GOLD,iconColor:NAVY,t:"Premium Tier Visual Hierarchy",d:"\"Premium\" tags on listings create a clear two-tier system that motivates businesses to upgrade their plans — while helping users identify top-quality, verified listings instantly. The badge does dual work: it's a business growth incentive and a consumer quality signal in a single design element."},
    {icon:Navigation,bg:NAVY,t:"One-Tap Navigation",d:"The map view with a \"Drive\" CTA reduces the user journey from discovery to physical navigation to a single action. Removing this friction at the most critical moment of intent — when a user has found what they're looking for — was a deliberate conversion decision."},
    {icon:Briefcase,bg:GOLD,iconColor:NAVY,t:"B2B Conversion Focus",d:"The home screen's \"Book your Space\" and the plan selection screen were treated as primary business conversion surfaces — designed with clear hierarchy, pricing transparency (QAR 29 front and center), and minimal cognitive load. The Platinum plan expands by default, anchoring the user's perception of value before they consider lower tiers."},
  ];
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-12">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="05" label="Key UX Decisions"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}><h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-12 max-w-2xl">Four decisions that made the difference.</h2></ScrollReveal>
            <div className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
              {decisions.map((d,i)=><ScrollReveal key={d.t} delay={200+i*80}><div className="py-6 flex gap-4"><div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:d.bg}}>{d.iconColor?<d.icon className="w-4 h-4" style={{color:d.iconColor}}/>:<d.icon className="w-4 h-4 text-white"/>}</div><div><h3 className="font-bold text-base mt-1.5 mb-1">{d.t}</h3><p className="text-[var(--color-text-secondary)] leading-relaxed">{d.d}</p></div></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutcomeHala() {
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3"><ScrollReveal><SectionLabel num="06" label="Outcome"/></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed tracking-tight text-[var(--color-text-secondary)] max-w-3xl mb-12">&ldquo;A bilingual B2B directory and premium space booking platform designed to connect Qatar&apos;s businesses and communities — with clarity, trust, and purpose.&rdquo;</blockquote>
              <div className="grid grid-cols-3 gap-px bg-[var(--color-border)] mb-14">
                {[{n:"20+",l:"Screens"},{n:"EN + AR",l:"LTR + RTL"},{n:"3",l:"Plan Tiers"}].map(s=><div key={s.l} className="bg-[var(--color-bg)] px-8 py-8 text-center"><p className="text-4xl font-black tracking-tighter text-[var(--color-text-primary)] mb-2">{s.n}</p><p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-bold">{s.l}</p></div>)}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{t:"Authority",d:"Deep navy palette commands trust in a premium market — the right visual language for Qatar's B2B context."},{t:"Warmth",d:"Coral-red category icons and golden accents create approachability — turning a directory into an experience people want to use."},{t:"Clarity",d:"High contrast typography and consistent components across 20+ screens and two language directions — zero hierarchy confusion in any language."}].map((p,i)=><ScrollReveal key={p.t} delay={200+i*80}><div className="flex gap-3"><Check className="w-6 h-6 rounded-full p-1 text-white flex-shrink-0" style={{background:NAVY}}/><div><p className="font-bold text-sm text-[var(--color-text-primary)] mb-1">{p.t}</p><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.d}</p></div></div></ScrollReveal>)}
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
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[var(--color-bg)] mb-8">Road Show</h2>
          <p className="text-[var(--color-bg)]/60 text-lg mb-12 max-w-xl mx-auto">An end-to-end delivery management platform connecting supervisors, cashiers, and field delivery agents across web and mobile.</p>
          <Link href="/roadshow" className="group inline-flex items-center gap-4 border border-[var(--color-bg)] text-[var(--color-bg)] px-10 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] transition-all">View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
