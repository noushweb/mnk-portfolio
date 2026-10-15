import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { Search, Layers, PenTool, ArrowRight } from "lucide-react";
import { serviceOffers } from "@/lib/service-offers";

const icons = { "ux-audit": Search, "design-system-consultant": Layers, "saas-product-design": PenTool };

export default function Services() {
  return (
    <section id="services" className="py-32 px-8 md:px-20 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 space-y-4 text-center">
            <span className="section-number">02 / HOW I CAN HELP</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Choose the right starting point for your product.</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Diagnose a difficult flow, bring consistency to your interfaces, or design a new product experience.
              Explore the scope and relevant work before we discuss your project.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {serviceOffers.map((service, index) => {
            const Icon = icons[service.slug as keyof typeof icons] ?? PenTool;
            return (
              <ScrollReveal key={service.slug} delay={index * 100}>
                <Link href={`/${service.slug}`} className="block h-full bg-[var(--color-surface)] p-8 border border-[var(--color-border)] rounded-lg card-hover-lift group">
                  <Icon className="w-10 h-10 mb-6 text-[var(--color-accent-warm)]" />
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-warm)]">
                    Scope, deliverables &amp; relevant work <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
