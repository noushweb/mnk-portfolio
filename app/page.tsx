import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export const metadata: Metadata = {
  title: "Freelance Product Designer | Mohammed Noushad",
  description:
    "Dubai-based freelance product designer for SaaS and enterprise teams. UX reviews, dashboards, design systems and design-to-code support. Discuss your project.",
  alternates: { canonical: "https://enkay.dev" },
  openGraph: {
    title: "Freelance Product Designer for SaaS & Enterprise",
    description:
      "Dubai-based freelance product designer for SaaS and enterprise teams. UX reviews, dashboards, design systems and design-to-code support. Discuss your project.",
    url: "https://enkay.dev",
    siteName: "Mohammed Noushad",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mohammed Noushad — Freelance Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Product Designer for SaaS & Enterprise",
    description:
      "Dubai-based freelance product design: SaaS UX, enterprise dashboards, design systems and design-to-code support. Discuss your project.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <section className="py-32 px-8 md:px-20 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <span className="section-number">WHAT PEOPLE SAY</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Trusted by teams I&apos;ve worked with.</h2>
          </div>
        </div>
        <StaggerTestimonials />
      </section>
      <Skills />
      <Contact />
    </>
  );
}
