import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { JsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-spectrum digital services: web development, mobile apps, cloud & DevOps, UI/UX design, e-commerce, and SEO. Built by senior engineers in Dallas, TX.",
  openGraph: {
    title: "Services | DBJ Technologies",
    description:
      "Web development, mobile apps, cloud infrastructure, UI/UX design, e-commerce, and digital marketing.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd type="service" />
      <ServicesContent />
    </>
  );
}
