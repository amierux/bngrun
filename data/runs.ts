export interface RunEdition {
  year: number;
  edition: number;
  title: string;
  theme: string;
  tagline: string;
  date: string;
  venue: string;
  city: string;
  format: "Virtual" | "Hybrid" | "In-Person";
  participants: number;
  countries: number;
  categories: string[];
  highlights: string[];
  brandColor: string;
  accentColor: string;
  charity?: string;
}

export const runHistory: RunEdition[] = [
  {
    year: 2020,
    edition: 1,
    title: "BNG Run 2020",
    theme: "Together We Rise",
    tagline: "The first step of a thousand-mile journey — run from wherever you are.",
    date: "November 8, 2020",
    venue: "Virtual — Run Your Own Route",
    city: "Singapore & Beyond",
    format: "Virtual",
    participants: 280,
    countries: 5,
    categories: ["5K", "10K"],
    highlights: [
      "Inaugural BNG Run — the very first edition of what would become an annual tradition",
      "280 runners across Singapore, Philippines, UAE, Canada, and Australia",
      "Launched via BNG community networks; race kits delivered to participants",
      "Virtual format enabled Filipinos worldwide to run together despite the pandemic",
      "Raised community spirit during one of the most challenging years globally",
    ],
    brandColor: "#1d5295",
    accentColor: "#FDCB0A",
  },
  {
    year: 2021,
    edition: 2,
    title: "BNG Run 2021",
    theme: "Resilience Run",
    tagline: "We run because we are stronger than what the world throws at us.",
    date: "October 17, 2021",
    venue: "Virtual / Select Outdoor Pods",
    city: "Singapore & 8 Countries",
    format: "Hybrid",
    participants: 520,
    countries: 8,
    categories: ["5K", "10K", "21K"],
    highlights: [
      "First Half Marathon (21K) category added — a milestone for serious runners",
      "520 runners across 8 countries — nearly double the inaugural year",
      "Hybrid format: small outdoor pods at East Coast Park for Singapore-based runners",
      "First charity component: raised SGD 12,000 for Filipino families in need",
      "MDC Prime and Noble Life co-led wellness workshops alongside the run",
    ],
    brandColor: "#EC2B2A",
    accentColor: "#FDCB0A",
    charity: "Filipino Community Assistance Fund — SGD 12,000 raised",
  },
  {
    year: 2022,
    edition: 3,
    title: "BNG Run 2022",
    theme: "Return to the Road",
    tagline: "After two years apart, we lace up, we show up, we run together.",
    date: "September 25, 2022",
    venue: "East Coast Park, Singapore",
    city: "Singapore",
    format: "In-Person",
    participants: 680,
    countries: 3,
    categories: ["5K", "10K", "21K"],
    highlights: [
      "First fully in-person BNG Run — a triumphant return to the road",
      "East Coast Park's scenic coastal route drew rave reviews from participants",
      "All 7 founding companies represented with dedicated booths and activations",
      "Post-run community carnival with Filipino food, music, and cultural performances",
      "LBC Express organized a balikbayan box drive for participants' families in the Philippines",
      "HFSE students cheered runners on and performed at the finish line",
    ],
    brandColor: "#062B6A",
    accentColor: "#02cff6",
    charity: "LBC Balikbayan Box Drive — 45 boxes sent to Filipino families",
  },
  {
    year: 2023,
    edition: 4,
    title: "BNG Run 2023",
    theme: "Run for Community",
    tagline: "Every kilometer you run builds a better community for all of us.",
    date: "October 8, 2023",
    venue: "Punggol Waterway Park, Singapore",
    city: "Singapore",
    format: "In-Person",
    participants: 950,
    countries: 4,
    categories: ["5K", "10K", "21K"],
    highlights: [
      "Largest BNG Run yet — 950 runners from Singapore, Philippines, Malaysia, and Indonesia",
      "Punggol Waterway's sunrise backdrop made this the most photographed edition",
      "First year with a dedicated Kids Fun Run (1K) for children aged 5–12",
      "Megaworld and PNB co-sponsored the awards ceremony and finisher banquet",
      "Noble Life International provided wellness packs and health screenings for all runners",
      "SGD 25,000 raised for Filipino overseas worker support programs",
    ],
    brandColor: "#103579",
    accentColor: "#30CDD7",
    charity: "OFW Support Program — SGD 25,000 raised",
  },
  {
    year: 2024,
    edition: 5,
    title: "BNG Run 2024",
    theme: "Run for Pride",
    tagline: "Pride in who we are. Pride in where we come from. Pride in how far we've run.",
    date: "May 19, 2024",
    venue: "Marina Bay, Singapore",
    city: "Singapore",
    format: "In-Person",
    participants: 1200,
    countries: 6,
    categories: ["5K", "10K", "21K"],
    highlights: [
      "First time at Marina Bay — Singapore's most iconic landmark as backdrop",
      "1,200 runners — the community has grown 4× since the inaugural 2020 edition",
      "Philippine Airlines joined as major sponsor — first airline tickets awarded as prizes",
      "Top 10 men and women 21K finishers each won return flights to Manila",
      "Live entertainment by Filipino artists throughout the event village",
      "International participants from 6 countries including USA, UK, and UAE",
    ],
    brandColor: "#042B67",
    accentColor: "#EC2B2A",
    charity: "PAL & BNG Community Scholarship Fund — SGD 40,000 raised",
  },
  {
    year: 2025,
    edition: 6,
    title: "BNG Run 2025",
    theme: "Run with Purpose",
    tagline: "We don't just run for the finish line. We run for every Filipino who can't.",
    date: "May 18, 2025",
    venue: "Gardens by the Bay, Singapore",
    city: "Singapore",
    format: "In-Person",
    participants: 1600,
    countries: 8,
    categories: ["5K", "10K", "21K"],
    highlights: [
      "Gardens by the Bay debut — runners circled the iconic Supertrees and Bay East Garden",
      "1,600 runners from 8 countries — the biggest BNG Run to date",
      "Full partnership with Philippine Airlines: top 25 men and women 21K finishers won tickets",
      "First BNG Run with a dedicated Seniors Category (60+) and Inclusive Run wave",
      "Community giving booth enabled runners to donate race fees to Filipino scholarships",
      "Post-run gala dinner celebrated 5 years of BNG Run legacy",
    ],
    brandColor: "#242e76",
    accentColor: "#ed7622",
    charity: "BNG Filipino Scholarship Fund — SGD 65,000 raised across 5 editions",
  },
];

export const totalStats = {
  editions: runHistory.length,
  totalParticipants: runHistory.reduce((sum, r) => sum + r.participants, 0),
  countriesReached: Math.max(...runHistory.map((r) => r.countries)),
  charityRaised: "SGD 142,000+",
};
