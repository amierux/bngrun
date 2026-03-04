import { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/members";

const BASE_URL = "https://palrun2026.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const memberPages = getAllSlugs().map((slug) => ({
    url: `${BASE_URL}/members/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/bng`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...memberPages,
  ];
}
