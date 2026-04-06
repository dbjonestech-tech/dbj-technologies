import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { JsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, cloud infrastructure, UI/UX design, e-commerce, and SEO — scoped, priced, and delivered by senior engineers.",
  openGraph: {
    title: "Services | DBJ Technologies",
    description:
      "Web development, mobile apps, cloud infrastructure, UI/UX design, e-commerce, and SEO — fixed pricing, clear deliverables.",
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
