# PAL RUN 2026 — Project Constitution (claude.md)

## Project Identity
- **Project Name:** PAL RUN 2026 + BNG Event Website
- **Reference Site:** bngrun.com
- **Client:** HFSE / VizServe
- **Status:** Phase 2 — Link (Scaffolding)

---

## Brand Identity

### Philippine Airlines Official Colors (60-30-10 Rule)
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| 60% Dominant | Ultramarine Blue | `#042B67` | Primary brand, nav, hero backgrounds |
| 30% Secondary | True Red | `#EC2B2A` | CTAs, highlights, active states |
| 10% Accent | German Yellow | `#FDCB0A` | Sunburst, badges, icons |
| Background | Pure White | `#FFFFFF` | Page backgrounds |
| Text | Slate | `#1E293B` | Body text |

### CSS Design Tokens
```css
--primary: #042B67;
--cta: #EC2B2A;
--accent: #FDCB0A;
--background: #FFFFFF;
--text: #1E293B;
```

### Typography (Confirmed)
- **Headings:** Inter Variable Font — weights 600, 700
- **Body:** Roboto or System UI — weights 400, 600
- **Mono:** JetBrains Mono (if needed for code)
- **Max font sizes per view:** 5

### Design Aesthetic
- **Style:** Glassmorphism — frosted glass, transparent layers, blurred backgrounds, depth
- **Key CSS:**
  - `backdrop-filter: blur(10px) saturate(180%)`
  - `background: rgba(255, 255, 255, 0.1)`
  - `border: 1px solid rgba(255, 255, 255, 0.2)`
- **Mood:** Innovative, energetic, forward-thinking

---

## Design System Rules

### Animations (Mandatory)
- **Button hover:** `transform: scale(1.02)` + `translateY(-2px)` + glow shadow
- **Timing:** 150–300ms, `cubic-bezier(0.4, 0, 0.2, 1)`
- **Card hover:** `translateY(-4px)` + shadow increase + subtle 3D tilt (2-3deg)
- **Scroll reveal:** fade-up (`opacity 0→1` + `translateY(20px→0)`), 600ms ease-out
- **Stagger delay:** 100ms between sibling elements
- **Parallax:** Hero bg at 0.5x scroll speed, max 20-30px movement
- **Page transitions:** Fade opacity 200ms
- **Always respect:** `@media (prefers-reduced-motion: reduce)` — collapse all to 0.01ms

### Spacing & Layout
- **Grid:** 8px base grid system
- **Tap targets:** Minimum 44×44px (mobile)
- **No horizontal scroll** (unless intentional carousel)

### WCAG AA Compliance
- Text contrast: minimum 4.5:1 ratio
- Focus indicators: minimum 3px outline with brand color at 50% opacity
- Alt text on all images
- No color-only information conveyance
- Keyboard navigation must work throughout

### Anti-Patterns (NEVER DO)
- No light grey on white (low contrast)
- No more than 3 primary colors, 2 font families
- No auto-playing carousels
- No labels inside inputs
- No lorem ipsum in production
- No animations on page load that block interaction
- No interaction transitions > 300ms
- No unoptimized images (use WebP + lazy loading)
- No CLS > 0.1

---

## Event Data Schema (Hardcoded)

```json
{
  "event": {
    "name": "44th PAL Manila International Marathon",
    "brand": "PAL RUN 2026",
    "tagline": "Run Manila. Run with Pride.",
    "date": "May 31, 2026",
    "day": "Sunday",
    "venue": "Liwasan Ulalim (CCP), Pablo Ocampo Street, Pasay City",
    "route": "Roxas Boulevard — flat and scenic"
  },
  "categories": [
    { "distance": "42.195 km", "label": "Marathon", "gunStart": "1:00 AM", "fee": "$100" },
    { "distance": "21.0975 km", "label": "Half Marathon", "gunStart": "2:00 AM", "fee": "$75" },
    { "distance": "10 km", "label": "10K Fun Run", "gunStart": "4:00 AM", "fee": "$50" },
    { "distance": "5 km", "label": "5K Fun Run", "gunStart": "5:00 AM", "fee": "$50" }
  ],
  "inclusions": {
    "raceKit": ["Race singlet", "Race bib with timing chip"],
    "finisherPack": ["Finisher's medal", "Drawstring bag", "Finisher's shirt", "Finisher's towel"],
    "prizes": [
      "Top 50 men/women 42K finishers get free airline tickets to next edition",
      "Overall male champion competes in Dubai International Marathon"
    ]
  },
  "registration": {
    "deadline": "May 24, 2026",
    "url": "https://runsignup.com/Race/Events/PH/Manila/manilamarathon"
  }
}
```

---

## BNG Member Data Schema (All 7 Confirmed)

