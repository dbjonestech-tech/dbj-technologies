import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, fixed-price web development packages. Starter, Professional, and Enterprise tiers — know exactly what you are getting before we start.",
  openGraph: {
    title: "Pricing | DBJ Technologies",
    description:
      "Fixed-price web development packages for every stage of growth. No surprises.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
