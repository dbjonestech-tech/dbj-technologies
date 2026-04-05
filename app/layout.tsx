import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import { CursorWrapper } from "@/components/layout/CursorWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

/* ─── FONTS ─────────────────────────────────────────── */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/* ─── METADATA ──────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://dbjtechnologies.com"),
  title: {
    default: "DBJ Technologies — We Build the Future",
    template: "%s | DBJ Technologies",
  },
  description:
    "Full-service web development and technology company specializing in blazing-fast websites, modern web applications, cloud infrastructure, and digital transformation.",
  keywords: [
    "web development",
    "web design",
    "next.js",
    "react",
    "dallas web developer",
    "texas web development",
    "web application",
    "cloud infrastructure",
    "devops",
    "e-commerce development",
    "SEO services",
  ],
  authors: [{ name: "DBJ Technologies" }],
  creator: "DBJ Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dbjtechnologies.com",
    siteName: "DBJ Technologies",
    title: "DBJ Technologies — We Build the Future",
    description:
      "Full-service web development and technology company. Blazing-fast websites, modern applications, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DBJ Technologies — We Build the Future",
    description: "Full-service web development and technology company.",
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

/* ─── ROOT LAYOUT ───────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <head>
        <JsonLd type="organization" />
        <JsonLd type="website" />
        <JsonLd type="localBusiness" />
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        {/* A11Y: Skip to content */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Custom cursor (desktop only, no SSR) */}
        <CursorWrapper />

        <Navbar />
        <main id="main-content" className="relative">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
