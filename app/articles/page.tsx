import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { articles } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Articles | Mohammed Noushad — Product Designer",
  description:
    "Notes, reflections, and deep dives on product design, design systems, AI-assisted development, and building better digital experiences.",
};

const PER_PAGE = 4;

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1") || 1);
  const totalPages = Math.ceil(articles.length / PER_PAGE);
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pagedArticles = articles.slice(start, start + PER_PAGE);

  return (
    <main className="flex-1 pt-32 pb-20 px-8 md:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <header className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
              Articles
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mt-4 mb-6">
              Thoughts on<br />design &amp; product.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl">
              Notes, reflections, and deep dives on product design, design
              systems, and building better digital experiences.
            </p>
          </header>
        </ScrollReveal>

        <section className="mt-20">
          <div>
            {pagedArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 80}>
                <Link
                  href={`/articles/${article.slug}`}
                  className={`group block py-16 md:py-20 ${i === 0 && safePage === 1 ? "" : "border-t border-[var(--color-border)]"}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div className="md:col-span-3">
                      <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-text-muted)]">
                        {article.date}
                      </span>
                      <span className="block mt-2 px-3 py-1 bg-[var(--color-tag-bg)] text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest rounded-full w-fit">
                        {article.category}
                      </span>
                    </div>
                    <div className="md:col-span-6">
                      <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-[var(--color-accent-warm)] transition-colors duration-300">
                        {article.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-warm)]">
                        Read Article{" "}
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                    <div className="md:col-span-3 text-left md:text-right">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              className="mt-20 pt-10 border-t border-[var(--color-border)] flex items-center justify-between"
              aria-label="Articles navigation"
            >
              {safePage > 1 ? (
                <Link
                  href={`/articles?page=${safePage - 1}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-colors group"
                >
                  <ChevronLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                  Newer
                </Link>
              ) : (
                <span />
              )}

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Link
                      key={page}
                      href={`/articles?page=${page}`}
                      className={`w-9 h-9 flex items-center justify-center text-sm font-medium transition-colors ${
                        page === safePage
                          ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-alt)]"
                      }`}
                    >
                      {page}
                    </Link>
                  )
                )}
              </div>

              {safePage < totalPages ? (
                <Link
                  href={`/articles?page=${safePage + 1}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-accent-warm)] transition-colors group"
                >
                  Older
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </section>
      </div>
    </main>
  );
}
