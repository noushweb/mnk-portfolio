# Implementation Roadmap — MNK Portfolio

**Date:** June 11, 2026  
**Current Health Score:** 73/100  
**Target (3 months):** 85/100  

---

## Phase 1: Foundation ✅ COMPLETED (Jun 10-11, 2026)

| # | Task | Status | Commit |
|---|------|--------|--------|
| 1 | Viewport meta tag export | ✅ | 0d4ea7a |
| 2 | Canonical URL on homepage | ✅ | deaf70d |
| 3 | OG site_name + locale restored | ✅ | deaf70d |
| 4 | "in Dubai" geo-signal in description | ✅ | deaf70d |
| 5 | Description shortened to 153 chars | ✅ | deaf70d |
| 6 | twitter:site + twitter:creator | ✅ | deaf70d |
| 7 | Testimonial H3 → blockquote | ✅ | deaf70d |
| 8 | AVIF image format | ✅ | 0d4ea7a |
| 9 | 404 page metadata + robots noindex | ✅ | 0d4ea7a |
| 10 | GitHub footer link | ✅ | 0d4ea7a |
| 11 | llms.txt (19 pages) | ✅ | 949a91a |
| 12 | AI crawlers: OAI-SearchBot, ChatGPT-User, ClaudeBot | ✅ | 949a91a |
| 13 | Article author byline | ✅ | 949a91a |
| 14 | Article JSON-LD (Article + BreadcrumbList) | ✅ | a08a96b |
| 15 | WebSite + Person JSON-LD with LinkedIn/Behance | ✅ | a08a96b |
| 16 | Hero image: next/image + priority | ✅ | a08a96b |
| 17 | Case study OG descriptions | ✅ | a08a96b |
| 18 | Article OG descriptions | ✅ | a08a96b |
| 19 | Sitemap static dates + freq differentiation | ✅ | a08a96b |
| 20 | robots.ts (replaced static file) | ✅ | a08a96b |
| 21 | Homepage dedicated metadata | ✅ | a08a96b |
| 22 | About section question H2 + citable passage | ✅ | 949a91a |

---

## Phase 2: Core Content (Next 2 Weeks)

### Week 1

#### Task 2.1: Create `/about` page
**Files:** `app/about/page.tsx` (NEW)  
**Effort:** 4 hours  
**Content:**
- Expanded bio: 11+ years, Dubai-based, journey from visual design → product thinking → AI-powered development
- Credentials: education, certifications, notable clients (Valmont, Voyacher, FinFlow, KartBlue)
- Industries served: Enterprise, FinTech, Travel, Logistics, Agritech
- Tools & stack: Figma, Claude, OpenCode, Hermes, Next.js, TypeScript, Tailwind CSS
- Personal: what drives him, design philosophy
- FAQ section: "What does a Product Designer do?", "How do you combine design and development?", "What industries do you specialise in?"

**Metadata:**
```
title: "About Mohammed Noushad — Senior Product Designer in Dubai"
description: "11+ years in UX/UI design, now combining design with AI-powered development..." (~155 chars)
openGraph: same, with image
alternates.canonical: "https://enkay.dev/about"
```

#### Task 2.2: Create `/contact` page
**Files:** `app/contact/page.tsx` (NEW)  
**Effort:** 3 hours  
**Content:**
- Full NAP: Mohammed Noushad, Dubai, UAE, hello@enkay.dev
- Availability: "Available Immediately — Hybrid & Remote"
- Services inquiry form or prominent mailto CTA
- Calendar booking link (Calendly or similar)
- LinkedIn + Behance + GitHub links
- Response time expectation: "Typically respond within 24 hours"

**Metadata:**
```
title: "Contact Mohammed Noushad — Hire a Product Designer in Dubai"
description: "Available for senior product design roles and freelance engagements in Dubai, UAE..."
```

#### Task 2.3: Add CreativeWork schema to case study pages
**Files:** 8 case study page.tsx files  
**Effort:** 2 hours  
**Approach:** Create `components/CaseStudyJsonLd.tsx` component, add to each case study page
**Schema:** CreativeWork with `about`, `author`, `datePublished`, `description`, `image`
**Skip:** The `[slug]/page.tsx` dynamic route (currently non-functional)

#### Task 2.4: Add "Last Updated" to articles
**Files:** `lib/articles-data.ts`, `app/articles/[slug]/page.tsx`, `components/ArticleJsonLd.tsx`  
**Effort:** 1 hour  
**Changes:**
1. Add `updated?: string` field to Article interface
2. Add `updated` to 3 recent articles
3. Display "Last updated: [date]" in article header
4. Add `dateModified` to ArticleJsonLd schema

### Week 2

#### Task 2.5: Internal linking pass
**Effort:** 2 hours  
**Changes:**
1. In "The UX of Industrial Software" article → link "Valmont Legacy Redesign" case study
2. In "How AI Cut My Design System Workflow" → link "Valley Design System" case study
3. In "Design Systems at Scale" → link "Valley Design System" case study
4. In "I Started Building What I Design" → link "FinFlow" + "Road Show" case studies
5. On each case study page → add "Related Articles" section (2-3 links)

