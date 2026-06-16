export default function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mohammed Noushad",
    "url": "https://enkay.dev",
    "description": "Senior Product Designer — UX/UI, design systems & AI-powered development. Portfolio and case studies.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://enkay.dev/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammed Noushad",
    "jobTitle": "Senior Product Designer",
    "url": "https://enkay.dev",
    "email": "hello@enkay.dev",
    "description":
      "Senior Product Designer based in Dubai with 11+ years in UX/UI, design systems, and AI-powered development.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE",
    },
    "knowsAbout": [
      "UX/UI Design",
      "Product Design",
      "Design Systems",
      "AI-Powered Development",
      "Next.js",
      "TypeScript",
      "React",
    ],
    "sameAs": [
      "https://github.com/noushweb",
      "https://linkedin.com/in/m-noushad",
      "https://behance.net/mohammednoushad",
    ],
  };

  const schema = [websiteSchema, personSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
