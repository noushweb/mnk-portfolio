export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface Article {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "ai-and-product-design",
    date: "22 Jun 2026",
    category: "AI & Design",
    title: "AI and Product Design: Not What I Expected",
    excerpt:
      "Everyone said AI would replace designers. Instead it changed what 'designer' even means. Here's what I actually do now — and what I stopped doing altogether.",
    readTime: "6 min read",
    content: [
      {
        heading: "The prediction everyone got wrong",
        body: [
          "Two years ago the conversation was simple. One side said AI would replace designers entirely. The other side said AI was just fancy autocomplete and real design would always need humans. Both sides were wrong.",
          "AI did not replace me. But it did replace a version of me — the one who spent Tuesday afternoons making 47 variants of the same button, the one who manually wrote alt text for 200 images, the one who audited spacing inconsistencies across five apps by screenshotting everything and squinting.",
          "That version of me is gone. And I do not miss him.",
          "What replaced him is not a machine. It is a different kind of designer — one who spends less time making things and more time deciding what things should be. Less pixel pushing, more direction setting. Less production, more judgment.",
          "Nobody prepared me for this shift. Not design school. Not the design community. Everyone is still arguing about whether AI will take our jobs while the jobs themselves are quietly becoming something else.",
        ],
      },
      {
        heading: "What I actually do now",
        body: [
          "A year ago my week looked like this: design screens in Figma (40%), write documentation (20%), sit in meetings about the screens and the documentation (25%), actual thinking time (15%).",
          "Now it is different. I spend maybe 15% of my week in Figma. The rest is defining what needs to be built, reviewing what AI generated, refining the parts that need human taste, and — this is the weird one — actually shipping things.",
          "I ship more now than I ever did as a pure designer. Not because I learned to code. Because AI handles the production work and I handle the direction. The ratio flipped. I used to spend 80% of my time executing and 20% deciding. Now it is maybe 30% executing and 70% deciding.",
          "The quality of my decisions improved because I have more time to think. The quality of execution is roughly the same — but it happens in hours instead of days.",
        ],
      },
      {
        heading: "What I stopped doing (completely)",
        body: [
          "I stopped designing every state of every component by hand. AI generates the loading, empty, error, disabled, focused, hovered, active states from the base design. I review and approve. Five minutes instead of two hours.",
          "I stopped writing documentation from scratch. I describe the component, Claude writes the usage guidelines, accessibility notes, and code examples. I edit for voice and accuracy. Documentation used to be the part I dreaded most. Now I barely think about it.",
          "I stopped doing competitive audits manually. An agent researches competitors, screenshots their interfaces, identifies patterns, and writes a summary. I read the summary and spot the insights a machine would miss.",
          "I stopped doing SEO and performance audits myself. My agent checks my site weekly and fixes what it can.",
          "None of these are design tasks exactly. But they were eating design time. Now they are not.",
        ],
      },
      {
        heading: "What got harder",
        body: [
          "Something else happened that nobody warned me about. When AI handles the production, the pressure on my judgment goes up. There is no buffer anymore. No 'I spent three days on this so it must be good.' If I make a bad call on direction, AI amplifies it across every variant, every state, every breakpoint — in minutes instead of days.",
          "The speed is intoxicating. And dangerous. I have shipped things too fast because the AI made it easy, only to realise later that I had not thought through the edge case properly. The old slow process had a hidden benefit: friction gave me time to second-guess myself. Now I need to build that friction intentionally.",
          "I also had to get comfortable with a new kind of ambiguity. When I designed every pixel myself, I knew exactly why each decision was made — because I made it. Now I review AI output and sometimes think: this is better than what I would have done, but I am not sure why. That is unsettling. The machine occasionally has better taste than me on specific execution details. My job becomes recognising when that happens, and knowing when to override it.",
        ],
      },
      {
        heading: "What I tell people who ask about this",
        body: [
          "Junior designers ask me if they should learn AI tools or focus on traditional craft. My answer is unsatisfying: both, but not equally.",
          "Learn the tools. But learn them like you learn keyboard shortcuts, not like you learn typography. They will change. Next year's AI design tool will not work like this year's. The underlying skill that does not expire is taste. Judgment. The ability to look at two versions of something and know which one is right — and more importantly, why.",
          "I would also say: stop thinking of AI as a tool and start thinking of it as a junior designer you are directing. Be specific about what you want. Review everything. Do not accept output you cannot explain. The worst thing you can do is treat AI like magic and ship whatever it gives you. The best thing: treat it like a very fast but occasionally confused teammate who needs clear direction and constant feedback.",
        ],
      },
      {
        heading: "The part nobody is saying out loud",
        body: [
          "Here is what I actually think: a lot of what we called 'design skill' in the last decade was actually production skill. Making things look polished. Creating exhaustive component libraries. Writing thorough documentation. These are valuable — but they are repeatable. And AI is really good at repeatable things.",
          "What remains is harder to teach and harder to automate. Understanding users deeply enough to know what they need before they do. Making trade-offs between business goals and user needs. Building trust with stakeholders. Recognising when a design is good enough to ship versus when it needs another round.",
          "These are not new skills. They have always been the most important part of design. AI just stripped away everything else, and suddenly they are the only thing left.",
          "That is uncomfortable if you built your career on execution craft. It is liberating if you always felt that the thinking was the real work and the pixel-pushing was just the delivery mechanism.",
          "I am in the second camp. But I did not know it until AI forced me to find out.",
        ],
      },
    ],
  },
  {
    slug: "building-what-i-design",
    date: "08 Jun 2026",
    category: "AI & Development",
    title: "I Started Building What I Design — Here's What Changed",
    excerpt:
      "For 10 years I designed and handed off. Then I picked up Claude, OpenCode, and Next.js. Now I ship what I design — the transition, the mistakes, and the wins.",
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
    category: "AI & Design",
    title: "Agent Platforms for Designers: A No-Nonsense Guide",
    excerpt:
      "I set up Hermes, wired it to n8n, and now AI agents handle my SEO, research, and repetitive design tasks. What agent platforms actually do — no hype.",
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
    category: "Design Systems",
    title: "How AI Cut My Design System Workflow from Weeks to Hours",
    excerpt:
      "I used to spend two weeks on a component set. Now I design in Claude, convert to Figma, and ship in an afternoon. The workflow, and where AI falls short.",
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
  {
    slug: "senior-product-designer-dubai",
    date: "05 Jul 2026",
    category: "Career",
    title: "Being a Senior Product Designer in Dubai (the version nobody posts on LinkedIn)",
    excerpt:
      "I moved to Dubai four years ago. Not for the tax-free salary, not for the Burj Khalifa views, not for the Instagram brunches. What nobody posts on LinkedIn.",
    readTime: "7 min read",
    content: [
      {
        heading: "The move nobody asks about",
        body: [
          "I moved to Dubai four years ago. Not for the tax-free salary, not for the Burj Khalifa views, not for the Instagram brunches. I moved because a project I was freelancing on turned into a full-time offer at Valmont Industries, and I needed to be closer to the agricultural dealers and field technicians I was designing for.",
          "Nobody tells you this when you search \"senior product designer Dubai\" on LinkedIn. Most of the work here is not glamorous. It is not designing the next big consumer app. It is sitting in a hybrid office in Dubai Investments Park, trying to figure out why a dealer in rural Egypt cannot find the submit button because the latency on their ancient tablet makes the modal disappear before they can tap it.",
          "That is the real Dubai design scene.",
        ],
      },
      {
        heading: "What the day-to-day actually looks like",
        body: [
          "At Valmont, I have been leading UX/UI for five enterprise web applications. These are not sexy products. They are tools for agricultural dealers and field technicians across 40 countries. Irrigation scheduling. Inventory management. Service requests. The kind of software that makes or breaks a farmer\'s season.",
          "The biggest project was a legacy consolidation. Five separate apps, each built by different teams over a decade, all with their own design language, navigation patterns, and god-awful colour palettes. My job: unify them into a single platform.",
          "This took 18 months. Not because the UI was complicated. Because the politics were. Every app had a product owner who believed their users were \"special\" and could not possibly use the same navigation as everyone else. I spent more meetings explaining why consistency matters than I did actually designing anything.",
          "The result is a shared component library with 60+ reusable components, design tokens, and documentation that actually gets used. But getting there meant sitting through 40-minute arguments about whether a button should have rounded corners or sharp ones. I wish I was joking.",
        ],
      },
      {
        heading: "Freelancing in Dubai is weird",
        body: [
          "Before Valmont, I freelanced for years. Dubai is a strange market for freelance designers. You get two types of clients. Startups with zero budget who want \"the Apple of fintech\" for 5,000 AED. And government entities who want you to redesign their portal but will not let you talk to any actual users.",
          "I learned to say no to both. The startups burn you out. The government projects pay well but move at the speed of bureaucracy. The sweet spot is mid-sized companies that have real products, real users, and real problems, but no in-house design team.",
          "One project that actually mattered: a logistics dashboard for a company tracking cold chain shipments across the GCC. The original design had 47 data points on a single screen. The operations team could not find the temperature alerts because they were buried under 12 other metrics. I spent two weeks watching them work, realised they only needed six metrics at a time, and redesigned the whole thing around a \"what needs your attention right now\" philosophy. Alert response conversion went up 34%.",
          "That is the work that keeps me going. Not the portfolio-polished case studies. The real impact on real people doing real jobs.",
        ],
      },
      {
        heading: "The tools I actually use right now",
        body: [
          "I see a lot of senior product designers in Dubai flexing their design thinking workshops and Miro boards. Cool. I use Figma, same as everyone. But here is what has actually changed my workflow in the last year.",
          "AI tools. Daily. Not for generating entire UIs. That is still mostly garbage for anything complex. But for the boring stuff. Figma AI helps me rename layers and generate variant sets. Claude helps me write microcopy. I built an n8n workflow that takes my Hotjar session recordings, summarises user behaviour patterns, and drops them into a Notion database with suggested design changes. Saves me about six hours a week.",
          "The thing that genuinely surprised me was Cursor and Claude Code for bridging design and front-end. I write HTML, CSS, and TypeScript myself. But when I am building prototypes for Valmont, I can go from a Figma frame to a working React component in about 40 minutes. Not production ready. But good enough to test with real users. That speed matters when your stakeholders are in different time zones and you only get one shot at feedback.",
          "I am also tinkering with Agentic Experience Design. Designing interfaces where the AI is an active participant, not just a search bar. Think: a field technician says \"show me the last three service reports for this pump\" and the system surfaces them without navigating through five menus. I built a prototype using Hermes and OpenAI\'s API. It is clunky. But it points to where we are heading.",
        ],
      },
      {
        heading: "Things I wish someone had told me",
        body: [
          "\"Senior Product Designer\" means completely different things depending on where you land. At some companies here, you are the only designer and you also do QA testing and write the copy. At others, you manage a team and never touch Figma. I have done both. Neither is wrong. The important thing is knowing which one you are walking into.",
          "The market is small. Dubai has maybe 200 to 300 product design roles at any given time. Most are fintech, real estate, or logistics. Consumer tech is basically nonexistent here. If you want to design social apps, London or Berlin will give you more options.",
          "The best part, and I mean this, is the user diversity. I have designed for users in Egypt, Saudi, Pakistan, Kenya, and Brazil, all from one office. A Nigerian dealer does not navigate the same way a German one does. Colours carry different meanings. Iconography that reads clearly in one country is confusing in another. You cannot take a Western design system, translate the strings, and call it a day.",
          "I have been doing this for 11 years. I have built design systems that scaled across five products. I have consolidated legacy apps. I have freelanced, worked in agencies, and worked in-house. Dubai has been good to me.",
          "But if you are coming here expecting the Instagram version, the sky-pool meetings, the effortless career growth, you will be disappointed. The real work is the same everywhere. It is messy. It is political. It is solving the same problems over and over until they stick.",
          "The difference in Dubai is you get to solve those problems for a genuinely global user base, in a city that is still figuring out what it wants to be. That is interesting. That is why I am still here.",
          "And those agricultural dealers in rural Egypt? They still cannot find the submit button sometimes. But we are getting there.",
        ],
      },
    ],
  },
  {
    slug: "senior-product-designer-riyadh",
    date: "05 Jul 2026",
    category: "Career",
    title: "Designing for Riyadh: What Nobody Tells You About Product Design in Saudi Arabia",
    excerpt:
      "The first Saudi government portal I worked on, I made a mistake that still makes me cringe — I designed it left-to-right, in English. Riyadh taught me the rest.",
    readTime: "7 min read",
    content: [
      {
        heading: "I moved to Dubai eight years ago thinking I understood the Middle East. I did not. And when I started taking on projects that served users in Riyadh, I realized I knew even less than I thought.",
        body: [
          "The first Saudi government portal I worked on, I made a mistake that still makes me cringe. I designed the entire interface left-to-right, in English, and figured I would just flip it for Arabic later. Flip it. Like it was a mirror. Like Arabic speakers were just English speakers who happened to read the other way. I spent two weeks on a layout that completely fell apart the moment someone pasted actual Arabic content into it. The text did not just reverse, the entire visual hierarchy collapsed. Call-to-action buttons that felt natural in English looked lost in Arabic. The information architecture I was so proud of assumed a reading pattern that half the users did not follow.",
          "I had to rebuild the whole thing from scratch. That was a 5,000 AED lesson in humility.",
        ],
      },
      {
        heading: "The bilingual thing is not just about layout",
        body: [
          "If you are a senior product designer in Riyadh, or looking to work there, you already know the obvious stuff. The Vision 2030 momentum. The flood of government digitization contracts. The sheer volume of new startups that need someone who can actually ship, not just make Figma look pretty. What you might not know is the stuff that only becomes visible after you have shipped a few products that real Saudis use every day.",
          "The bilingual thing is not just about layout. It is about trust. Saudi users have been burned by bad localization for years. Government apps where the Arabic feels like Google Translate. Bank portals where the switch language button literally breaks the navigation. When you design an interface that genuinely works in both languages, where the Arabic does not feel like an afterthought, users notice. I have had users message me specifically about the Arabic version of an app, thanking me because \"finally something that reads like a human wrote it.\" That feedback means more than any NPS score.",
          "I learned this the hard way on the Voyacher travel platform. Voyacher serves the Qatar and broader Gulf market, mostly Arabic-speaking travelers booking flights and packages. The design challenge was not just making a booking flow. It was building something that felt native to a user in Doha or Riyadh, not a skinned version of a Western travel site. Cultural patterns around travel booking are different here. Group bookings with extended family. Last-minute decisions during Eid breaks. Payment preferences that do not match the Stripe checkout you copied from a Dribbble shot. I redesigned the entire booking experience from the ground up, and the version that shipped works seamlessly RTL and LTR without a single layout hack. That came from failing at it once before.",
        ],
      },
      {
        heading: "Enterprise design in Saudi is a different sport",
        body: [
          "Another thing nobody tells you: enterprise design in Saudi is a different sport. At Valmont Industries, I led UX for five enterprise apps serving agriculture across 40 countries. Heavy stuff. Data tables with 47 data points per row. Irrigation dashboards that actual farmers look at at 5 AM before heading out. The kind of complexity where a bad dropdown menu literally costs someone a day of crop yield.",
          "When I consolidated those five legacy apps into a single unified platform, the hardest part was not the visual design. It was convincing stakeholders that \"clean and simple\" does not mean \"less powerful.\" Saudi enterprise clients, especially government-adjacent ones, tend to equate features with value. More buttons, more tables, more everything. Your job as a designer is to push back without sounding like you do not understand their business. That takes years to learn.",
          "I built a 60-plus component design system to support that consolidation. The design-to-dev handoff time dropped 40 percent, which sounds impressive until you realize the previous handoff process involved annotated PDFs and Slack threads that spiraled into 200 messages. So yeah, 40 percent improvement. The real win was that the system worked. Engineers stopped asking me the same questions every sprint. The components handled edge cases I had not even thought of because the engineers had already solved them within the system. That is what a real design system does. It is not a Figma library you show off in your portfolio. It is a thing that makes your teammates not hate you.",
        ],
      },
      {
        heading: "The code advantage",
        body: [
          "These days I code more than I used to. React, Next.js, TypeScript. I use AI tools like Claude and Cursor and n8n to move faster, but I am not one of those designers who thinks AI replaces thinking. It replaces typing. There is a difference. When I built FinFlow, a savings app I designed and shipped as a freelance project, I wrote most of the frontend myself. It is hard to design a component you cannot build. And in Riyadh, where the talent market is still catching up to the ambition, being a designer who can also read a pull request gives you leverage that pure visual designers simply do not have.",
          "The best part about designing for the Saudi market right now is that things are not settled. There is no dominant design pattern for government services yet. No one has figured out the perfect mobile banking flow for a population that skews young, digital-native, and impatient. Every project feels like you are building the first version of something, because in many cases you are. That is rare. In most mature markets, you spend your career optimizing existing patterns by two percent. Here you get to define the pattern.",
          "The worst part is the timeline expectations. Everything is urgent. Everything was supposed to launch yesterday. You learn to say no a lot. You learn to ship the version that solves 80 percent of the problem and iterate live, because waiting for perfection means the project gets canceled or handed to someone who says yes faster. That is not a Saudi problem specifically, but the pace of transformation here amplifies it. Vision 2030 is not sitting around waiting for your design review.",
          "If you are a senior product designer considering Riyadh, or already working there and wondering if your experience is normal: it probably is. Designing here means navigating bilingual interfaces, enterprise clients with deep skepticism, and deadlines that should be illegal. It also means shipping work that millions of people actually use, in a market where good design is genuinely scarce and genuinely valued.",
          "I would take that trade any day.",
        ],
      },
    ],
  },
  {
    slug: "product-designer-kerala",
    date: "05 Jul 2026",
    category: "Career",
    title: "I\'m a product designer from Kerala. Here\'s what 11 years of designing for global clients actually looks like.",
    excerpt:
      "11 years of designing for global clients from Kerala — what it actually looks like, from enterprise design systems to the craft that shaped it all.",
    readTime: "7 min read",
    content: [
      {
        heading: "Three years ago, I was sitting in my apartment in Dubai, staring at five separate enterprise apps that all did roughly the same thing. Different codebases, different UI patterns, different login screens. Farmers in 40 countries were using these things daily, and every single one looked like it came from a different company.",
        body: [
          "I was the guy who had to fix this mess.",
          "That\'s the kind of problem nobody tells you about in design school. They teach you grids and color theory and maybe some Figma basics. They don\'t teach you how to convince a room full of engineers in Iowa that consolidating five legacy agriculture apps into one platform is worth six months of their lives. They definitely don\'t teach you how to do it when half the stakeholders have never met you in person.",
          "I\'m from Kerala. I did my diploma in Bangalore, bounced around startups for a few years, and eventually landed at Valmont Industries as their Senior Product Designer. That\'s where the five-app consolidation project happened. It took 18 months, a lot of late nights, and more stakeholder presentations than I care to remember. But we shipped it. One unified platform. 60+ reusable components in a design system we built from scratch. Design-to-dev handoff time dropped by 40%.",
          "Here\'s the thing about being a **product designer from Kerala** working globally: your location stops mattering the moment your work speaks louder than your address.",
        ],
      },
      {
        heading: "The remote design reality nobody talks about",
        body: [
          "I get messages from junior designers in Kochi and Trivandrum all the time asking how to land international clients. The assumption is that there\'s some secret. A portfolio trick. A networking hack.",
          "There isn\'t.",
          "When I started freelancing, I took on projects I had no business taking. A fintech savings app called FinFlow. A travel platform redesign for Voyacher. Logistics dashboards. I learned on the job, messed up plenty, and got better by doing the work, not by reading threads about how to get the work.",
          "The one advantage I had was that I could code. Not \"I took a HTML course once\" coding. I could actually build the things I designed. HTML, CSS, TypeScript, React, Next.js. When a client in Dubai asks \"how long will this take to implement,\" I can give them an answer based on experience, not a guess. That alone has won me more projects than any portfolio piece.",
        ],
      },
      {
        heading: "The Kerala advantage is real",
        body: [
          "I didn\'t fully appreciate this until I started working with designers from other parts of the world. Growing up in Kerala gives you a few things that translate shockingly well to product design work:",
          "You\'re fluent in English from primary school onward. That matters when you\'re writing microcopy, presenting to US clients, or arguing about button labels in a Slack thread at 11 PM.",
          "You grow up surrounded by dense visual information. Temple architecture, hand-painted film posters, the controlled chaos of a Thrissur market. You develop an eye for composition without realizing it.",
          "And honestly? You learn to work with constraints. Unreliable electricity, slow internet, tight budgets. When a client says \"we need this in two weeks,\" you don\'t flinch. You\'ve dealt with worse.",
          "None of this guarantees you\'ll be a good designer. But it means you\'re not starting from behind.",
        ],
      },
      {
        heading: "How AI actually changed things (not the hype version)",
        body: [
          "Two years ago, I would have told you AI tools were interesting but not useful for serious design work. I was wrong.",
          "I use Claude daily now. Not for generating designs. I use it to write design specs faster, to audit my own work for consistency issues, to translate stakeholder feedback into actionable tasks. I built workflows in n8n that automate the boring parts of design ops. I use Cursor when I\'m prototyping in code. I run a local AI assistant called Hermes that handles research and documentation.",
          "The real shift isn\'t that AI replaces designers. It\'s that AI makes a solo designer in Kozhikode as productive as a small team in San Francisco. The playing field didn\'t just level. It tilted.",
          "For **UX designers in Kerala** who want global clients, this is the actual opportunity. Not competing on price. Competing on output quality and speed, because the tools now let you operate at a level that used to require a support team.",
        ],
      },
      {
        heading: "What eleven years taught me",
        body: [
          "I\'ve designed for farmers in Brazil who couldn\'t read English. I\'ve designed for fintech users who save 500 rupees a month and need to see that progress clearly. I\'ve designed for logistics operators who need to scan a dashboard in three seconds and make a decision.",
          "Every one of these users taught me the same lesson: nobody cares about your Figma file. Nobody cares about your design system documentation. They care whether the thing works, whether it\'s obvious, and whether it gets out of their way.",
          "If you\'re a **product designer in Kerala** trying to break into global work, build real things. Don\'t just post case studies. Ship side projects. Write about what you learned. Put your actual thinking in public, not just the polished final mockups. The clients who matter will find you through the work, not through your Dribbble profile.",
          "I\'m still figuring things out myself. I still take on projects that scare me. I still have days where I open Figma and stare at a blank canvas for an hour before anything useful happens. But I\'ve stopped waiting for permission to do the work.",
          "That\'s the whole thing, really. The work is the permission.",
        ],
      },
    ],
  },
  {
    slug: "product-designer-kochi",
    date: "05 Jul 2026",
    category: "Career",
    title: "I\'m a Product Designer Working from Kochi. Here\'s What That Actually Looks Like.",
    excerpt:
      "Working from Kochi as a product designer — what that actually looks like day to day, and why Kerala's startup scene is punching above its weight.",
    readTime: "7 min read",
    content: [
      {
        heading: "Three years ago, I was sitting in a client meeting in Dubai, explaining wireframes to stakeholders in Saudi Arabia, while my mom was WhatsApping me photos of the fish curry she\'d made for lunch back in Kerala. My colleague leaned over and whispered, *\"Wait, you\'re from Kochi? Like... Kochi, Kerala?\"*",
        body: [
          "I nodded.",
          "*\"And you\'re doing product design... from there?\"*",
          "I nodded again, and honestly, I didn\'t fully appreciate how strange that sounded until much later.",
          "I\'m Mohammed Noushad. I\'ve been a product designer for 11 years now. Most of that time, I lived in Dubai. But for the past few years, I\'ve been splitting my time between Dubai and Kochi, and increasingly, Kochi is where I do my best work.",
          "This isn\'t one of those *\"Kochi is the next Silicon Valley\"* posts. It\'s not. And I\'m not going to tell you that working from Kerala is some magical productivity hack. Some days the power goes out, sometimes the internet gets moody, and I\'ve definitely taken calls where an auto-rickshaw horn became an accidental sound effect in my design review.",
          "But here\'s what\'s actually true: Kochi is quietly becoming one of the most interesting places in India to be a product designer, and almost nobody is talking about it.",
        ],
      },
      {
        heading: "The thing about Infopark that surprised me",
        body: [
          "When I first walked into Infopark a few years ago, I expected the usual IT park energy: cubicles, Dell monitors, people discussing Java frameworks. What I found instead was a startup floor that reminded me more of a WeWork in Bangalore than anything I\'d associated with Kochi before.",
          "There\'s a genuine buzz now. Fintech teams building UPI products for Tier-2 cities. A travel-tech startup that\'s actually competing with the big players on UX (I know because I redesigned a travel platform myself, Voyacher, and I\'ve seen what good travel UX looks like). Healthtech, agritech, logistics. Small teams, often under 15 people, shipping real products.",
          "The designers I\'ve met at Infopark events don\'t carry the same insecurity I see in some other cities. They\'re not constantly looking over their shoulder at what Bangalore is doing. They\'re too busy building things for the 40 million Malayalis who don\'t live in tech hubs.",
        ],
      },
      {
        heading: "Remote work leveled the playing field",
        body: [
          "Here\'s something I learned the hard way: your location doesn\'t matter nearly as much as your output.",
          "I led UX and UI for five enterprise applications at Valmont Industries, an agriculture technology company operating across 40 countries. I consolidated five legacy apps into one unified platform. I built a 60-component design system from scratch. None of my end users in Nebraska or Brazil cared whether I was sketching flows from a desk in Dubai or a coffee shop in Fort Kochi.",
          "The design-to-dev handoff time dropped by 40% after we systematized things. That number came from better component documentation, not from me being physically present in a US office.",
          "What made remote design possible wasn\'t just Figma (though Figma changed everything). It was the combination of async communication tools, screen recording for walkthroughs, and getting comfortable with the fact that a well-annotated Figma file communicates more than a two-hour meeting ever could.",
          "If you\'re a UI UX designer in Kochi wondering if you can work for a global company without moving to Bangalore, you can. I\'ve done it. You just have to be twice as organized and three times as good at written communication.",
        ],
      },
      {
        heading: "The AI thing nobody wants to admit",
        body: [
          "I use AI tools now. Claude. Cursor. n8n automations. I\'ve built my own Hermes agent setup that handles parts of my workflow I used to waste hours on.",
          "Here\'s the uncomfortable truth: AI doesn\'t make mediocre designers great. It makes good designers faster. If you can\'t articulate *why* a design decision works, no language model will fix that for you. But if you already know your craft? AI is the difference between delivering a design system in four months versus eight.",
          "This is actually where Kochi-based designers have an edge. The cost of living here means you can afford to experiment. You can spend three months going deep on AI-assisted design workflows without burning through your savings. I know designers in Bangalore paying 40% of their income on rent who can\'t take that kind of risk.",
          "I\'ve been writing HTML and CSS since I started, and I still code in TypeScript and React today. Knowing how your designs actually get built, not just how they look in a mockup, changes everything. When a developer tells me something is \"technically impossible\" in Next.js, I can usually tell whether they mean \"actually impossible\" or \"I don\'t want to do it.\" That literacy came from coding real projects, not from reading Medium articles.",
        ],
      },
      {
        heading: "What I wish someone told me 11 years ago",
        body: [
          "Nobody told me product design was a career option when I was growing up in Kerala. I moved to Bangalore for my education, worked my way into the industry, and spent years doing freelance projects for fintech startups and logistics companies before I ever called myself a \"product designer.\"",
          "The 8+ freelance clients I\'ve worked with (across fintech, travel, logistics) taught me more about design than any course could. Building FinFlow, a savings app for gig workers, taught me that good UX is about understanding money anxiety, not about pixel-perfect shadows. Redesigning a travel platform taught me that booking flows break in ways you can\'t predict until you watch a real user struggle through them.",
          "If you\'re a product designer in Kochi right now, you have something I didn\'t have: a local community. The meetups are small but serious. The designers I meet genuinely want to build better products, not just prettier Dribbble shots. And you have the infrastructure. SmartCity is expanding, the startup grants are real, and remote work means your next job could be in Toronto or Tokyo without you ever leaving your balcony in Kakkanad.",
        ],
      },
      {
        heading: "This isn\'t a pitch",
        body: [
          "I\'m not selling a course. I don\'t have a design mentorship program. I\'m just saying what I\'ve seen: Kochi works. Not because it\'s perfect. It\'s not. But because the things that actually matter for a design career (skill, communication, taste, speed) don\'t depend on your city anymore.",
          "If you\'re looking for a product designer in Kochi who can build design systems for enterprise, prototype in code, and ship things that work across 40 countries, I exist. So do a lot of other talented people here. That\'s the point.",
          "The fish curry is pretty good too.",
        ],
      },
    ],
  },
  {
    slug: "product-designer-india",
    date: "05 Jul 2026",
    category: "Career",
    title: "What Eleven Years as a Product Designer Taught Me About Building for India",
    excerpt:
      "It was 2013. I had finished my diploma and landed a freelance project — an inventory app for a textile wholesaler. It taught me what designing for India means.",
    readTime: "7 min read",
    content: [
      {
        heading: "I failed my first usability test in Bangalore and it had nothing to do with the interface.",
        body: [
          "It was 2013. I had just finished my diploma and landed a freelance project, a basic inventory app for a textile wholesaler. I showed up with clean screens, logical flows, the kind of work that impresses a portfolio review panel. The owner, a middle-aged man in a dimly lit Chickpet office, opened the app on his Samsung Galaxy Y. He squinted at the screen for maybe three seconds. Then he handed the phone to his teenage son and said, \"Tell me what this boy has made.\"",
          "I had designed everything in English. His son translated every label into Kannada, live, while I sat there pretending my \"intuitive\" interface wasn\'t completely useless to the actual user.",
          "That was my introduction to what it means to be a **product designer** serving **India**. Nobody teaches you this in a Bangalore classroom. They teach you grids and color theory and Figma. They don\'t teach you that your user might be a 55-year-old dealer in rural Maharashtra running your enterprise app on a phone with 512MB of RAM and a 3G connection that drops out every time a truck passes by.",
          "I learned that lesson properly at Valmont, where I led UX for five enterprise apps used across 40 countries. All built for Western users first, then awkwardly shipped to Indian dealers. My job was to consolidate them into one platform. I built a design system with 60-plus components. I cut design-to-dev handoff time by 40 percent. Our dealers didn\'t care about any of that. What they noticed was the app crashing when a field officer tried to upload a photo of a broken irrigation pivot. What they noticed was error messages run through Google Translate.",
          "So I stopped designing for my portfolio and started designing for that dealer.",
        ],
      },
      {
        heading: "What Being a Senior Product Designer in India Actually Means",
        body: [
          "There is a strange tension in being a **senior product designer** from **India** working out of Dubai. People hear \"Dubai\" and picture fintech dashboards for oil money. The reality is less glamorous. My mornings start at 6 AM Gulf time to catch the India team before lunch. My evenings stretch late for design reviews with European stakeholders. I have become fluent in time zone arithmetic, subtracting 1.5 hours for India, adding 3 for Europe, praying nobody schedules a meeting at 2 AM.",
          "When I graduated in Bangalore, \"UX designer\" was barely a job title. Companies wanted web designers who could use Photoshop and maybe write HTML. Now LinkedIn is flooded with product designers from India, portfolios polished, Figma skills probably sharper than mine.",
          "What hasn\'t changed is the gap between how we present our work and how it lands with Indian users.",
          "I see portfolios full of dark mode dashboards and glassmorphism effects, the visual language that wins Dribbble likes. Then I think about the Indian user opening that interface on a cracked screen under direct sunlight at a bus stop. Contrast ratios wrong. Touch targets too small. Data loads too heavy for the network. Nobody briefed the designer on real conditions. Nobody said, \"This will be used outdoors, by someone wearing reading glasses bought from a street vendor.\"",
          "At Valmont, I started testing on the worst device I could find, an old Android phone from a drawer. If it worked on that, it had a chance in the field. If it didn\'t, I stripped things down. No animations. No unnecessary calls. Text readable with brightness maxed because the user was standing in a wheat field at noon. This isn\'t portfolio work. It\'s what keeps a business running.",
          "My freelance work taught me the same lessons. I built FinFlow, a savings app. I rebuilt the Voyacher travel platform. These projects let me code, which I genuinely enjoy. HTML, CSS, TypeScript, React, Next.js. I use AI tools now, Claude, Cursor, n8n. None of them solve the fundamental problem: understanding the person on the other end of the screen.",
          "Indian users are not a monolith. I have designed for English-speaking founders in Bangalore and for Hindi-speaking agricultural dealers in Uttar Pradesh. For users who read Arabic, which I can do haltingly. For users who speak Malayalam, my native language. For users who switch between three languages mid-conversation. The app handles this gracefully or it fails.",
          "Supporting a language is not just translating strings. A Kannada label might be 40 percent longer than English, breaking your carefully laid out form. Concepts like \"depreciation schedule\" don\'t have clean translations. You design around the explanation, not the word.",
          "I moved to Dubai years ago. It\'s a good base. The work is steady, the exposure real. But India never leaves your design brain once it\'s been shaped there. I still think about low bandwidth, older devices, users who might not read the language my interface defaults to.",
          "Sometimes I meet designers here who have only designed for users like themselves: English speaking, high speed internet, latest iPhone. I don\'t envy them. Designing for constraints makes you better. Designing for India makes you honest because the users won\'t pretend to be impressed. They\'ll close your app and find one that works. Or they\'ll call their nephew who \"knows computers.\" Or they\'ll go back to their paper ledger that has worked fine for twenty years.",
          "That last one still haunts me. The paper ledger. The ultimate competitor. If your app cannot beat the simplicity of a notebook, it doesn\'t matter how pretty the UI is.",
          "Eleven years in. Sixty-plus component design system. Products in 40 countries. Eight-plus freelance clients across fintech, travel, logistics. I write code. I use AI tools daily. I still sit down with every new project and ask: who is actually going to use this, and what does their real day look like?",
          "Not their persona document. Not the user journey map. Their actual day. The commute. The network quality. The device in their pocket. The language they think in.",
          "That question started in a textile office in Chickpet. I have been asking it ever since.",
        ],
      },
    ],
  },
  {
    slug: "product-designer-bangalore",
    date: "05 Jul 2026",
    category: "Career",
    title: "What 11 Years of Product Design Taught Me About Standing Out in Bangalore",
    excerpt:
      "I still remember my first design class in Bangalore, 2008. No portfolio, no MacBook, no idea what \"user experience\" meant. Here's how I learned to stand out.",
    readTime: "6 min read",
    content: [
      {
        heading: "I still remember walking into my first design class in Banga...",
        body: [
          "I still remember walking into my first design class in Bangalore, 2008. Diploma program. I had no portfolio, no MacBook, and no idea what \"user experience\" even meant. I just knew I liked making things look good and I\'d spent way too much time customizing my Orkut profile. The guy next to me already had three freelance clients and a Behance page with 2,000 followers. I remember thinking: I am so far behind.",
          "That feeling never fully goes away in Bangalore. It\'s a city where everyone seems to be building something. Walk into any cafe in Koramangala and you\'ll overhear three pitch meetings before your coffee arrives. For a **product designer in Bangalore**, the talent density is absurd. I\'ve worked with designers here who can prototype faster than I can sketch. That\'s not an exaggeration.",
          "But looking back at 11 years, I think the thing that actually matters isn\'t raw skill. It\'s something quieter.",
        ],
      },
      {
        heading: "I moved to Dubai after my diploma. Not because I had a grand...",
        body: [
          "I moved to Dubai after my diploma. Not because I had a grand plan. A friend\'s uncle needed a designer for his logistics startup and offered to sponsor my visa. I said yes because it sounded better than sitting in Bangalore traffic and applying to 50 jobs a week. That logistics gig turned into eight years of building real products for real people who would yell at you if the UI broke at 2 AM.",
          "Somewhere in there I led UX and UI for five enterprise applications at Valmont, an agriculture company operating across 40 countries. When I joined, they had five separate legacy apps that looked like they were built in 2007. Different navigation patterns, inconsistent form fields, buttons doing different things on different screens. The kind of mess that makes you question your career choices at 11 PM on a Wednesday. I consolidated all of that into a single unified platform and built a 60-component design system from scratch.",
          "That design system cut our design-to-development handoff time by 40%. Not because I\'m some genius. Because when you give engineers a box of consistent Lego pieces instead of five different instruction manuals, things move faster. Shocking, I know.",
        ],
      },
      {
        heading: "I also ended up freelancing for eight plus clients along the...",
        body: [
          "I also ended up freelancing for eight plus clients along the way: fintech apps, travel platforms, logistics dashboards. One of them was an Indian fintech startup that had raised a seed round and needed a savings app built from zero. I designed and built FinFlow over four months, doing both the UI and the frontend in React. The founder was in Bangalore. I was in Dubai. We did everything over Slack and Loom. That was 2021. These days that setup is normal. Back then, it felt like we were getting away with something.",
          "Here\'s what I\'ve learned about being a **UI UX designer in Bangalore** versus everywhere else I\'ve worked:",
          "Bangalore has this unique culture where design is treated as product thinking, not decoration. In some cities, designers are the people you call after the engineers have built everything. \"Make it look nice.\" In Bangalore, especially in the startup ecosystem, design gets a seat at the table early. Founders here have seen enough products fail because of bad UX that they\'re willing to invest in it upfront. That\'s rare.",
        ],
      },
      {
        heading: "But the competition is brutal. Every year, fresh graduates p...",
        body: [
          "But the competition is brutal. Every year, fresh graduates pour out of design schools in the city. They\'re hungry. They\'ll work for less than you. They probably know Figma plugins you\'ve never heard of. So how do you stand out?",
          "For me, the answer was stepping outside pure design. I learned to code. Not \"I can center a div\" level. I mean building full applications in TypeScript, React, Next.js. I can have a design idea and ship a working prototype without waiting for an engineer. When I freelance with Indian startups, this is usually the thing that makes them say \"oh, okay.\" A designer who can hand you a Figma file is one thing. A designer who can also build the thing and handle the CSS and make sure it works on a 500-rupee Android phone is something else entirely.",
          "And then there\'s AI. I don\'t mean the buzzword version. I mean I use Claude and Cursor daily as part of my workflow. I\'ve built automations with n8n that handle stuff I used to spend hours on. I run Hermes, an AI agent framework, to extend what I can do as a solo practitioner. This is not about replacing designers. It\'s about one person being able to do work that used to take a team of three. That\'s a competitive advantage whether you\'re applying to a Bangalore startup or freelancing remotely.",
        ],
      },
      {
        heading: "The remote-first shift has changed the game for Bangalore ba...",
        body: [
          "The remote-first shift has changed the game for Bangalore based product designers. You don\'t need to be in the city physically to work with its best companies anymore. I\'m in Dubai and I still work with Bangalore startups regularly. The time difference is manageable. The cultural understanding is there; I grew up speaking Malayalam, I can hold a conversation in Hindi, and I understand how Indian users think about products differently than Western users. That matters more than a zip code.",
          "Speaking of Indian users: they\'re ruthless. In a good way. If your app loads slowly on a patchy Jio connection, you\'ll hear about it. If your checkout flow has one extra step, the drop-off will tell you everything you need to know. Designing for Indian audiences made me a better designer. You can\'t hide behind fancy animations when your users are on budget phones with 2GB of RAM.",
          "The diploma I got in Bangalore all those years ago wasn\'t the thing that made me a designer. It gave me a foundation. The rest came from shipping work, breaking things, and having enough uncomfortable conversations with engineers to learn what actually matters. My portfolio at enkay.dev has the projects that survived.",
        ],
      },
      {
        heading: "If you\'re a product designer in Bangalore right now, here\'s ...",
        body: [
          "If you\'re a product designer in Bangalore right now, here\'s my honest take: the city has more design talent than almost anywhere. That means being \"good at Figma\" won\'t differentiate you. What will differentiate you is being the designer who can also build, the designer who understands AI workflows, the designer who has shipped something real and can point to it. Not just Dribbble shots. Actual products that people use and occasionally complain about.",
          "That\'s the bar now. It\'s high. But honestly, that\'s why I still like doing this after 11 years.",
        ],
      },
    ],
  },
  {
    slug: "product-designer-abu-dhabi",
    date: "05 Jul 2026",
    category: "Career",
    title: "What 11 Years of Product Design Taught Me About Working in Abu Dhabi",
    excerpt:
      "Eight years in, I'd shipped enterprise apps across forty countries and built a sixty-component design system. Working for Abu Dhabi changed my approach.",
    readTime: "7 min read",
    content: [
      {
        heading: "When someone searches for a \"product designer abu dhabi\" on LinkedIn, they probably picture gleaming government portals and ADGM fintech apps. Six months into my first Abu Dhabi government project, I sat in a meeting room with twelve stakeholders staring at a wireframe I\'d spent three days on. A senior director pointed at the Arabic header and said, \"This reads left to right in your layout. We read right to left. Fix it before tomorrow\'s review.\"",
        body: [
          "I\'d been a product designer for eight years at that point. I\'d shipped enterprise apps across forty countries at Valmont. I\'d built a sixty-component design system from scratch. And I\'d just made the most basic bilingual mistake a ui ux designer abu dhabi could make.",
          "Nobody else in the room laughed. I didn\'t either, until I got to my car.",
        ],
      },
      {
        heading: "Dubai gets the headlines. Abu Dhabi gets the work.",
        body: [
          "When people hear \"product designer UAE,\" they picture Dubai. DIFC fintechs, startup incubators, flashy consumer apps. I\'ve worked with Dubai clients. The energy is real. But Abu Dhabi is a different animal.",
          "Abu Dhabi\'s design landscape is dominated by government, enterprise, and the ADGM fintech corridor. Government is the biggest player. Multiple semi-autonomous entities, each with their own digital transformation timeline, legacy systems, and vendor relationships stretching back a decade.",
          "A government portal project here doesn\'t start with a blank Figma file. It starts with three existing portals that need consolidating, a legacy Oracle backend from 2012, and a bilingual requirement touching every component.",
          "I learned this on a government-adjacent project where the client needed an Arabic-first interface for citizen services. Arabic-first, not Arabic-translated. Entirely different problem.",
        ],
      },
      {
        heading: "Bilingual design isn\'t translation. It\'s a layout problem.",
        body: [
          "Most designers treat Arabic as a translation layer. Design in English, hand off strings to a translator, flip the layout. Works for a marketing page. Falls apart on a government services portal.",
          "Arabic text expands by roughly thirty percent compared to English. Navigation labels that fit neatly in a sidebar spill into two lines. Tables designed for left-to-right scanning break when the reading direction flips. Everything shifts.",
          "At Valmont, we supported forty countries but one primary language per deployment. Abu Dhabi forced me to rethink every layout decision through a bidirectional lens. Components that worked in both directions. Grid systems independent of reading order. Icon placements that made sense regardless of text alignment. Type scales accounting for Arabic script\'s visual weight, which lands differently on screen than Latin characters.",
          "Government portals here legally require Arabic interfaces. If your Arabic layout breaks, your project is not delayed. It is dead.",
        ],
      },
      {
        heading: "The ADGM effect",
        body: [
          "Abu Dhabi Global Market has built a fintech ecosystem under English common law. It attracts the kind of client I freelanced for with FinFlow, my savings optimization app. ADGM startups move fast, want clean interfaces, and don\'t carry the legacy baggage of government.",
          "But they share one thing with government clients: designers who understand compliance. ADGM-regulated apps have disclosure requirements, risk warnings, data residency rules. These aren\'t product decisions. They are legal constraints shaping every screen.",
          "The best product designers here sit at the intersection of government compliance and fintech agility. Enterprise-grade interfaces that pass regulatory review, built with component reusability and startup iteration speed.",
        ],
      },
      {
        heading: "What the job market looks like",
        body: [
          "Search for a \"product designer abu dhabi\" role and you\'ll find three categories.",
          "Government and semi-government entities. They pay well, move slowly, care about pedigree. They want designers who\'ve worked on complex systems. Your Dribbble portfolio of weather app redesigns won\'t cut it.",
          "ADGM fintechs and consultancies. They want T-shaped designers who handle research, interaction design, and some front-end code. I\'ve been hired specifically because I read TypeScript and understand what\'s feasible before handoff.",
          "Agencies servicing the first two. The stepping stone. You work on government portals through an agency before a government entity hires you directly.",
          "I\'ve freelanced for eight plus clients across all three. The common thread, whether it was a fintech app or a travel platform redesign for Voyacher: Abu Dhabi clients don\'t care about design trends. They care whether your solution works in production with actual users.",
        ],
      },
      {
        heading: "Design systems solve different problems here",
        body: [
          "At Valmont, I built a sixty-component design system that reduced design-to-dev handoff by forty percent. In the US enterprise market, design systems are about speed and consistency. Here, they\'re also about governance.",
          "When a government entity adopts a design system, they\'re creating a single source of truth that multiple vendors follow over multi-year contracts. A dropdown component isn\'t just a dropdown. It\'s a compliance artifact.",
          "Every component needs documentation for its bilingual behavior, accessibility compliance, and fallback states for low-bandwidth connections. Some citizen services portals still need to work on devices that would qualify as vintage anywhere else.",
        ],
      },
      {
        heading: "The AI tools nobody talks about",
        body: [
          "I use AI tools heavily. Claude for research synthesis. Cursor for prototyping in React and Next.js. n8n for workflow automation. Hermes for agent-based tasks.",
          "Most design influencers talk about AI as a concept generator. That\'s not where the real gain is.",
          "The real gain is reducing the gap between design intent and working code. When I prototype a complex form in React directly from a design concept, stakeholder review happens on a real interface, not a Figma prototype that lies about performance. Government stakeholders here have been burned by beautiful prototypes that couldn\'t be implemented within their tech stack.",
        ],
      },
      {
        heading: "What I\'d tell a product designer considering Abu Dhabi",
        body: [
          "The market is smaller than Dubai but less saturated. Government work is stable. ADGM fintech is growing. Bilingual design skills are table stakes.",
          "Learn right-to-left layouts properly. Not just flipping the canvas. Understand Arabic typography, visual hierarchy, and how information architecture changes when users scan from right to left.",
          "Build a portfolio that shows complex systems, not beautiful screens. Abu Dhabi clients want enterprise complexity. Show them the sixty-component design system, not the landing page.",
          "Learn to sit in a room with twelve stakeholders and take feedback without getting defensive. The review culture here is direct. People point out problems in front of everyone. It\'s not personal. It\'s how things get built.",
          "I still think about that bilingual layout mistake from my first Abu Dhabi project. These days, every file I open starts with both language directions visible. Some lessons only stick when they cost you a weekend of rework and a very quiet drive home.",
        ],
      },
    ],
  },
  {
    slug: "product-designer-sharjah",
    date: "05 Jul 2026",
    category: "Career",
    title: "What 11 Years of Product Design Taught Me About Working in Sharjah",
    excerpt:
      "Three years ago I took a wrong turn near University City — and found Sharjah, the UAE's cultural and educational heart. Designing for it changed my perspective.",
    readTime: "6 min read",
    content: [
      {
        heading: "Three years ago I took a wrong turn coming back from a clien...",
        body: [
          "Three years ago I took a wrong turn coming back from a client meeting and ended up somewhere near University City. I\'d lived in the UAE for years but Sharjah was always just the emirate you passed through on the way to the northern ones. That afternoon I parked near a coffee shop, watched students spill out of campus gates, and realized I knew nothing about the place where a huge chunk of this country\'s actual thinking happens.",
          "I\'m a product designer. Eleven years doing it, five of those in Dubai. I\'ve led UX for enterprise apps at Valmont where we consolidated five separate legacy systems into one unified platform used across 40 countries. I built a 60+ component design system from scratch. I cut design-to-dev handoff time by 40%. And yet I\'d somehow never seriously considered Sharjah as a place where design work happens.",
        ],
      },
      {
        heading: "That was dumb of me.",
        body: [
          "That was dumb of me.",
          "Sharjah isn\'t Dubai\'s quieter cousin. It\'s a different thing entirely. Dubai runs on speed. Sharjah runs on depth. Walk through Sharjah Publishing City or the Book Authority headquarters and you feel the difference immediately. This emirate has positioned itself as the cultural and educational backbone of the UAE and that creates a specific kind of design demand most product designers overlook.",
        ],
      },
      {
        heading: "When you design for an edtech platform aimed at Arabic-speak...",
        body: [
          "When you design for an edtech platform aimed at Arabic-speaking university students you\'re not just slapping an RTL toggle on an English UI and calling it a day. The reading patterns are different. The visual hierarchy expectations are different. Arabic typography interacts differently with UI density and card layouts. These aren\'t edge cases. They\'re core design concerns affecting millions of users. Sharjah, with its concentration of universities and publishing houses, is ground zero for getting this right.",
          "I started actively looking for design work connected to Sharjah about a year ago. Not because I wanted to move offices but because the problems were more interesting than I expected. A bilingual Arabic/English learning management system. A digital archive interface for a publishing house with documents spanning 70 years. A fintech savings app called FinFlow that needed to work for users who think about money differently than the typical Revolut user in London.",
        ],
      },
      {
        heading: "These projects forced me to unlearn some habits. In Dubai th...",
        body: [
          "These projects forced me to unlearn some habits. In Dubai the default assumption is English comes first and Arabic is the translation layer. In Sharjah that assumption flips for a significant portion of users. Designing bilingual interfaces where neither language feels secondary is genuinely hard. It affects navigation structures, information density, even the emotional tone of microcopy. I\'ve had to rework entire component libraries because what felt natural in left-to-right flow created friction in right-to-left.",
          "The other thing about Sharjah that doesn\'t get talked about enough is cost. Startups burn cash on Dubai office space and wonder why their runway shrinks. Sharjah offers licensing packages and commercial space at a fraction of Dubai prices. I\'ve worked with two early-stage startups in the last year that chose Sharjah specifically for this reason. They get access to the same talent pool, they\'re 20 minutes from Dubai when they need to be there, and they keep enough capital to actually iterate on product instead of just paying rent.",
        ],
      },
      {
        heading: "For a product designer this matters because longer runway me...",
        body: [
          "For a product designer this matters because longer runway means more design cycles and more user research. I can\'t tell you how many Dubai startups I\'ve seen ship half baked MVPs because the burn rate forced their hand. Sharjah based teams I\'ve worked with have been able to do proper discovery phases. They run usability tests with actual target users from the universities. They iterate. The output is visibly better.",
          "The remote and hybrid angle is also real. Post pandemic, a lot of designers I know moved to Sharjah or Ajman because they could get larger homes with actual office space for the same rent as a one bedroom in Marina. Commuting into Dubai two or three days a week is manageable. The rest of the time they\'re working from home setups that actually support deep work. I do hybrid myself. Some days I\'m in Dubai for client workshops. Other days I\'m at my desk with Claude and Cursor open, building prototypes in React and Next.js, running n8n automations for design ops tasks that used to eat hours of manual work.",
        ],
      },
      {
        heading: "I should clarify something. When I say I\'m a product designe...",
        body: [
          "I should clarify something. When I say I\'m a product designer who codes I don\'t mean I dabble in HTML. I write TypeScript. I build in React and Next.js. I use AI tools like Claude and Cursor to accelerate my workflow but the foundation is real. That matters in Sharjah where companies often can\'t afford separate design and front end teams. A designer who can take something from Figma to functional prototype without a handoff bottleneck is worth their weight in gold. I\'ve seen the 40% reduction in handoff time prove itself across eight freelance clients in fintech, travel, and logistics.",
          "If you\'re searching for a product designer in Sharjah or a UI UX designer in Sharjah you\'re probably either building something here or considering it. My advice: lean into what makes this emirate different. Don\'t design for Sharjah the way you\'d design for Dubai. The users aren\'t the same. The constraints aren\'t the same. The opportunity isn\'t the same. Find someone who understands bilingual UX at a structural level not just as a localization checkmark. Find someone who knows when to use a design system component and when to break the system because the context demands it.",
        ],
      },
      {
        heading: "I\'m still learning this market myself. Every project here te...",
        body: [
          "I\'m still learning this market myself. Every project here teaches me something I didn\'t know. But that\'s what I signed up for. Eleven years in and I\'d rather be slightly uncomfortable in a new problem space than comfortably repeating the same patterns with different logos.",
          "If you\'re building something interesting in Sharjah, get in touch. My portfolio is at enkay.dev. I work in English and Malayalam natively. I read enough Arabic to understand when a design isn\'t working in both languages and when it needs to be rebuilt from the ground up rather than translated.",
        ],
      },
    ],
  },
  {
    slug: "product-designer-umm-al-quwain",
    date: "05 Jul 2026",
    category: "Career",
    title: "I\'m a Product Designer Based in Umm Al Quwain. Here\'s Why That\'s Not a Typo.",
    excerpt:
      "Last month someone on LinkedIn asked, \"Mohammed, your profile says Umm Al Quwain — is that a mistake?\" No. Here's why I design from the smallest emirate.",
    readTime: "5 min read",
    content: [
      {
        heading: "Last month someone on LinkedIn messaged me with genuine conf...",
        body: [
          "Last month someone on LinkedIn messaged me with genuine confusion. \"Mohammed, your profile says Umm Al Quwain. Is that a mistake? Aren\'t all designers in Dubai?\"",
          "I laughed. Then I realized this was the fourth time I\'d gotten that question in six months.",
          "So let me clear this up. I live and work from Umm Al Quwain. Yes, the quiet emirate. No, I\'m not joking. And no, it hasn\'t hurt my career one bit.",
        ],
      },
      {
        heading: "Here\'s the thing nobody tells you about design work in 2026....",
        body: [
          "Here\'s the thing nobody tells you about design work in 2026. The client doesn\'t care where your desk is. They care whether the thing you build solves their problem. They care about the 5 enterprise apps you consolidated into one unified platform at Valmont, handling agriculture operations across 40 countries. They care about the 60+ component design system that cut handoff time by 40%. They care about results. Not coordinates.",
          "I moved to UAQ three years ago. Before that, I was in Dubai like everyone else. The commute, the noise, the rental prices that make you question every life choice you\'ve ever made. One day I asked myself what I was actually paying for. Proximity to offices I wasn\'t visiting? Coffee shops I could find anywhere?",
          "The math was embarrassingly simple. My rent dropped by more than half. My workspace got twice as big. I now have a dedicated room for my setup instead of a corner of my living room pretending to be an office. The only thing I lost was traffic.",
        ],
      },
      {
        heading: "But the real question people are asking when they message me...",
        body: [
          "But the real question people are asking when they message me about UAQ isn\'t about rent. It\'s about relevance. Can you do serious product design work from a smaller emirate? Will clients take you seriously? Does the Dubai bias still matter?",
          "I\'ve freelanced for 8+ clients across fintech, travel, and logistics since moving here. Not one has asked me to come to an office. Not one has cared about my location beyond the timezone. I built FinFlow, a savings app for the UAE market, entirely from my home office in UAQ. I redesigned the Voyacher travel platform while drinking karak from a cafeteria that costs 1 dirham.",
          "The tools I use now make location even less relevant. AI has changed my workflow in ways I didn\'t expect two years ago. I use Claude for research and content structuring. Cursor has transformed how I prototype directly in code instead of handing off static Figma files and hoping the developer reads my annotations. I build automation workflows with n8n and manage multi-agent toolchains with Hermes. I write actual HTML, CSS, TypeScript, React, and Next.js. Not because every product designer needs to code, but because when you can prototype working interfaces instead of describing them, the distance between you and the developer collapses to zero.",
        ],
      },
      {
        heading: "This is the part where I should probably say something about...",
        body: [
          "This is the part where I should probably say something about how remote work enables work-life balance or some other LinkedIn-optimized phrase. I won\'t. What I will say is this: the quiet matters. UAQ gives me the kind of focus I never had in Dubai. When I\'m deep in a design problem, working through component architecture for a design system, or untangling the UX flow for a complex enterprise dashboard, the last thing I need is noise. The smaller emirates offer something the big cities can\'t: actual uninterrupted time.",
          "There\'s another angle here I don\'t see discussed much. UAE businesses outside Dubai and Abu Dhabi need design talent too. Local companies in the northern emirates, startups in Ras Al Khaimah, government entities in Ajman. They often can\'t compete with Dubai salaries for in-house designers. But they can hire someone who understands the local context, speaks the language, and works remotely at rates that make sense for both sides. That\'s not a compromise. That\'s a market.",
          "I speak English fluently, Malayalam natively, and I read Arabic. I understand how products need to work in this region because I\'ve been here for over a decade. I\'ve led UX and UI for products deployed in 40 countries. The location on my profile doesn\'t diminish any of that.",
        ],
      },
      {
        heading: "If you\'re a product designer considering the move to Umm Al ...",
        body: [
          "If you\'re a product designer considering the move to Umm Al Quwain or any of the smaller emirates, here\'s my honest take. The cost advantage is real. You can work with UAE clients at competitive rates while keeping your expenses low. The infrastructure is solid. Internet speeds are fine. You\'re still 45 minutes from Dubai if you genuinely need to be there. And the quality of daily life improves in small but significant ways. Less time in a car. More time doing actual work. Or not doing work. Both are valid.",
          "If you\'re a business looking for a UI UX designer in UAQ, or a product designer in Umm Al Quwain, I hope this gives you a clearer picture. The talent isn\'t only in Dubai and Abu Dhabi. Some of us are out here in the quiet emirates, shipping products for clients across the UAE and beyond, with lower overhead and the same 11+ years of experience.",
          "The location thing is a filter, not a barrier. It filters out clients who think design happens in a specific postal code. It leaves the ones who care about the work itself.",
        ],
      },
      {
        heading: "I\'m fine with that.",
        body: [
          "I\'m fine with that.",
        ],
      },
    ],
  }
,
  {
    slug: "auto-india-20260713",
    date: "13 Jul 2026",
    category: "Career",
    title: "Why I Charge More Than the Average UI UX Designer Freelance Rate in India",
    excerpt:
      "My mother called from Kerala while I was building a fintech app — she couldn't send money through her bank's app. Why I charge more than the average rate.",
    readTime: "6 min read",
    content: [
      {
        heading: "I was building a fintech app for a client in Dubai when my m...",
        body: [
          "I was building a fintech app for a client in Dubai when my mother called from Kerala. She wanted to know why the bank’s app wasn’t letting her send money to my sister. I walked her through it. “Press the blue button, Amma.” She pressed the red one. The app showed an error in English. She doesn’t read English. She speaks Malayalam and some Hindi. The error might as well have been written in Martian.",
          "That was six years ago. I was three years into my career, fresh off a project where I’d designed a dashboard for a logistics company that looked gorgeous in Figma and made zero sense to anyone who actually drove a truck. I’d shipped 40+ screens, 15 user flows, and a component library that my engineering team told me was “too rigid.” I didn’t know what I didn’t know. Now I do. That’s why my freelance rate is higher than the average UI UX designer freelance rate in India.",
          "Let me be specific. I’m Mohammed Noushad. Eleven years in product design. Eight of those in Dubai. I’ve built five enterprise applications for Valmont that run in 40 countries. I designed a design system with 60+ components that cut handoff time by 40%. I’ve worked with eight freelance clients across fintech, logistics, and SaaS. I built FinFlow from zero to prototype. I designed Voyacher’s booking flow. I use Claude, Cursor, n8n, and Hermes to ship faster than most teams I’ve worked with. I write TypeScript, React, and Next.js when I need to. Not because I want to be a unicorn, but because I got tired of designers who hand off a Figma file and say “make it pop.”",
        ],
      },
      {
        heading: "Here’s the uncomfortable truth about the UI UX designer free...",
        body: [
          "Here’s the uncomfortable truth about the UI UX designer freelance rate in India. Most designers charge based on what they think the market will bear. They look at Upwork, look at Fiverr, look at their friend who charges 500 rupees an hour. They benchmark against the lowest common denominator. They forget that their rate is not a reflection of their skill. It is a reflection of their ability to solve a specific problem for a specific person in a specific context.",
          "I charge more because I solve a problem most Indian designers don’t even know exists. Multilingual UX.",
          "India has 22 official languages. Hindi is spoken by 40% of the country. English by maybe 10% as a first language. Yet 90% of the apps I see designed in India are built in English first, with Hindi as an afterthought. The text expands. The buttons break. The flow makes sense in English but reads like a ransom note in Tamil. I learned this the hard way when my mother couldn’t use that bank app. She’s not dumb. She ran a tailoring business for thirty years. She just doesn’t speak my design language.",
        ],
      },
      {
        heading: "When I design for Indian users now, I start with the languag...",
        body: [
          "When I design for Indian users now, I start with the language constraints. I design for text expansion. I design for right-to-left scripts. I design for users who switch between three languages in a single session. I test with real people who speak Malayalam, Hindi, and broken English. I test with my mother. That’s not a gimmick. That’s my QA process.",
          "The second reason I charge more is because I can code. Not just CSS and basic HTML. I write TypeScript. I build React components. I use Next.js to prototype complex interactions. I set up n8n workflows to automate user testing. I use Claude to generate edge cases I’d miss. I use Cursor as my IDE because it lets me refactor components faster than I can re-draw them in Figma. I built a Hermes integration for one client that turned their design feedback into automated test cases. That reduced their QA cycle by two weeks. They paid me three times my standard rate for that month. They still think it was a bargain.",
          "Most freelance designers in India don’t code. They hand off static screens and hope for the best. That handoff is where 60% of design value gets lost. I know because I’ve measured it. At Valmont, my component library reduced handoff time by 40%. That means engineers spent less time guessing what I meant and more time building what I designed. That’s not a buzzword. That’s a number.",
        ],
      },
      {
        heading: "The third reason is my process. I don’t do “agile” or “desig...",
        body: [
          "The third reason is my process. I don’t do “agile” or “design thinking” or any of that corporate theatre. I do research, build, test, fix, ship. I spend the first week of any project talking to users. Not stakeholders. Not product managers. Users. I call them. I visit them. I watch them use the product. I take notes on paper. I don’t record sessions because people act differently on camera. I ask them what they hate. They always tell me.",
          "For FinFlow, I spent three days in a coworking space in Bangalore watching freelancers manage their invoices. They all used the same ugly spreadsheet. They all complained about the same things. I built the first prototype in two days using Next.js and Tailwind. I showed it to five of them. Three said “I’d pay for this.” That’s validation. Not a survey. Not a RICE score. A person opening their wallet.",
          "For Voyacher, I designed the booking flow for users who book travel for their families. Not solo travelers. People booking for parents, grandparents, kids. The flow had to accommodate multiple languages, multiple payment methods, and the fact that the person booking is often not the person traveling. That’s a common pattern in Indian households. Most travel apps ignore it. Voyacher didn’t. They paid for that insight.",
        ],
      },
      {
        heading: "Now let’s talk numbers. The average UI UX designer freelance...",
        body: [
          "Now let’s talk numbers. The average UI UX designer freelance rate in India is somewhere between 1000 and 3000 rupees per hour. That’s for a mid-level designer with 3-5 years of experience. For senior designers with enterprise experience, it goes up to 5000-8000 rupees per hour. I charge 10,000 rupees per hour for new clients. I charge more for projects under 40 hours. I charge less for long-term retainer work. I don’t negotiate. I explain.",
          "When a client says “that’s too expensive,” I ask them what they’re comparing it to. They usually say “other Indian designers.” I ask them what those designers have shipped. They usually don’t know. I show them my Valmont work. I show them the 40-country deployment. I show them the 40% handoff reduction. I show them the FinFlow prototype that went from idea to working app in 14 days. I show them the Voyacher flow that reduced booking abandonment by 22% in the first month. Then I ask them if they’re still comparing me to “other Indian designers.”",
          "Most of them stop comparing.",
        ],
      },
      {
        heading: "I’m not saying I’m the best designer in India. I’m not. Ther...",
        body: [
          "I’m not saying I’m the best designer in India. I’m not. There are designers who are better at visual design, better at motion, better at strategy. But I am the best at building products that work for Indian users who speak more than one language. I am the best at shipping fast because I can code my own designs. I am the best at reducing friction between design and engineering because I’ve done it at scale.",
          "If you’re a freelance designer in India and you’re charging less than you’re worth, stop. Stop benchmarking against the market. Benchmark against the problem you solve. If you solve a problem that saves a company a month of development time, charge for that month. If you solve a problem that makes an app usable for 100 million people who don’t speak English, charge for that scale. If you solve a problem that your mother can’t solve on her own, charge for that trust.",
          "I still call my mother when I design a new flow. She still tells me when something is broken. She doesn’t know what Figma is. She doesn’t know what a design system does. But she knows when a button works. That’s the only metric that matters. And that’s why I charge what I charge.",
        ],
      },
    ],
  }
,
  {
    slug: "auto-uae-20260720",
    date: "20 Jul 2026",
    category: "Career",
    title: "The Dubai Freelance Trap and Why I Left It",
    excerpt:
      "A client from London asked where I was based while I sat in a Business Bay coworking space. I said Dubai — but freelancing in the UAE is a bigger story.",
    readTime: "6 min read",
    content: [
      {
        heading: "The Real Landscape",
        body: [
          "I was sitting in a coworking space in Business Bay, staring at my third coffee of the morning, when a client from London asked where I was based. I said Dubai. He said \"Oh, so you\'re expensive.\" I laughed. He wasn\'t wrong. But I wasn\'t charging what he thought. The problem with being a freelance product designer in Dubai is everyone assumes you\'re either a lifestyle guru or a branding ninja. Neither pays the rent. I\'ve been here 11 years. I\'ve learned the hard way that the real opportunity isn\'t in Dubai\'s shiny towers. It\'s in the messy, overlooked spaces between the other emirates.",
        ],
      },
      {
        heading: "The Abu Dhabi Reality Check",
        body: [
          "Most designers I know refuse to cross the border. They think Abu Dhabi is just a slower, quieter version of Dubai. They\'re wrong. I\'ve spent months working with government entities in Abu Dhabi where the decision cycle takes three weeks but the budget is five times what you\'d get in Dubai. The key is understanding the regulatory landscape. UAE federal laws around data privacy, procurement, and intellectual property are specific. I\'ve sat through meetings where a client from Sharjah needed a UX audit that complied with both UAE Central Bank guidelines and international accessibility standards. Most freelancers can\'t do that. I can because I\'ve built a 60-component design system for Valmont\'s global operations across 40 countries. That kind of enterprise experience translates directly to Abu Dhabi\'s bureaucracies. They don\'t want flash. They want reliability.",
        ],
      },
      {
        heading: "Sharjah\'s Silent Goldmine",
        body: [
          "Sharjah is where I do my best work. No one talks about it. The design community there is small and quiet. But the clients are serious. I worked with a logistics startup based in Sharjah\'s industrial zone. They needed a dashboard for tracking shipments across the GCC. They didn\'t care about animations or micro-interactions. They cared about real-time data accuracy and bilingual UX. Arabic and English. Not just translation but cultural adaptation. Right-to-left layouts, date formats, currency symbols. I\'ve done this so many times it\'s muscle memory. The advantage of being a freelance product designer in the UAE is you understand these nuances without being told. Clients from Sharjah to Ras Al Khaimah appreciate that. They pay slower but they pay consistently. And they refer you to their entire network.",
        ],
      },
      {
        heading: "The Global Client Advantage",
        body: [
          "I work with clients in London, Singapore, and New York. They hire me because I\'m in the UAE. Not despite it. Time zone overlap with Europe and Asia is perfect. I can do a morning call with a UK team and an evening sync with Singapore. No one else can do that without sacrificing sleep. But the real differentiator is my coding background. I write React, Next.js, and TypeScript. When I hand off a design system to a development team, I don\'t just send Figma files. I send a functional prototype with component states, responsive breakpoints, and accessibility checks. My handoff rate improved 40% when I started doing this. Clients don\'t have to guess what I meant. They see it working. That\'s rare in this market. Most product designers can\'t even inspect a CSS grid. I can build one from scratch. That trust buys me a premium.",
        ],
      },
      {
        heading: "AI Workflow Without the Hype",
        body: [
          "I use Claude for research synthesis and content drafts. I use Cursor for rapid prototyping in code. I\'ve automated my client onboarding with n8n, a tool that handles proposals, contracts, and invoice reminders without me touching a keyboard. I even set up a custom Hermes agent that monitors competitor design changes in my clients\' industries. It sends me a weekly summary. This isn\'t about being a tech bro. It\'s about reclaiming time. I used to spend 10 hours a week on admin. Now it\'s two. That extra time goes into the work that matters. The work that makes clients say \"I\'ve never seen a designer do that.\" The irony is most freelancers in Dubai are terrified of AI. They think it will replace them. I think it makes me irreplaceable because I can deliver twice the value in half the time. But I don\'t tell clients that. I just show them the result.",
        ],
      },
      {
        heading: "The FinFlow and Voyacher Lessons",
        body: [
          "I\'ve built products that failed. FinFlow was a personal finance app I designed for the GCC market. Beautiful interface. Solid UX. Zero traction. Why? Because I assumed people here wanted a minimalist app like the ones in Europe. They didn\'t. They wanted Sharia-compliant options, multi-currency support, and a human support line. I learned that lesson the hard way. Voyacher was different. A travel booking platform for expats. I designed it with an actual user from the target audience sitting next to me. We tested every flow with real frustration. It launched and got 10,000 users in three months. The difference was humility. I stopped assuming I knew what the market wanted. I started listening to the people who actually lived here. That\'s the real skill of a freelance product designer in the UAE. Not the tools. Not the portfolio. The ability to shut up and learn.",
        ],
      },
      {
        heading: "The Bottom Line",
        body: [
          "I\'m not the cheapest designer in Dubai. I\'m not the most famous. But I\'m the one who will actually understand your business, your users, and your regulatory constraints. I\'ll code the prototype myself. I\'ll automate the boring parts. I\'ll tell you when your idea is stupid. And I\'ll do it all from a coworking space in Al Quoz or a villa in Sharjah or a coffee shop in Abu Dhabi. The UAE is not one market. It\'s seven. Each with its own rhythm, its own clients, its own opportunities. I\'ve learned to dance in all of them. If you need a designer who can do that, you know where to find me. If not, that\'s fine too. I have a backlog of prototypes to build and an n8n workflow to optimize. The work never stops. That\'s the truth of freelancing here. And I wouldn\'t have it any other way.",
        ],
      },
    ],
  }
,
  {
    slug: "auto-design-system-consultant-20260727",
    date: "27 Jul 2026",
    category: "Design Systems",
    title: "Why Your Startup Needs a Design System Consultant (And Why You Are Probably Doing It Wrong)",
    excerpt:
      "A founder messaged me — his startup raised $2M, but the app looked like five people designed it in five decades. That's why it needed a design system.",
    readTime: "6 min read",
    content: [
      {
        heading: "A founder messaged me on LinkedIn last year",
        body: [
          "His startup had raised 2 million dollars. Their app looked like five different people designed it in five different decades. Buttons were round in one screen, square in another. The primary color shifted between blue and purple depending on which page you landed on. He said users kept bouncing because the app felt \"untrustworthy.\" He asked me to fix it. I told him the truth: you don\'t need a redesign. You need a design system. He laughed and said they couldn\'t afford one. I told him they couldn\'t afford not to.",
          "I spent 11 years in the trenches. At Valmont Industries I led UX/UI for five enterprise apps deployed across 40 countries. I built a 60 plus component design system from scratch. The result? Design to dev handoff time dropped by 40 percent. That wasnt a vanity metric. It meant engineers stopped asking me what color that button should be. It meant we shipped features faster with less friction. I know what enterprise scale looks like. I also know what startup chaos looks like because I freelanced for eight plus clients including FinFlow savings app and Voyacher travel platform. Both had the same problem. Inconsistent UI that bled trust and slowed growth.",
        ],
      },
      {
        heading: "The Real Cost of Inconsistency",
        body: [
          "Inconsistent UI is not a cosmetic issue. It is a trust issue. When a user sees a button that looks different on every screen their brain flags the product as unreliable. They stop spending money. They stop inviting colleagues. They churn. Startups bleed users because of this. I have seen it firsthand. At FinFlow the savings flow had three different button styles. Users kept clicking the wrong one. Support tickets spiked. The founder thought it was a feature problem. It was a consistency problem.",
          "Enterprise level design system expertise stops this before it starts. I know because I built systems that scaled across 40 countries with different languages, currencies, and regulatory requirements. The same principles apply to a startup. The difference is startups think they can skip the foundation. They cannot. Every pixel inconsistency is a leak in your conversion funnel.",
        ],
      },
      {
        heading: "What Enterprise Expertise Looks Like for Startups",
        body: [
          "You do not need a 200 page design system spec. You need a core set of reusable components that your team can ship with. I start with the atomic elements. Colors. Typography. Spacing. Then I build molecules. Buttons. Cards. Input fields. Then organisms. Navigation. Forms. Data tables. Each component is documented with code examples in TypeScript and React because I write code too. I use Next.js for production apps. I know what works in the browser.",
          "The Valmont system cut handoff time by 40 percent. That meant my team shipped features faster without me having to attend every standup. For startups this means your two developers stop arguing about whether the primary button should be rounded or squared. They just use the component I built. It saves hours every week. It saves thousands of dollars in developer time.",
        ],
      },
      {
        heading: "The AI Accelerant",
        body: [
          "I use AI tools like Claude, Cursor, n8n, and Hermes to accelerate design system work. I can generate component variants in minutes. I can write documentation that reads like a human wrote it. I can automate the boring parts like color palette generation and spacing scales. But AI does not replace judgment. It replaces repetition. I still decide what goes into the system. I still test with real users. I still make sure the system works for your specific context. Enterprise experience taught me that a design system is a living thing. It must evolve with your product. AI helps me iterate faster.",
        ],
      },
      {
        heading: "The Founders Dilemma",
        body: [
          "Founders face a real dilemma. You need to ship fast to validate your idea. You also need a consistent product to retain users. These two things feel contradictory. They are not. A design system is the fastest way to ship consistently. It reduces decision fatigue. It eliminates rework. It lets your developers focus on feature logic instead of pixel pushing. I have seen startups waste six months rebuilding the same button in different ways. That is six months of lost runway.",
          "I tell founders this: a design system is not a luxury. It is a survival tool. You can spend a month building one with me or you can spend a year fighting inconsistency. The math is simple.",
        ],
      },
      {
        heading: "What I Actually Do",
        body: [
          "I work as a design system consultant for startups. I do not redesign your entire app. I build the foundation that makes your app look like one product. I audit your current UI and identify every inconsistency. I create a component library with code and design specs. I set up a workflow for your team to maintain it. I use AI to speed up the boring parts. I write TypeScript and React code that your developers can copy and paste. I do not use buzzwords like synergy or leverage. I use honest language. I tell you what will work and what will not.",
          "I am based in Dubai but I work remotely with startups everywhere. I have done this for FinFlow, Voyacher, and others. I know the difference between a system that looks good in Figma and one that ships in production. I have been on both sides of that gap.",
          "If your startup has inconsistent UI and you are losing users because of it, I can help.",
        ],
      },
    ],
  }
,
  {
    slug: "auto-ux-audit-saas-20260803",
    date: "03 Aug 2026",
    category: "UX Process",
    title: "The UX Audit Is Not a Report. It\'s a Mirror.",
    excerpt:
      "I spent Thursday staring at a dashboard with 47 different shades of blue — in a SaaS product that raised a Series B. A UX audit is not a report; it's a mirror.",
    readTime: "6 min read",
    content: [
      {
        heading: "Forty-seven shades of blue",
        body: [
          "I spent last Thursday staring at a dashboard that had 47 different shades of blue. Not forty-seven blues in a design file. Forty-seven live hex values rendered on a production screen, in a SaaS product that had raised a Series B. The founder told me, \"We know it's a bit messy, but we're growing fast.\" Growth was not the problem. The problem was that every one of those blues was a small lie the product was telling its users.",
          "I've been doing this for 11 years. I've built a 60-component design system at Valmont that cut handoff time by 40% across five enterprise apps. I've designed FinFlow for India's aspirational middle class. I've redesigned Voyacher for Qatar's travel market. None of that matters when I sit down to audit a SaaS product. What matters is that I've audited dozens of products, and I can tell you the exact moment things went wrong. It's always the same moment.",
          "It's the day the founder decided to ship instead of fix.",
        ],
      },
      {
        heading: "What an Audit Actually Finds",
        body: [
          "When you hire me for a UX audit, you\'re not getting a list of \"best practices.\" You\'re getting a forensic examination of every decision your product has made. And most of those decisions were made in a hurry.",
          "I look at your onboarding flow first. Not because it\'s the most important screen, but because it\'s where your product promises things it can\'t deliver. I find onboarding drop-off rates that look like a cliff. Users get to step three, and the interface asks for a credit card before showing any value. That\'s not a UX problem. That\'s a trust problem wearing UX clothing.",
          "Then I look at your empty states. Nobody designs empty states. But an empty state is the first thing a new user sees after they sign up. I find empty states that literally say \"No data available.\" No guidance. No next step. That\'s not a bug. That\'s a missed handshake between your product and your user\'s motivation.",
          "I check your error messages. Most SaaS products have error messages written by developers, for developers. \"Error 403: Forbidden.\" What is the user supposed to do with that? Scream? I rewrite those to say \"You don\'t have access to this. Ask your admin to grant permission.\" That\'s the difference between a wall and a door.",
          "I audit your component consistency. I find buttons that look the same but do different things. I find modals that close on Escape in one place and not in another. These are not aesthetic nitpicks. These are the subtle signals that tell users \"this product is not reliable.\" And when a SaaS product loses trust, it loses renewal.",
        ],
      },
      {
        heading: "Why Founders Wait Too Long",
        body: [
          "Founders wait because the product works. People log in. They pay. Nobody is screaming. So the audit gets postponed. \"We\'ll do it after the next feature.\" \"We\'ll do it after we hit our ARR target.\"",
          "Here\'s the truth. You will never have time. And the cost of fixing these issues compounds. A design system that takes two weeks to implement when you have 5 components takes four months when you have 200. An onboarding flow that loses 70% of users is not a bug. It\'s a revenue leak you\'ve learned to ignore.",
          "I audited a delivery management platform called Road Show. The founder was proud of the churn rate. He said \"people stay because the backend is solid.\" The backend was solid. But the frontend was a maze of 14 different page layouts, none of which matched. Users were creating workarounds in their own spreadsheets because the dashboard was too cluttered to read. They weren\'t loyal. They were trapped.",
        ],
      },
      {
        heading: "What It Costs and What You Get",
        body: [
          "Here\'s the part nobody talks about. A UX audit costs between $3,000 and $15,000 depending on the size of your product. That\'s it. That\'s less than one month of a full-time mid-level designer in Dubai. And you get a document that tells you exactly what to fix, in what order, and what it will return.",
          "You get a prioritized list. Not a 200-page PDF that sits in a drawer. You get \"Fix these 5 things and your activation rate will move.\" You get \"This one screen is causing 40% of your support tickets.\" You get \"Your empty states are costing you $X,XXX per month in lost activation.\"",
          "I don\'t write vague recommendations. I write specific findings with screenshots, with user flows, with the exact component that needs to change. I give you a roadmap that your engineers can actually execute.",
          "And here\'s the thing. Most audits lead to more work. About 60% of my audits turn into either a design system build or a retainer. Because once you see the mirror, you can\'t unsee it. Once you know your dashboard has 47 blues, you want it fixed. An audit is the smart first step because it\'s small, it\'s cheap, and it gives you a map before you spend money on a destination.",
        ],
      },
      {
        heading: "The Difference From Hiring a Full-Time Designer",
        body: [
          "A full-time designer is a long-term bet. They cost $8,000 to $15,000 per month in Dubai, plus visa, plus equipment, plus management time. They\'ll take three months to understand your product. They\'ll want to redesign everything. They\'ll produce beautiful screens that your engineers can\'t build.",
          "An audit is a surgical strike. I come in for two weeks, I look at everything, I talk to your users, I check your analytics, and I leave you with a document that says \"here\'s what\'s broken and here\'s what it\'s worth to fix it.\"",
          "I\'m not saying don\'t hire a designer. I\'m saying hire an auditor first. Because when you do hire that designer, you\'ll hand them a prioritized roadmap. They won\'t waste time exploring. They\'ll start fixing. You\'ll get faster results from your hire because you did the audit first.",
        ],
      },
      {
        heading: "The Mirror Does Not Lie",
        body: [
          "I\'ve audited enterprise apps used in 40 countries. I\'ve audited fintech apps where a single error state could cost a user their savings confidence. I\'ve audited travel platforms where a confusing checkout flow means a lost booking. Every time, the founder says the same thing. \"I didn\'t realize it was this bad.\"",
          "That\'s not a criticism. That\'s the nature of building. You\'re too close to see the cracks. You\'re too busy shipping to notice that your empty states are empty in every sense of the word.",
          "So here\'s my offer. Send me your product. I\'ll spend two weeks tearing it apart. I\'ll find the 47 blues. I\'ll find the onboarding cliff. I\'ll find the error messages that make users feel stupid. And I\'ll give you a document that tells you exactly what to fix, in what order, and what it\'s worth.",
          "You\'ll probably hate reading it. You\'ll feel defensive. You\'ll want to explain why things are the way they are. That\'s fine. The mirror doesn\'t care about your excuses. It just shows you what\'s there. And what\'s there is usually fixable. Most of the time, it\'s not even hard. It\'s just ignored.",
          "An audit costs less than a designer. It takes less than a month. And it\'s the smartest first step you\'ll take this quarter.",
        ],
      },
    ],
  }
,
  {
    slug: "auto-fintech-ux-20260810",
    date: "10 Aug 2026",
    category: "Product Design",
    title: "I Learned More About Money From a Cab Driver Than From 11 Years of Design",
    excerpt:
      "A Mumbai cab driver at 2 AM taught me the entire job of a fintech product designer: don\'t make the user feel stupid when their money is on the line.",
    readTime: "6 min read",
    content: [
      {
        heading: "The cab driver test",
        body: [
          "I was in a Mumbai taxi, 2 AM, after a client meeting that went nowhere. The driver had his phone mounted on the dashboard, running some UPI app I didn\'t recognize. He was checking his balance, then his daily earnings, then his loan repayment schedule. All in under thirty seconds, one thumb, no reading glasses.",
          "I asked him what he thought of the app. He said, \"It doesn\'t make me feel stupid.\"",
          "That stuck. Because that is the entire job of a fintech product designer. Not to make things beautiful. To make the user not feel stupid when their money is on the line.",
        ],
      },
      {
        heading: "Money changes people\'s brains",
        body: [
          "I\'ve been a product designer for 11 years. Dubai, mostly. I\'ve built design systems for Valmont that span 60 components across 5 enterprise apps in 40 countries. I cut handoff time by 40% just by making the system legible to engineers. I\'ve done the full 0-to-1 grind for 8 freelance clients. But none of that mattered until I built FinFlow, a fintech app for India\'s aspirational middle class. That\'s where I learned what money actually does to people\'s brains.",
          "Here\'s the thing about money apps. Every screen carries trust. Not engagement, not delight. Trust. When someone opens your app to check their balance, they are one wrong number away from never opening it again. When they see a loan offer, they are one confusing rate table away from closing the tab and calling a local moneylender who charges 20% more but feels familiar.",
          "A generalist designer will make it look clean. A fintech product designer makes it not feel stupid.",
          "Here\'s what I do differently.",
        ],
      },
      {
        heading: "Numbers first, always",
        body: [
          "Not visual hierarchy, not the logo, not the onboarding flow. The numbers. In FinFlow, the balance is always the first thing on screen, in the largest font, with a clear currency symbol and a single decimal. Not because it\'s pretty, but because that cab driver needs to see his number before he trusts anything else. I design the number as the hero, then I build the layout around it. If the number doesn\'t fit on a 320px screen without truncation, the design is wrong.",
        ],
      },
      {
        heading: "Error states that don\'t panic",
        body: [
          "When a payment fails, a generalist shows a red screen with an exclamation mark and a vague message. That\'s a panic attack in UI form. In FinFlow, I designed failure states that say \"Your money is safe. It hasn\'t left your account. Here\'s what happened and here\'s what to do next.\" Three sentences, no jargon, no red. The user\'s heart rate stays flat, and they retry instead of abandoning.",
        ],
      },
      {
        heading: "Compliance that doesn\'t kill conversion",
        body: [
          "This is the big one. Fintech startups in Dubai, Saudi, India, they all have mandatory regulatory disclosures. Interest rates, terms, RBI or DFSA or ADGM legal text. A generalist designer will shove that into a wall of text at the bottom of the screen and call it a day. Conversion dies. A fintech product designer knows how to chunk compliance into tooltips, progressive disclosure, and inline explainers that satisfy the regulator without making the user feel like they\'re signing a mortgage. In FinFlow, we increased loan application completion by 34% just by restructuring the terms page into collapsible sections with plain-language summaries at the top.",
          "Regulators change rules quarterly. If your design system is rigid, every rule change means a redesign, which means a quarter of lost momentum. My Valmont system taught me how to build components that swap content, not structure. When a new regulation hits, I change a data field, not a layout. That\'s why I\'m not scared of DIFC or RBI updates. I\'ve built systems that eat regulatory change for breakfast.",
        ],
      },
      {
        heading: "The designer who codes",
        body: [
          "I code. React, TypeScript, Next.js. Not because I want to be a developer, but because it makes me a faster designer. When I hand off a design to an engineer, I already know if it\'s feasible. I\'ve already thought about state management, error boundaries, and how the API response maps to the UI. In FinFlow, I designed and prototyped the entire transaction flow in React before the backend team even finished their API spec. They looked at my prototype, said \"that\'s exactly the data shape we need,\" and built to it. That\'s what a fintech product designer who codes does. They collapse the distance between design and build.",
          "Here\'s the honest truth. A generalist designer can make your fintech app look like a fintech app. They\'ll use the right colors, the right typography, the right card UI. But they won\'t know that the \"instant withdrawal\" button needs a secondary confirmation step because users get anxious about accidentally withdrawing double. They won\'t know that showing the daily interest accrual in plain numbers, not a chart, increases trust by 20%. They won\'t know that the loan eligibility checker should ask for income before it asks for name, because users are more comfortable sharing money data than identity data.",
        ],
      },
      {
        heading: "What you\'re actually hiring",
        body: [
          "I\'ve shipped FinFlow, Voyacher for Qatar travel, Road Show for delivery logistics. I\'ve done B2B fintech SaaS for Dubai clients where the user is a CFO who\'s seen every dark pattern in the book. They don\'t get fooled by a gradient. They get convinced by a reconciliation screen that\'s so clear they can audit it in 10 seconds.",
          "If you\'re a fintech startup in Dubai, DIFC, ADGM, or India, you need a designer who\'s been in the trenches where a decimal point is a lawsuit. You need someone who\'s built a 60-component system that survived a regulatory overhaul without a redesign. You need someone who can code the damn thing so you ship in weeks, not quarters.",
          "I\'m Mohammed Noushad. I\'m Dubai-based, I serve UAE, Saudi, and India. I\'ve done this for 11 years, and I still get nervous when I see a payment failure screen I designed. That nervousness keeps me honest. It keeps me focused on the one metric that matters: does the user feel stupid?",
          "If they do, I\'ve failed. If they don\'t, they\'ll tell their friends. And that\'s worth more than any conversion optimization.",
        ],
      },
    ],
  },
  {
    slug: "auto-saas-ux-services-20260817",
    date: "17 Aug 2026",
    category: "Product Design",
    title: "SaaS UI/UX Design Services: Nobody Shows You the Empty States",
    excerpt:
      "A client once asked me to make an industrial dashboard look like Stripe. I said no. That\'s the real difference between SaaS UI/UX design services that ship, and ones that just look pretty.",
    readTime: "6 min read",
    content: [
      {
        heading: "The meeting that changed how I sell",
        body: [
          "In 2019 I sat in a meeting in Dubai with the head of product at Valmont Industries. On screen was a dashboard with 14 data points crammed into a 13 inch laptop. He asked me: can you make this look like Stripe? I said no.",
          "He laughed. I wasn\'t joking. Stripe\'s dashboard works because it serves one type of user doing one job. His software ran in 40 countries, used by field technicians with different permissions, different languages, different network speeds, and different comfort levels with a mouse. Making it look like Stripe would have been a failure, not a win.",
          "That conversation changed the way I work. I spent the next 18 months building a 60+ component design system for Valmont\'s enterprise software. Not hero screenshots. Tables, filters, role-based permission matrices, offline sync indicators, error states a 55 year old technician in rural Brazil could understand without calling support. We cut design to dev handoff by 40% across 5 apps. I measured it. That number is real.",
          "Here is what I learned about SaaS UI/UX design services in 2026, and why I think you should be careful before hiring an agency.",
        ],
      },
      {
        heading: "The dirty secret of SaaS design",
        body: [
          "When a founder or CTO types \'saas ui ux design services\' into Google, they get a million agency sites. All of them show the same portfolio: a beautiful landing page, a mobile app mockup, a dashboard with colorful charts. None of them show the empty states. None show the permission matrix where a supervisor sees driver locations but not salaries, while a cashier processes refunds but can\'t void transactions. None show what happens when a user with 300 saved items opens a filter and the UI freezes.",
          "That is the real work of SaaS design in 2026. Dense data. Multi-tenant complexity. Onboarding flows that reduce churn. Error states that don\'t make users feel stupid. Agencies hate this work. It\'s not sexy, it doesn\'t win awards, and it takes time to understand the domain. It means asking questions like \'what happens when a driver\'s phone dies mid-delivery?\' and designing for that instead of assuming the phone works.",
          "I\'ve been that solo designer on the other side of the call. FinFlow, a behavioral savings app for India\'s aspirational middle class, where the challenge was making finance feel like a game and not a lecture. Voyacher\'s voucher-first UX for Qatar travel, where users want instant confirmation, not a 72 hour hold. Road Show\'s delivery dashboards, where supervisors, cashiers, and drivers all need different views of the same chaos. None of that fits on a single case study slide.",
        ],
      },
      {
        heading: "The agency assembly line",
        body: [
          "Here is what happens when you hire an agency for SaaS UI/UX design services. A kickoff call with a senior strategist who asks smart questions. You get excited. Then the strategist disappears and you\'re handed to an account manager who relays feedback to a junior designer who has never logged into your product.",
          "The junior designer produces a Figma file with nice gradients. The account manager emails \'Design v1 ready for review.\' You spend 40 minutes writing feedback. The button color changes. Repeat for six weeks.",
          "I was that junior designer once. I know the assembly line from the inside. It is not designed to give you good work. It is designed to justify the retainer.",
          "When you hire me, you get one person. I answer your Slack messages. I\'ve logged into your staging environment, broken your build twice, and fixed it. I design in Figma and I implement in React and TypeScript. I can look at a dropdown I spec\'d and tell you if it will cause a layout shift in production. Eight freelance clients, zero to one, and every one of them got a working product, not a clickable prototype.",
        ],
      },
      {
        heading: "What to ask before you buy",
        body: [
          "Forget the portfolio. Forget the awards. If you\'re shopping for SaaS UI/UX design services, ask these four questions instead.",
          "Show me your empty states. A dashboard with no data is the first thing a new user sees. A blank white box with grey \'No data\' text loses them. I design empty states that guide users to their first action, whether that\'s importing a CSV or connecting a bank account.",
          "Walk me through your permission matrix. Can the design handle a user who is an admin in one workspace and a viewer in another? Role hierarchies? Most agencies freeze. I built these from scratch at Valmont, where five enterprise apps had overlapping roles across 40 countries.",
          "What happens on error? Not the pretty 404. The API timeout. The double click on a submit button. I\'ve designed for that and coded for that.",
          "How do you handle onboarding? A SaaS product is a tool, not a landing page. The first ten minutes decide if a user comes back tomorrow. FinFlow\'s onboarding turned a savings app into a daily habit for users in Mumbai and Bangalore.",
          "If a designer or agency can\'t answer these, they\'re selling you screenshots, not software.",
        ],
      },
      {
        heading: "What I actually offer",
        body: [
          "I\'m Mohammed Noushad. Eleven years as a senior product designer in Dubai, across enterprise industrial software, fintech, travel, and logistics. I\'m not a brand agency and I don\'t do visual identity. I take SaaS products with complex workflows, make them usable, then build them.",
          "I\'m the rare designer who codes. Not \'hands off to developers.\' I write React components in Next.js and TypeScript. When I say a design cut handoff time by 40%, it\'s because I measured it on my own projects.",
          "You don\'t need an agency account manager or a junior designer who doesn\'t understand your domain. You need one senior person accountable for the whole experience, from the permission matrix to the empty state to the error message that actually helps a user recover.",
          "I\'m not for everyone. If your SaaS is a simple CRUD app with three screens, hire a freelance visual designer and save the money. But if you\'re building something with real roles, real data, and real consequences when it breaks, you need someone who has been in the trenches. I\'d rather spend a week getting your permission model right than a day making your login page pretty. That\'s the service. That\'s the value.",
        ],
      },
    ],
  },
  {
    slug: "auto-fintech-design-system-20260824",
    date: "24 Aug 2026",
    category: "Design Systems",
    title: "A Fintech Design System Is Not a UI Kit With a Bank Logo",
    excerpt:
      "Six months into Valmont, a regulator made me rewrite 30 screens by hand in two weeks. That\'s when I learned a fintech design system is a regulatory shock absorber, not a UI kit.",
    readTime: "6 min read",
    content: [
      {
        heading: "Thirty screens, two weeks",
        body: [
          "I was six months into the Valmont project. Five enterprise apps, 40 countries, and a design team drowning in handoff meetings. Then the compliance team dropped a bomb: a new disclosure requirement had to appear on every financial screen, in every locale, in two weeks.",
          "I opened the Figma file and started updating screens one by one. On the third one I stopped and did the math. A full sprint, just for the copy. The spacing, the color, the placement, the RTL flip. All of it repeated thirty times.",
          "That was the moment I understood what I now tell every founder who asks about design systems: a fintech design system is not a generic UI kit with a bank logo on it. It is a regulatory shock absorber. Without one you are not just paying for inconsistency. You are paying for every compliance change, forever, in man-hours.",
        ],
      },
      {
        heading: "The Real Difference Isn\'t Buttons",
        body: [
          "Most articles about design systems talk about buttons, colors, and spacing. That\'s table stakes. A fintech design system lives or dies on constraints that don\'t exist in a typical SaaS dashboard.",
          "Number-first layouts. In FinFlow, a behavioral savings app for India, the entire experience revolved around amounts. Balances, round-ups, interest accruals. The typography had to handle 12-digit numbers in narrow columns without breaking. And the color of a number isn\'t a stylistic choice, it\'s a psychological trigger. In India, where a failed payment can mean a missed SIP, that red number feels like a punch in the gut. Our system defined not just the hex code but the emotional weight behind it.",
          "Then there\'s the copy. In a typical app a designer can tweak a label. In fintech, legal owns the words. Regulators mandate specific phrasing for disclosures, error messages, and consent screens. So the system has to treat copy as a token, not a string. When legal changes \'You will be charged\' to \'This transaction incurs a fee,\' you change it in one place. Not thirty.",
          "And error states where money is on the line. A generic error toast says \'Something went wrong.\' A fintech error state has to tell you what happened, what it means for your money, and what to do next, all without panic. At Valmont we built an error taxonomy sorted not just by severity but by emotional impact. A failed login is annoyance. A failed transfer is anxiety. The system treated them differently.",
        ],
      },
      {
        heading: "The Handoff Lie",
        body: [
          "At Valmont we cut design-to-dev handoff by 40%. Measured, not vibes. The reason wasn\'t better documentation. It was that I built the system to compile.",
          "Most design systems are static Figma files. The developer opens one, squints, and rebuilds it in code. Somewhere in that translation the spacing drifts by two pixels, the focus state gets lost, and the token name in Figma doesn\'t match the variable in TypeScript.",
          "I code. TypeScript, React, Next.js. Not because I want to be a developer, but because a token that doesn\'t map to a CSS variable or a constant is a suggestion, not a system. When I built the Valmont system, the Figma components had the exact same names as the compiled React components. Color tokens were CSS variables in the same order as the design tokens. Designer and developer were looking at the same object instead of two representations of it. That\'s what actually cut the handoff time. Not a better handoff. No handoff. The system was the source of truth, and it was already code.",
        ],
      },
      {
        heading: "The Emotional Layer",
        body: [
          "Money UX is emotional. At FinFlow I learned that the rounding of a number matters more than the kerning of a headline. When a user sees ₹12,345.67, the decimals are noise. When they see ₹12,345, it feels real. We spent a week deciding whether to show trailing zeros. That\'s not a design detail. That\'s a trust decision.",
          "Loading states work the same way. In a social app a spinner is a pause. In a payment app a spinner is existential dread. Did it go through? Is my money stuck? Our system defined not just the spinner animation but the copy around it and the timeout threshold before switching to a proactive status check.",
          "And then there\'s RTL. Arabic, Hebrew, Farsi. Locales where numbers stay left-to-right while text flips, currency symbols move, decimal separators change. A design system that doesn\'t handle locale-aware formatting at the token level breaks the moment you go beyond English.",
        ],
      },
      {
        heading: "What to Ask Before You Hire Someone",
        body: [
          "If you\'re a founder wondering whether you need a fintech design system: if you have more than one engineer and any regulatory obligation, the answer is yes. The question isn\'t whether. It\'s who builds it.",
          "Ask them how a token becomes a CSS variable in their last project. If they can\'t show you, they\'ve been designing in a vacuum.",
          "Ask what happens when legal changes a disclosure. If the answer is \'I\'ll update the files,\' walk away. The right answer is \'it\'s a token, I change it once.\'",
          "Ask how they handle a failed payment. A generic error toast means they don\'t understand fintech. A state that explains the reason, the impact, and the next step, written calm instead of frantic, means they get it.",
          "And ask about the numbers. How does the system handle a 14-character balance in a narrow column at 12px? No answer means they haven\'t shipped a real fintech product.",
        ],
      },
      {
        heading: "The Bottom Line",
        body: [
          "A fintech design system isn\'t a deliverable. It\'s a discipline. It absorbs regulatory change, compiles to real code, and treats money with the weight it actually carries.",
          "We rebuilt our system properly after that bad week. Eight months later, a second disclosure requirement landed at Valmont. One token changed, one component updated, thirty screens fixed, and the handoff to engineering was a single commit. That\'s the difference between a UI kit and a fintech design system. One is a collection of assets. The other is a mechanism for surviving change without losing your mind.",
          "I\'m Mohammed Noushad, a senior product designer in Dubai. Eleven years building these systems, and I have the gray hair and the 40% handoff reduction to prove it. If you think a design system is a luxury for your fintech, I\'d happily walk you through what it costs not to have one.",
        ],
      },
    ],
  },
  {
    slug: "auto-enterprise-ux-services-20260831",
    date: "31 Aug 2026",
    category: "Product Design",
    title: "Enterprise UX Design Services: The Work Nobody Puts in the Portfolio",
    excerpt:
      "I sat in a meeting at Valmont and a VP told me my new navigation wasn\'t \'really design.\' He was half right. Enterprise UX design services are the boring work that saves real money, and nobody puts it in a portfolio.",
    readTime: "6 min read",
    content: [
      {
        heading: "The meeting where a VP said it wasn\'t design",
        body: [
          "I sat in a meeting at Valmont Industries in my second month. A VP looked at the navigation I had spent three weeks rebuilding and said, \"This is fine, but it\'s not really design, is it? It\'s just moving things around.\"",
          "I did not have a good answer that day. He was half right. The navigation had no hero gradient, no clever animation, no micro-interactions. It had a search bar that worked, a menu that grouped forty features into seven buckets, and a back button that actually went back.",
          "What it did was cut the clicks a field technician needed to log a service request from eleven to four. Across forty countries and hundreds of technicians a day, that is real money. But you cannot screenshot it. So enterprise UX work lives in the part of the portfolio nobody posts.",
        ],
      },
      {
        heading: "The dirty secret of enterprise UX",
        body: [
          "When you search enterprise UX design services, most of what you find is agencies selling the same thing as their SaaS page. A dashboard with colorful charts. A login screen that looks like a credit card ad. What you almost never see is the actual job.",
          "Enterprise UX is not a bigger, slower version of consumer design. It is a different discipline. In a consumer app, a confused user churns and you lose a subscription. In enterprise software, a confused user files a support ticket, their boss gets angry, and six months later a company cancels a seven-figure contract.",
          "And the users are not like you. At Valmont I designed for agricultural dealers in rural Egypt on seven-year-old tablets with 3G connections, field technicians in Brazil who work in 40-degree heat wearing gloves, and a support manager in Nebraska who had been on the same green-on-black terminal for twenty years. None of them cares about your design tokens. They care whether they can find the submit button before the modal times out.",
        ],
      },
      {
        heading: "The work that actually saves the money",
        body: [
          "Here is what I mean by boring work. I once spent a week on the permission matrix for a dealer portal. Five roles, each with a different view of the same inventory. A supervisor sees driver locations but not salaries. A cashier processes refunds but cannot void them. An admin can do everything, which is its own problem.",
          "Nobody applauds a permission matrix. Get it wrong and you get a data breach or a support queue full of \"why can\'t I see this.\" Get it right and the software runs without anyone noticing it exists.",
          "The Field Layout Tool was the same. Irrigation planners draw polygons on satellite imagery to define zones. The math underneath is genuinely hard. The UI is not. Big tap targets, high contrast, a save button that confirms instead of silently succeeding. That last one sounds trivial until a silent save failure costs a planner a morning of work in a moving truck.",
          "I built a 60-plus component design system at Valmont to make this boring work consistent across five applications. The measured result was a 40 percent cut in design-to-dev handoff. But the part I am proud of is not that number. It is that a technician in Kenya and a dealer in Egypt now use the same button for the same job, and neither has to learn a new interface when they switch apps.",
        ],
      },
      {
        heading: "Why I tell founders to skip the agency",
        body: [
          "I spent years inside the agency model, so I know how it goes. A senior strategist on the kickoff call. Then a handoff to a junior designer who has never seen your users and never will. The deliverable is a Figma file with nice gradients and a login screen that looks expensive.",
          "Enterprise software does not fail because the login screen is ugly. It fails because nobody mapped the roles, nobody asked what happens when the network drops mid-submission, nobody tested with an actual technician on an actual tablet.",
          "I am the rare designer who codes. I write React, TypeScript, and Next.js, so when I spec a dropdown I know whether it will cause a layout shift in production. I have broken a client\'s build twice and fixed it, and I tell you that because it is true and because it matters. A designer who has never shipped does not know which of their decisions are cheap and which are secretly expensive.",
          "I am not an agency. I am one senior designer who has done this for eleven years, across fintech like FinFlow, travel like Voyacher, and the industrial software at Valmont. If your product is a simple three-screen CRUD app, hire a visual designer and save your money. If it has real roles, real data, and real consequences when it breaks, that is where I do my best work.",
        ],
      },
      {
        heading: "What to ask before you hire anyone",
        body: [
          "Forget the portfolio for a minute. Ask these instead.",
          "Show me your permission matrix. Can your design handle a user who is an admin in one workspace and a viewer in another? If they freeze, keep looking.",
          "What happens when the network drops mid-submission? Enterprise users work in basements, trucks, and fields, not coffee shops. If the answer is a spinner, they have not shipped to real users.",
          "How do you handle onboarding? A tool a technician learns once and uses for a decade is not a consumer app. The first ten minutes decide whether it becomes a habit or a help ticket.",
          "And ask about the numbers. How does a 200-line inventory table behave on a seven-year-old tablet at 3G? If they cannot answer, they have only ever designed in a browser on a MacBook.",
          "Enterprise UX design services are not glamorous. They will not get you a thousand likes. But when you get it right, you are not saving pixels. You are saving a field technician an hour a day, a support manager a hundred tickets a week, and a company a contract that almost walked away.",
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
