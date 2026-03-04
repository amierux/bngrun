import type { Metadata } from "next";
import { Hero } from "@/components/sections/palrun/Hero";
import { WhyJoin } from "@/components/sections/palrun/WhyJoin";
import { RaceCategories } from "@/components/sections/palrun/RaceCategories";
import { Inclusions } from "@/components/sections/palrun/Inclusions";
import { EventDetails } from "@/components/sections/palrun/EventDetails";
import { Prizes } from "@/components/sections/palrun/Prizes";
import { HowToRegister } from "@/components/sections/palrun/HowToRegister";
import { FAQ } from "@/components/sections/palrun/FAQ";

export const metadata: Metadata = {
  title: "PAL RUN 2026 | 44th PAL Manila International Marathon — Run Manila. Run with Pride.",
  description:
    "Join the 44th PAL Manila International Marathon on May 31, 2026. Run along Roxas Boulevard under Manila's night lights. 5K, 10K, 21K, and 42K. Win Philippine Airlines tickets. Presented by BNG Singapore.",
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
            name: "44th PAL Manila International Marathon — PAL RUN 2026",
            description:
              "The original and legitimate Manila Marathon, presented by Philippine Airlines. Run 5K, 10K, Half Marathon, or Full Marathon along the iconic Roxas Boulevard on May 31, 2026.",
            startDate: "2026-05-31T01:00:00+08:00",
            endDate: "2026-05-31T10:00:00+08:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Liwasan Ulalim (CCP)",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pablo Ocampo Street",
                addressLocality: "Pasay City",
                addressRegion: "Metro Manila",
                addressCountry: "PH",
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
                validThrough: "2026-05-24",
                url: "https://runsignup.com/Race/Events/PH/Manila/manilamarathon",
              },
              {
                "@type": "Offer",
                name: "Half Marathon (21 km)",
                price: "75",
                priceCurrency: "USD",
                validThrough: "2026-05-24",
                url: "https://runsignup.com/Race/Events/PH/Manila/manilamarathon",
              },
              {
                "@type": "Offer",
                name: "10K Run",
                price: "50",
                priceCurrency: "USD",
                validThrough: "2026-05-24",
                url: "https://runsignup.com/Race/Events/PH/Manila/manilamarathon",
              },
              {
                "@type": "Offer",
                name: "5K Fun Run",
                price: "50",
                priceCurrency: "USD",
                validThrough: "2026-05-24",
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
    </>
  );
}
