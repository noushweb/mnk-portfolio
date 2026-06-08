export default function JsonLd() {
  const schema = {
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
