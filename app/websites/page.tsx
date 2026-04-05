import type { Metadata } from "next";
import WebsitesContent from "./WebsitesContent";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of high-performance websites, web applications, and e-commerce platforms built for growth-stage companies.",
  openGraph: {
    title: "Our Work | DBJ Technologies",
    description:
      "Case studies and portfolio showcasing our best web development projects.",
  },
};

export default function WebsitesPage() {
  return <WebsitesContent />;
}
