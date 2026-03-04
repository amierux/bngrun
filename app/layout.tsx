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
    default: "PAL RUN 2026 | 44th PAL Manila International Marathon",
    template: "%s | PAL RUN 2026",
  },
  description:
    "Join the 44th PAL Manila International Marathon on May 31, 2026 at Roxas Boulevard, Manila. 5K, 10K, Half Marathon, and Full Marathon. Win Philippine Airlines tickets. Register now.",
  keywords: [
    "PAL RUN 2026",
    "Philippine Airlines Marathon 2026",
    "Manila Marathon 2026",
    "44th Manila International Marathon",
    "PAL Manila Marathon",
    "Manila running event 2026",
    "Philippines marathon",
    "Roxas Boulevard run",
    "BNG Singapore",
    "Filipino business group Singapore",
  ],
  authors: [{ name: "VizServe", url: "https://vizserve.com" }],
  creator: "VizServe",
  publisher: "Business Network Group (BNG)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palrun2026.com",
    siteName: "PAL RUN 2026",
    title: "PAL RUN 2026 | 44th PAL Manila International Marathon",
    description:
      "Run Manila. Run with Pride. Join the 44th PAL Manila International Marathon on May 31, 2026. Win airline tickets, earn your finisher pack, run an iconic night course along Roxas Boulevard.",
    images: [
      {
        url: "/images/og-palrun2026.jpg",
        width: 1200,
        height: 630,
        alt: "PAL RUN 2026 — 44th PAL Manila International Marathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAL RUN 2026 | 44th PAL Manila International Marathon",
    description:
      "May 31, 2026. Manila, Philippines. 5K · 10K · 21K · 42K. Win PAL airline tickets. Register now.",
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
