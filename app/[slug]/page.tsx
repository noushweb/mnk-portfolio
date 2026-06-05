import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  getCaseStudy,
  getAllSlugs,
  getCaseStudyMetadata,
} from "@/lib/case-studies";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getCaseStudyMetadata(slug);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <main className="flex-1 pt-32 pb-24">
      <div className="px-8 md:px-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold">
            <Link
              href="/work"
              className="hover:text-[var(--color-text-primary)] transition-colors"
            >
              Work
            </Link>
            <span className="text-xs">›</span>
            <span className="text-[var(--color-text-primary)]">{cs.title.replace(" — Case Study", "")}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <ScrollReveal>
                <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-bold uppercase tracking-wider rounded-full w-fit mb-6">
                  {cs.hero.tag}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-8">
                  {cs.hero.headline}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-2 gap-y-6">
                    <MetaItem label="Client" value={cs.hero.meta.client} />
                    <MetaItem label="Platform" value={cs.hero.meta.platform} />
                    <MetaItem label="Role" value={cs.hero.meta.role} />
                    <MetaItem label="Duration" value={cs.hero.meta.duration} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-2">
                      Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cs.hero.meta.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[11px] font-medium rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              {cs.hero.nextProjectSlug && (
                <Link
                  href={`/${cs.hero.nextProjectSlug}`}
                  className="group inline-flex items-center gap-4 bg-[#323232] text-white px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[var(--color-accent-warm)] transition-all w-fit"
                >
                  Next Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              {cs.hero.image && (
                <ScrollReveal direction="right">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={cs.hero.image}
                      alt={cs.hero.headline}
                      width={1200}
                      height={750}
                      className="w-full h-auto block"
                    />
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Overview */}
      <OverviewSection cs={cs} />

      {/* Process */}
      <ProcessSection cs={cs} />

      {/* Problem (optional) */}
      {cs.problem && <ProblemSection cs={cs} />}

      {/* Screens Gallery (optional) */}
      {cs.screens && <ScreensSection cs={cs} />}

      {/* Applications */}
      <ApplicationsSection cs={cs} />

      {/* Design Decisions (optional) */}
      {cs.designDecisions && <DesignDecisionsSection cs={cs} />}

      {/* Components (optional) */}
      {cs.components && <ComponentsSection cs={cs} />}

      {/* Outcome */}
      {cs.outcome && <OutcomeSection cs={cs} />}

      {/* Next Project */}
      {cs.nextProject && <NextProjectSection cs={cs} />}
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

function SectionHeader({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
      {number} / {label}
    </p>
  );
}

function OverviewSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs) return null;
  return (
    <div className="px-8 md:px-20 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <SectionHeader
                number={cs.overview.sectionNumber}
                label={cs.overview.sectionLabel}
              />
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              {cs.overview.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] mb-4 max-w-3xl"
                >
                  {p}
                </p>
              ))}
              {cs.overview.image && (
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image src={cs.overview.image} alt="Overview" width={1200} height={675} className="w-full h-auto block" />
                </div>
              )}
              {cs.overview.quote && (
                <blockquote className="pl-6 border-l-4 border-[var(--color-accent-warm)] mb-12">
                  <p className="text-lg italic text-[var(--color-text-secondary)] leading-relaxed">
                    &ldquo;{cs.overview.quote}&rdquo;
                  </p>
                </blockquote>
              )}
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <StatsGrid stats={cs.overview.stats} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsGrid({ stats }: { stats: { number: string; label: string }[] }) {
  return (
    <div className={`grid gap-px bg-[var(--color-border)]`} style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
      {stats.map((s) => (
        <div key={s.label} className="bg-[var(--color-bg)] px-6 py-8">
          <p className="text-5xl font-black tracking-tighter text-[var(--color-text-primary)] mb-2">
            {s.number}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function ProcessSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs) return null;
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <SectionHeader
                  number={cs.process.sectionNumber}
                  label={cs.process.sectionLabel}
                />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight max-w-2xl">
                  {cs.process.heading}
                </h2>
                <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                  {cs.process.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
          {cs.process.image && (
            <ScrollReveal delay={200}>
              <div className="rounded-xl overflow-hidden mb-8">
                <Image src={cs.process.image} alt="Process overview" width={1200} height={500} className="w-full h-auto block" />
              </div>
            </ScrollReveal>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.process.phases.map((phase, i) => (
              <ScrollReveal key={phase.title} delay={i * 80}>
                <div
                  className={`p-6 rounded-xl ${
                    phase.highlighted
                      ? "bg-[var(--color-accent-warm)] text-white"
                      : "bg-[var(--color-surface)]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${
                      phase.highlighted
                        ? "text-white/60"
                        : "text-[var(--color-accent-warm)]"
                    }`}
                  >
                    {phase.number}
                  </span>
                  <h3 className="font-bold text-base mt-2 mb-2">
                    {phase.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      phase.highlighted
                        ? "text-white/70"
                        : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {phase.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationsSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs) return null;
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-20">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <SectionHeader
                number={cs.applications.sectionNumber}
                label={cs.applications.sectionLabel}
              />
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight">
                {cs.applications.heading}
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                {cs.applications.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {cs.applications.apps.map((app, idx) => (
          <ScrollReveal key={app.name} delay={idx * 100}>
            <div
              className={`mb-24 ${
                idx < cs.applications.apps.length - 1
                  ? "pb-24 border-b border-[var(--color-border)]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 bg-[var(--color-accent-warm)]">
                  {app.number}
                </div>
                <div>
                  <h3 className="font-bold text-2xl">{app.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {app.subtitle}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {app.beforeImage && (
                  <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                    <Image
                      src={app.beforeImage}
                      alt={`${app.name} — Before`}
                      width={600}
                      height={400}
                      className="w-full h-auto block"
                    />
                  </div>
                )}
                {app.afterImage && (
                  <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                    <Image
                      src={app.afterImage}
                      alt={`${app.name} — After`}
                      width={600}
                      height={400}
                      className="w-full h-auto block"
                    />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="grid gap-3"
                  style={{
                    gridTemplateColumns: `repeat(2, 1fr)`,
                  }}
                >
                  {app.keyChanges.map((kc, i) => (
                    <div key={i} className="flex items-center gap-2 col-span-1">
                      <X className="w-3 h-3 text-[#EB5757] flex-shrink-0" />
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {kc.before}
                      </p>
                      {i + 1 < app.keyChanges.length && (
                        <div key={`after-${i}`} className="flex items-center gap-2 col-span-1 hidden">
                          {/* placeholder for grid alignment */}
                        </div>
                      )}
                    </div>
                  ))}
                  {app.keyChanges.map((kc, i) => (
                    <div key={`check-${i}`} className="flex items-center gap-2 col-span-1">
                      <Check className="w-3 h-3 text-[var(--color-accent-warm)] flex-shrink-0" />
                      <p className="text-xs text-[var(--color-text-primary)]">
                        {kc.after}
                      </p>
                    </div>
                  ))}
                </div>
                {app.insight && (
                  <div className="bg-[var(--color-bg-alt)] rounded-xl p-4 flex items-start gap-3 border border-[var(--color-border)]">
                    <Lightbulb className="w-4 h-4 text-[var(--color-accent-warm)] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {app.insight}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function OutcomeSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs || !cs.outcome) return null;
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <SectionHeader
                  number={cs.outcome.sectionNumber}
                  label={cs.outcome.sectionLabel}
                />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <blockquote className="mb-12">
                  <p className="text-2xl font-light leading-relaxed text-[var(--color-text-secondary)] italic">
                    &ldquo;{cs.outcome.quote}&rdquo;
                  </p>
                </blockquote>
                <StatsGrid stats={cs.outcome.metrics} />
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {cs.outcome.deliverables.map((d) => (
                <div
                  key={d.title}
                  className="bg-[var(--color-surface)] p-8 rounded-xl border border-[var(--color-border)]"
                >
                  <h4 className="font-bold text-lg mb-3">{d.title}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function NextProjectSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs || !cs.nextProject) return null;
  return (
    <div className="bg-[var(--color-accent)] py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[var(--color-bg)]/50 uppercase tracking-widest text-xs font-bold">
            {cs.nextProject.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4 mb-6 text-[var(--color-bg)]">
            {cs.nextProject.title}
          </h2>
          <p className="text-[var(--color-bg)]/60 max-w-xl mx-auto mb-10">
            {cs.nextProject.description}
          </p>
          <Link
            href={`/${cs.nextProject.slug}`}
            className="btn-primary"
          >
            View Case Study <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}

function ProblemSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs || !cs.problem) return null;
  return (
    <div className="py-24 bg-[var(--color-bg-alt)]">
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <SectionHeader number={cs.problem.sectionNumber} label={cs.problem.sectionLabel} />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-9">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight max-w-2xl">
                  {cs.problem.heading}
                </h2>
                <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                  {cs.problem.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${Math.min(cs.problem.cards.length, 3)}, 1fr)` }}>
            {cs.problem.cards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-border)]">
                  <h3 className="font-bold text-lg mb-2 text-[var(--color-accent-warm)]">{card.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{card.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreensSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs || !cs.screens) return null;
  const count = cs.screens.images.length;
  const cols = count <= 2 ? 2 : count <= 4 ? 2 : 3;
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
              {cs.screens.sectionNumber} / {cs.screens.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mt-2">
              {cs.screens.heading}
            </h2>
            {cs.screens.description && (
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">{cs.screens.description}</p>
            )}
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cs.screens.images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <Image src={img.src} alt={img.alt} width={600} height={450} className="w-full h-auto block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
        {cs.screens.wideImage && (
          <ScrollReveal delay={200}>
            <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
              <Image src={cs.screens.wideImage} alt="Wide screenshot" width={1200} height={600} className="w-full h-auto block" />
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}

function DesignDecisionsSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs || !cs.designDecisions) return null;
  const items = cs.designDecisions.items;
  return (
    <div className={`py-24 ${cs.screens ? "" : "bg-[var(--color-bg-alt)]"}`}>
      <div className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
                {cs.designDecisions.sectionNumber} / {cs.designDecisions.sectionLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mt-2">
                {cs.designDecisions.heading}
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">{cs.designDecisions.description}</p>
            </div>
          </ScrollReveal>
          {cs.designDecisions.image && (
            <ScrollReveal delay={100}>
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-12">
                <Image src={cs.designDecisions.image} alt="Design overview" width={1200} height={600} className="w-full h-auto block" />
              </div>
            </ScrollReveal>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-border)]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent-warm)]">{item.number}</span>
                  <h3 className="font-bold text-lg mt-2 mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-3">{item.subtitle}</p>
                  {item.image && (
                    <div className="rounded-lg overflow-hidden mb-3">
                      <Image src={item.image} alt={item.title} width={400} height={300} className="w-full h-auto block" />
                    </div>
                  )}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentsSection({ cs }: { cs: ReturnType<typeof getCaseStudy> }) {
  if (!cs || !cs.components) return null;
  return (
    <div className="px-8 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
              {cs.components.sectionNumber} / {cs.components.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mt-2">
              {cs.components.heading}
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">{cs.components.description}</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cs.components.items.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 60}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden">
                <div className="h-[260px] bg-[var(--color-bg-alt)] overflow-hidden relative">
                  <Image src={item.image} alt={item.name} width={400} height={260} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-3">{item.subtitle}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="px-2 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] font-medium rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
