import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of concept projects and case studies. Web development, mobile apps, e-commerce, SaaS dashboards, and more.",
  openGraph: {
    title: "Our Work | DBJ Technologies",
    description:
      "Concept projects and case studies showcasing our web development, design, and engineering capabilities.",
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
