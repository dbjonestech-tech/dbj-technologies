import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "DBJ Technologies is a web development studio based in Dallas, TX. We build high-performance websites and applications with senior-level engineering, modern tooling, and full code ownership.",
  openGraph: {
    title: "About Us | DBJ Technologies",
    description:
      "A Dallas-based web development studio focused on performance, transparency, and long-term partnerships.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
