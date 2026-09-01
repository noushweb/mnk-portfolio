import { toISODate } from "@/lib/articles-data";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
}

const AUTHOR_SAME_AS = [
  "https://linkedin.com/in/m-noushad",
  "https://github.com/noushweb",
  "https://behance.net/mohammednoushad",
  "https://x.com/noushad_design",
];

const KNOWS_ABOUT = [
  "Product Design",
  "UX Design",
  "Design Systems",
  "Enterprise Software",
  "Fintech UX",
  "AI-assisted Design",
];

export default function ArticleJsonLd({ title, description, date, slug, category }: ArticleJsonLdProps) {
  const baseUrl = "https://enkay.dev";
  const url = `${baseUrl}/articles/${slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "articleSection": category,
      "datePublished": toISODate(date),
      "author": {
        "@type": "Person",
        "name": "Mohammed Noushad",
        "url": baseUrl,
        "jobTitle": "Senior Product Designer",
        "sameAs": AUTHOR_SAME_AS,
        "knowsAbout": KNOWS_ABOUT,
      },
      "publisher": {
        "@type": "Person",
        "name": "Mohammed Noushad",
        "url": baseUrl,
        "jobTitle": "Senior Product Designer",
        "sameAs": AUTHOR_SAME_AS,
      },
      "url": url,
      "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Articles",
          "item": `${baseUrl}/articles`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": title,
          "item": url,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
