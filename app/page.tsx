import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export const metadata: Metadata = {
  title: "Mohammed Noushad — Senior Product Designer | Dubai, UAE",
  description:
    "Senior Product Designer in Dubai & India. 11+ years in UX/UI, enterprise design systems & AI development. Shipped for Valmont, Voyacher, FinFlow.",
  alternates: {
    canonical: "https://enkay.dev",
  },
  openGraph: {
    title: "Mohammed Noushad — Senior Product Designer | Dubai, UAE",
    description:
      "Senior Product Designer in Dubai & India. 11+ years in UX/UI, enterprise design systems & AI-powered product development. Portfolio of shipped products for Valmont, Voyacher, FinFlow.",
    url: "https://enkay.dev",
    siteName: "Mohammed Noushad",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Noushad — Senior Product Designer",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Showcase />
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
