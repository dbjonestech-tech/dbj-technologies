import type { Metadata } from "next";
import WhyDBJContent from "./WhyDBJContent";

export const metadata: Metadata = {
  title: "Why DBJ Technologies",
  description: "Performance guarantees, code ownership, senior engineers, and fixed pricing — commitments written into every project agreement.",
  openGraph: {
    title: "Why DBJ Technologies",
    description: "90+ Lighthouse scores, 100% code ownership, senior engineers, and fixed pricing — guaranteed in every contract.",
  },
};

export default function WhyDBJPage() {
  return <WhyDBJContent />;
}
