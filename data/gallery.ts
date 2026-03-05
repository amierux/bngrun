export interface GalleryItem {
  id: string;
  year: number;
  type: "photo" | "video";
  caption: string;
  category: "Race Day" | "Community" | "Awards" | "Training" | "Culture";
  gradient: string;
  tall?: boolean;
  wide?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // 2020
  {
    id: "2020-01",
    year: 2020,
    type: "photo",
    caption: "Runners sharing their race selfies from across the globe — the inaugural BNG Run.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #1d5295 0%, #0a2d6e 60%, #020f2b 100%)",
    tall: true,
  },
  {
    id: "2020-02",
    year: 2020,
    type: "video",
    caption: "Virtual kickoff ceremony — BNG founders speak to the community on race day.",
    category: "Community",
    gradient: "linear-gradient(135deg, #FDCB0A 0%, #e6a800 60%, #b37d00 100%)",
  },
  {
    id: "2020-03",
    year: 2020,
    type: "photo",
    caption: "Race kits delivered to runners across Singapore — the BNG Run starter pack.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #042B67 0%, #1d5295 100%)",
  },
  {
    id: "2020-04",
    year: 2020,
    type: "photo",
    caption: "Community WhatsApp groups buzzing with finish-line selfies and celebration.",
    category: "Community",
    gradient: "linear-gradient(135deg, #0a2d6e 0%, #1a6b9e 100%)",
    wide: true,
  },

  // 2021
  {
    id: "2021-01",
    year: 2021,
    type: "photo",
    caption: "Hybrid race morning — runners at the East Coast Park outdoor pod at sunrise.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #EC2B2A 0%, #a01c1b 60%, #4a0a09 100%)",
    tall: true,
  },
  {
    id: "2021-02",
    year: 2021,
    type: "photo",
    caption: "First-ever 21K finishers cross the line — a historic moment for BNG Run.",
    category: "Awards",
    gradient: "linear-gradient(135deg, #FDCB0A 0%, #EC2B2A 100%)",
  },
  {
    id: "2021-03",
    year: 2021,
    type: "video",
    caption: "MDC Prime wellness workshop broadcast — running form and recovery tips.",
    category: "Training",
    gradient: "linear-gradient(135deg, #2d2d2d 0%, #555 100%)",
  },
  {
    id: "2021-04",
    year: 2021,
    type: "photo",
    caption: "Charity cheque presentation — BNG raises SGD 12,000 for Filipino families.",
    category: "Community",
    gradient: "linear-gradient(135deg, #EC2B2A 0%, #7a1110 100%)",
  },
  {
    id: "2021-05",
    year: 2021,
    type: "photo",
    caption: "International runners in Australia and Canada showing their race bibs in solidarity.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #042B67 0%, #EC2B2A 100%)",
    wide: true,
  },

  // 2022
  {
    id: "2022-01",
    year: 2022,
    type: "photo",
    caption: "Gun start at East Coast Park — the return to in-person running after two years.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #062B6A 0%, #0a4f9e 60%, #02cff6 100%)",
    tall: true,
  },
  {
    id: "2022-02",
    year: 2022,
    type: "photo",
    caption: "All 7 BNG founding members together at their respective booths post-race.",
    category: "Community",
    gradient: "linear-gradient(135deg, #0a3080 0%, #062B6A 100%)",
  },
  {
    id: "2022-03",
    year: 2022,
    type: "video",
    caption: "Highlights reel: East Coast Park BNG Run 2022 — dawn to finish.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #02cff6 0%, #062B6A 100%)",
  },
  {
    id: "2022-04",
    year: 2022,
    type: "photo",
    caption: "HFSE student performers at the finish line — a cultural welcome home.",
    category: "Culture",
    gradient: "linear-gradient(135deg, #242e76 0%, #ed7622 100%)",
  },
  {
    id: "2022-05",
    year: 2022,
    type: "photo",
    caption: "LBC Balikbayan Box Drive — 45 boxes packed and ready to go home.",
    category: "Community",
    gradient: "linear-gradient(135deg, #D00149 0%, #7a0028 100%)",
    wide: true,
  },
  {
    id: "2022-06",
    year: 2022,
    type: "photo",
    caption: "Post-race carnival: Filipino food, music, and laughter by the waterfront.",
    category: "Culture",
    gradient: "linear-gradient(135deg, #062B6A 0%, #02cff6 40%, #062B6A 100%)",
  },

  // 2023
  {
    id: "2023-01",
    year: 2023,
    type: "photo",
    caption: "Sunrise at Punggol Waterway — the golden hour start of BNG Run 2023.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #103579 0%, #1a5ba8 60%, #30CDD7 100%)",
    tall: true,
  },
  {
    id: "2023-02",
    year: 2023,
    type: "photo",
    caption: "950 runners line up — the biggest gathering of Filipinos in Singapore through sport.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #103579 0%, #30CDD7 100%)",
    wide: true,
  },
  {
    id: "2023-03",
    year: 2023,
    type: "video",
    caption: "Kids Fun Run (1K) — little champions cross their very first BNG finish line.",
    category: "Community",
    gradient: "linear-gradient(135deg, #FDCB0A 0%, #103579 100%)",
  },
  {
    id: "2023-04",
    year: 2023,
    type: "photo",
    caption: "Noble Life wellness station — health checks and organic nutrition for every runner.",
    category: "Training",
    gradient: "linear-gradient(135deg, #062B6A 0%, #02cff6 100%)",
  },
  {
    id: "2023-05",
    year: 2023,
    type: "photo",
    caption: "Awards ceremony: podium finishers at BNG Run 2023 receive their medals.",
    category: "Awards",
    gradient: "linear-gradient(135deg, #b37d00 0%, #FDCB0A 50%, #b37d00 100%)",
  },
  {
    id: "2023-06",
    year: 2023,
    type: "photo",
    caption: "SGD 25,000 raised — BNG presents cheque to OFW Support Program partners.",
    category: "Community",
    gradient: "linear-gradient(135deg, #103579 0%, #1a5ba8 100%)",
  },

  // 2024
  {
    id: "2024-01",
    year: 2024,
    type: "photo",
    caption: "Marina Bay skyline at dawn — BNG Run 2024's iconic setting.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #042B67 0%, #1d5295 50%, #EC2B2A 100%)",
    tall: true,
  },
  {
    id: "2024-02",
    year: 2024,
    type: "video",
    caption: "Official highlights: BNG Run 2024 — Run for Pride at Marina Bay.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #042B67 0%, #EC2B2A 100%)",
    wide: true,
  },
  {
    id: "2024-03",
    year: 2024,
    type: "photo",
    caption: "Philippine Airlines ticket prize presentation — top finishers receive their flights.",
    category: "Awards",
    gradient: "linear-gradient(135deg, #042B67 0%, #9c1110 100%)",
  },
  {
    id: "2024-04",
    year: 2024,
    type: "photo",
    caption: "1,200 runners strong — the BNG community at Marina Bay finish arch.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #1d5295 0%, #042B67 100%)",
  },
  {
    id: "2024-05",
    year: 2024,
    type: "photo",
    caption: "International runners from 6 countries proudly display their national flags.",
    category: "Culture",
    gradient: "linear-gradient(135deg, #EC2B2A 0%, #042B67 100%)",
  },
  {
    id: "2024-06",
    year: 2024,
    type: "photo",
    caption: "Live Filipino artists perform at the event village — music meets community.",
    category: "Culture",
    gradient: "linear-gradient(135deg, #042B67 0%, #4a0a09 100%)",
  },

  // 2025
  {
    id: "2025-01",
    year: 2025,
    type: "photo",
    caption: "Supertrees glow at dawn — Gardens by the Bay backdrop for BNG Run 2025.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #242e76 0%, #1d4ea8 50%, #ed7622 100%)",
    tall: true,
  },
  {
    id: "2025-02",
    year: 2025,
    type: "video",
    caption: "Official film: BNG Run 2025 — Run with Purpose at Gardens by the Bay.",
    category: "Race Day",
    gradient: "linear-gradient(135deg, #242e76 0%, #ed7622 100%)",
    wide: true,
  },
  {
    id: "2025-03",
    year: 2025,
    type: "photo",
    caption: "Seniors Category — our 60+ runners prove age is never a barrier.",
    category: "Community",
    gradient: "linear-gradient(135deg, #242e76 0%, #3d4fa0 100%)",
  },
  {
    id: "2025-04",
    year: 2025,
    type: "photo",
    caption: "Post-run gala dinner — 5 years of BNG Run celebrated with the entire community.",
    category: "Culture",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #4a90d9 100%)",
  },
  {
    id: "2025-05",
    year: 2025,
    type: "photo",
    caption: "1,600 finishers — the largest BNG Run in history crosses the finish line.",
    category: "Awards",
    gradient: "linear-gradient(135deg, #ed7622 0%, #242e76 100%)",
  },
  {
    id: "2025-06",
    year: 2025,
    type: "photo",
    caption: "SGD 65,000 cumulative charity raised — BNG hands over scholarships to Filipino students.",
    category: "Community",
    gradient: "linear-gradient(135deg, #242e76 0%, #ed7622 60%, #242e76 100%)",
  },
];

export const galleryYears = [...new Set(galleryItems.map((i) => i.year))].sort((a, b) => b - a);
export const galleryCategories = [...new Set(galleryItems.map((i) => i.category))];
