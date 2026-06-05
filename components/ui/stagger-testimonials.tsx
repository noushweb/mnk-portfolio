"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { tempId: 0, testimonial: "Mohammed's design system transformed how our engineering team builds interfaces. 25% faster handoffs.", by: "Alex, Engineering Lead at Valmont", init: "AL" },
  { tempId: 1, testimonial: "He didn't just redesign screens — he redesigned how we think about user experience.", by: "Sarah, Product Manager at Valmont", init: "SM" },
  { tempId: 2, testimonial: "Working with Mohammed is like having a design partner who anticipates problems before they happen.", by: "Raj, CTO at FinFlow", init: "RK" },
  { tempId: 3, testimonial: "The Voyacher platform feels effortless because Mohammed made the voucher model feel natural.", by: "Fatima, CEO at Voyasa Travels", init: "FA" },
  { tempId: 4, testimonial: "Clean, structured Figma files with annotations that our devs actually understand.", by: "David, Frontend Lead", init: "DW" },
  { tempId: 5, testimonial: "The Field Layout Tool is proof — outdoor, gloved hands, direct sunlight, and it just works.", by: "Michael, Field Operations at Valley", init: "MO" },
  { tempId: 6, testimonial: "End-to-end ownership from research to handoff. He doesn't drop things halfway.", by: "Priya, Design Director", init: "PS" },
  { tempId: 7, testimonial: "The bilingual UX for Hala App was flawless. Arabic and English feel equally native.", by: "Omar, Product Lead at Hala", init: "OA" },
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => handleMove(position)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleMove(position); } }}
      className={cn("absolute left-1/2 top-1/2 cursor-pointer p-8 transition-all duration-500 ease-in-out rounded-lg",
        isCenter ? "z-10 bg-[var(--color-accent)] text-[var(--color-bg)] border-2 border-[var(--color-accent-warm)]" : "z-0 bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-warm)]/50"
      )}
      style={{
        width: cardSize, height: cardSize,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter ? "0px 8px 0px 4px var(--color-accent-warm)" : "0px 0px 0px 0px transparent"
      }}
    >
      <div className="mb-4 h-12 w-12 rounded-full bg-[var(--color-accent-warm)] text-[var(--color-bg)] flex items-center justify-center font-bold text-sm border-2 border-[var(--color-bg)]">{testimonial.init}</div>
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-[var(--color-bg)]" : "text-[var(--color-text-primary)]")}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn("absolute bottom-8 left-8 right-8 mt-2 text-sm", isCenter ? "text-[var(--color-bg)]/70" : "text-[var(--color-text-muted)]")}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) { const item = newList.shift(); if (!item) return; newList.push({ ...item, tempId: Math.random() }); }
    } else {
      for (let i = steps; i < 0; i++) { const item = newList.pop(); if (!item) return; newList.unshift({ ...item, tempId: Math.random() }); }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => { const m = window.matchMedia("(min-width: 640px)"); setCardSize(m.matches ? 365 : 290); };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2;
        return <TestimonialCard key={testimonial.tempId} testimonial={testimonial} handleMove={handleMove} position={position} cardSize={cardSize} />;
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button onClick={() => handleMove(-1)} className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]" aria-label="Previous"><ChevronLeft /></button>
        <button onClick={() => handleMove(1)} className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-[var(--color-surface)] border-2 border-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]" aria-label="Next"><ChevronRight /></button>
      </div>
    </div>
  );
};
