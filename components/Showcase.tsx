import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const visuals = [
  {
    src: "/casestudy/images/voyacher/wide.webp",
    label: "Voyacher — voucher-first booking flow",
    w: "w-[420px]",
  },
  {
    src: "/casestudy/images/finflow/wide1.webp",
    label: "FinFlow — savings dashboard",
    w: "w-[420px]",
  },
  {
    src: "/casestudy/images/redesign/home.webp",
    label: "Valmont — unified enterprise suite",
    w: "w-[420px]",
  },
  {
    src: "/casestudy/images/roadshow/wide.webp",
    label: "Road Show — delivery operations",
    w: "w-[420px]",
  },
  {
    src: "/casestudy/images/Dealer/wide.webp",
    label: "Valley Dealer Suite — mobile",
    w: "w-[420px]",
  },
  {
    src: "/casestudy/images/design%20system/comp-4-buttons.webp",
    label: "Design system — components",
    w: "w-[300px]",
  },
  {
    src: "/casestudy/images/FLT/main.webp",
    label: "Field Layout Tool — tablet",
    w: "w-[300px]",
  },
  {
    src: "/casestudy/images/DTC/all_work_page.webp",
    label: "Design Tool Calculator — iOS",
    w: "w-[420px]",
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="py-32 px-8 md:px-20 border-b border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="section-number">SELECTED VISUALS</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                The work, up close.
              </h2>
            </div>
            <p className="text-[var(--color-text-secondary)] max-w-sm">
              A look at the interfaces themselves — no case-study walls. Scroll
              through, then dive into the thinking behind each one below.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={120}>
        <div className="showcase-scroll -mx-8 md:-mx-20 flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-4 md:px-20">
          {visuals.map((v) => (
            <figure
              key={v.src}
              className={`${v.w} h-64 md:h-72 shrink-0 snap-start`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-bg-alt)]">
                <Image
                  src={v.src}
                  alt={v.label}
                  fill
                  sizes="(max-width: 768px) 420px, 420px"
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-sm text-[var(--color-text-secondary)]">
                {v.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
