import { articles } from "@/lib/articles-data";
import { serviceOffers } from "@/lib/service-offers";

export const dynamic = "force-static";

const baseUrl = "https://enkay.dev";
const locations = [
  ["dubai", "Dubai"], ["india", "India"], ["riyadh", "Riyadh"],
  ["uae", "UAE"], ["kerala", "Kerala"], ["kochi", "Kochi"],
  ["bangalore", "Bangalore"], ["abu-dhabi", "Abu Dhabi"],
  ["sharjah", "Sharjah"], ["umm-al-quwain", "Umm Al Quwain"],
];
const caseStudies = [
  ["valmont-legacy-redesign", "Valmont Legacy Redesign", "Enterprise application redesign and shared components."],
  ["voyacher", "Voyacher", "Travel platform UX and voucher-booking workflows."],
  ["finflow", "FinFlow", "Savings app product design for the Indian market."],
  ["roadshow", "Road Show", "Delivery management workflows for supervisors, cashiers and drivers."],
  ["valley-dealer-suite", "Valley Dealer Suite", "A mobile hub for the Valley dealer ecosystem."],
  ["field-layout-tool", "Field Layout Tool", "A tablet interface for agricultural pivot planning."],
  ["design-tool-calculator", "Valley Design Tool Calculator", "Engineering calculation workflows for field use."],
  ["design-system", "Valley Design System", "A shared enterprise component library and design system."],
];

export function GET() {
  const body = [
    "# Mohammed Noushad — Senior Product Designer",
    "> Dubai-based product designer serving the UAE, India and international teams. UX/UI, design systems and AI-assisted product development.",
    "", "## Main Pages",
    `- [Home](${baseUrl}): Portfolio, experience and contact details.`,
    `- [Work](${baseUrl}/work): Product design case studies.`,
    `- [Articles](${baseUrl}/articles): Latest product design articles.`,
    `- [Article Archive](${baseUrl}/articles/archive): Browse all articles by year and category.`,
    `- [RSS Feed](${baseUrl}/feed.xml): Subscribe to articles.`,
    "", "## Freelance Services",
    ...serviceOffers.map((service) => `- [${service.title}](${baseUrl}/${service.slug}): ${service.description}`),
    "", "## Markets Served",
    ...locations.map(([slug, name]) => `- [Product Design for ${name}](${baseUrl}/${slug}): UX/UI and design systems for teams in ${name}, delivered by a Dubai-based designer.`),
    "", "## Case Studies",
    ...caseStudies.map(([slug, title, description]) => `- [${title}](${baseUrl}/${slug}): ${description}`),
    "", "## Articles",
    ...articles.map((article) => `- [${article.title}](${baseUrl}/articles/${article.slug}): ${article.excerpt}`),
    "", "## About",
    "Mohammed Noushad is a Senior Product Designer from Kerala, based in Dubai for 11 years. His work spans enterprise UX/UI, design systems and AI-assisted product development for teams in the UAE, India and beyond.",
    "", "## Contact",
    "- Email: hello@enkay.dev",
    "- LinkedIn: https://linkedin.com/in/m-noushad",
    "- Behance: https://behance.net/mohammednoushad",
    "- GitHub: https://github.com/noushweb",
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
