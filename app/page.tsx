import type { Metadata } from "next";
import { Hero } from "@/components/sections/palrun/Hero";
import { WhyJoin } from "@/components/sections/palrun/WhyJoin";
import { RaceCategories } from "@/components/sections/palrun/RaceCategories";
import { Inclusions } from "@/components/sections/palrun/Inclusions";
import { EventDetails } from "@/components/sections/palrun/EventDetails";
import { Prizes } from "@/components/sections/palrun/Prizes";
import { HowToRegister } from "@/components/sections/palrun/HowToRegister";
import { FAQ } from "@/components/sections/palrun/FAQ";
import { BNGBanner } from "@/components/sections/palrun/BNGBanner";

export const metadata: Metadata = {
  title: "PAL RUN 2026 | BNG Run — Run. Unite. Give Back.",
  description:
    "Join BNG Run 2026 on May 17, 2026 at OCBC Square, Kallang Wave Mall, Singapore. Unite the Filipino community through fitness, camaraderie, and a shared commitment to well-being. 5K, 10K, 21K, and 42K. Win Philippine Airlines tickets.",
  alternates: {
    canonical: "https://palrun2026.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured data: SportsEvent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: "BNG Run 2026 — PAL RUN 2026",
            description:
              "BNG Run 2026 unites the Filipino community in Singapore through fitness, camaraderie, and a shared commitment to well-being. Run 5K, 10K, Half Marathon, or Full Marathon at OCBC Square, Kallang Wave Mall on May 17, 2026.",
            startDate: "2026-05-17T01:00:00+08:00",
            endDate: "2026-05-17T10:00:00+08:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "OCBC Square, Kallang Wave Mall",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1 Stadium Walk",
                addressLocality: "Singapore",
                addressRegion: "Singapore",
                addressCountry: "SG",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "Business Network Group (BNG)",
              url: "https://palrun2026.com/bng",
            },
            sponsor: {
              "@type": "Organization",
              name: "Philippine Airlines",
              url: "https://www.philippineairlines.com/",
            },
            url: "https://palrun2026.com",
            image: "https://palrun2026.com/images/og-palrun2026.jpg",
            offers: [
              {
                "@type": "Offer",
                name: "Marathon (42.195 km)",
                price: "100",
                priceCurrency: "USD",
                validThrough: "2026-04-30",
                url: "https://runsignup.com/Race/Events/PH/Manila/manilamarathon",
              },
              {
                "@type": "Offer",
                name: "Half Marathon (21 km)",
                price: "75",
                priceCurrency: "USD",
                validThrough: "2026-04-30",
                url: "https://runsignup.com/Race/Events/PH/Manila/manilamarathon",
              },
              {
                "@type": "Offer",
                name: "10K Run",
                price: "50",
                priceCurrency: "USD",
                validThrough: "2026-04-30",
                url: "https://runsignup.com/Race/Events/PH/Manila/manilamarathon",
              },
              {
                "@type": "Offer",
                name: "5K Fun Run",
                price: "50",
                priceCurrency: "USD",
                validThrough: "2026-04-30",
                url: "https://runsignup.com/Race/Events/PH/Manila/manilamarathon",
              },
            ],
          }),
        }}
      />
      <Hero />
      <WhyJoin />
      <RaceCategories />
      <Inclusions />
      <EventDetails />
      <Prizes />
      <HowToRegister />
      <FAQ />
      <BNGBanner />
    </>
  );
}
