import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-price project packages: Starter, Professional, and Enterprise. Scope and cost agreed before development begins.",
  openGraph: {
    title: "Pricing | DBJ Technologies",
    description:
      "Fixed-price project packages with clear scope. Know exactly what you're getting before we start.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