```json
[
  {
    "slug": "hfse",
    "name": "Happy Family School of Excellence",
    "shortName": "HFSE",
    "tagline": "Singapore's First Filipino-Run International School",
    "description": "HFSE International School is Singapore's first Filipino-run educational institution, founded in 2015. It provides international education combining Singaporean and Philippine curricula, serving students from Primary 1 to Secondary 4.",
    "website": "https://hfse.edu.sg/",
    "brandColor": "#242e76",
    "accentColor": "#ed7622",
    "facebook": null,
    "instagram": "https://www.instagram.com/hfseinternational/",
    "linkedin": "https://sg.linkedin.com/company/hfse-international-school"
  },
  {
    "slug": "lbc",
    "name": "LBC Express",
    "shortName": "LBC",
    "tagline": "Hari ng Padala — The King of Delivery",
    "description": "LBC Express is the largest express courier, cargo, and money remittance service in the Philippines, operating in 24+ countries since 1945. It is the essential lifeline for Filipino overseas workers and diaspora communities worldwide.",
    "website": "https://www.lbcexpress.com/",
    "brandColor": "#D00149",
    "accentColor": "#000000",
    "facebook": "https://www.facebook.com/LBCExpress/",
    "instagram": null,
    "linkedin": "https://www.linkedin.com/company/lbc-express-inc-"
  },
  {
    "slug": "megaworld",
    "name": "Megaworld International",
    "shortName": "Megaworld",
    "tagline": "Live. Work. Play. Learn. Shop.",
    "description": "Megaworld International is the global marketing arm of Megaworld Corporation, the Philippines' largest real estate developer. Specializing in township development across 60+ countries, it connects the Filipino diaspora to premium Philippine property investments.",
    "website": "https://megaworldinternational.com/",
    "brandColor": "#1d5295",
    "accentColor": "#a74799",
    "facebook": "https://www.facebook.com/megaworldintlmktg",
    "instagram": "https://www.instagram.com/megaworld_intl/",
    "linkedin": null
  },
  {
    "slug": "noble-life",
    "name": "Noble Life International",
    "shortName": "Noble Life",
    "tagline": "Live a Noble Life — Health, Wellness, and Abundance",
    "description": "Noble Life International is a Singapore-Philippines health and wellness company founded in 2006. It markets scientifically formulated organic health foods and wellness products through a global network of health educators across Asia and beyond.",
    "website": "https://www.ournoblelife.com/",
    "brandColor": "#062B6A",
    "accentColor": "#02cff6",
    "facebook": "https://www.facebook.com/NobleLifeIntl",
    "instagram": "https://www.instagram.com/_noblelife",
    "linkedin": "https://il.linkedin.com/company/noble-life-international"
  },
  {
    "slug": "mdc-prime",
    "name": "MDC Prime Consulting Pte. Ltd.",
    "shortName": "MDC Prime",
    "tagline": "Empowering SMEs Through Strategic Business Solutions",
    "description": "MDC Prime Consulting Pte. Ltd. is a general management consultancy firm supporting small and medium enterprises through expert business support services in the areas of strategy, learning and development, and operations.",
    "website": null,
    "brandColor": "#1a1a2e",
    "accentColor": "#4a90d9",
    "facebook": "https://www.facebook.com/mdcprimeconsulting/",
    "instagram": null,
    "linkedin": null
  },
  {
    "slug": "pnb",
    "name": "Philippine National Bank Singapore",
    "shortName": "PNB",
    "tagline": "Your Bank for Life",
    "description": "Philippine National Bank (PNB) Singapore is a branch of one of the Philippines' leading banking institutions. It serves the Filipino community with remittance services, loans, fixed deposits, and government payment services including SSS and PAG-IBIG.",
    "website": "https://www.pnb.com.ph/",
    "brandColor": "#103579",
    "accentColor": "#30CDD7",
    "facebook": null,
    "instagram": "https://www.instagram.com/pnbph/",
    "linkedin": "https://www.linkedin.com/company/philippine-national-bank"
  },
  {
    "slug": "pal",
    "name": "Philippine Airlines",
    "shortName": "PAL",
    "tagline": "Asia's First Airline — Connecting the World to the Philippines",
    "description": "Philippine Airlines is Asia's oldest airline still operating under its original name, founded in 1941. As the Philippines' flag carrier, PAL connects Singapore to Manila and major Philippine destinations, serving the Filipino diaspora and international travelers.",
    "website": "https://www.philippineairlines.com/",
    "brandColor": "#042B67",
    "accentColor": "#EC2B2A",
    "facebook": null,
    "instagram": "https://www.instagram.com/flypal/",
    "linkedin": "https://www.linkedin.com/company/philippine-airlines/"
  }
]
```

---

## Architectural Invariants (Rules — Do Not Break)

1. **No database** — all content is hardcoded in `/data/` directory
2. **Local first** — do NOT deploy to Vercel without explicit user approval
3. **SEO-first** — every page must have: title, description, OG tags, sitemap, robots.txt
4. **Git versioning** — conventional commits; no force-push; no reset --hard without approval
5. **Tone:** Energetic, motivational, benefit-forward — emphasize WHY to join
6. **Performance:** Lighthouse ≥ 90 across Performance, SEO, Accessibility
7. **Accessibility:** WCAG AA compliant throughout
8. **Animations:** Always include `prefers-reduced-motion` fallback

---

## Tech Stack (Confirmed)
- **Framework:** Next.js 14+ (App Router) — Vercel-native, SSG, metadata API
- **Styling:** Tailwind CSS — utility-first, responsive
- **Animation:** Framer Motion — scroll reveals, page transitions, micro-interactions
- **Fonts:** next/font — Inter (headings), Roboto (body)
- **Deployment:** Vercel (when authorized)
- **Versioning:** Git → GitHub
- **Package Manager:** npm

---

## Site Structure

```
/                        → PAL RUN 2026 Homepage
/bng                     → BNG Landing Page
/members/[slug]          → Individual member profile (x7)
```

### Member Slugs
| Slug | Company |
|------|---------|
| `/members/hfse` | Happy Family School of Excellence |
| `/members/lbc` | LBC Express |
| `/members/megaworld` | Megaworld International |
| `/members/noble-life` | Noble Life International |
| `/members/mdc-prime` | MDC Prime Consulting |
| `/members/pnb` | Philippine National Bank Singapore |
| `/members/pal` | Philippine Airlines |

---

## Maintenance Log
| Date | Change | Author |
|------|--------|--------|
| 2026-03-04 | Project Constitution initialized | System Pilot |
| 2026-03-04 | Design system added (glassmorphism, animations, tokens) | System Pilot |
| 2026-03-04 | All 7 BNG member schemas confirmed | System Pilot |
