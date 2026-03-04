# PAL RUN 2026 — Findings & Research

## bngrun.com Analysis
- **CMS:** WordPress + Elementor Pro (we will NOT use this — building fresh with Next.js)
- **Structure:** Nav → Hero → About → Founding Companies → Timeline → Beneficiaries → Sponsors → Newsletter
- **Feel:** Community-focused, clean white backgrounds, grid-heavy layout
- **Founding companies include Philippine Airlines** — PAL is already a BNG partner

---

## PAL RUN 2026 — Event Facts
- **Official Name:** 44th PAL Manila International Marathon
- **Date:** Sunday, May 31, 2026
- **Venue:** Liwasan Ulalim (CCP), Pablo Ocampo St., Pasay City
- **Route:** Roxas Boulevard — flat, fast, scenic
- **Registration Deadline:** May 24, 2026

### Race Categories
| Distance | Label | Gun Start | Fee |
|----------|-------|-----------|-----|
| 42.195 km | Marathon | 1:00 AM | $100 |
| 21.0975 km | Half Marathon | 2:00 AM | $75 |
| 10 km | 10K Fun Run | 4:00 AM | $50 |
| 5 km | 5K Fun Run | 5:00 AM | $50 |

### Race Kit
- Race singlet
- Race bib with timing chip

### Finisher Pack
- Finisher's medal
- Drawstring bag
- Finisher's shirt
- Finisher's towel

### Special Prizes
- Top 50 men & women in 42K → free airline tickets to next year's edition
- Overall male champion → competes in Dubai International Marathon (PAL-sponsored)

---

## Philippine Airlines Brand Colors
| Color | Hex |
|-------|-----|
| Ultramarine Blue | #042B67 |
| True Red | #EC2B2A |
| German Yellow | #FDCB0A |

---

## BNG — Business Network Group

### About
- **Full Name:** Business Network Group (BNG)
- **Identity:** Singapore's premier Filipino business group
- **Founded by:** 7 Filipino companies
- **Mission:** Uniting the Filipino community in Singapore

### Founding Members — Company Data

#### 1. HFSE — Happy Family School of Excellence
- **Website:** https://hfse.edu.sg/
- **Description:** Singapore's first Filipino-run educational institution, founded in 2015. Provides international education combining Singaporean and Philippine curricula, from Primary 1 to Secondary 4.
- **Colors:** Blue `#242e76`, Orange `#ed7622`
- **Instagram:** https://www.instagram.com/hfseinternational/
- **LinkedIn:** https://sg.linkedin.com/company/hfse-international-school

#### 2. LBC Express
- **Website:** https://www.lbcexpress.com/
- **Description:** The largest express courier, cargo, and money remittance service in the Philippines, operating in 24+ countries since 1945. Essential service for Filipino OFWs and expatriates worldwide.
- **Colors:** Red `#D00149`, Black `#000000`
- **Facebook:** https://www.facebook.com/LBCExpress/
- **Twitter/X:** https://twitter.com/LBCexpress
- **LinkedIn:** https://www.linkedin.com/company/lbc-express-inc-

#### 3. Megaworld International
- **Website:** https://megaworldinternational.com/
- **Description:** The global marketing arm of Megaworld Corporation, the Philippines' largest real estate developer. Specializes in township development with the "live-work-play-learn-shop" concept, operating in 60+ countries.
- **Colors:** Blue `#1d5295`, Purple `#a74799`
- **Facebook:** https://www.facebook.com/megaworldintlmktg
- **Instagram:** https://www.instagram.com/megaworld_intl/
- **Twitter/X:** https://twitter.com/megaworld_intl

#### 4. Noble Life International
- **Website:** https://www.ournoblelife.com/
- **Description:** A Singapore-Philippines health and wellness company founded in 2006. Markets scientifically formulated organic health foods through direct marketing and a global network of health educators.
- **Colors:** Cyan `#02cff6`, Blue `#062B6A`
- **Facebook:** https://www.facebook.com/NobleLifeIntl
- **Instagram:** https://www.instagram.com/_noblelife
- **LinkedIn:** https://il.linkedin.com/company/noble-life-international

#### 5. MDC Prime Consulting
- **Website:** Not found — ⚠️ NEEDS USER VERIFICATION
- **Description:** Placeholder — requires user to provide official website, logo, and description
- **Note:** Could not be identified in business databases. May operate under a different registered name.

#### 6. Philippine National Bank (PNB) Singapore
- **Website:** https://www.pnb.com.ph/
- **Singapore Branch:** 304 Orchard Road, #03-02/07 Lucky Plaza, Singapore 238863
- **Description:** A leading Philippine banking institution with 70+ overseas branches. The Singapore branch offers remittance, loans, fixed deposits, and government payment services (SSS, PAG-IBIG) for Filipino expatriates.
- **Colors:** Cyan `#30CDD7`, Deep Blue `#103579`
- **Instagram:** https://www.instagram.com/pnbph/
- **Twitter/X:** https://twitter.com/pnbph
- **LinkedIn:** https://www.linkedin.com/company/philippine-national-bank

#### 7. Philippine Airlines (PAL)
- **Website:** https://www.philippineairlines.com/
- **Singapore Portal:** https://flights.philippineairlines.com/en-sg/
- **Description:** Asia's oldest airline still operating under its original name, founded in 1941. The Philippines' flag carrier, connecting Singapore to Manila and major Philippine destinations.
- **Colors:** Blue `#042B67`, Red `#EC2B2A`, Yellow `#FDCB0A`
- **Instagram:** https://www.instagram.com/flypal/
- **Twitter/X:** https://twitter.com/flyPAL
- **LinkedIn:** https://www.linkedin.com/company/philippine-airlines/

---

## SEO Strategy
- **Primary keywords:** "PAL Run 2026", "Philippine Airlines Marathon 2026", "Manila Marathon 2026", "BNG Singapore", "Filipino business group Singapore"
- **Local SEO:** Pasay City, Roxas Boulevard, Manila, Singapore Filipino community
- **Structured data:** schema.org/SportsEvent (PAL Run), schema.org/Organization (BNG)
- **OG image:** Race banner for PAL Run, BNG group logo for BNG page
- **Sitemap:** Auto-generated via Next.js

## Tech Decisions
- **Next.js 14 (App Router)** — Vercel-native, SSG, built-in metadata API, excellent SEO
- **Tailwind CSS** — utility-first, fast, consistent responsive design
- **No CMS, no DB** — pure static, all data in `/data/` directory
- **Dynamic routes** — `/members/[slug]` for each founding member profile

## Constraints
- All data hardcoded — no CMS or API calls
- Deploy to Vercel ONLY on explicit user approval
- MDC Prime Consulting data requires user input before that page can be built
