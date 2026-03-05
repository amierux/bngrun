import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReadingProgress } from "@/components/layout/ReadingProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palrun2026.com"),
  title: {
    default: "PAL RUN 2026 | BNG Run — Run. Unite. Give Back.",
    template: "%s | PAL RUN 2026",
  },
  description:
    "Join BNG Run 2026 on May 17, 2026 at OCBC Square, Kallang Wave Mall, Singapore. Unite the Filipino community through fitness and camaraderie. 5K, 10K, Half Marathon, and Full Marathon. Win Philippine Airlines tickets.",
  keywords: [
    "PAL RUN 2026",
    "BNG Run 2026",
    "Philippine Airlines Marathon 2026",
    "Filipino run Singapore 2026",
    "BNG Singapore running event",
    "Singapore marathon 2026",
    "Kallang run Singapore",
    "Filipino community Singapore",
    "OCBC Square run",
    "BNG Singapore",
  ],
  authors: [{ name: "VizServe", url: "https://vizserve.com" }],
  creator: "VizServe",
  publisher: "Business Network Group (BNG)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palrun2026.com",
    siteName: "PAL RUN 2026",
    title: "PAL RUN 2026 | BNG Run — Run. Unite. Give Back.",
    description:
      "Run. Unite. Give Back. BNG Run 2026 unites the Filipino community in Singapore through fitness, camaraderie, and a shared commitment to well-being. May 17, 2026 at OCBC Square, Kallang Wave Mall.",
    images: [
      {
        url: "/images/og-palrun2026.jpg",
        width: 1200,
        height: 630,
        alt: "PAL RUN 2026 — BNG Run 2026, Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAL RUN 2026 | BNG Run — Run. Unite. Give Back.",
    description:
      "May 17, 2026. Singapore. 5K · 10K · 21K · 42K. Win PAL airline tickets. Register now.",
    images: ["/images/og-palrun2026.jpg"],
    creator: "@flyPAL",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <ReadingProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
