"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { BackgroundPaths } from "./ui/background-paths";
import { ContactButton } from "./ContactButton";

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
      className="relative w-full px-8 md:px-20 py-16 md:py-[100px] overflow-hidden lg:flex lg:items-center"
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

      <div className="max-w-7xl w-full mx-auto relative flex items-center gap-12">
        <div className="relative z-10 w-full lg:max-w-[821px] space-y-8 lg:shrink-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-medium tracking-tight leading-[1.12] text-[var(--color-text-primary)] animate-hero-text">
            I design. I build. AI makes it faster.
          </h1>
          <div className="space-y-3 animate-hero-text animate-hero-text-delay-1">
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] font-normal max-w-full lg:max-w-[620px]">
              Freelance Product Designer in Dubai
            </p>
            <p className="text-[var(--color-text-secondary)] max-w-full lg:max-w-[500px] leading-[1.6] text-sm sm:text-base">
              UX reviews, SaaS product design, enterprise dashboards, and design systems. I help founders and product teams turn complex workflows into clear interfaces, with design-to-code support when you need it.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 items-center pt-4 animate-hero-text animate-hero-text-delay-2">
            <ContactButton label="Discuss your project →" id="hero-cta-contact" />
            <a href="#work" id="hero-cta-work" className="text-[var(--color-text-primary)] font-medium text-[15px] hover:text-[var(--color-accent-warm)] transition-all">See my work →</a>
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
    </section>
    </BackgroundPaths>
  );
}
