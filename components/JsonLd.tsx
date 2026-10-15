export default function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mohammed Noushad",
    "url": "https://enkay.dev",
    "description": "Senior Product Designer — UX/UI, design systems & AI-powered development. Portfolio and case studies.",

  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammed Noushad",
    "jobTitle": "Senior Product Designer",
    "url": "https://enkay.dev",
    "email": "hello@enkay.dev",
    "description":
      "Senior Product Designer based in Dubai for 11 years, serving teams in the UAE, India and beyond through UX/UI, design systems and AI-powered development.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE",
    },
    "areaServed": ["Dubai", "UAE", "India", "Middle East"],
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
