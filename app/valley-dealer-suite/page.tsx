import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PackageX, BellOff, Puzzle, Clock, Edit3, Loader2, Trash2, Inbox } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Valley Dealer Suite — Case Study | Mohammed Noushad",
  description: "A centralized mobile hub for the Valley® dealer ecosystem.",
};

export default function VdsPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-8 md:px-20">
        <ScrollReveal><div className="max-w-7xl mx-auto mb-12"><div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold"><Link href="/work" className="hover:text-[var(--color-text-primary)] transition-colors">Work</Link><span className="text-xs">›</span><span className="text-[var(--color-text-primary)]">Valley Dealer Suite</span></div></div></ScrollReveal>
        <Hero />
      </div>
      <Overview />
      <Challenge />
      <Process />
      <Screens />
      <Features />
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
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">iOS Mobile · Valley®</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">A centralized mobile hub for the Valley® dealer ecosystem.</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-2 gap-y-6">
                {[{l:"Client",v:"Valmont Industries · Valley®"},{l:"Platform",v:"iOS Mobile Application"},{l:"Role",v:"Product Designer — End-to-End"},{l:"Year",v:"2024"}].map(m=><div key={m.l}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{m.l}</p><p className="text-sm font-medium">{m.v}</p></div>)}
              </div>
              <div><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">Tools</p><div className="flex flex-wrap gap-2">{["Figma","FigJam","Figma Prototyping"].map(t=><span key={t} className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full">{t}</span>)}</div></div>
            </div>
            <Link href="/design-system" className="group inline-flex items-center gap-4 bg-[#323232] text-white px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-accent-warm)] transition-all w-fit">Next Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2"><ScrollReveal direction="right"><div className="rounded-2xl border border-[var(--color-border)] shadow-lg overflow-hidden"><Image src="/casestudy/images/Dealer/hero.webp" alt="Valley Dealer Suite" width={800} height={500} className="w-full h-auto block" /></div></ScrollReveal></div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <div className="max-w-7xl mx-auto mb-32 px-8 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
        <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">01 / Overview</p></ScrollReveal></div>
        <div className="lg:col-span-5 lg:pr-12">
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-secondary)]">Valley® is the world&apos;s leading irrigation brand. Yet dealer representatives — managing complex order pipelines daily — had no mobile tool to do this simply and efficiently.</p>
            <p className="text-lg leading-relaxed text-[var(--color-text-secondary)] mt-6">The Valley® Dealer Suite is a centralized mobile hub — a single app where dealers can track open orders, receive real-time notifications, access the Valley® app ecosystem, and get clear status updates on every order in their pipeline, all from their phone.</p>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-4 mt-12 lg:mt-0">
          <ScrollReveal delay={200}>
            {[{l:"Platform",v:"iOS Mobile",accent:true},{l:"Notification Streams",v:"3 Categories"},{l:"Onboarding Steps",v:"6-Step Walkthrough"}].map((s,i)=><div key={s.l} className={`border-l-2 pl-6 ${i>0?"mt-8":""}`} style={{borderColor:s.accent?"var(--color-accent-warm)":"var(--color-border)"}}><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-1">{s.l}</p><p className="text-xl font-medium">{s.v}</p></div>)}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function Challenge() {
  const cards = [
    {icon:PackageX,bg:"#FEF3F2",c:"#EB5757",t:"No Order Visibility",d:"Dealers lacked a real-time mobile view of open orders, statuses, and purchase details while in the field."},
    {icon:BellOff,bg:"#FFFBEB",c:"#F2994A",t:"Missed Notifications",d:"Critical order updates, delays, and feature announcements had no dedicated mobile delivery channel."},
    {icon:Puzzle,bg:"#EEF4FF",c:"#005DAA",t:"Fragmented Ecosystem",d:"Valley® has multiple dealer tools with no central launchpad connecting them for quick, unified access."},
  ];
  return (
    <div className="bg-[var(--color-bg-alt)] py-32 mb-32">
      <div className="px-8 md:px-20"><div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">02 / Challenge</p></ScrollReveal></div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-medium tracking-tight mb-8">Dealers had no single source of truth in their pocket.</h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12">Critical updates were missed. Workflows were fragmented. Dealers needed a reliable, mobile-first way to check order statuses, receive alerts on delays, and navigate the Valley® app ecosystem — all in one place.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((c,i)=><ScrollReveal key={c.t} delay={200+i*100}><div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8"><div className="w-10 h-10 flex items-center justify-center mb-5 rounded-lg" style={{background:c.bg}}><c.icon className="w-5 h-5" style={{color:c.c}}/></div><h4 className="font-bold text-sm uppercase tracking-widest mb-3">{c.t}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c.d}</p></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

function Process() {
  const steps = ["Discover","Define","Design","Prototype","Handoff"];
  const descs = ["Research on dealer workflows, pain points, and existing Valley® tools.","Mapped user goals, core flows, and information architecture.","Wireframes → Hi-Fi → Component system, Valley® brand aligned.","Interactive Figma prototypes for stakeholder review and flow validation.","Dev-ready Figma file with annotated specs and design tokens. 100% complete."];
  return (
    <div className="max-w-7xl mx-auto mb-32 px-8 md:px-20">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] mb-4">03 / Process</p>            <h2 className="text-4xl font-light tracking-tight mb-12">Structured, iterative — dealer workflows first.</h2></ScrollReveal>
      <ScrollReveal delay={100}><Image src="/casestudy/images/Dealer/wide.webp" alt="Process Overview" width={1200} height={400} className="w-full rounded-xl border border-[var(--color-border)] mb-12" /></ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border border-[var(--color-border)]">
        {steps.map((s,i)=><ScrollReveal key={s} delay={200+i*80}><div className="p-8 border-r border-[var(--color-border)] last:border-r-0"><span className="text-3xl font-bold text-[var(--color-text-primary)]/5 block mb-4">{String(i+1).padStart(2,"0")}</span><h4 className="font-bold text-sm uppercase tracking-widest mb-3">{s}</h4><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{descs[i]}</p></div></ScrollReveal>)}
      </div>
    </div>
  );
}

function Screens() {
  return (
    <div className="mb-32">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] max-w-7xl mx-auto px-8 md:px-20 mb-8">04 / Screens</p></ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 max-w-7xl mx-auto">
        {["work_screens1","work_screens2","work_screens3","work_screens4"].map((s,i)=><ScrollReveal key={s} delay={i*100}><div className="rounded-xl overflow-hidden border border-[var(--color-border)]"><Image src={`/casestudy/images/Dealer/${s}.webp`} alt={`Screen ${i+1}`} width={300} height={600} className="w-full h-auto block" /></div></ScrollReveal>)}
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="max-w-7xl mx-auto mb-32 px-8 md:px-20">
      <ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)] mb-4">05 / Features</p>          <h2 className="text-4xl font-light tracking-tight mb-12">Every screen built for a dealer in the field.</h2></ScrollReveal>
      <ScrollReveal delay={100}><Image src="/casestudy/images/Dealer/all_work_page.webp" alt="All Screens" width={1200} height={400} className="w-full rounded-xl border border-[var(--color-border)] mb-16" /></ScrollReveal>

      <FeatureBlock num="01" title="Authentication & Onboarding" desc="The entry experience was designed to be fast, trusted, and brand-forward." items={[{accent:true,t:"Splash Screen",d:"Brand-first entry with app version info and a single primary CTA — reducing cognitive load before login."},{t:"Login States",d:"Empty, filled, password-visible, and keyboard-active states — all real-world input scenarios covered."},{t:"Welcome Screen",d:"Post-login landing communicates the three key app capabilities instantly — track, launch, stay informed."}]} insight="The dark navy header with the white Valley® logo was maintained throughout the entire app — not just the splash screen. Dealers always know exactly which platform they're on, which builds trust in an enterprise context where multiple tools co-exist." />

      <FeatureBlock num="02" title="Order Management" desc="The heart of the app. Dealers need to know — at a glance — what orders are open, delayed, unconfirmed, and where each shipment is going." items={[{accent:true,t:"Order List with Status Badges",d:"Card rows with order number (Valley® blue CTA), date, status badge, PO number, and total. Tap through to full detail."},{t:"Filters & Sorting",d:"Filter by status, sort by date — quickly narrowing to orders that need attention."},{t:"Delay Alert State",d:"A dedicated warning state for delayed orders with a clear, empathetic message — reducing anxiety through transparency."},{t:"6-Step Onboarding Walkthrough",d:"Tooltip-driven tour covering every key feature — reducing support burden and making dealers self-sufficient on day one."}]} uxInsight="The 'Last Checked' timestamp on the orders dashboard was a deliberate trust signal. Dealers in the field need to know if what they're seeing is current. Showing the exact last-refreshed time — prominently — eliminated uncertainty and reduced unnecessary re-logins." />

      <FeatureBlock num="03" title="Notification System & Launchpad" desc="Notifications split into three color-coded categories — preventing order alerts from getting buried under promotional content." items={[]} last />
    </div>
  );
}

