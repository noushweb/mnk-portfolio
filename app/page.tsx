import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

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
