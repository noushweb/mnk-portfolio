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
  {
    slug: "senior-product-designer-dubai",
    date: "05 Jul 2026",
    category: "Career",
    title: "Untitled",
    excerpt:
      "I moved to Dubai four years ago. Not for the tax-free salary, not for the Burj Khalifa views, not for the Instagram brunches. I moved because a project I was fr...",
    readTime: "7 min read",
    content: [
      {
        heading: "## The move nobody asks about",
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
    title: "Untitled",
    excerpt:
      "The first Saudi government portal I worked on, I made a mistake that still makes me cringe. I designed the entire interface left-to-right, in English, and figur...",
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
      "I was the guy who had to fix this mess.",
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
      "I nodded.",
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
      "It was 2013. I had just finished my diploma and landed a freelance project, a basic inventory app for a textile wholesaler. I showed up with clean screens, logi...",
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
      "I still remember walking into my first design class in Bangalore, 2008. Diploma program. I had no portfolio, no MacBook, and no idea what \"user experience\" even...",
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
      "I\'d been a product designer for eight years at that point. I\'d shipped enterprise apps across forty countries at Valmont. I\'d built a sixty-component design sys...",
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
    title: "Untitled",
    excerpt:
      "Three years ago I took a wrong turn coming back from a client meeting and ended up somewhere near University City. I\'d lived in the UAE for years but Sharjah wa...",
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
      "Last month someone on LinkedIn messaged me with genuine confusion. \"Mohammed, your profile says Umm Al Quwain. Is that a mistake? Aren\'t all designers in Dubai?...",
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
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
