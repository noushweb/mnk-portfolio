import { Fragment } from "react";
import Link from "next/link";

const EVIDENCE_ARTICLES = new Set([
  "senior-product-designer-dubai",
  "senior-product-designer-riyadh",
  "product-designer-india",
]);

const PROJECTS: Record<string, string> = {
  "Valmont Industries": "/valmont-legacy-redesign",
  Valmont: "/valmont-legacy-redesign",
  FinFlow: "/finflow",
  Voyacher: "/voyacher",
};

/** Add contextual proof links without mixing React elements into article data. */
export default function ArticleEvidence({ text, slug }: { text: string; slug: string }) {
  if (!EVIDENCE_ARTICLES.has(slug)) return text;
  return text.split(/(Valmont Industries|Valmont|FinFlow|Voyacher)/g).map((part, index) => (
    PROJECTS[part] ? (
      <Link key={index} href={PROJECTS[part]} className="underline underline-offset-4 hover:text-[var(--color-accent-warm)]">
        {part}
      </Link>
    ) : <Fragment key={index}>{part}</Fragment>
  ));
}
