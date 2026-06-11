interface ArticleJsonLdProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
}

export default function ArticleJsonLd({ title, description, date, slug, category }: ArticleJsonLdProps) {
  const baseUrl = "https://enkay.dev";
  const url = `${baseUrl}/articles/${slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "datePublished": date,
      "author": {
        "@type": "Person",
        "name": "Mohammed Noushad",
        "url": baseUrl,
      },
      "publisher": {
        "@type": "Person",
        "name": "Mohammed Noushad",
        "url": baseUrl,
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