function FeatureBlock({num,title,desc,items,insight,uxInsight,last}:{num:string;title:string;desc:string;items:{accent?:boolean;t:string;d:string}[],insight?:string;uxInsight?:string;last?:boolean}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-start ${last?"":"mb-24"}`}>
      <div className="lg:col-span-1"><ScrollReveal><span className="text-[10px] uppercase tracking-widest text-[var(--color-accent-warm)]">{num}</span></ScrollReveal></div>
      <div className="lg:col-span-5 lg:pr-16">
        <ScrollReveal delay={100}>
          <h4 className="text-2xl font-medium tracking-tight mb-6">{title}</h4>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">{desc}</p>
          {items.length>0 && <div className="space-y-6">
            {items.map((it,i)=><div key={i} className="flex gap-4"><div className="w-1 flex-shrink-0 mt-1 rounded" style={{background:it.accent?"var(--color-accent-warm)":"var(--color-border)",height:40}}/><div><p className="font-bold text-sm text-[var(--color-text-primary)] mb-1">{it.t}</p><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{it.d}</p></div></div>)}
          </div>}
          {num==="03" && <div className="space-y-3 mt-8">
            {[{c:"#EB5757",t:"Order Status",s:"Delays, confirmations, and shipment alerts"},{c:"#F2C94C",t:"New Features",s:"App updates and capability announcements"},{c:"#005DAA",t:"Valley Bulletins",s:"Pricing updates, product news, dealer comms"}].map(n=><div key={n.t} className="flex items-center gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] px-5 py-3.5"><div className="w-3 h-3 rounded-full flex-shrink-0" style={{background:n.c}}/><div><span className="text-sm font-bold text-[var(--color-text-primary)]">{n.t}</span><span className="text-xs text-[var(--color-text-muted)] ml-2">{n.s}</span></div></div>)}
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pt-2">The <strong className="text-[var(--color-text-primary)]">Valley® App Launchpad</strong> within the suite serves as a single entry point to the entire Valley® digital ecosystem — reducing app-switching friction and keeping dealers in flow.</p>
          </div>}
        </ScrollReveal>
      </div>
      <div className="lg:col-span-6 mt-8 lg:mt-0">
        {insight && <ScrollReveal delay={200}><div className="bg-[#003D72]/5 border border-[#003D72]/10 p-6 rounded"><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-4">Design Decision</p><p className="text-sm italic text-[var(--color-text-secondary)]">{insight}</p></div></ScrollReveal>}
        {uxInsight && <ScrollReveal delay={200}><div className="bg-[var(--color-bg-alt)] border border-[var(--color-border)] p-6 rounded"><p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-4">UX Insight</p><p className="text-sm italic text-[var(--color-text-secondary)] mb-4">{uxInsight}</p><div className="bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-2.5 rounded w-fit flex items-center gap-3"><Clock className="w-4 h-4 text-[var(--color-text-muted)]"/><span className="text-xs text-[var(--color-text-muted)]">Last checked: Today, 9:41 AM</span></div></div></ScrollReveal>}
        {num==="03" && <ScrollReveal delay={200}><div className="grid grid-cols-2 gap-4">
          {[{icon:Edit3,t:"Edit Mode",d:"Select all, mark read/unread, bulk delete. Full inbox control."},{icon:Loader2,t:"Loading State",d:"Branded animation prevents jarring empty-state flash."},{icon:Trash2,t:"Delete Animation",d:"Trash icon animates, then a 'Done!' confirmation — no silent deletion."},{icon:Inbox,t:"Empty State",d:'"Watch this space!" — reassures users the feature is active, not broken.'}].map((x,i)=><div key={i} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-5"><x.icon className="w-5 h-5 text-[var(--color-text-muted)] mb-3"/><p className="text-sm font-bold text-[var(--color-text-primary)] mb-1">{x.t}</p><p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{x.d}</p></div>)}
        </div></ScrollReveal>}
      </div>
    </div>
  );
}

function Outcome() {
  return (
    <div className="max-w-7xl mx-auto mb-32 px-8 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
        <div className="lg:col-span-3"><ScrollReveal><p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-text-muted)]">06 / Outcome</p></ScrollReveal></div>
        <div className="lg:col-span-9">
          <ScrollReveal delay={100}>
            <blockquote className="text-3xl lg:text-4xl font-light leading-tight italic text-[var(--color-text-primary)] mb-16 relative">
              <span className="absolute -top-10 -left-6 text-6xl text-[var(--color-accent-warm)]/10">&ldquo;</span>
              Enterprise tools deserve the same UX craft as consumer apps. Every second of confusion costs real trust — and real revenue.
            </blockquote>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[var(--color-border)] mb-16">
              {[{n:"1",l:"Unified Hub"},{n:"3",l:"Notif. Streams"},{n:"6",l:"Onboarding Steps"},{n:"100%",l:"Dev-Ready"}].map(s=><div key={s.l} className="p-6 text-center border-r border-[var(--color-border)] last:border-r-0"><p className="text-3xl font-bold text-[var(--color-accent-warm)] mb-1">{s.n}</p><p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-bold">{s.l}</p></div>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {[{t:"Unified Pipeline",d:"One app replaced multiple fragmented touchpoints — dealers manage their entire order pipeline from a single screen, without switching tools."},{t:"Zero Missed Alerts",d:"Three color-coded notification streams ensure order delays, feature updates, and bulletins each reach dealers through the right priority channel."},{t:"Self-Service Day One",d:"A 6-step tooltip walkthrough eliminated the need for training sessions — dealers become independent users on first launch."},{t:"Functional Empathy",d:"Loading states, delete confirmations, and empty states weren't decorative — they were deliberate trust signals that make the app feel considered and reliable."}].map((x,i)=><ScrollReveal key={i} delay={200+i*100}><div><p className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-accent-warm)] mb-4">{x.t}</p><p className="text-[var(--color-text-secondary)] leading-relaxed">{x.d}</p></div></ScrollReveal>)}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function NextProject() {
  return (
    <section className="bg-[var(--color-accent)] py-32 px-8 md:px-20">
      <Link href="/design-system" className="max-w-7xl mx-auto block group">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold mb-6">Next Project</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[var(--color-bg)] tracking-tighter mb-10 group-hover:text-[var(--color-accent-warm)] transition-colors">Valley Design System</h2>
          <div className="w-16 h-16 rounded-full border border-[var(--color-bg)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent-warm)] group-hover:border-[var(--color-accent-warm)] transition-all"><ArrowRight className="w-6 h-6 text-[var(--color-bg)]" /></div>
        </ScrollReveal>
      </Link>
    </section>
  );
}
