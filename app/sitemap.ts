import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enkay.dev";

  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/work", priority: 0.8 },
    { path: "/articles", priority: 0.7 },
    { path: "/valmont-legacy-redesign", priority: 0.6 },
    { path: "/voyacher", priority: 0.6 },
    { path: "/finflow", priority: 0.6 },
    { path: "/roadshow", priority: 0.6 },
    { path: "/valley-dealer-suite", priority: 0.5 },
    { path: "/hala-app", priority: 0.5 },
    { path: "/field-layout-tool", priority: 0.5 },
    { path: "/design-tool-calculator", priority: 0.5 },
    { path: "/design-system", priority: 0.5 },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