#### Task 2.6: Expand citable passages (target 5+)
**Effort:** 2 hours  
**Approach:** Rewrite select paragraphs to 134-167 words with specific data:
1. About section (already ~120 words) → expand to ~150
2. Valmont overview → add specific metrics from JSON data
3. Article: "What AI actually changed" → already ~176, good
4. Article: "The exact workflow" → already ~159, good
5. New article or service description → craft one fresh citable block

#### Task 2.7: Add client logos to homepage
**Effort:** 1 hour  
**Files:** `components/Clients.tsx` (NEW), `app/page.tsx`  
**Placement:** Between Services and Work sections  
**Logos needed:** Valmont, Voyacher, FinFlow, Road Show, KartBlue (text-based or simple SVG)

---

## Phase 3: GEO + Authority (Weeks 3-5)

#### Task 3.1: Publish new article
**Topic:** "Why every product designer should learn to code in 2026"  
**Keywords:** "designer learn to code", "product designer development", "should designers code"  
**Effort:** 8 hours  
**Structure:** 5 sections, ~800 words, question-based H2s, 134-167 word blocks  
**Distribution:** LinkedIn article, Medium cross-post, Reddit r/UXDesign

#### Task 3.2: Add Review schema for testimonials
**Files:** `components/ui/stagger-testimonials.tsx`, new `components/ReviewJsonLd.tsx`  
**Effort:** 2 hours  
**Schema:** `Review` with `reviewBody`, `author` (Person with name), `itemReviewed` (Organization — "Mohammed Noushad"), `reviewRating` (5 stars implied)

#### Task 3.3: Submit to search engines
**Actions:**
1. Verify Google Search Console property for enkay.dev
2. Submit sitemap: `https://enkay.dev/sitemap.xml`
3. Verify Bing Webmaster Tools
4. Submit via IndexNow API
5. Request indexing of key pages via GSC URL Inspection

#### Task 3.4: Schema completeness audit
**Checklist:**
- [x] WebSite ✅
- [x] Person (with sameAs) ✅
- [x] Article (per article) ✅
- [x] BreadcrumbList (per article) ✅
- [ ] CreativeWork (per case study) — Task 2.3
- [ ] Review (per testimonial) — Task 3.2
- [ ] AboutPage (on /about) — Task 2.1
- [ ] ContactPage (on /contact) — Task 2.2

---

## Phase 4: Scale (Months 2-3)

#### Task 4.1: Content engine
- Publish 4 new articles (2/month)
- Topic ideas: "Designing for Arabic + English bilingual UX", "The ROI of design systems", "Interviewing users who don't speak your language", "What I learned shipping 5 enterprise apps"

#### Task 4.2: Performance polish
**Files:** `next.config.ts`, image components  
**Effort:** 3 hours  
**Changes:**
1. Add `placeholder="blur"` with generated blurDataURL for hero + project thumbnails
2. Add `minimumCacheTTL: 86400` to images config
3. Run Lighthouse audit, fix any <90 scores

#### Task 4.3: Backlink outreach
**Targets:**
1. Guest article on Smashing Magazine / A List Apart
2. Podcast appearance: "Design Details", "UI Breakfast", "The Design System Podcast"
3. Design community: Dribbble, Behance, Figma Community
4. LinkedIn: consistent posting 2x/week

#### Task 4.4: Monitoring setup
- GSC weekly check for indexing issues
- Monthly CWV check via PageSpeed Insights
- Quarterly SEO re-audit
- Keyword rank tracking (manual or via tool)

---

## Phase 5: Authority (Months 6-12)

#### Task 5.1: Newsletter launch
- Platform: ConvertKit / Substack
- Topic: "Design + Build + AI" — weekly tips, case study deep dives
- Drive signups from blog CTAs and LinkedIn

#### Task 5.2: Speaking/Events
- Document talks, workshops, panels on /about or /speaking
- Add Event schema for upcoming appearances
- Video recordings of talks → embed on site

#### Task 5.3: Client results page
- Quantified outcomes per project: "40% faster task completion", "25% faster handoffs"
- Add `/results` or embed on `/work`
- Use `Dataset` or `Table` schema for structured metrics

#### Task 5.4: Advanced GEO
- Create `/llms-full.txt` with full article text for AI training
- Monitor AI Overviews appearance for design + AI queries
- Build Wikipedia presence (notability threshold)
- Cross-platform content: YouTube walkthroughs, LinkedIn carousels

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Low search volume for "product designer dubai" | Medium | Medium | Broaden to "UX designer", "design consultant", "AI design" |
| Competitor domain authority higher | High | Medium | Focus on long-tail, niche content where competitors are weak |
| AI crawlers ignoring llms.txt | Low | Medium | Verify via GSC, add structured data as fallback |
| Content velocity unsustainable | Medium | High | Batch articles, use AI drafts, focus on quality over quantity |
| Google algorithm update | Low | High | Follow E-E-A-T best practices, avoid grey-hat techniques |

---

## Dependencies

| Dependency | Status | Owner |
|-----------|--------|-------|
| Google Search Console access | Needed | @noushadk |
| Calendly/Cal.com link for /contact | Needed | @noushadk |
| Client logos (SVG/PNG) | Needed | @noushadk |
| Education/certification details | Needed | @noushadk |
| LinkedIn article publishing | Ready | @noushadk |
