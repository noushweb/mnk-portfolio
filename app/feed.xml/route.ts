import { articles, toISODate } from "@/lib/articles-data";
import { latestArticleModifiedDate } from "@/lib/content-dates";

export const dynamic = "force-static";

function xml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character]!);
}

export function GET() {
  const baseUrl = "https://enkay.dev";
  const sortedArticles = [...articles].sort((a, b) =>
    toISODate(b.date).localeCompare(toISODate(a.date))
  );
  const items = sortedArticles.map((article) => {
    const url = `${baseUrl}/articles/${article.slug}`;
    return `<item><title>${xml(article.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${xml(article.excerpt)}</description><pubDate>${new Date(toISODate(article.date)).toUTCString()}</pubDate><category>${xml(article.category)}</category></item>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>Mohammed Noushad — Product Design Articles</title>
<link>${baseUrl}/articles</link>
<description>Product design, enterprise UX, design systems and building better digital products.</description>
<language>en</language>
<atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
<lastBuildDate>${new Date(latestArticleModifiedDate(articles)).toUTCString()}</lastBuildDate>
${items}
</channel></rss>`;

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
