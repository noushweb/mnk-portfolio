"use client";

import { useEffect, useState } from "react";

interface ArticleTOCProps {
  headings: { id: string; text: string }[];
}

export default function ArticleTOC({ headings }: ArticleTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 space-y-1" aria-label="Table of contents">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] block mb-4">
        On this page
      </span>
      {headings.map(({ id, text }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className={`block text-left text-sm leading-relaxed py-1.5 transition-colors duration-200 border-l-2 pl-3 w-full ${
            activeId === id
              ? "border-[var(--color-accent-warm)] text-[var(--color-text-primary)] font-medium"
              : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:border-[var(--color-border)]"
          }`}
        >
          {text}
        </button>
      ))}
    </nav>
  );
}
