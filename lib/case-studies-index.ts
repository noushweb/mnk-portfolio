import type { Metadata } from "next";

export interface CaseStudyMeta {
  client: string;
  platform: string;
  role: string;
  duration: string;
  tools: string[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface Phase {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface KeyChange {
  before: string;
  after: string;
}

export interface AppDetail {
  number: string;
  name: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  keyChanges: KeyChange[];
  insight: string | null;
}

export interface Deliverable {
  title: string;
  description: string;
}

export interface ScreenImage {
  src: string;
  alt: string;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface DesignDecision {
  number: string;
  title: string;
  subtitle: string;
  image?: string;
  description: string;
}

export interface ComponentItem {
  name: string;
  subtitle: string;
  image: string;
  description: string;
  tags: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  hero: {
    tag: string;
    headline: string;
    image: string;
    meta: CaseStudyMeta;
    nextProjectSlug?: string;
  };
  overview: {
    sectionNumber: string;
    sectionLabel: string;
    paragraphs: string[];
    quote?: string;
    stats: Stat[];
    image?: string;
  };
  problem?: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description: string;
    cards: ProblemCard[];
  };
  process: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description: string;
    phases: Phase[];
    image?: string;
  };
  screens?: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description?: string;
    images: ScreenImage[];
    wideImage?: string;
  };
  applications: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description: string;
    apps: AppDetail[];
  };
  designDecisions?: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description: string;
    items: DesignDecision[];
    image?: string;
  };
  components?: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description: string;
    items: ComponentItem[];
  };
  outcome?: {
    sectionNumber: string;
    sectionLabel: string;
    quote: string;
    metrics: Stat[];
    deliverables: Deliverable[];
  };
  nextProject?: {
    label: string;
    title: string;
    description: string;
    slug: string;
  };
}

import vmont from "./data/valmont-legacy-redesign.json";
import voya from "./data/voyacher.json";
import finf from "./data/finflow.json";
import road from "./data/roadshow.json";
import vds from "./data/valley-dealer-suite.json";
import flt from "./data/field-layout-tool.json";
import dtc from "./data/design-tool-calculator.json";
import ds from "./data/design-system.json";
import wd from "./data/work-detail.json";

const caseStudies: Record<string, CaseStudy> = {
  // All case studies now have dedicated pages. Keep this for future dynamic additions.
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(caseStudies);
}

export function getCaseStudyMetadata(slug: string): Metadata {
  const cs = caseStudies[slug];
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study | Mohammed Noushad`,
    description: cs.description,
  };
}
