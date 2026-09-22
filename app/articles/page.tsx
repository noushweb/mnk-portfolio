import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Archive, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { articles, toISODate } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Articles | Mohammed Noushad — Product Designer",
  description:
    "Latest notes and deep dives on product design, design systems, AI-assisted development, SaaS UX, and building better digital experiences.",
  alternates: {
    canonical: "https://enkay.dev/articles",
  },
  openGraph: {
    title: "Articles",
    description:
      "Latest notes and deep dives on product design, design systems, AI-assisted development, SaaS UX, and building better digital experiences.",
    url: "https://enkay.dev/articles",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Articles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles",
    description:
      "Latest notes and deep dives on product design, design systems, AI-assisted development, SaaS UX, and building better digital experiences.",
    site: "@noushad_design",
    creator: "@noushad_design",
    images: ["/og-image.jpg"],
  },
};

const LATEST_COUNT = 12;

const sortedArticles = [...articles].sort(
  (a, b) =>
    new Date(toISODate(b.date)).getTime() - new Date(toISODate(a.date)).getTime()
);

export default function ArticlesPage() {
  const latestArticles = sortedArticles.slice(0, LATEST_COUNT);
  const archivedCount = Math.max(sortedArticles.length - LATEST_COUNT, 0);

  return (
    <main className="flex-1 pt-32 pb-20 px-8 md:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <header className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
              Articles
            </span>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                  Thoughts on<br />design &amp; product.
                </h1>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl">
                  The newest essays stay here. Older posts move into a clean archive so the page stays readable as the library grows.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/articles/archive"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-colors group"
                >
                  <Archive className="w-4 h-4" />
                  View Archive
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                {archivedCount > 0 && (
                  <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                    {archivedCount} older articles grouped by year and category
                  </p>
                )}
              </div>
            </div>
          </header>
        </ScrollReveal>

        <section className="mt-20">
          <div>
            {latestArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 60}>
                <Link
                  href={`/articles/${article.slug}`}
                  className={`group block py-14 md:py-16 ${i === 0 ? "" : "border-t border-[var(--color-border)]"}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div className="md:col-span-2">
                      <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-text-muted)]">
                        {article.date}
                      </span>
                      <span className="block mt-2 px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest rounded-full w-fit">
                        {article.category}
                      </span>
                    </div>
                    {article.image && (
                      <div className="md:col-span-3 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                        <Image
                          src={article.image.src}
                          alt={article.image.alt}
                          width={420}
                          height={260}
                          className="h-48 md:h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 280px"
                        />
                      </div>
                    )}
                    <div className={article.image ? "md:col-span-7" : "md:col-span-10"}>
                      <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-[var(--color-accent-warm)] transition-colors duration-300">
                        {article.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] uppercase tracking-wider whitespace-nowrap">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-warm)] whitespace-nowrap">
                          Read Article
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {archivedCount > 0 && (
            <ScrollReveal>
              <div className="mt-20 p-8 md:p-10 border border-[var(--color-border)] bg-[var(--color-surface)]/30 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
                    Archive
                  </span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
                    Browse older essays without paging through everything.
                  </h2>
                  <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl">
                    The archive keeps every article live for SEO and AI crawlers, but groups older posts by year, month, and category for easier scanning.
                  </p>
                </div>
                <Link
                  href="/articles/archive"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)] hover:text-[var(--color-accent-warm)] transition-colors group whitespace-nowrap"
                >
                  Open Archive
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          )}
        </section>
      </div>
    </main>
  );
}
