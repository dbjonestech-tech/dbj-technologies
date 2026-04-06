import type { Metadata } from "next";
import ProcessContent from "./ProcessContent";

export const metadata: Metadata = {
  title: "Our Process",
  description: "A structured 4-phase delivery process — Discovery, Design, Develop, Deploy — with clear milestones and deliverables at every stage.",
  openGraph: {
    title: "Our Process | DBJ Technologies",
    description: "Four phases, clear milestones, and full transparency. Discovery, Design, Develop, Deploy.",
  },
};

export default function ProcessPage() {
  return <ProcessContent />;
}
