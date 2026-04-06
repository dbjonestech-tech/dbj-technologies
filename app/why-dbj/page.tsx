import type { Metadata } from "next";
import WhyDBJContent from "./WhyDBJContent";

export const metadata: Metadata = {
  title: "Why DBJ Technologies",
  description: "Performance guarantees, code ownership, senior-only teams, and radical transparency. Learn why companies choose DBJ Technologies as their technology partner.",
  openGraph: {
    title: "Why DBJ Technologies",
    description: "Guaranteed 90+ Lighthouse scores, 100% code ownership, senior engineers only, and transparent fixed pricing.",
  },
};

export default function WhyDBJPage() {
  return <WhyDBJContent />;
}
