# Lever Website — Project Brief for Claude Code

## What This File Is

This is the complete specification for building the Lever agency website. Everything here has been discussed, debated, and agreed upon. Do not deviate from these decisions without explicit approval. When in doubt, refer back to this document.

## Build Approach

**We are building this with React + Vite + Claude Code. No visual editors. No Framer (the editor). No Webflow. No Figma. Pure code.**

The UI/UX target is https://agenta.framer.website/ — we want that exact level of smoothness, cleanliness, and polish. Same animations, same scroll feel, same hover behavior, same spacing rhythm. The only differences are: our content, our colors (Midnight Sage), and our structure (10 sections instead of Agenta's layout).

"Framer Motion" in this document refers to the React animation library (npm package `framer-motion`), NOT the Framer visual editor. We use Framer Motion for all animations.

### Claude Code Settings

```
Model:        claude-sonnet-4-20250514 (for speed during iteration)
              claude-opus-4-20250514 (for final polish pass)
Effort mode:  max (always — never use standard or low for this project)
Permissions:  --auto mode (or allowlist from settings.json)
```

**Workflow:**
- Use **Sonnet** for all initial building — scaffolding, components, layout, content placement. It's fast and handles 90% of the work.
- Switch to **Opus** for the final polish pass — animation refinement, spacing adjustments, responsive edge cases, accessibility audit. Opus catches details Sonnet misses.
- Always run at **max effort**. This site needs precision in spacing, animation timing, and component structure. Standard effort skips nuance.

### Claude Code Skills (installed globally)

Install these ONCE before starting the build:

```bash
npx skills add anthropics/skills@frontend-design -g -y
npx skills add mblode/agent-skills@ui-animation -g -y
npx skills add vercel-labs/agent-skills@web-design-guidelines -g -y
npx skills add mastepanoski/claude-skills --skill wcag-accessibility-audit -g -y
```

**How Claude Code should use each skill:**

1. **frontend-design** — Read this skill BEFORE building any component. It sets the aesthetic direction. For this project, the direction is: dark warm theme, Geist font, sage/copper accents, generous whitespace, Agenta-level polish. Every component should feel intentionally designed, not generated. When in doubt about a design decision, consult this skill.

2. **ui-animation** — Use this skill when adding Framer Motion animations. Every scroll reveal, hover state, and accordion transition should follow the patterns in this skill. Key rules for this project:
   - Use `ease: [0.25, 0.4, 0.25, 1]` for all entrance animations (matches Agenta)
   - Duration 0.5s for section reveals, 0.2s for hovers, 0.3s for accordions
   - Always add `@media (prefers-reduced-motion: reduce)` fallbacks
   - Stagger children at 0.06s intervals
   - Never animate layout properties (width, height) — only transform and opacity

3. **web-design-guidelines** — Use this skill to validate spacing, typography scale, and responsive behavior AFTER building each section. Check:
   - Section padding is consistent (80-100px vertical)
   - Card padding is consistent (24-32px internal)
   - Typography scale matches Agenta (60/48/32/16/14px)
   - Max content width is 1100-1200px
   - Mobile breakpoint at 768px works cleanly

4. **wcag-accessibility-audit** — Run this skill's checks AFTER the initial build is complete. Fix:
   - Every interactive element has focus-visible styles
   - Color contrast meets WCAG AA (sage on dark bg passes, verify coral)
   - All images have alt text (we have no images, but verify SVG icons)
   - FAQ accordion is keyboard-navigable
   - Health check toggles work with Enter/Space keys
   - Semantic HTML: sections use `<section>`, headings are hierarchical (h1 → h2 → h3)

**Build sequence using skills:**
1. Read frontend-design skill → set up project theme, colors, fonts
2. Build each component → apply ui-animation patterns for motion
3. After all sections built → run web-design-guidelines check for consistency
4. Final pass → run wcag-accessibility-audit audit and fix issues
5. Switch to Opus → polish pass for animation timing and spacing precision

---

## 1. WHO WE ARE

