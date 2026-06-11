export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface Article {
  slug: string;
  date: string;
  updated?: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "building-what-i-design",
    date: "08 Jun 2026",
    updated: "11 Jun 2026",
    category: "AI & Development",
    title: "I Started Building What I Design — Here's What Changed",
    excerpt:
      "For 10 years I designed and handed off. Then I picked up Claude, OpenCode, and Next.js. Now I ship what I design. This is what the transition actually looked like — mistakes, wins, and the parts nobody talks about.",
    readTime: "8 min read",
    content: [
      {
        heading: "The handoff that made me snap",
        body: [
          "I still remember the exact screen. It was a dealer inventory dashboard I had spent three weeks designing for Valmont. I had pixel-pushed every state: loading, empty, error, edge cases with 200+ line items. The Figma file was pristine. I presented it, got approval, and handed it off with a detailed annotation document.",
          "Two months later I saw the live version. The spacing was off. The empty state I had carefully designed was replaced with 'No data found' in 12px grey text. A button I had placed based on user research was moved because the developer 'thought it looked better on the right.' I was furious. And then I was embarrassed — because I had no power to fix it. I could only file a Jira ticket and wait.",
          "That was the moment I decided: I am going to learn how to build what I design. Not become a full-time engineer. Just enough to ship my own screens end to end. No handoff. No waiting. No compromises I did not agree to.",
        ],
      },
      {
        heading: "The first thing I built was embarrassing",
        body: [
          "I started where most designers start: with zero coding knowledge beyond basic HTML and CSS from design school. My first attempt was a simple landing page for a side project. I opened VS Code and stared at the screen for 20 minutes because I did not know what `npx create-next-app` meant. I watched YouTube tutorials that assumed I knew what a terminal was. I copied code from Stack Overflow and broke things in ways I could not explain.",
          "The page took me two weeks. It had three sections and a contact form that did not actually send email. But when I opened it in a browser and saw the exact design I had imagined — my padding, my type scale, my colour choices — all working in a real browser, not a mockup... that feeling was different. It was not a picture of a product. It was a product.",
          "The quality was terrible by engineering standards. But it was mine. And more importantly, nobody had misunderstood my intent between Figma and production.",
        ],
      },
      {
        heading: "What AI actually changed for me",
        body: [
          "Here is the honest version. If I had tried this in 2022, I would have given up. Learning to code from scratch while working full-time as a designer is unrealistic for most people. What changed everything was AI coding assistants.",
          "I use Claude for the architectural thinking — explaining what I want to build, asking it to suggest a component structure, getting it to walk me through the data flow. I use OpenCode for the actual implementation inside my editor. The workflow looks like this: I design the screen in Figma, export the key patterns, describe the interaction in plain English, and let the AI generate the initial code. Then I review, tweak, and iterate — just like I would with a junior developer.",
          "The AI is wrong maybe 40% of the time on the first pass. It hallucinates imports. It uses deprecated patterns. It over-engineers simple things. But it is fast. I can go from idea to working prototype in hours, not weeks. And because I understand the design intent — because I am the designer — I catch the mistakes quickly. The AI writes the code. I provide the judgment.",
        ],
      },
      {
        heading: "What got easier (and what got harder)",
        body: [
          "The obvious win: speed. A feature that used to take two sprints — design, handoff, dev, QA, revision, deploy — now takes me a few days end to end. No meetings with engineers to explain spacing. No tickets sitting in a backlog. I see a problem, I fix it, I ship it.",
          "The unexpected win: my design quality improved. When you build what you design, you quickly learn which interactions are easy to implement and which are a nightmare. You stop designing fancy animations for components that would require 200 lines of custom JavaScript. You start respecting platform conventions because you feel the pain of fighting them. You become a more practical designer.",
          "But some things got harder. Context switching between design brain and development brain is exhausting. Some days I spend six hours debugging a state management issue and make zero design progress. The tools are improving — but there is still a gap between 'the AI generated it' and 'it is production-ready.' I still rely on actual engineers for complex backend work, authentication, and deployment. I am not pretending to be a full-stack developer.",
        ],
      },
      {
        heading: "Who should try this (and who should not)",
        body: [
          "If you are a designer who is curious about code, start small. Build a single page. Ship it. See how it feels. You do not need to quit Figma or call yourself a 'design engineer.' Just add one tool to your toolbox.",
          "If you are a designer who has zero interest in code, that is fine too. The industry does not need every designer to code. What the industry needs is designers who understand enough about implementation to design with real constraints in mind — and developers who respect design intent. The handoff problem is not going to be solved by everyone learning to code. It is going to be solved by better collaboration, better tools, and AI bridging the gap.",
          "For me, building what I design has been the most rewarding shift in my career. Not because I love writing code — I do not. I love seeing my designs work in the real world, with real users, without anyone 'simplifying' them along the way. That is what got me into design in the first place.",
        ],
      },
    ],
  },
  {
    slug: "agent-platforms-for-designers",
    date: "05 Jun 2026",
    updated: "11 Jun 2026",
    category: "AI & Design",
    title: "Agent Platforms for Designers: A No-Nonsense Guide",
    excerpt:
      "I set up Hermes, wired it to n8n, and now AI agents handle my SEO, research, and repetitive design tasks. Here is what agent platforms actually do for a working designer — no hype, just what I use every day.",
    readTime: "7 min read",
    content: [
      {
        heading: "I did not set out to be an 'agent person'",
        body: [
          "Six months ago I would have rolled my eyes at the phrase 'agentic workflow.' It sounded like crypto people had moved to AI. But I kept running into the same problem: there were tasks in my workflow that were too small to delegate to a human and too repetitive to do myself. Competitor research. SEO audits. Generating blog post drafts. Monitoring design trends. Cross-posting content.",
          "These are not design tasks. But they eat into design time. A typical week for me included maybe 40% actual design work and 60% everything around it — research, communication, documentation, marketing. I needed a way to automate the surrounding 60% so I could focus on the core 40%.",
          "That is when I started experimenting with agent platforms. Not because I wanted to be on the cutting edge. Because I was tired of doing the same boring things every week.",
        ],
      },
      {
        heading: "What agent platforms actually are (plain version)",
        body: [
          "Forget the buzzwords for a second. An agent platform is a system where you give an AI a goal — like 'research competitor pricing and create a summary' — and it figures out the steps, executes them, and returns a result. It is different from asking ChatGPT a question. ChatGPT gives you one response. An agent can search the web, read multiple pages, compare data, write a report, and save it to your notes — all without you guiding each step.",
          "The three I use: Hermes is my main agent — the one I am talking to right now. It lives on my server and has access to my files, my terminal, my browser. I use it for complex tasks that need multiple steps: auditing my website's SEO, checking performance, writing and deploying code changes. n8n is my automation layer — it connects services together. When a new blog post goes live, n8n triggers an agent to generate social media posts, update my sitemap, and notify me. I also use agent features built into OpenCode and Claude for development-specific workflows.",
          "The key word here is delegation. I do not tell the agent 'fix this button.' I say 'audit my portfolio site for performance issues, identify the top three problems, and implement the fixes.' The agent decides how to approach that. That is what makes it an agent and not just a chatbot.",
        ],
      },
      {
        heading: "The workflows I actually run",
        body: [
          "Competitor and market research used to take me half a day. Now I give an agent a domain — say, 'research travel voucher platforms in the Middle East' — and it searches, reads competitor sites, pulls pricing, analyses UX patterns, and writes a summary. I review the summary, verify the key claims, and use it as a starting point. The agent does not replace my analysis. It replaces the grunt work of opening 40 tabs.",
          "SEO is another one. My agent checks my site weekly: broken links, missing meta tags, performance regressions, keyword gaps. It produces a report with specific fixes. Some fixes it applies directly — like updating meta descriptions or compressing images. Others it flags for me to review. This used to be a monthly manual audit that I often skipped. Now it happens automatically.",
          "Content drafting. I write all my articles myself — the voice, the stories, the opinions. But the agent handles research synthesis. I feed it my notes, it organises them into themes, pulls relevant quotes from my past work, and suggests a structure. I still write every sentence. But the blank page is less blank when I start.",
          "The boring stuff: generating image alt text across my entire site. Converting design specs into structured data. Checking Figma files for component consistency. These are things nobody wants to do, and they are exactly the kind of tasks agents excel at.",
        ],
      },
      {
        heading: "The learning curve nobody warns you about",
        body: [
          "Agent platforms are not consumer products. Setting up Hermes required configuring a server, understanding environment variables, setting up model providers, and debugging cryptic error messages. n8n's visual workflow builder is easier to grasp, but chaining 5 services together still requires thinking like a programmer — conditionals, error handling, data transformation.",
          "The first weekend I set up Hermes, I spent six hours just getting it to connect to a model provider. The documentation assumed I knew what a gateway was. I did not. I Googled. I broke things. I fixed them. By Sunday evening it was working, and that felt genuinely satisfying — but I would not recommend this to someone who hates technology.",
          "The tools are improving fast. Six months from now, setting up an agent might be as simple as installing an app. Today, it still requires patience and a willingness to read error logs. If you are a designer who gets frustrated when Figma plugins do not install correctly, wait another year before diving into agents.",
        ],
      },
      {
        heading: "What I would tell a designer considering this",
        body: [
          "Start with one workflow. Do not try to automate everything at once. Pick the single most annoying repetitive task in your week and ask: could an AI agent do 80% of this? If yes, set it up. Live with it for a month. Then add the next one.",
          "Keep your expectations realistic. An agent will not understand your brand voice without explicit instructions. It will make mistakes. It will occasionally go down a bizarre rabbit hole — I once asked my agent to research 'design trends' and it spent 20 minutes reading a blog about interior decoration. You need to supervise.",
          "But when it works, it really works. Last month my agent caught a broken image on my portfolio, fixed the file, updated all the references, and pushed the change — all while I was sleeping. I woke up to a commit message I did not write, on a fix I did not request, and the site was better for it. That moment felt less like using a tool and more like having a very junior but very diligent teammate.",
        ],
      },
    ],
  },
  {
    slug: "ai-accelerated-design-systems",
    date: "03 Jun 2026",
    updated: "11 Jun 2026",
    category: "Design Systems",
    title: "How AI Cut My Design System Workflow from Weeks to Hours",
    excerpt:
      "I used to spend two weeks on a component set. Now I design in Claude, convert to Figma, and ship in an afternoon. Here is the exact workflow — what I prompt, what I keep, and where AI still falls short.",
    readTime: "6 min read",
    content: [
      {
        heading: "The old way: weeks of busywork",
        body: [
          "Building a design system component the old way went like this. Day one: audit existing implementations across five apps, screenshot inconsistencies, compile a spreadsheet of variations. Day two and three: design the ideal version in Figma — every state, every variant, every breakpoint, every accessibility annotation. Day four and five: write documentation, create usage guidelines, prepare a presentation for the engineering team. Day six: present, debate, revise. Day seven: update the Figma library and hope engineers actually use the new component.",
          "Two weeks. For a button. A dropdown took longer. A data table could take a month if you included all the sorting, filtering, pagination, and empty state variants. This is not because I was slow. This is the pace of a thorough design system build. Or at least, it was.",
          "Now I can do the same work in an afternoon. The quality is comparable. The documentation is better. The engineers get implementation-ready code alongside the design specs. Here is exactly how.",
        ],
      },
      {
        heading: "The Claude-to-Figma pipeline",
        body: [
          "I start in Claude, not Figma. I describe the component I need — let us say a data table with sorting, filtering, row selection, and a bulk action bar. I specify the design tokens: spacing scale, colour palette, type ramp, border radius. I tell Claude the constraints: this must work on tablets used outdoors, so minimum touch target is 48px. High contrast. No hover-dependent interactions.",
          "Claude generates the component specification — not just visual design, but interaction patterns, accessibility requirements, keyboard navigation, loading and empty states. It writes the Tailwind classes. It provides the React component structure. I review and refine through conversation, not through pixel-pushing. The back-and-forth takes maybe 30 minutes for a complex component.",
          "Then I take the Claude output into Figma. There are plugins now — and manual workflows — that can convert structured design specifications into Figma components. The colours, the spacing, the variants, the auto-layout. It is not perfect one-click magic. I still need to adjust alignment, fine-tune spacing, and add the polish that only a human eye catches. But the grunt work — the repetitive setup of variants, the tedious token mapping, the manual creation of every state — that is gone. What used to take days now takes me an hour.",
        ],
      },
      {
        heading: "What the AI gets right (and what it still messes up)",
        body: [
          "AI is genuinely good at consistency. It does not forget that the border radius should be 8px on the third variant when it was 8px on the first two. It does not accidentally use a colour from the wrong palette. It handles the combinatorial explosion of component states — loading, empty, error, disabled, focused, hovered, active — without fatigue. A human designer will cut corners on state coverage after hour four. The AI does not get tired.",
          "AI is also excellent at documentation. It writes clear, structured guidelines. It explains the 'why' behind decisions when I prompt it to. It generates code snippets in multiple frameworks. It creates contrast-checking tables for accessibility compliance. Documentation used to be the part I dreaded most. Now it is the part that takes the least effort.",
          "But AI still struggles with taste. It will give me a competent data table. It will not give me a data table that feels right for a specific brand in a specific context. It does not know that the Valmont design system should feel industrial but not cold — robust but not clunky. That nuance comes from me. I provide the direction. The AI provides the execution.",
          "It also struggles with novel interaction patterns. If I ask for a standard dropdown, it nails it. If I ask for a map-based field selector that lets users draw polygons on satellite imagery to define irrigation zones — something I actually designed for the Field Layout Tool — the AI has no reference point. It needs me to define the interaction first. Then it can help with the implementation details.",
        ],
      },
      {
        heading: "How this changes the designer's role",
        body: [
          "Here is the uncomfortable truth: a lot of what we called 'design system work' was actually production work. It was assembling variations, mapping tokens, writing documentation, updating libraries. It was skilled work — but it was repeatable. And repeatable work is what AI is best at automating.",
          "What remains is the thinking work. Deciding what a component should do. Choosing which interactions feel right for the users. Understanding the context — the environment, the device, the user's mental state. Negotiating with stakeholders about priorities. Making trade-offs between consistency and flexibility. These are design decisions, and AI cannot make them.",
          "The designers who thrive will be the ones who lean into the thinking work and let go of the production work. If your value proposition is 'I can build a design system faster than anyone,' AI will catch up to you. If your value proposition is 'I know what this system should be and why,' AI will never catch up to you — because that requires judgment, and judgment requires a human who has made mistakes, learned from them, and developed taste.",
        ],
      },
      {
        heading: "The exact workflow, step by step",
        body: [
          "For anyone who wants to try this: here is my current process. Step one — audit with AI. I screenshot existing components across all apps and ask Claude to identify inconsistencies. This replaces the manual spreadsheet phase. Step two — define tokens in conversation. I describe the brand, the platform constraints, the accessibility requirements. Claude proposes the token structure. I approve or revise. Step three — generate the component spec. I ask for all states and variants, with Tailwind classes, with accessibility annotations, with React skeleton code. I review and iterate over chat. Step four — convert to Figma. This is the messiest step. Currently I use a combination of plugins and manual setup. By the end of 2026, I expect this to be one click. Step five — publish. Figma library gets updated. Documentation goes to the team wiki. Code skeleton goes to the engineering repo. Engineers build on top of my foundation instead of starting from scratch.",
          "The whole thing takes me about four hours for a complex component, start to finish. The same work used to take two weeks. That is not an exaggeration. The bottleneck is no longer production speed. The bottleneck is thinking speed — how fast can I make good decisions? And honestly, I am still working on that part.",
        ],
      },
    ],
  },
  {
    slug: "design-systems-at-scale",
    date: "12 May 2026",
    category: "Design Systems",
    title: "Design Systems at Scale: Lessons from 5+ Enterprise Apps",
    excerpt:
      "How we built and maintained a unified design system that powers multiple enterprise applications — from component architecture to cross-team adoption.",
    readTime: "6 min read",
    content: [
      {
        heading: "Why one design system beats five",
        body: [
          "When I joined the Valmont project, there were five separate applications running in production. Each had its own set of buttons, its own colour palette, its own idea of what a table should look like. The users — field technicians and irrigation planners — had to learn five different interfaces to do their job. That is not a technology problem. That is a respect problem.",
          "The first thing I did was not open Figma. I printed screenshots of all five apps and taped them on a wall. Side by side, the inconsistency was almost funny. Three different shades of blue for primary actions. Two apps had a save button at the top, three at the bottom. One app used checkboxes where another used toggles for the same setting.",
          "A single design system solves this at the root. Not by making everything identical — that would be boring. But by giving every app the same foundational language. When a user moves from the dealer portal to the field planning tool, they should feel like they are in the same ecosystem. The cognitive load drops. Mistakes reduce. Training time shrinks.",
          "We started small. Colours, typography, spacing — the boring stuff. Then buttons, inputs, tables. Then complex patterns like multi-step forms and data grids. Each piece was documented with usage guidelines, not just a component preview. The goal was: an engineer should be able to build a new screen without ever asking a designer what a primary button looks like.",
        ],
      },
      {
        heading: "Components are the easy part — governance is the real work",
        body: [
          "Anyone can make a button component. The hard part is making sure everyone actually uses it. Six months into building the design system, I found an engineer who had copy-pasted a button component and changed the border radius because 'it looked better.' That one change rippled into 40 screens before anyone caught it.",
          "Governance is not about being the design police. It is about making the right thing the easy thing. We set up a Slack channel where anyone could request a new component or a variant. The rule was simple: if it already exists in the system, use it. If it does not, let us discuss whether we need it. Most requests were valid. Some were people trying to solve a one-off problem that did not need a system-level change.",
          "We also invested in tooling. A Figma plugin that flagged components not from the library. A lint rule for the frontend that warned when a hex colour was used instead of a token. These small nudges built the habit over time. No meetings, no arguments — just the system quietly guiding behaviour.",
        ],
      },
      {
        heading: "Getting engineers on board without being annoying",
        body: [
          "I learned this the hard way: nobody likes a designer who shows up in a code review and says 'this padding is wrong.' Engineers have their own pressures, their own deadlines, their own pride in their craft. If you treat them like obstacles, they will treat your design system like extra homework.",
          "What worked for us was making the system a shared asset, not a design deliverable. We ran a workshop where engineers mapped out the component hierarchy themselves. They named things. They suggested the API for each component. When they had ownership, consistency became their idea — not ours.",
          "The other thing: show them the numbers. We tracked how long it took to build a new feature before and after the design system. For a typical form-heavy screen, the time dropped from three days to one. Engineers understand efficiency. Give them proof, not opinion.",
        ],
      },
      {
        heading: "What I would do differently",
        body: [
          "Looking back, we should have started with accessibility earlier. Colour contrast, keyboard navigation, screen reader labels — these are not add-ons. They are part of the component definition. Adding them retroactively was painful and doubled our workload.",
          "I would also document the 'why' behind every decision, not just the 'what.' A design token like 'spacing-md: 16px' means nothing without explaining that we chose 16px because it hits the sweet spot for touch targets without feeling loose on desktop. Future designers and engineers should not have to reverse-engineer our thinking.",
          "Finally, I would celebrate small wins more visibly. When an engineer shipped a screen that used 100% system components, we should have highlighted it in the team channel. Recognition builds momentum. Momentum builds adoption.",
        ],
      },
    ],
  },
  {
    slug: "ux-of-industrial-software",
    date: "28 Apr 2026",
    category: "Product Design",
    title: "The UX of Industrial Software: Why It Deserves Better Design",
    excerpt:
      "Industrial and B2B software has long been treated as an afterthought in design. Here's why that's changing — and what designers can do about it.",
    readTime: "5 min read",
    content: [
      {
        heading: "The software that runs the world looks terrible",
        body: [
          "Think about the apps you use every day. WhatsApp, Swiggy, Google Pay — these are beautifully designed, smooth, and easy to learn in minutes. Now think about the software that runs farms, factories, power grids, and water systems. It looks like it was built in 2003 and never touched again. The reason? For decades, industrial software was sold on features, not experience. Nobody cared about UX because the buyer was a procurement officer, not the actual user.",
          "This is changing. The people actually using industrial software today grew up with smartphones and well-designed apps. They have higher expectations. They see no reason why the tool that manages a million-dollar irrigation system should be harder to use than ordering food on Zomato. And they are right.",
          "For designers, this is a massive opportunity. Consumer apps have reached peak design — there are 50 meditation apps with identical UI patterns. But industrial software? Most of it has never been touched by a designer. The impact you can make is enormous, and very few designers are paying attention to this space.",
        ],
      },
      {
        heading: "Industrial users are not different users — they just have harder jobs",
        body: [
          "There is a myth that industrial users do not care about good design because they are 'power users.' This is nonsense. A field technician working in 40-degree heat, wearing gloves, looking at a tablet screen in direct sunlight — that person needs good design more than anyone. They cannot afford to squint at a tiny icon or hunt through nested menus. A bad UI for them is not just annoying — it wastes time and could lead to costly errors.",
          "When I designed the Field Layout Tool for irrigation planners, I spent two days just watching them work. They were dragging GPS pins on a satellite map, calculating pipe lengths, checking elevation data — all on a tablet bouncing in a moving truck. If I had designed that from an air-conditioned office without seeing their reality, the app would have failed immediately.",
          "The lesson is simple: industrial design is not about making things look nice. It is about removing every possible friction from a workflow that is already hard. Big tap targets. High contrast. Minimal steps. Clear feedback. These are not luxury features — they are safety features.",
        ],
      },
      {
        heading: "Simple wins in complex domains",
        body: [
          "When I first opened the legacy irrigation app at Valmont, I needed 15 minutes just to find the log-out button. Not joking. The engineers who built it were brilliant — the math behind the pump calculations was flawless. But the interface was built by engineers, for engineers. Nobody stopped to ask: what does the field operator actually need to see first?",
          "The most impactful changes we made were embarrassingly simple. We moved the most-used actions to a top-level navigation bar instead of burying them in a hamburger menu. We replaced a wall of text with a visual status dashboard. We added a progress indicator to a seven-step form that previously gave zero feedback. Each change took very little design effort but saved hours of user frustration per week.",
          "In complex domains, do not try to simplify the complexity itself — that is the wrong target. The domain is complex for a reason. Your job is to simplify how users navigate that complexity. Give them clarity. Give them confidence. Give them fewer clicks.",
        ],
      },
      {
        heading: "The stigma problem",
        body: [
          "Many designers avoid industrial and B2B work because it lacks the glamour of consumer design. You cannot post a data table on Dribbble and get a thousand likes. There are no sleek onboarding animations. The colour palette is often dictated by existing brand guidelines that are ten years old.",
          "But here is what industrial design does give you: real impact. When you redesign a tool that a hundred engineers use every single day, you are saving hundreds of hours per week. That is not hypothetical — you can measure it. For the Valmont redesign, we reduced average task completion time by almost 40%. Forty percent. No meditation app can claim that kind of ROI.",
          "If you are a designer who wants your work to matter in ways you can actually measure, industrial software is one of the best places to be. It is not glamorous. But it is meaningful.",
        ],
      },
    ],
  },
  {
    slug: "research-or-intuition",
    date: "15 Mar 2026",
    category: "UX Process",
    title: "Research-Led or Intuition-First? Finding Balance in Product Design",
    excerpt:
      "A reflection on when to lean on user research and when to trust your design intuition — based on 11+ years of shipping products.",
    readTime: "4 min read",
    content: [
      {
        heading: "The false choice everyone talks about",
        body: [
          "In design communities, there is this endless debate: should you be research-driven or intuition-driven? It is framed as a choice you have to make, like picking a political party. This is the wrong question. Every experienced designer I know uses both. The real skill is knowing when to use which one.",
          "Research is not a ritual you perform to feel legitimate. It is a tool you reach for when you are genuinely uncertain. If I am designing a checkout flow for a market I do not understand — say, elderly users in rural India — I will test every assumption. But if I am designing the fourth iteration of a settings page for enterprise software, and I have done this 20 times before, running a full research study is theatre, not insight.",
        ],
      },
      {
        heading: "When skipping research worked — and when it did not",
        body: [
          "Early in my career, at an agency, I designed a mobile app dashboard purely from intuition. No user interviews, no testing, just me and Figma at 2 AM. The client loved it. The users? They found it confusing. The colour-coded charts I thought were intuitive required a legend that nobody read. I learned: my intuition was calibrated for me, not for them.",
          "Years later, on the Hala App project, I had the opposite experience. We did extensive research with users who spoke Arabic and English. We learned that bilingual UI was not just a translation problem — it was a layout problem. Arabic is right-to-left. English is left-to-right. The same component needed to behave differently. No amount of intuition would have told me that. I had to see users struggle before I understood.",
          "But then there was the Voyacher project. The core idea — a voucher-first travel booking platform — came from a half-hour conversation with the founder, not from a research report. I had travelled enough to know the pain of refunds and cancellations. The insight was personal. We validated it with data later, but the original spark came from lived experience, not a survey.",
        ],
      },
      {
        heading: "My rule of thumb",
        body: [
          "After all these years, I have settled on a simple rule: if the user is a version of me — similar context, similar tech comfort, similar goals — I trust my intuition and validate quickly. If the user is different from me in any significant way — culture, language, domain expertise, physical environment — I do not touch Figma until I have watched them work.",
          "This is not a scientific rule. It is just pattern recognition from 11 years of making mistakes. But it has saved me from the two extremes: designing in a bubble and researching endlessly without shipping.",
          "The best design process is the one that fits the project, not the one that fits a blog post. Do not let anyone make you feel guilty for trusting your gut, and do not let anyone convince you that research is always optional. Both are tools. Use the right one.",
        ],
      },
    ],
  },
  {
    slug: "visual-to-product-thinking",
    date: "20 Feb 2026",
    category: "Career",
    title: "From Visual Design to Product Thinking: A Designer's Evolution",
    excerpt:
      "How shifting from visual-first to problem-first changed everything about my design practice — and the career decisions that shaped it.",
    readTime: "7 min read",
    content: [
      {
        heading: "My first three years: making things pretty",
        body: [
          "I started my career the way most designers do — obsessed with how things looked. Beautiful gradients, perfect type, smooth animations. My portfolio was a gallery of Dribbble-style shots. If a screen looked good at 2x zoom in Photoshop, I considered it done. I was a visual designer who happened to work on digital products.",
          "This approach worked fine at agencies, where clients judge work by how it looks in a presentation. The deliverable was a set of polished mockups. What happened after handoff was someone else's problem. I did not care about edge cases, loading states, or error messages. Those were 'details' that engineers would handle.",
          "It took me about three years to realise: I was not designing products. I was designing posters that happened to have buttons on them. The wake-up call came from a developer who showed me the live version of a screen I had designed six months earlier. It looked nothing like my mockup. Buttons were misplaced. The type was wrong. I got angry — and then I got curious. Why did it diverge? Because my design never accounted for real data, real constraints, real user flows.",
        ],
      },
      {
        heading: "The project that broke me (in a good way)",
        body: [
          "The turning point was the Valmont Legacy Redesign project. This was not a single app with a single user type. It was five applications, dozens of user roles, real-time data from physical sensors in fields across the US. There was no way to approach this with pretty screens alone. I had to understand irrigation science, dealer workflows, regional regulations. I had to design systems, not surfaces.",
          "For three months, I barely opened Figma. I spent my days in meetings with domain experts, reading technical documentation, and mapping information architecture on a whiteboard. It was uncomfortable. I felt like I was not doing 'real' design. But when I finally started designing screens, they came together in weeks — not months. Because I actually understood the problem.",
          "That project taught me: the quality of your design is directly proportional to the quality of your understanding. You cannot solve a problem you do not understand. And you cannot understand a problem by only looking at the surface.",
        ],
      },
      {
        heading: "Questions I ask now that I never asked before",
        body: [
          "Early in my career, my kickoff questions were: what colours do you like, what is the deadline, can I have the logo in SVG? Now my questions are completely different. Who is the primary user and what is their worst day? What happens if this feature fails silently? How will we know if this design is working — what is the metric?",
          "These questions do not feel like design questions. But they are. They shape every decision I make. If I know the user's worst day, I design for that day, not the happy path. If I know the failure modes, I design error states that actually help. If I know the success metric, I can prioritise features that move that number.",
          "This shift from visual designer to product thinker did not happen overnight. It took years of watching my designs break in production to realise that the pretty parts matter less than the functional parts. A beautiful button that nobody clicks is still a failed button.",
        ],
      },
      {
        heading: "Advice for my younger self",
        body: [
          "If I could sit down with the 24-year-old version of me, fresh out of design school and obsessed with gradients, I would say three things. First: learn to write. Not copywriting — just clear, structured writing. Most design problems are actually communication problems. If you cannot explain your thinking in plain English, you have not understood the problem.",
          "Second: learn to say no. Not every feature request is valid. Not every stakeholder opinion is equal. Your job is to be the advocate for the user, not to make everyone in the room happy. Saying no with evidence behind it is a skill that will earn you more respect than saying yes to everything.",
          "Third: ship things. A shipped design with 80 percent polish is worth infinitely more than a perfect Figma file that never reaches a real user. Real experience comes from seeing your work used — from watching people get confused where you thought it was obvious, from fixing bugs you did not anticipate, from iterating based on data, not taste.",
        ],
      },
    ],
  },
  {
    slug: "ai-assisted-workflows",
    date: "08 Jan 2026",
    category: "AI & Design",
    title: "AI-Assisted Design Workflows: What Actually Works in 2026",
    excerpt:
      "A practical look at integrating AI tools into a real product design workflow — what's hype, what's helpful, and where humans still lead.",
    readTime: "5 min read",
    content: [
      {
        heading: "What I actually use AI for every day",
        body: [
          "Let me be honest about what AI does in my actual design workflow. It is not generating full app designs from a prompt. That never works well enough for production. What it does extremely well is small, focused tasks that used to eat up my time.",
          "Content generation is the biggest one. When I need placeholder text for a prototype, I do not use lorem ipsum anymore — I ask AI to generate realistic user names, transaction descriptions, or product titles based on the domain. When I am writing microcopy for error messages or tooltips, I generate 10 variations and pick from them. It is not replacing my writing — it is giving me a broader palette to choose from.",
          "The second big category is research synthesis. I feed transcripts of user interviews into an AI tool and ask it to extract themes, quote relevant passages, and flag contradictions. This used to take me two full days. Now it takes a few hours of reviewing and refining. I still read every quote — the AI is a first pass, not a final judgment.",
        ],
      },
      {
        heading: "What AI still cannot do (and probably will not)",
        body: [
          "AI is terrible at taste. It can generate a competent design, but it cannot generate a memorable one. It can suggest colour palettes that work, but it cannot pick one that feels right for a specific brand in a specific culture at a specific moment. That kind of judgment — the 'I do not know why, but this feels better' instinct — comes from years of looking at things, and no language model has that.",
          "AI also cannot handle ambiguity. It needs clear instructions. But design problems are messy. Stakeholders give vague feedback like 'make it pop.' User needs are contradictory. The best solutions emerge from sitting in discomfort, exploring multiple directions, and trusting your gut to pick the right one. That process cannot be automated because it is not algorithmic.",
          "Finally, AI cannot build relationships. It cannot read the room in a stakeholder meeting. It cannot sense that the engineer is frustrated because a component is hard to implement, and adjust the design accordingly. Design is a social activity, not just a production activity, and AI is not social.",
        ],
      },
      {
        heading: "My three-rule checklist",
        body: [
          "I have three rules I follow whenever I use AI in my design process. These keep me honest and prevent me from outsourcing my thinking.",
          "Rule one: AI output is a suggestion, never a deliverable. I never show AI-generated work to a client or stakeholder without heavy editing. The AI is a brainstorming partner, not a replacement for my judgment.",
          "Rule two: If I cannot explain why I chose a design decision, I do not use it — even if AI suggested it. Every pixel I ship needs a reason behind it. AI can propose. I must defend.",
          "Rule three: Use AI for speed, not for quality. Let it handle the fast, repetitive work so I can spend more time on the hard, creative work. The goal is not to work less. The goal is to spend my best hours on the parts that only I can do.",
        ],
      },
      {
        heading: "An honest take",
        body: [
          "AI is going to change design — but not the way people on Twitter say it will. It will not replace designers. It will make average designers more dangerous by letting them produce more bad work faster. It will make good designers better by removing the drudgery and freeing up their mental energy.",
          "The designers who thrive will be the ones who treat AI like an intern — useful for heavy lifting, useless without direction. The ones who struggle will be the ones who expect AI to do the thinking for them.",
          "I am optimistic about AI because I have seen how much faster I can explore ideas, how much richer my first drafts look, how much easier it is to communicate design intent without spending hours on slide decks. But I am also cautious. The core skills — empathy, taste, judgment, communication — those are still 100 percent human. And I think they always will be.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
