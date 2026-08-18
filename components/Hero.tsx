"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { BackgroundPaths } from "./ui/background-paths";

const marqueeShots = [
  { src: "/casestudy/images/voyacher/hero.webp", alt: "Voyacher travel platform" },
  { src: "/casestudy/images/finflow/hero.webp", alt: "FinFlow savings app" },
  { src: "/casestudy/images/roadshow/hero.webp", alt: "Road Show delivery platform" },
  { src: "/casestudy/images/redesign/home.webp", alt: "Valmont enterprise suite" },
  { src: "/casestudy/images/Dealer/hero.webp", alt: "Valley Dealer Suite" },
  { src: "/casestudy/images/FLT/main.webp", alt: "Field Layout Tool" },
  { src: "/casestudy/images/DTC/all_work_page.webp", alt: "Design Tool Calculator" },
  { src: "/casestudy/images/design%20system/hero_design_%20system.webp", alt: "Valley Design System" },
];

export default function Hero() {
  const { theme } = useTheme();
  const imgSrc =
    theme === "dark"
      ? "/casestudy/images/hero_black_2.webp"
      : "/casestudy/images/hero_white_2.webp";

  return (
    <BackgroundPaths>
    <section
      id="hero"
      className="relative w-full px-8 md:px-20 pt-16 md:pt-[100px] pb-0 overflow-hidden"
    >
      <div className="hidden lg:block absolute right-0 top-0 w-[55%] h-full animate-hero-image">
        <Image
          key={theme}
          src={imgSrc}
          alt="Mohammed Noushad — Product Designer"
          className="w-full h-full object-contain"
          width={800}
          height={600}
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative flex items-start gap-12">
        <div className="relative z-10 w-full lg:max-w-[821px] space-y-8 lg:shrink-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-medium tracking-tight leading-[1.12] text-[var(--color-text-primary)] animate-hero-text">
            I design. I build. AI makes it faster.
          </h1>
          <div className="space-y-3 animate-hero-text animate-hero-text-delay-1">
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] font-normal max-w-full lg:max-w-[620px]">
              Product Designer · AI-Powered Development
            </p>
            <p className="text-[var(--color-text-secondary)] max-w-full lg:max-w-[500px] leading-[1.6] text-sm sm:text-base">
              After a decade designing products, I now use Claude, OpenCode, and agent platforms to build what I design — concept to working product, no handoffs, no delays.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 items-center pt-4 animate-hero-text animate-hero-text-delay-2">
            <a href="#work" id="hero-cta-work" className="btn-primary">See My Work →</a>
            <a href="#contact" id="hero-cta-contact" className="text-[var(--color-text-primary)] font-medium text-[15px] hover:text-[var(--color-accent-warm)] transition-all">Let&apos;s Talk</a>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-8 animate-hero-text animate-hero-text-delay-3">
        <Image
          key={`m-${theme}`}
          src={imgSrc}
          alt="Mohammed Noushad"
          className="w-full object-contain rounded-lg"
          width={600}
          height={400}
          sizes="100vw"
        />
      </div>

      {/* Marquee strip of real product shots — craft proof in the first viewport */}
      <div className="marquee-wrap relative mt-14 md:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
        <div className="marquee-track flex w-max gap-5">
          {[...marqueeShots, ...marqueeShots].map((s, i) => (
            <div
              key={i}
              className="relative h-40 md:h-52 w-64 md:w-80 shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)]/60 shadow-sm"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover object-top"
                loading={i < 6 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </BackgroundPaths>
  );
}