**Company:** Lever (formerly PulseDev SARL)
**Type:** GTM (Go-To-Market) engineering consultancy
**Team:** 2 people — Anas (GTM engineer & founder) and Adnane (co-founder & automation architect)
**Based in:** Casablanca, Morocco — but positioned globally, English-only
**Revenue:** Currently $8-10K/mo, scaling to $30-50K/mo
**Positioning:** We are NOT an agency. We are GTM engineers. We build systems clients own permanently — not subscriptions that create dependency.

### What We Do (4 Services — NOT 5, CRM migration was removed)

1. **Lead intelligence & data enrichment** — Clay waterfall enrichment, verification, ICP scoring (95%+ accuracy)
2. **Outreach infrastructure** — Multi-domain cold email + LinkedIn automation with authentication, warmup, deliverability monitoring (99%+ deliverability, 12% avg reply rate)
3. **AI-powered automation** — Custom n8n + Python workflows for lead scoring, email personalization, research automation (10-20 hrs saved/week) — **UNIQUE: competitors don't offer this**
4. **Revenue reporting** — Live dashboards tracking reply rates, meetings, pipeline, cost per lead, channel attribution — **UNIQUE: competitors don't offer this**

### What We Do NOT Do

- CRM migration (removed from scope)
- Content writing / social media management
- Paid ads management
- Web design for clients
- Anything B2C

### Target ICP

- VP of Sales, Head of Growth, RevOps leaders, or founders
- B2B companies with $10K-$100K+ ACV
- 20-500 employees, Series A to mid-market
- Currently doing outbound manually or with an underperforming agency
- SaaS, fintech, healthtech, or professional services

---

## 2. TECH STACK FOR THE WEBSITE

```
Framework:      React + Vite
Styling:        Tailwind CSS
Animations:     Framer Motion (primary — scroll reveals, hover, stagger, layout)
Number counter: react-countup (stats bar counting animation)
Icons:          Lucide React
Fonts:          Geist (headlines + body) + JetBrains Mono (data/numbers)
Booking:        Cal.com (@calcom/embed-react)
Hosting:        Vercel (free tier)
```

### Animation & UX Reference

**Primary reference:** https://agenta.framer.website/ — replicate the exact feel of this site:
- Section fade-up reveals on scroll (smooth, not snappy)
- Staggered card entrances (cards appear one after another)
- Smooth accordion open/close (FAQ, services)
- Hover lift on cards (subtle y-shift + border color change)
- Counter animations on stats (numbers count up from 0)
- Logo marquee (infinite smooth CSS scroll)
- Hero stagger (elements appear one by one on page load)

