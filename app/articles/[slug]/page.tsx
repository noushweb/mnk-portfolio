import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import ArticleTOC from "@/components/ArticleTOC";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import LeadForm from "@/components/LeadForm";
import { getArticle, getAllSlugs, articles, toISODate } from "@/lib/articles-data";

// Maps geo/career articles to their location landing pages for internal-link equity
const LOCATION_LINKS: Record<
  string,
  { href: string; city: string; title: string; desc: string }
> = {
  "senior-product-designer-dubai": {
    href: "/dubai",
    city: "Dubai",
    title: "Product Designer Dubai",
    desc: "Senior product design in Dubai — enterprise UX, design systems, and bilingual interfaces for the Middle East.",
  },
  "senior-product-designer-riyadh": {
    href: "/riyadh",
    city: "Riyadh",
    title: "Senior UI Designer Riyadh",
    desc: "Product & UI design for Riyadh — enterprise design systems, fintech, and banking UX.",
  },
  "product-designer-kerala": {
    href: "/kerala",
    city: "Kerala",
    title: "Product Designer Kerala",
    desc: "Remote-first product design from Kerala — enterprise UX/UI, design systems, and fintech for global teams.",
  },
  "product-designer-kochi": {
    href: "/kochi",
    city: "Kochi",
    title: "Product Designer Kochi",
    desc: "Product design from Kochi — startups, enterprises, and global markets, shipped remote-first.",
  },
  "product-designer-india": {
    href: "/india",
    city: "India",
    title: "Product Designer India",
    desc: "Remote-ready product design from India — enterprise UX/UI, fintech, and design systems for global teams.",
  },
  "product-designer-bangalore": {
    href: "/bangalore",
    city: "Bangalore",
    title: "Product Designer Bangalore",
    desc: "Product design for Bangalore companies — fintech UX, design systems, and enterprise software.",
  },
  "product-designer-abu-dhabi": {
    href: "/abu-dhabi",
    city: "Abu Dhabi",
    title: "Product Designer Abu Dhabi",
    desc: "Product design for Abu Dhabi — government-grade enterprise UX, fintech, and compliance-aware design.",
  },
  "product-designer-sharjah": {
    href: "/sharjah",
    city: "Sharjah",
    title: "Product Designer Sharjah",
    desc: "Product design for Sharjah — education, culture, and enterprise, with clarity-first UX.",
  },
  "product-designer-umm-al-quwain": {
    href: "/umm-al-quwain",
    city: "Umm Al Quwain",
    title: "Product Designer Umm Al Quwain",
    desc: "World-class product design from Umm Al Quwain — tourism, logistics, and local services.",
  },
  "auto-uae-20260720": {
    href: "/uae",
    city: "UAE",
    title: "Freelance Product Designer UAE",
    desc: "Freelance product design across the UAE — 0→1 product design, design systems, and UX audits.",
  },
  "auto-india-20260713": {
    href: "/india",
    city: "India",
    title: "Product Designer India",
    desc: "Remote-ready product design from India — enterprise UX/UI, fintech, and design systems for global teams.",
  },
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found" };

  return {
    title: `${article.title} | Mohammed Noushad`,
    description: article.excerpt,
    alternates: {
      canonical: `https://enkay.dev/articles/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://enkay.dev/articles/${slug}`,
      type: "article",
      publishedTime: toISODate(article.date),
      images: [
        { url: "/og-image.jpg", width: 1200, height: 630, alt: article.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      site: "@noushad_design",
      creator: "@noushad_design",
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const nextArticles = [
    articles[(currentIndex + 1) % articles.length],
    articles[(currentIndex + 2) % articles.length],
  ];

  const locationLink = LOCATION_LINKS[slug];

  const headingIds = article.content.map((s) => ({
    id: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    text: s.heading,
  }));

  return (
    <main className="flex-1 pt-32 pb-20 px-8 md:px-20 w-full">
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        date={article.date}
        slug={article.slug}
        category={article.category}
      />
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <Link
            href="/articles"
            className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] hover:text-[var(--color-accent-warm)] transition-colors"
          >
            Articles
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] mx-2">
            /
          </span>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-text-secondary)]">
            {article.category}
          </span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <span className="inline-block px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest rounded-full mb-6">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] flex-wrap">
            <span className="font-medium text-[var(--color-text-primary)]">
              By Mohammed Noushad
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
            <span className="uppercase tracking-[0.15em] font-semibold">
              {article.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
            <span className="inline-flex items-center gap-1.5 uppercase tracking-wider font-semibold text-xs">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </header>

        {/* Divider */}
        <div className="border-t border-[var(--color-border)] mb-16" />

        {/* Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Article body */}
          <article className="flex-1 min-w-0 space-y-14">
            {article.content.map((section, i) => (
              <section key={i} id={headingIds[i].id}>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium tracking-tight mb-6">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-lg leading-relaxed text-[var(--color-text-secondary)] mb-5 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>

          {/* TOC sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <ArticleTOC headings={headingIds} />
          </aside>
        </div>

        {/* Related location landing page — internal link equity for money pages */}
        {locationLink && (
          <section className="mt-16">
            <Link
              href={locationLink.href}
              className="group block p-8 border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 hover:shadow-lg hover:shadow-[var(--color-accent-warm)]/5 transition-all duration-300 bg-[var(--color-surface)]/30"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
                Hiring in {locationLink.city}?
              </span>
              <h2 className="text-xl md:text-2xl font-medium tracking-tight mt-2 mb-2 group-hover:text-[var(--color-accent-warm)] transition-colors duration-300">
                {locationLink.title} →
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {locationLink.desc}
              </p>
            </Link>
          </section>
        )}

        {/* Divider */}
        <div className="border-t border-[var(--color-border)] mt-24 mb-16" />

        {/* Lead CTA */}
        <section className="mb-24">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Need a product designer?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Based in Dubai, available remotely. Enterprise UX, design systems, AI-powered development.
            </p>
          </div>
          <div className="mt-8">
            <LeadForm source={`article-${article.slug}`} />
          </div>
        </section>

        {/* Continue Reading */}
        <section>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
            Continue Reading
          </span>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextArticles.map((next) => (
              <Link
                key={next.slug}
                href={`/articles/${next.slug}`}
                className="group block p-6 border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50 hover:shadow-lg hover:shadow-[var(--color-accent-warm)]/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest rounded-full">
                    {next.category}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {next.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-1.5 group-hover:text-[var(--color-accent-warm)] transition-colors duration-300 line-clamp-2">
                  {next.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                  {next.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-[var(--color-border)] mt-16 mb-10" />

        {/* Bottom nav */}
        <div className="flex items-center justify-between">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            All Articles
          </Link>
          <a
            href="mailto:hello@enkay.dev"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent-warm)] transition-colors"
          >
            Let&apos;s discuss
          </a>
        </div>
      </div>
    </main>
  );
}
