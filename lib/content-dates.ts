import { toISODate, type Article } from "@/lib/articles-data";

// Dates represent actual editorial changes, not the time of a sitemap request.
export const ARTICLE_UPDATED_AT: Record<string, string> = {
  "auto-design-to-code-20260921": "2026-10-15",
  "auto-enterprise-ux-services-20260831": "2026-10-15",
  "auto-fintech-case-study-20260928": "2026-10-15",
  "auto-fintech-design-system-20260824": "2026-10-15",
  "auto-freelance-product-designer-rate-20261005": "2026-10-15",
  "auto-india-20260713": "2026-10-15",
  "auto-mvp-design-development-20260907": "2026-10-15",
  "auto-saas-dashboard-design-20260914": "2026-10-15",
  "auto-saas-ux-services-20260817": "2026-10-15",
  "product-designer-india": "2026-10-15",
  "product-designer-kerala": "2026-10-15",
  "product-designer-kochi": "2026-10-15",
  "product-designer-sharjah": "2026-10-15",
  "product-designer-umm-al-quwain": "2026-10-15",
  "senior-product-designer-dubai": "2026-10-15",
  "senior-product-designer-riyadh": "2026-10-15"
};

export function articleModifiedDate(article: Pick<Article, "slug" | "date">): string {
  return ARTICLE_UPDATED_AT[article.slug] ?? toISODate(article.date);
}

export function latestArticleModifiedDate(articles: Pick<Article, "slug" | "date">[]): string {
  return articles.reduce(
    (latest, article) => {
      const modified = articleModifiedDate(article);
      return modified > latest ? modified : latest;
    },
    "2026-09-22"
  );
}
