import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import EnquiryLink from "@/components/EnquiryLink";
import { serviceOffers, type ServiceOffer } from "@/lib/service-offers";

const siteUrl = "https://enkay.dev";
const offerImages: Record<string, { url: string; alt: string; width: number; height: number }> = {
  "ux-audit": {
    url: "/casestudy/images/redesign/hero.webp",
    alt: "Valmont enterprise workflow redesign — relevant UX review experience",
    width: 1400,
    height: 1062,
  },
  "design-system-consultant": {
    url: "/casestudy/images/design%20system/hero_design_%20system.webp",
    alt: "Valley Design System — tokens, components and developer handoff",
    width: 2048,
    height: 1536,
  },
  "saas-product-design": {
    url: "/casestudy/images/voyacher/hero.webp",
    alt: "Voyacher travel platform — connected product journey design",
    width: 2372,
    height: 1800,
  },
};

export function getServiceOffer(slug: string): ServiceOffer {
  const offer = serviceOffers.find((item) => item.slug === slug);
  if (!offer) throw new Error(`Unknown service offer: ${slug}`);
  return offer;
}

export function serviceOfferMetadata(offer: ServiceOffer): Metadata {
  const image = offerImages[offer.slug];
  const url = `${siteUrl}/${offer.slug}`;
  return {
    title: { absolute: `${offer.title} | Mohammed Noushad` },
    description: offer.description,
    alternates: { canonical: url },
    openGraph: {
      title: { absolute: `${offer.title} | Mohammed Noushad` },
      description: offer.description,
      url,
      type: "website",
      siteName: "Mohammed Noushad",
      locale: "en_US",
      images: [{ url: `${siteUrl}${image.url}`, alt: image.alt, width: image.width, height: image.height }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@noushad_design",
      creator: "@noushad_design",
      title: { absolute: `${offer.title} | Mohammed Noushad` },
      description: offer.description,
      images: [{ url: `${siteUrl}${image.url}`, alt: image.alt }],
    },
  };
}

const cardClass = "rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6";
const bodyClass = "text-[var(--color-text-secondary)] leading-relaxed";

export default function ServiceOfferPage({ offer }: { offer: ServiceOffer }) {
  const image = offerImages[offer.slug];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${offer.slug}#service`,
    name: offer.title,
    serviceType: offer.eyebrow,
    description: offer.description,
    url: `${siteUrl}/${offer.slug}`,
    image: `${siteUrl}${image.url}`,
    provider: {
      "@type": "Person",
      name: "Mohammed Noushad",
      url: siteUrl,
      jobTitle: "Product Designer",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}/${offer.slug}#project-enquiry`,
    },
  };

  return (
    <div className="pt-32 pb-24 px-8 md:px-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <div className="max-w-7xl w-full mx-auto space-y-20 md:space-y-28">
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" aria-labelledby="service-heading">
          <div className="space-y-6">
            <p className="sr-only">{offer.eyebrow}</p>
            <h1 id="service-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-balance">{offer.heading}</h1>
            <p className={`text-lg ${bodyClass}`}>{offer.intro}</p>
            <p className="text-sm text-[var(--color-text-secondary)]">I&apos;m Mohammed Noushad, from Kerala and based in Dubai for 11 years. I work with UAE teams and collaborate remotely.</p>
            <div className="flex flex-wrap items-center gap-5">
              <EnquiryLink href="#project-enquiry" className="btn-primary inline-flex">Discuss the scope →</EnquiryLink>
              <a href="#relevant-work" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Review relevant work</a>
            </div>
          </div>
          <figure className="space-y-3">
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1536px) 608px, (min-width: 1024px) calc((100vw - 224px) / 2), (min-width: 768px) calc(100vw - 160px), calc(100vw - 64px)" priority className="w-full h-auto rounded-xl border border-[var(--color-border)]" />
            <figcaption className="text-xs text-[var(--color-text-secondary)]">From the portfolio: {offer.proof[0].href === "/design-system" ? "Valley Design System" : offer.slug === "ux-audit" ? "Valmont enterprise redesign" : "Voyacher travel platform"}.</figcaption>
          </figure>
        </section>

        <section className="max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{offer.fitHeading}</h2>
          <ul className="space-y-4 list-disc pl-5">
            {offer.fit.map((item) => <li key={item} className={bodyClass}>{item}</li>)}
          </ul>
        </section>

        <section className={`${cardClass} md:p-10 space-y-4`}>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{offer.first.title}</h2>
          <p className={`${bodyClass} max-w-3xl`}>{offer.first.description}</p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{offer.scopeHeading}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {offer.scope.map((item) => (
              <div key={item.title} className={`${cardClass} space-y-3`}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className={`text-sm ${bodyClass}`}>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl space-y-3">
            <h3 className="font-semibold">Where the scope stops</h3>
            <p className={`text-sm ${bodyClass}`}>{offer.boundaries}</p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{offer.processHeading}</h2>
          <ol className="grid md:grid-cols-3 gap-6">
            {offer.process.map((item, index) => (
              <li key={item.title} className="space-y-3 border-t border-[var(--color-border)] pt-5">
                <span className="text-xs font-bold text-[var(--color-text-secondary)]">0{index + 1}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className={`text-sm ${bodyClass}`}>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="relevant-work" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{offer.proofHeading}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {offer.proof.map((item) => (
              <Link key={item.href} href={item.href} className={`${cardClass} block space-y-3 hover:border-[var(--color-accent-warm)] transition-colors`}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className={`text-sm ${bodyClass}`}>{item.description}</p>
                <span className="inline-block text-sm text-[var(--color-accent)]">Read case study →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Questions about {offer.slug === "ux-audit" ? "the UX audit" : offer.slug === "design-system-consultant" ? "design system consulting" : "SaaS product design"}</h2>
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {offer.faqs.map((item) => (
              <details key={item.question} className="group">
                <summary className="min-h-11 py-5 font-medium cursor-pointer pr-4">{item.question}</summary>
                <p className={`${bodyClass} text-sm pb-5`}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="project-enquiry" className="scroll-mt-24 border-t border-[var(--color-border)] pt-12 grid md:grid-cols-2 gap-10 md:gap-16" aria-labelledby="enquiry-heading">
          <div className="space-y-5">
            <h2 id="enquiry-heading" className="text-2xl md:text-3xl font-medium tracking-tight">{offer.enquiryHeading}</h2>
            <p className={bodyClass}>{offer.enquiry}</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Scope, fees, availability and any next steps are agreed before an engagement begins.</p>
          </div>
          <LeadForm source={offer.slug} />
        </section>

        <nav aria-label="Other product design services" className="border-t border-[var(--color-border)] pt-8 space-y-4">
          <h2 className="text-lg font-medium">Need a different starting point?</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {serviceOffers.filter((item) => item.slug !== offer.slug).map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="text-sm text-[var(--color-accent)] hover:underline">{item.title} →</Link>
            ))}
            <Link href="/work" className="text-sm hover:underline">All case studies →</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
