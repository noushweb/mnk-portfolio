import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enkay.dev";

  const staticRoutes = [
    { path: "", priority: 1.0, lastmod: "2026-06-01", freq: "monthly" as const },
    { path: "/work", priority: 0.8, lastmod: "2026-06-01", freq: "monthly" as const },
    { path: "/articles", priority: 0.7, lastmod: "2026-06-08", freq: "weekly" as const },
    { path: "/valmont-legacy-redesign", priority: 0.6, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/voyacher", priority: 0.6, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/finflow", priority: 0.6, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/roadshow", priority: 0.6, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/valley-dealer-suite", priority: 0.5, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/field-layout-tool", priority: 0.5, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/design-tool-calculator", priority: 0.5, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/design-system", priority: 0.5, lastmod: "2026-05-15", freq: "yearly" as const },
    { path: "/dubai", priority: 0.7, lastmod: "2026-07-05", freq: "monthly" as const },
    { path: "/india", priority: 0.6, lastmod: "2026-07-05", freq: "monthly" as const },
    { path: "/riyadh", priority: 0.7, lastmod: "2026-07-05", freq: "monthly" as const },
    { path: "/uae", priority: 0.7, lastmod: "2026-07-06", freq: "monthly" as const },
    { path: "/kerala", priority: 0.6, lastmod: "2026-07-06", freq: "monthly" as const },
    { path: "/kochi", priority: 0.6, lastmod: "2026-07-06", freq: "monthly" as const },
    { path: "/bangalore", priority: 0.6, lastmod: "2026-07-06", freq: "monthly" as const },
    { path: "/abu-dhabi", priority: 0.6, lastmod: "2026-07-06", freq: "monthly" as const },
    { path: "/sharjah", priority: 0.6, lastmod: "2026-07-06", freq: "monthly" as const },
    { path: "/umm-al-quwain", priority: 0.6, lastmod: "2026-07-06", freq: "monthly" as const },
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastmod),
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  // Add individual article pages
  for (const article of articles) {
    routes.push({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    });
  }

  return routes;
}
