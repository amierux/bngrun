import type { Metadata } from "next";
import { BNGHero } from "@/components/sections/bng/BNGHero";
import { AboutBNG } from "@/components/sections/bng/AboutBNG";
import { FoundingMembers } from "@/components/sections/bng/FoundingMembers";

export const metadata: Metadata = {
  title: "About BNG — Business Network Group Singapore",
  description:
    "The Business Network Group (BNG) is Singapore's premier Filipino business organization, founded by HFSE, LBC, Megaworld, Noble Life, MDC Prime, PNB Singapore, and Philippine Airlines. Uniting the Filipino community in Singapore.",
  openGraph: {
    title: "BNG — Business Network Group Singapore | Filipino Business Community",
    description:
      "Seven companies. One mission. BNG unites Singapore's Filipino business community through advocacy, events, and shared values.",
    images: [{ url: "/images/og-bng.jpg", width: 1200, height: 630, alt: "BNG Singapore" }],
  },
  alternates: {
    canonical: "https://palrun2026.com/bng",
  },
};

export default function BNGPage() {
  return (
    <>
      {/* Structured data: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Business Network Group (BNG)",
            alternateName: "BNG Singapore",
            description:
              "Singapore's premier Filipino business group, founded by seven companies with a shared advocacy of uniting the Filipino community in Singapore.",
            url: "https://palrun2026.com/bng",
            foundingDate: "2018",
            foundingLocation: "Singapore",
            member: [
              { "@type": "Organization", name: "Happy Family School of Excellence (HFSE)", url: "https://hfse.edu.sg/" },
              { "@type": "Organization", name: "LBC Express", url: "https://www.lbcexpress.com/" },
              { "@type": "Organization", name: "Megaworld International", url: "https://megaworldinternational.com/" },
              { "@type": "Organization", name: "Noble Life International", url: "https://www.ournoblelife.com/" },
              { "@type": "Organization", name: "MDC Prime Consulting Pte. Ltd." },
              { "@type": "Organization", name: "Philippine National Bank Singapore", url: "https://www.pnb.com.ph/" },
              { "@type": "Organization", name: "Philippine Airlines", url: "https://www.philippineairlines.com/" },
            ],
          }),
        }}
      />
      <BNGHero />
      <AboutBNG />
      <FoundingMembers />
    </>
  );
}
