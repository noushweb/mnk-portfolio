export type ServiceOffer = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  fitHeading: string;
  fit: string[];
  first: { title: string; description: string };
  scopeHeading: string;
  scope: { title: string; description: string }[];
  boundaries: string;
  processHeading: string;
  process: { title: string; description: string }[];
  proofHeading: string;
  proof: { href: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  enquiryHeading: string;
  enquiry: string;
};

export const serviceOffers: ServiceOffer[] = [
  {
    slug: "ux-audit",
    title: "UX Audit Services in Dubai & Remote",
    description: "A focused UX audit for SaaS and enterprise products: reviewed journeys, annotated findings and a prioritised improvement backlog. Dubai-based, working remotely.",
    eyebrow: "UX audit · SaaS & enterprise products",
    heading: "A UX audit to decide what to fix before you redesign.",
    intro: "Your team sees onboarding drop-offs, repeated support questions or a workflow people avoid. A new visual style will not tell you why. I review the agreed product journeys, separate observable friction from assumptions, and turn findings into decisions your product and engineering teams can act on.",
    fitHeading: "When an independent UX review is useful",
    fit: [
      "A product is live, but the team disagrees about whether navigation, forms or onboarding need attention first.",
      "A legacy tool supports important operational tasks, and a redesign needs to preserve the work people already know how to do.",
      "You have a working prototype and want a usability review before committing more engineering effort."
    ],
    first: { title: "First deliverable: a journey and evidence map", description: "Before recommendations, we agree which user, task, device and starting point the audit covers. The map records the available evidence, missing access and questions to investigate, so a focused review does not quietly become a promise to audit every screen." },
    scopeHeading: "An audit backlog, not a list of design opinions",
    scope: [
      { title: "Task-based walkthroughs", description: "Review agreed journeys such as account setup, a first meaningful action, a permission change or a checkout. Check navigation, content clarity, feedback, error recovery and relevant empty states." },
      { title: "Annotated issue register", description: "Each finding records the affected step, screenshot or observation, usability concern, proposed change and severity. Evidence and hypotheses are labelled separately; unavailable analytics are not replaced with invented behaviour." },
      { title: "Priorities for your team", description: "Group blockers, smaller corrections and questions that need user research. Discuss implementation effort with engineering rather than treating a design estimate as a delivery commitment." },
      { title: "A validation plan", description: "Identify what to check after changes: task completion, errors, support themes or an agreed funnel step. Where the answer depends on real users, recommend a specific testing question instead of claiming the audit proves it." }
    ],
    boundaries: "The core engagement is an expert review of an agreed scope. Participant recruitment, usability testing, a full accessibility conformance assessment, redesigned screens and implementation are separate scope decisions. An audit does not guarantee conversion or retention gains.",
    processHeading: "From the business question to a review your team can use",
    process: [
      { title: "Frame the question", description: "Share the product, intended users, suspected friction and any existing research or support evidence. Agree journeys, access, deliverables and commercial terms before work starts." },
      { title: "Inspect and document", description: "Walk through the product with appropriate test accounts. Compare the interface with usability principles and the evidence you can share, recording both issues and uncertainty." },
      { title: "Review and choose", description: "Walk through the findings with your team, challenge assumptions and agree a practical order of work. Decide whether fixes stay with your team or need a separately scoped design phase." }
    ],
    proofHeading: "Relevant workflow and journey work",
    proof: [
      { href: "/valmont-legacy-redesign", title: "Valmont: understanding legacy workflows", description: "Enterprise application research, navigation restructuring and shared interface patterns across legacy products. Explore how existing operational tasks informed the redesign." },
      { href: "/voyacher", title: "Voyacher: discovery, vouchers and checkout", description: "A Qatar-based travel platform with voucher management and cross-device booking journeys. Relevant when a review needs to follow an interconnected task rather than judge isolated screens." }
    ],
    faqs: [
      { question: "Can you audit a product without analytics?", answer: "Yes, an expert review can still identify interface problems. Findings will distinguish what is directly observable from assumptions about user behaviour. Analytics, support records and existing research can add context; without them I will not claim to know your drop-off causes." },
      { question: "Is a UX audit the same as usability testing?", answer: "No. An audit reviews the experience against usability principles and available evidence. Usability testing observes representative people attempting tasks. If testing is needed to resolve a question, we agree recruitment, tasks and scope separately." },
      { question: "Will I get redesigned screens?", answer: "The audit centres on findings and priorities. We can agree illustrative recommendations, but a production-ready redesign or implementation is not automatically included. You can use the backlog with your existing team." },
      { question: "What determines cost and schedule?", answer: "The number and complexity of journeys, user roles, platforms, access and evidence required. Share the scope and any deadline; I will confirm an engagement proposal rather than quote a universal price or turnaround." }
    ],
    enquiryHeading: "Which journey needs a closer look?",
    enquiry: "Share a product link or description, the task users struggle with, the evidence you have and any constraints. Do not include passwords, customer records or other sensitive data in this form."
  },
  {
    slug: "design-system-consultant",
    title: "Design System Consultant in Dubai & Remote",
    description: "Design system consulting for product teams: component inventory, token structure, interaction states and adoption planning. Dubai-based, serving UAE and remote teams.",
    eyebrow: "Design system consulting · Product teams",
    heading: "Design system consulting that goes beyond the Figma file.",
    intro: "A component library is not solving the problem if designers detach components and engineers rebuild the same states. I help product teams decide what to standardise, connect design decisions to implementation conventions, and document how the system will be maintained.",
    fitHeading: "For teams whose interface is growing faster than its rules",
    fit: [
      "Several products repeat similar forms, tables and dialogs, but their behaviour and styling drift apart.",
      "Your Figma library and implemented interface use different names, tokens or state definitions.",
      "A library exists, but nobody is clear about ownership, contribution decisions or migration priorities."
    ],
    first: { title: "First deliverable: a system inventory and gap map", description: "A review of representative product screens, the current library and available frontend documentation identifies repeated patterns, duplicate components, missing states and naming mismatches. The result is a proposed pilot scope, not an automatic recommendation to rebuild everything." },
    scopeHeading: "Foundations, components and the rules for using them",
    scope: [
      { title: "Token structure", description: "Define purposeful colour, typography and spacing roles, naming conventions and a mapping to your engineering stack. Theme or brand variants are included only where the product needs them." },
      { title: "A focused component pilot", description: "Start with agreed high-use components. Document variants, interaction states, responsive behaviour, content guidance and relevant keyboard or focus expectations for engineering review." },
      { title: "Design-to-code alignment", description: "Compare component names and properties with the implemented patterns. Review handoff examples with developers; a Figma library alone is not represented as a shipped frontend package." },
      { title: "Adoption and maintenance", description: "Agree ownership, contribution criteria, change documentation and a migration order. Capture when to reuse a pattern and when a genuinely different task calls for an exception." }
    ],
    boundaries: "The scope may cover an existing system review, a pilot library or an expansion. A full coded component library, every legacy screen migration and ongoing governance are not implied. Accessibility requirements belong in component decisions, but documentation alone does not certify the live product.",
    processHeading: "Prove the system on a real product slice",
    process: [
      { title: "Inspect what already works", description: "Review the Figma library, sample screens and frontend conventions with design and engineering. Keep useful existing patterns rather than making a new library for its own sake." },
      { title: "Build and review a pilot", description: "Apply agreed tokens and components to a representative workflow. Check state coverage, naming and implementation feasibility before expanding the system." },
      { title: "Plan adoption", description: "Document decisions and handoff expectations. Agree who owns future changes and which product areas should migrate next, within the team's capacity." }
    ],
    proofHeading: "A system designed around enterprise implementation",
    proof: [
      { href: "/design-system", title: "Valley Design System", description: "Tailwind-aligned tokens, component categories, interaction-state documentation and developer-handoff annotations. Explore the component examples and the decisions connecting design with implementation." },
      { href: "/valmont-legacy-redesign", title: "Valmont: shared patterns across legacy applications", description: "A complementary view of how a shared component library supported enterprise navigation and workflow redesign. The system sits within a product context, not as a disconnected UI kit." }
    ],
    faqs: [
      { question: "Do we need a new design system?", answer: "Not necessarily. If your existing library is useful, the right scope may be an inventory, clearer documentation or a small set of missing patterns. The initial review should establish the need before a rebuild is proposed." },
      { question: "Can you work with our frontend framework?", answer: "The starting point is your current stack and conventions. My Valley case study documents Tailwind alignment. We will confirm any framework-specific implementation requirement with your engineers before agreeing scope; I do not assume every engagement includes production code." },
      { question: "How do you avoid another unused library?", answer: "Choose a real workflow as the pilot, involve the people who implement it and make maintenance ownership explicit. Adoption and migration decisions are part of the scope discussion, not something left until the file is handed over." },
      { question: "How are the engagement and price scoped?", answer: "Scope depends on product surfaces, existing foundations, component complexity and whether you need review, creation or adoption support. Share a sample library and the implementation constraints so I can propose an appropriate phase of work." }
    ],
    enquiryHeading: "Where does your system break down?",
    enquiry: "Describe the products and frontend stack, what already exists in Figma or code, and who will maintain it. Share non-sensitive examples of drift or missing patterns if available."
  },
  {
    slug: "saas-product-design",
    title: "SaaS Product Design in Dubai & Remote",
    description: "SaaS product design for onboarding, dashboards and complex workflows: task definition, prototypes and development handoff. Dubai-based, working with UAE and remote teams.",
    eyebrow: "SaaS product design · New features & redesigns",
    heading: "SaaS product design from a new account to useful work.",
    intro: "Your product may have the right capabilities, but users still need to understand what to do first, how their role changes the interface and what happens when something goes wrong. I work with founders and product teams on coherent workflows, from task definition through prototypes and implementation guidance.",
    fitHeading: "For a product decision, not just a screen request",
    fit: [
      "An early product needs a clear first-use journey and a defined release scope instead of an ever-growing feature list.",
      "A new feature touches dashboards, permissions and existing workflows, and needs to fit the product rather than sit beside it.",
      "An established platform needs a workflow redesign while preserving familiar operational rules."
    ],
    first: { title: "First deliverable: a workflow and release brief", description: "We define the target role, the task they need to complete, the starting and success states, and the constraints behind the release. The brief separates essential paths from later features and records assumptions that still need validation." },
    scopeHeading: "Design around the work your product must support",
    scope: [
      { title: "Information architecture and task flows", description: "Map navigation, role-specific entry points and the steps between setup and a useful result. Make dependencies and permission boundaries visible before high-fidelity screens." },
      { title: "Wireframes and prototypes", description: "Explore alternative flow structures and use interactive prototypes to review decisions with stakeholders. Agree user testing separately where participant evidence is needed." },
      { title: "Product UI and edge states", description: "Design the agreed responsive screens and reusable patterns, including empty, loading, error and restricted-access states relevant to the workflow. Reuse your existing design system where it fits." },
      { title: "Handoff and acceptance guidance", description: "Prepare organised Figma files, behaviour notes and an agreed state checklist. Engineering can raise feasibility questions before implementation; post-build design review can be scoped explicitly." }
    ],
    boundaries: "This offer focuses on product UX and UI. Brand identity, marketing websites, participant recruitment, production development and ongoing product ownership are separate requirements. Design work does not establish product-market fit or guarantee activation, retention or revenue.",
    processHeading: "A sequence of product decisions, with review points",
    process: [
      { title: "Choose the slice", description: "Review users, business goals, current product and technical constraints. Agree the feature or journey, collaborators and deliverables rather than treating the entire roadmap as one brief." },
      { title: "Resolve the workflow", description: "Use low-fidelity flows and prototypes to review task logic. Track unanswered questions and revise the direction before polishing the interface." },
      { title: "Detail and hand over", description: "Develop the agreed screens and states, review them with engineering and document expected behaviour. Agree what evidence the team will collect after release to evaluate the design." }
    ],
    proofHeading: "Product work relevant to complex SaaS journeys",
    proof: [
      { href: "/valmont-legacy-redesign", title: "Valmont: enterprise workflows and role-based interfaces", description: "Enterprise application work covering information architecture, data-heavy screens and a shared component library. Explore role-based navigation and complex operational workflows." },
      { href: "/finflow", title: "FinFlow: a financial product under development", description: "A mobile savings-app design with goal-based tracking and behavioural nudges. Currently under development, with a case study focused on the product and interface decisions." },
      { href: "/voyacher", title: "Voyacher: a connected travel platform", description: "Discovery, voucher balance and checkout design for a Qatar-based travel service, connecting multi-step booking journeys across devices." }
    ],
    faqs: [
      { question: "Can we start with one feature rather than a full redesign?", answer: "Yes. A contained workflow is often a clearer brief: define who uses it, the problem it addresses, the states it touches and its dependencies. We can decide whether it needs a local change or broader navigation work." },
      { question: "Do you work with an existing product team?", answer: "The engagement can be structured around your product and engineering review process. Share who makes decisions, the current design assets and expected collaboration so responsibilities are agreed before starting." },
      { question: "Do prototypes include user research?", answer: "A prototype is a design artifact, not proof of usability. We can define research questions and discuss testing as a separate scope, including participant access and who will conduct it. Stakeholder approval is not presented as user validation." },
      { question: "How do we agree the timeline and evaluate the work?", answer: "We scope the journey, access, review points and engineering dependencies before agreeing a schedule. Define the intended user task and a practical validation plan alongside the deliverables, so your team knows what to review before and after implementation." }
    ],
    enquiryHeading: "What should your users be able to do next?",
    enquiry: "Describe the product stage, target users, feature or journey, existing design assets and engineering constraints. Mention your intended release window so we can discuss a realistic scope."
  }
];
