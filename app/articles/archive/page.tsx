import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { articles, toISODate } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Article Archive | Mohammed Noushad",
  description:
    "Archive of product design, UX, design systems, AI-assisted development, SaaS UX, and founder-facing design articles by Mohammed Noushad.",
  alternates: {
    canonical: "https://enkay.dev/articles/archive",
  },
  openGraph: {
    title: "Article Archive",
    description:
      "Archive of product design, UX, design systems, AI-assisted development, SaaS UX, and founder-facing design articles by Mohammed Noushad.",
    url: "https://enkay.dev/articles/archive",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Article Archive" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Article Archive",
    description:
      "Archive of product design, UX, design systems, AI-assisted development, SaaS UX, and founder-facing design articles by Mohammed Noushad.",
    site: "@noushad_design",
    creator: "@noushad_design",
    images: ["/og-image.jpg"],
  },
};

const sortedArticles = [...articles].sort(
  (a, b) =>
    new Date(toISODate(b.date)).getTime() - new Date(toISODate(a.date)).getTime()
);

const groupedArticles = sortedArticles.reduce<Record<string, typeof articles>>((acc, article) => {
  const iso = toISODate(article.date);
  const date = new Date(`${iso}T00:00:00Z`);
  const label = Number.isNaN(date.getTime())
    ? article.date
    : date.toLocaleDateString("en", { month: "long", year: "numeric", timeZone: "UTC" });
  acc[label] = acc[label] ?? [];
  acc[label].push(article);
  return acc;
}, {});

const categories = Array.from(new Set(sortedArticles.map((article) => article.category))).sort();

export default function ArticleArchivePage() {
  return (
    <main className="flex-1 pt-32 pb-20 px-8 md:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] hover:text-[var(--color-accent-warm)] transition-colors group mb-12"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Latest Articles
          </Link>
          <header className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
                Archive
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mt-4 mb-6">
                Every article,<br />without the clutter.
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl">
                Older essays stay indexable and easy to find, grouped by publishing month with category labels for quick scanning.
              </p>
            </div>
            <aside className="lg:col-span-4 lg:text-right">
              <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                {sortedArticles.length} articles · {categories.length} categories
              </p>
              <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </aside>
          </header>
        </ScrollReveal>

        <section className="space-y-16">
          {Object.entries(groupedArticles).map(([month, items], groupIndex) => (
            <ScrollReveal key={month} delay={groupIndex * 60}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[var(--color-border)] pt-10">
                <div className="lg:col-span-3">
                  <h2 className="text-xl md:text-2xl font-medium tracking-tight sticky top-28">
                    {month}
                  </h2>
                </div>
                <div className="lg:col-span-9 divide-y divide-[var(--color-border)]">
                  {items.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-7 first:pt-0"
                    >
                      <div className="md:col-span-12">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className="px-2.5 py-0.5 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-text-muted)]">
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-[var(--color-accent-warm)] transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] uppercase tracking-wider whitespace-nowrap">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readTime}
                          </span>
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-warm)] transition-colors whitespace-nowrap">
                            Read
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>
      </div>
    </main>
  );
}
