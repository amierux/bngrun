export interface Member {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  website: string | null;
  brandColor: string;
  accentColor: string;
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  services: string[];
  placeholder?: boolean;
}

export const members: Member[] = [
  {
    slug: "hfse",
    name: "Happy Family School of Excellence",
    shortName: "HFSE",
    tagline: "Singapore's First Filipino-Run International School",
    description:
      "HFSE International School is Singapore's first Filipino-run educational institution, providing world-class international education rooted in Filipino values.",
    longDescription:
      "Founded in 2015 by Filipino expatriates Ninalyn and Gary Cacananta, HFSE International School represents a milestone for the Filipino community in Singapore. As the first Filipino-run educational institution on the island, HFSE provides an integrated curriculum combining Singaporean and Philippine educational standards, serving students from Primary 1 to Secondary 4. The school is built on the belief that every child deserves access to quality international education while remaining deeply connected to their heritage and culture.",
    website: "https://hfse.edu.sg/",
    brandColor: "#242e76",
    accentColor: "#ed7622",
    facebook: null,
    instagram: "https://www.instagram.com/hfseinternational/",
    linkedin: "https://sg.linkedin.com/company/hfse-international-school",
    twitter: null,
    services: ["International Education", "Primary & Secondary School", "Filipino Heritage Programs", "Integrated Curriculum"],
  },
  {
    slug: "lbc",
    name: "LBC Express",
    shortName: "LBC",
    tagline: "Hari ng Padala — The King of Delivery",
    description:
      "LBC Express is the largest express courier, cargo, and money remittance service in the Philippines, serving Filipinos worldwide since 1945.",
    longDescription:
      "Founded in 1945, LBC Express began as a brokerage and air cargo agent and pioneered time-sensitive cargo delivery in the Philippines. Today, LBC operates in over 24 countries, making it the essential lifeline for Filipino overseas workers and diaspora communities around the world. Known as the 'Hari ng Padala' (King of Delivery), LBC's Singapore branch provides critical remittance services, balikbayan box forwarding, and express courier services that connect Filipinos in Singapore to their families back home.",
    website: "https://www.lbcexpress.com/",
    brandColor: "#D00149",
    accentColor: "#000000",
    facebook: "https://www.facebook.com/LBCExpress/",
    instagram: null,
    linkedin: "https://www.linkedin.com/company/lbc-express-inc-",
    twitter: "https://twitter.com/LBCexpress",
    services: ["Express Courier", "Cargo Forwarding", "Money Remittance", "Balikbayan Box Services"],
  },
  {
    slug: "megaworld",
    name: "Megaworld International",
    shortName: "Megaworld",
    tagline: "Live. Work. Play. Learn. Shop.",
    description:
      "Megaworld International is the global marketing arm of the Philippines' largest real estate developer, connecting the Filipino diaspora to premium property investments.",
    longDescription:
      "Megaworld International serves as the international marketing arm of Megaworld Corporation, the Philippines' largest real estate developer. With offices in 60+ countries spanning Europe, Asia Pacific, North America, and the Middle East, Megaworld International specializes in township development featuring the 'live-work-play-learn-shop' lifestyle concept. Their Singapore office connects Filipino expatriates and international investors to some of the Philippines' most prestigious and innovative property developments, offering world-class investment opportunities for the global Filipino community.",
    website: "https://megaworldinternational.com/",
    brandColor: "#1d5295",
    accentColor: "#a74799",
    facebook: "https://www.facebook.com/megaworldintlmktg",
    instagram: "https://www.instagram.com/megaworld_intl/",
    linkedin: null,
    twitter: "https://twitter.com/megaworld_intl",
    services: ["Real Estate Investment", "Township Development", "Property Marketing", "Investment Consulting"],
  },
  {
    slug: "noble-life",
    name: "Noble Life International",
    shortName: "Noble Life",
    tagline: "Live a Noble Life — Health, Wellness, and Abundance",
    description:
      "Noble Life International is a Singapore-Philippines health and wellness company dedicated to improving lives through scientifically formulated organic health products.",
    longDescription:
      "Established in 2006 with combined headquarters in Singapore and the Philippines, Noble Life International was founded by Ms. Lila Baylon-Macapinlac with a mission to help people live healthier, fuller lives. The company markets scientifically formulated organic health foods and wellness products through a global network of health educators and direct marketing channels. Noble Life operates across multiple Asian markets including Singapore, Philippines, Hong Kong, and beyond, empowering communities through health education and entrepreneurial opportunities.",
    website: "https://www.ournoblelife.com/",
    brandColor: "#062B6A",
    accentColor: "#02cff6",
    facebook: "https://www.facebook.com/NobleLifeIntl",
    instagram: "https://www.instagram.com/_noblelife",
    linkedin: "https://www.linkedin.com/company/noble-life-international",
    twitter: "https://twitter.com/_noblelife",
    services: ["Health & Wellness Products", "Organic Nutrition", "Direct Marketing", "Health Education"],
  },
  {
    slug: "mdc-prime",
    name: "MDC Prime Consulting Pte. Ltd.",
    shortName: "MDC Prime",
    tagline: "Empowering SMEs Through Strategic Business Solutions",
    description:
      "MDC Prime Consulting is a general management consultancy firm supporting small and medium enterprises through expert services in strategy, learning and development, and operations.",
    longDescription:
      "MDC Prime Consulting Pte. Ltd. is a Singapore-based general management consultancy firm committed to empowering small and medium enterprises (SMEs) to grow, adapt, and thrive. The firm provides comprehensive business support services across three core areas: strategy development, learning and development programs, and operational excellence. As a proud founding member of the Business Network Group (BNG), MDC Prime Consulting brings deep expertise in business transformation to the Filipino business community in Singapore.",
    website: null,
    brandColor: "#1a1a2e",
    accentColor: "#4a90d9",
    facebook: "https://www.facebook.com/mdcprimeconsulting/",
    instagram: null,
    linkedin: null,
    twitter: null,
    services: ["Business Strategy", "Learning & Development", "Operations Consulting", "SME Advisory"],
    placeholder: true,
  },
  {
    slug: "pnb",
    name: "Philippine National Bank Singapore",
    shortName: "PNB",
    tagline: "Your Bank for Life",
    description:
      "PNB Singapore is a branch of one of the Philippines' oldest and most trusted banks, providing essential financial services to the Filipino community in Singapore.",
    longDescription:
      "Philippine National Bank (PNB) is one of the Philippines' leading banking institutions, with over 70 overseas branches and offices across the globe. The Singapore branch, located at Lucky Plaza on Orchard Road, serves as a vital financial bridge for Filipino expatriates and overseas workers. PNB Singapore offers a full range of services including remittance to the Philippines, personal and business banking, fixed deposits, loans, and government payment services such as SSS and PAG-IBIG — making it an indispensable partner for the Filipino community in Singapore.",
    website: "https://www.pnb.com.ph/",
    brandColor: "#103579",
    accentColor: "#30CDD7",
    facebook: null,
    instagram: "https://www.instagram.com/pnbph/",
    linkedin: "https://www.linkedin.com/company/philippine-national-bank",
    twitter: "https://twitter.com/pnbph",
    services: ["Banking & Remittance", "Personal Loans", "Fixed Deposits", "SSS & PAG-IBIG Payments"],
  },
  {
    slug: "pal",
    name: "Philippine Airlines",
    shortName: "PAL",
    tagline: "Asia's First Airline — Connecting the World to the Philippines",
    description:
      "Philippine Airlines is Asia's oldest airline, founded in 1941. As the Philippines' flag carrier, PAL connects Singapore and the world to the heart of the Philippines.",
    longDescription:
      "Philippine Airlines (PAL) is Asia's oldest airline still operating under its original name, founded on February 26, 1941. As the Philippines' national flag carrier and largest international airline, PAL operates an extensive network of regional and international routes from its hub at Ninoy Aquino International Airport. PAL's Singapore operations provide essential connectivity for the Filipino diaspora, offering regular direct flights to Manila and onward connections to destinations across the Philippines. With Business, Premium Economy, and Economy cabin classes, PAL delivers warm Filipino hospitality at 35,000 feet.",
    website: "https://www.philippineairlines.com/",
    brandColor: "#042B67",
    accentColor: "#EC2B2A",
    facebook: null,
    instagram: "https://www.instagram.com/flypal/",
    linkedin: "https://www.linkedin.com/company/philippine-airlines/",
    twitter: "https://twitter.com/flyPAL",
    services: ["International Flights", "Domestic Philippines Routes", "Cargo Services", "Frequent Flyer Program"],
  },
];

export function getMemberBySlug(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}

export function getAllSlugs(): string[] {
  return members.map((m) => m.slug);
}
