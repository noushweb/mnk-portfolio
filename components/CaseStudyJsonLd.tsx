interface CaseStudyJsonLdProps {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

export default function CaseStudyJsonLd({ title, description, slug, imageUrl }: CaseStudyJsonLdProps) {
  const baseUrl = "https://enkay.dev";
  const url = `${baseUrl}/${slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": title,
      "description": description,
      "url": url,
      "author": {
        "@type": "Person",
        "name": "Mohammed Noushad",
        "url": baseUrl,
      },
      "about": title,
      "inLanguage": "en",
      ...(imageUrl ? { image: `${baseUrl}${imageUrl}` } : {}),
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
          "name": "Work",
          "item": `${baseUrl}/work`,
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
