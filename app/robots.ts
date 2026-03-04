import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://palrun2026.com/sitemap.xml",
    host: "https://palrun2026.com",
  };
}