**Specific Agenta UI patterns to replicate exactly:**
- **Spacing:** Agenta uses generous padding — sections have ~80-100px vertical padding, cards have ~24-32px internal padding. Never feel cramped.
- **Border radius:** Cards use ~12-16px radius. Buttons use ~8px. Badges/pills use full round (100px). Match these exactly.
- **Border style:** Agenta uses subtle 1px borders on cards (#E4E4E4 in light mode — translate to our `--t5` in dark mode). Borders are barely visible, not heavy.
- **Card hover:** Cards lift 4px on hover with a subtle border color shift. The transition is 0.2s ease-out. No shadow changes, no background changes — just lift and border.
- **Section structure:** Each section has: small tag label (uppercase, colored) → large headline → optional subtext → content. This rhythm repeats consistently. Match it.
- **Typography scale:** Agenta uses 60px h1, 48px h2, 32px h3, 16px body, 14px small. We use the same scale with Geist font.
- **Content width:** Max content width is ~1100-1200px centered. Cards sit inside this width. Nothing goes full-bleed except section backgrounds.
- **The "feel":** The site feels like it breathes. There's always enough whitespace. Nothing is jammed together. When in doubt, add more padding, not less.

The goal is NOT to copy the design or colors — those are ours (Midnight Sage). The goal is to match the smoothness, timing, spacing rhythm, and overall quality. If a visitor used both sites back to back, the motion and polish should feel identical.

### Font Details

- **Geist** — the exact font from agenta.framer.website. Used for EVERYTHING. Source: Vercel, available via Google Fonts (`font-family: 'Geist', sans-serif`). Install: `npm install geist` or load from Google Fonts.
  - **SemiBold (600):** h1 headlines, h2 section titles, card titles, FAQ questions, founder names — this is what Agenta uses for all headings
  - **Medium (500):** body text, buttons, nav links, section tags, labels, descriptions — this is what Agenta uses for all body
  - **Regular (400):** secondary/muted text, subtle labels
- **JetBrains Mono** — numbers, stats, metrics, pipeline tags, phase labels, tool tags, score counter. Weights: Regular (400), Medium (500). Source: Google Fonts.

### Animation Strategy (Framer Motion)

- **Scroll reveals:** `whileInView` with `fadeUp` variant on every section block (cards, comparison columns, pipeline nodes, checklist items). Stagger children with `staggerChildren: 0.06`. Use `viewport={{ once: true, margin: "-50px" }}` so animations trigger slightly before the element is fully visible — this is what makes Agenta feel responsive, not laggy.
- **Hover:** Cards lift (`y: -4`) with border color shift to sage. Buttons scale (`scale: 1.02`). Service pipeline nodes glow border on hover. All transitions use `transition={{ duration: 0.2, ease: "easeOut" }}`.
- **Page load:** Hero elements stagger in (badge → headline → sub → CTAs → note). Delay each by 0.1s. Use `ease: [0.25, 0.4, 0.25, 1]` for a smooth deceleration curve matching Agenta's feel.
- **Number counting:** Stats bar numbers count up from 0 when scrolling into view using `react-countup` with `enableScrollSpy`. Duration 2s, easing "easeOut". Format large numbers with commas.
- **Health check toggles:** Framer Motion `layout` prop on the toggle knob for spring physics. `transition={{ type: "spring", stiffness: 500, damping: 30 }}`.
- **FAQ accordion:** `AnimatePresence` with `motion.div` animating `height: "auto"` from `height: 0`. Use `overflow: hidden` on the wrapper. This matches Agenta's smooth accordion exactly.
- **Logo marquee:** Pure CSS `@keyframes` with `translateX(-50%)` on a duplicated row. Speed: 20s linear infinite. No JS needed — CSS is smoother.
- **Connected timeline (process):** Each phase card animates in with stagger when scrolling into view. The connecting border between cards should already be visible (no animation on the border, only the content).
- **Section transitions:** Each section has a `1px solid var(--t5)` bottom border. No animated borders, no gradient lines between sections. Clean dividers only — Agenta uses the same approach.
- **Smooth scroll:** CSS `scroll-behavior: smooth` on `html`. Nav links use `href="#section-id"`. No scroll-jacking, no custom scroll libraries.
- **NO:** parallax scrolling, scroll-jacking, 3D effects, particle backgrounds, heavy libraries like Three.js or GSAP, Lottie animations, page transition animations between sections.

### Framer Motion Reusable Variants (define once, use everywhere)

```jsx
// variants.js — import in every component
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};
```

### Package Versions

```json
{
  "framer-motion": "^12",
  "react-countup": "^6",
  "lucide-react": "^0.400",
  "@calcom/embed-react": "^1",
  "geist": "^1"
}
```

### Cal.com Integration

- **Popup mode** on every "Book a Call" / "Book a free audit" button across the page
- **Inline embed mode** on the final CTA section (#11) — calendar visible without clicking
- Use `theme="dark"` to match site palette
- Add custom questions in Cal.com dashboard: Company name, Website URL, Current outbound setup (dropdown), Biggest GTM challenge (open text)

---

## 3. COLOR PALETTE — "MIDNIGHT SAGE"

The palette is warm, muted, and easy on the eyes. No harsh contrasts. No electric blue. No pure black or pure white.

```css
/* Backgrounds — warm charcoal, NOT cold black */
--bg-0: #0B0C0A;    /* page background */
--bg-1: #10110F;    /* cards, sections */
--bg-2: #161714;    /* nested elements, inputs */
--bg-3: #1C1D1A;    /* hover states, borders */
--bg-4: #242521;    /* tags, badges */
--bg-5: #2E2F2B;    /* active states */

/* Text — warm off-whites and grays */
--t1: #E8E4DB;      /* primary text — warm cream, NOT pure white */
--t2: #B5B1A7;      /* secondary text — readable, soft */
--t3: #858278;      /* muted — labels, hints */
--t4: #5E5C54;      /* subtle — faint text, borders */
--t5: #3D3B36;      /* very faint — dividers */

/* Primary accent — sage green (trust, growth, results) */
--sage: #7CB89E;
--sage-light: #9ECDB8;
--sage-dim: rgba(124, 184, 158, 0.08);
--sage-border: rgba(124, 184, 158, 0.18);

/* Secondary accent — warm copper (premium, warmth, Lever-only features) */
--copper: #CDA576;
--copper-dim: rgba(205, 165, 118, 0.07);
--copper-border: rgba(205, 165, 118, 0.15);

/* Semantic — soft, not aggressive */
--coral: #C88A7A;          /* negatives/problems — muted, not angry red */
--coral-dim: rgba(200, 138, 122, 0.06);
--coral-border: rgba(200, 138, 122, 0.12);

--green-soft: #85B88A;     /* success states */
--amber-soft: #C9AD6A;     /* warnings, scarcity */
```

### Color Usage Rules

- **Sage green** for: CTA buttons (text on cream bg), checkmarks in positive comparison, pipeline dots (standard services), active toggles, links, logo accent, section tags
- **Copper** for: "Only at Lever" badges, AI/reporting pipeline dots, case study tags, founder titles, scarcity badge
- **Coral** for: negative comparison items (✗ marks), toggled-on health check states, bounce rate numbers, problem section top borders
- **Never** use pure #000000 or #FFFFFF anywhere on the page
- **Borders** are always `--t5` (#3D3B36), never solid colors
- **Hover states** shift border color one step lighter, never change background dramatically

---

## 4. SITE STRUCTURE — 12 SECTIONS

This is the final agreed structure. Each section has a specific purpose in the conversion funnel.

### Section 01 — Hero
**Source:** Changed from LeadBird
**Purpose:** 5-second hook — who we are, who it's for, what to do next

```
[Badge]      "GTM engineering as a service" (with green dot)
[Headline]   "Get qualified B2B meetings — 100% engineered for you"
[Sub]        "Lead enrichment. Cold email. LinkedIn. AI automation. Revenue reporting — fully built, managed, and optimized."
[CTA 1]      "Book a free GTM audit" (primary — cream bg)
[CTA 2]      "See client results" (secondary — ghost button)
[Qualifier]  "For B2B teams doing $50K+/mo who need pipeline, not another agency. Everything we build, you own."
```

- NO scarcity counter in hero (moved to final CTA where it's earned)
- NO trust badge logos (we don't have recognizable logos yet — text badges instead)

### Section 02 — Outbound Health Check (Interactive)
**Source:** ORIGINAL — neither competitor has this
**Purpose:** Engage the visitor, surface their problems, collect intel before the call

- 5 toggle questions (yes/no):
  1. "We use one domain for all outbound emails"
  2. "Our email bounce rate is above 5%"
  3. "No enrichment pipeline — we buy lists and send"
  4. "Our team spends more time researching than selling"
  5. "No real-time visibility into pipeline metrics"
- Live score counter: "Gaps found: X/5"
- CTA button next to score: "Get your free audit"
- Toggles animate with spring physics (Framer Motion)

### Section 03 — The System (Connected Pipeline)
**Source:** ORIGINAL — replaces the typical "services grid"
**Purpose:** Show one connected machine, not a menu of services

- 4 nodes flowing left to right with arrows between them:
  1. **Data layer** (sage dot) — "Lead enrichment, verification, ICP scoring across 12+ sources" — Clay · Apollo · Clearbit
  2. **Outreach layer** (sage dot) — "Multi-domain email + LinkedIn with full authentication and warmup" — Smartlead · HeyReach
  3. **Intelligence layer** (copper dot) — "AI workflows: lead scoring, personalization, research automation" — n8n · Python · OpenAI
  4. **Reporting layer** (copper dot) — "Live dashboards: reply rates, meetings, pipeline, cost per lead" — Custom dashboards
- Legend below: sage dot = "What agencies also offer" | copper dot = "Only at Lever"
- On mobile: stack vertically with arrows pointing down

### Section 04 — The Comparison
**Source:** Inspired by LeadBird but condensed to ONE comparison (not six)
**Purpose:** Handle the main objection — "why not hire an agency?"

Two columns side by side:
- **Left (coral border):** "Other agencies" — "Template campaigns that stop when the invoice stops"
  - ✗ Generic templates recycled across clients
  - ✗ They own the infrastructure — not you
  - ✗ Junior reps manage your campaigns
  - ✗ Single channel — usually just email
  - ✗ 3-6 month lock-in contracts
  - ✗ No AI, no automation, no reporting
  - ✗ 4-8 weeks to see first results

- **Right (sage border):** "Lever" — "Custom systems you own that compound over time"
  - ✓ Every system engineered for your ICP and market
  - ✓ You own 100% of what we build
  - ✓ The founders build your system directly
  - ✓ Email + LinkedIn + AI automation
  - ✓ Month-to-month — cancel anytime
  - ✓ AI workflows + live revenue dashboards
  - ✓ Live in 2-3 weeks, replies in 14 days

**Below the comparison:** Compact email proof (two email mockups side by side)
- Left (coral): Generic template email — "Flagged as promotional — 0.3% reply rate"
- Right (sage): Personalized Lever email signed by Anas — "Delivered to primary — 14% reply rate"

### Section 05 — What You Own (Deliverables Checklist)
**Source:** ORIGINAL — no competitor shows tangible deliverables
**Purpose:** Answer "what do I literally walk away with?"

6 items with sage checkmarks:
1. A configured Clay enrichment pipeline with 4+ waterfall data sources
2. 5+ warmed email domains with full SPF/DKIM/DMARC authentication
3. LinkedIn outreach sequences loaded and running via HeyReach
4. Custom n8n AI workflows — lead scoring, personalization, research
5. Live revenue dashboard tracking reply rates, meetings, pipeline, ROI
6. Full documentation so your team can operate everything independently

### Section 06 — Results (Case Studies)
**Source:** Inspired by both competitors, changed to include context stories
**Purpose:** Proof with numbers

3 cards:
1. **Series B Fintech** — 47 demos/mo, 14% reply rate — "We went from 2% reply rates to 47 qualified demos a month. Lever built everything in 3 weeks." — VP of Growth, $25K ACV Compliance SaaS
2. **SaaS — Series A** — $180K pipeline in 60 days — "We had no outbound system. Lever built enrichment, email infra, LinkedIn, and AI automation in parallel." — CEO & Founder, Productivity tool $15K ACV
3. **HealthTech** — 15 hrs saved/wk, 3 workflows — "The n8n workflows they built do what used to take our ops team an entire day." — Head of Operations, B2B health platform

### Section 07 — Process (Connected Timeline)
**Source:** Changed from Earleads (connected strip, not isolated cards)
**Purpose:** De-risk the engagement

4 connected phases in one horizontal strip:
1. **Phase 1: GTM audit** — "We diagnose your outbound gaps. Free, 30 minutes." — Week 1 · Free
2. **Phase 2: System design** — "Custom blueprint. You approve before we build anything." — Week 1-2
3. **Phase 3: Build & launch** — "Everything live. Full QA. Supervised go-live." — Week 2-4
4. **Phase 4: Optimize** — "Monthly reporting, A/B testing, iteration. No lock-in." — Ongoing

### Section 08 — The Founders
**Source:** ORIGINAL — no competitor humanizes this well
**Purpose:** Turn 2-person team from weakness to trust signal

2 profile cards side by side:
- **Anas** (initial "A") — GTM engineer & founder — "Built 47+ outbound systems across SaaS, fintech, and healthtech. Clay expert. Smartlead top 1%. Specializes in enrichment pipelines and AI automation."
- **Adnane** (initial "Ad") — Co-founder & automation architect — "Designs the n8n workflows, Python integrations, and revenue reporting systems. Turns manual GTM processes into automated infrastructure."

Headline: "Not a team of juniors. The founders."
Sub: "When you hire Lever, you hire us. Not a team managed by us."

### Section 09 — FAQ (Accordion)
**Source:** Inspired by LeadBird
**Purpose:** Kill last objections before CTA

5 questions:
1. "How is this different from a lead gen agency?" — They run campaigns on their infra. We build on yours. You keep everything.
2. "How fast will we see results?" — Replies in 14 days. System live in 2-3 weeks. Compounds from month 2.
3. "What does 'done-for-you' mean?" — We handle everything. You show up to sales calls with qualified prospects.
4. "You are a 2-person team — can you handle this?" — 3-4 clients at a time. Founders directly. No juniors. That's why results are better.
5. "What is the minimum commitment?" — Month-to-month. No contracts. Systems earn your business.

### Section 10 — Final CTA
**Source:** Changed from LeadBird — scarcity lives HERE, not in the hero
**Purpose:** Close

```
[Headline]   "You don't need more outbound. You need more qualified replies."
[Sub]        "47+ systems built. 99%+ deliverability. 12% average reply rate. Let's turn cold outreach into booked revenue."
[CTA 1]      "Book your free audit" (primary)
[CTA 2]      "See client results" (secondary)
[Scarcity]   "We take on 3-4 new clients per month to maintain quality" (amber badge)
```

- Cal.com inline embed below the CTAs showing available time slots (dark theme)

### Footer
Minimal single row:
- Left: Logo + © 2026 Lever
- Right: Results · Process · FAQ · Privacy · Terms

---

## 5. COPY VOICE RULES

- **Direct:** Say what you mean in fewer words. No filler.
- **Specific:** Every claim has a number. Never "we help companies grow" — say "we build systems that book 40+ demos per month."
- **Confident:** We know what we do. Not arrogant, but not apologetic.
- **Words to use:** build, engineer, deploy, system, infrastructure, pipeline, engine, own, compound
- **Words to avoid:** help, solutions, leverage, utilize, synergy, growth hacking, best-in-class, passionate
- **Headlines:** Always name a problem or outcome, never a feature
- **CTAs:** Always name the specific action — "Book a free GTM audit" not "Get Started"
- **Service descriptions:** Describe what the client gets, not what you do
- **Every sentence earns the next scroll** — if it doesn't move the visitor toward booking, delete it

---

## 6. PROJECT STRUCTURE (React + Vite)

```
lever-landing-page/
├── public/
│   └── (fonts loaded via npm 'geist' package — no manual font files needed)
├── screenshots/
│   ├── v1/                    # initial build — baseline reference
│   │   ├── 01-hero.png
│   │   ├── 02-health-check.png
│   │   ├── 03-system-pipeline.png
│   │   ├── 04-comparison.png
│   │   ├── 05-deliverables.png
│   │   ├── 06-case-studies.png
│   │   ├── 07-process.png
│   │   ├── 08-founders.png
│   │   ├── 09-faq.png
│   │   ├── 10-final-cta.png
│   │   ├── full-page.png
│   │   └── mobile-full.png
│   ├── v2/                    # after first round of changes
│   ├── v3/                    # after second round
│   └── changelog.md           # log of what changed between versions
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── HealthCheck.jsx
│   │   ├── Marquee.jsx            # CSS-only logo/tool marquee
│   │   ├── SystemPipeline.jsx
│   │   ├── Comparison.jsx         # includes email mockups
│   │   ├── Deliverables.jsx
│   │   ├── StatsBar.jsx           # counter numbers with react-countup
│   │   ├── CaseStudies.jsx
│   │   ├── Process.jsx
│   │   ├── Founders.jsx
│   │   ├── FAQ.jsx
│   │   ├── FinalCTA.jsx           # includes Cal.com inline embed
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useCountUp.js
│   ├── lib/
│   │   └── variants.js            # shared Framer Motion variants (fadeUp, stagger, scaleIn)
│   ├── data/
│   │   ├── services.js
│   │   ├── comparison.js
│   │   ├── caseStudies.js
│   │   ├── faqItems.js
│   │   └── founders.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # @font-face, Tailwind imports, global styles
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── claude.md (this file)
```

### Screenshots Workflow

After each build or change round, Claude Code should:
1. Take a screenshot of each section (numbered 01-11 matching section numbers)
2. Take a full-page scroll screenshot and a mobile-width (375px) full-page screenshot
3. Save to the next version folder (v1/, v2/, v3/...)
4. Update `changelog.md` with what changed

**changelog.md format:**
```md
## v2 — [date]
- Changed: Hero headline from X to Y
- Fixed: Health check toggles not responding on mobile
- Added: Hover animation on deliverables cards
- Screenshot: screenshots/v2/

## v1 — [date]
- Initial build — all 12 sections live
- Screenshot: screenshots/v1/
```

When asking Claude Code to change something, reference the screenshot:
- "Look at screenshots/v1/04-comparison.png — make the email mockups taller"
- "In screenshots/v1/03-system-pipeline.png — the arrows are too faint on mobile"

This way you always have a visual history of what the site looked like at each stage.

### Tailwind Config Essentials

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: { 0: '#0B0C0A', 1: '#10110F', 2: '#161714', 3: '#1C1D1A', 4: '#242521', 5: '#2E2F2B' },
        t: { 1: '#E8E4DB', 2: '#B5B1A7', 3: '#858278', 4: '#5E5C54', 5: '#3D3B36' },
        sage: { DEFAULT: '#7CB89E', light: '#9ECDB8' },
        copper: { DEFAULT: '#CDA576' },
        coral: { DEFAULT: '#C88A7A' },
      },
      fontFamily: {
        display: ['"Geist"', 'sans-serif'],   // SemiBold (600) weight for headlines
        body: ['"Geist"', 'sans-serif'],       // Medium/Regular for everything else
        mono: ['"JetBrains Mono"', 'monospace'], // numbers, stats, data
      },
    },
  },
}
```

---

## 7. KEY DESIGN PRINCIPLES

1. **Warm, not cold.** Every color has a slight warm undertone. No blue-blacks, no clinical whites.
2. **Muted, not loud.** All accent colors are desaturated. The content leads, colors support.
3. **One comparison, not six.** LeadBird repeats the pattern. We do it once, hard.
4. **Interactive > static.** Health check is interactive — no competitor has this.
5. **Connected pipeline > service cards.** Shows a system, not a shopping list.
6. **Founders visible.** 2-person team is a feature, not a limitation. Show faces and credentials.
7. **Scarcity is earned.** It appears at the end of the page, not the beginning.
8. **Everything the visitor reads must earn the next scroll.** No filler, no corporate speak.
9. **Match Agenta's motion quality.** Every scroll reveal, hover, and accordion should feel as smooth as agenta.framer.website. Use the same easing curves and timing. If an animation feels "snappy" or "janky," slow it down and add easing.

---

## 8. REFERENCE FILES

**Animation & UX reference (match this feel exactly):**
`https://agenta.framer.website/` — use this site as the gold standard for animation timing, scroll behavior, hover interactions, and overall smoothness. Open it before building any component and match the motion quality.

The HTML prototype with all content filled and the Midnight Sage palette applied is available at:
`/mnt/user-data/outputs/Lever_MidnightSage.html`

Use this as the visual and content reference. Every section's copy, structure, and color usage is finalized there.

The full website content documentation (Word document) with extended copy, strategy notes, and build roadmap is at:
`/mnt/user-data/outputs/Lever_Website_Documentation.docx`

---

## 9. BUILD ORDER

Build the production site — single-page React app with all 10 sections + footer. No routing. Single scroll page.

**Phase 1 — Scaffold (Sonnet, max effort)**
1. Set up Vite + Tailwind + Framer Motion + geist npm package + JetBrains Mono
2. Create index.css with @font-face declarations, Tailwind imports, CSS variables for Midnight Sage palette
3. Create `src/lib/variants.js` with shared Framer Motion variants
4. Create all data files in `src/data/` (comparison items, FAQ items, case studies, founders, services)

**Phase 2 — Build components (Sonnet, max effort)**
5. Build Nav.jsx — sticky, blur backdrop, scroll state change
6. Build Hero.jsx — badge, headline, sub, CTAs, qualifier (apply frontend-design skill)
7. Build HealthCheck.jsx — interactive toggles with spring animation (apply ui-animation skill)
8. Build Marquee.jsx — CSS-only infinite scroll tool strip
9. Build SystemPipeline.jsx — 4 connected nodes with arrows
10. Build Comparison.jsx — side-by-side + email mockups below
11. Build Deliverables.jsx — checklist with sage checkmarks
12. Build StatsBar.jsx — counter numbers with react-countup
13. Build CaseStudies.jsx — 3 cards with metrics
14. Build Process.jsx — 4 connected timeline phases
15. Build Founders.jsx — 2 profile cards
16. Build FAQ.jsx — accordion with AnimatePresence
17. Build FinalCTA.jsx — headline, CTAs, scarcity, Cal.com inline embed
18. Build Footer.jsx — minimal single row

**Phase 3 — Animate (Sonnet, max effort)**
19. Add whileInView scroll reveals to all section wrappers (apply ui-animation skill)
20. Add staggerChildren to all card grids
21. Add whileHover to all cards and buttons
22. Add hero stagger animation on page load
23. Test all animations match Agenta's feel — smooth, breathing, not snappy

**Phase 4 — Validate (switch to Opus, max effort)**
24. Run web-design-guidelines check — fix spacing inconsistencies, typography scale, responsive issues
25. Run wcag-accessibility-audit audit — fix focus states, keyboard nav, contrast, semantic HTML
26. Polish pass — fine-tune animation easing, spacing between sections, mobile layout
27. **Screenshot round: capture all sections → save to screenshots/v1/**
28. **Update screenshots/changelog.md with "v1 — initial build"**

**Phase 5 — Ship**
29. Deploy to Vercel

After every change request:
1. Make the changes (Sonnet for structural, Opus for polish)
2. Screenshot affected sections → save to screenshots/v[next]/
3. Update changelog.md with what changed
4. Present screenshots for review before moving on

---

## 10. DO NOT

- Do NOT use Framer (the visual editor), Webflow, Figma, or any visual builder — we code everything in React + Vite
- Do NOT use Inter, Roboto, Arial, Satoshi, or system fonts — Geist only
- Do NOT use pure black (#000) or pure white (#FFF) anywhere
- Do NOT use electric blue, neon green, or aggressive red
- Do NOT add stock photos, illustrations, or decorative images
- Do NOT add a blog, multi-page routing, or complex navigation for V1
- Do NOT add pricing page — pricing is discussed on the call
- Do NOT add CRM migration as a service — it was explicitly removed
- Do NOT add a calculator or ROI math section — it was explicitly removed
- Do NOT use GSAP, Three.js, Lottie, or AOS — Framer Motion (the npm package) handles all animations
- Do NOT add parallax, scroll-jacking, or page transition animations
- Do NOT use "help," "solutions," "leverage," or "passionate" in any copy
- Do NOT add a scarcity counter in the hero section — scarcity lives in the final CTA only
- Do NOT use more than 2 fonts total (Geist + JetBrains Mono — that's it)
- Do NOT make animations snappy or instant — match the smooth, breathing feel of agenta.framer.website
- Do NOT skimp on padding/whitespace — if a section feels cramped, add more space