# PAL RUN 2026 + BNG — Task Plan

## Phase 1: B — Blueprint ✅
- [x] Discovery questions answered
- [x] bngrun.com analyzed
- [x] PAL RUN 2026 event data researched
- [x] All 7 BNG founding members researched
- [x] Data schema defined in claude.md
- [x] Tech stack decided (Next.js 14 + Tailwind)
- [ ] Blueprint approved by user
- [ ] MDC Prime Consulting data provided by user

## Phase 2: L — Link
- [ ] Initialize Git repository
- [ ] Initialize Next.js 14 project (App Router)
- [ ] Install and configure Tailwind CSS
- [ ] Set up folder structure (pages, components, data)
- [ ] Verify local dev server runs (`npm run dev`)
- [ ] Connect to GitHub remote

## Phase 3: A — Architect (Build)

### Site Structure
```
/                        → PAL RUN 2026 Homepage
/bng                     → BNG Landing Page
/members/[slug]          → Individual member profile pages (x7)
```

### PAL RUN 2026 — / (Homepage)
- [ ] `Navbar` — Logo, nav links, "Register Now" CTA
- [ ] `Hero` — Full-screen, countdown timer, race name/date/venue
- [ ] `WhyJoin` — 4–6 benefit cards (the core "sell")
- [ ] `RaceCategories` — Distance cards (5K, 10K, 21K, 42K) with times & fees
- [ ] `Inclusions` — Race kit + finisher pack breakdown
- [ ] `EventDetails` — Date, venue, route description
- [ ] `Prizes` — Airline ticket prizes, Dubai Marathon opportunity
- [ ] `HowToRegister` — Step-by-step registration guide
- [ ] `FAQ` — Accordion with common questions
- [ ] `Footer` — PAL logo, links, copyright

### BNG Landing Page — /bng
- [ ] `BNGHero` — Group identity, tagline, Singapore skyline
- [ ] `AboutBNG` — Mission, founding story, year established
- [ ] `FoundingMembers` — Grid of 7 company cards with logo, name, short desc, "View Profile" link
- [ ] `BNGFooter` — Links back to PAL Run, copyright

### Member Profile Pages — /members/[slug]
- [ ] Dynamic route setup (`/members/[slug]/page.tsx`)
- [ ] Member data file (`/data/members.ts`) for all 7 companies
- [ ] Profile template: logo, company name, tagline, full description, brand colors, website link, social links
- [ ] Individual slugs:
  - `/members/hfse`
  - `/members/lbc`
  - `/members/megaworld`
  - `/members/noble-life`
  - `/members/mdc-prime` ⚠️ (awaiting user data)
  - `/members/pnb`
  - `/members/pal`

### Shared Components
- [ ] `Navbar` — Site-wide with PAL RUN + BNG navigation
- [ ] `Footer` — Consistent across all pages
- [ ] `MemberCard` — Reusable card for grid and profile

### SEO / Config
- [ ] `metadata` per page (title, description, OG, Twitter card)
- [ ] `schema.org/SportsEvent` (PAL Run page)
- [ ] `schema.org/Organization` (BNG page)
- [ ] `/sitemap.xml` auto-generated
- [ ] `/robots.txt`
- [ ] Favicon (PAL sunburst)

### Data Files
- [ ] `/data/event.ts` — PAL RUN 2026 event data
- [ ] `/data/members.ts` — All 7 BNG member profiles

## Phase 4: S — Stylize
- [ ] Responsive check (mobile, tablet, desktop)
- [ ] Lighthouse audit (target: ≥90 all categories)
- [ ] User review and feedback

## Phase 5: T — Trigger (On User Approval)
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Final smoke test on production URL
