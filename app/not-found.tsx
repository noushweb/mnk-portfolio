import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Mohammed Noushad",
};

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-8 py-32">
      <div className="max-w-lg mx-auto text-center space-y-8">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
          404
        </span>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          Page not found
        </h1>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link href="/" className="btn-primary">
            Back to Home <ArrowRight className="inline w-4 h-4 ml-1" />
          </Link>
          <Link
            href="/work"
            className="text-[var(--color-text-primary)] font-medium text-[15px] hover:text-[var(--color-accent-warm)] transition-all inline-flex items-center gap-1"
          >
            View Work &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
