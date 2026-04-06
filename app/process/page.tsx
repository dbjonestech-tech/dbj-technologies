import type { Metadata } from "next";
import ProcessContent from "./ProcessContent";

export const metadata: Metadata = {
  title: "Our Process",
  description: "From discovery to deployment — our proven 4-phase process delivers projects on time, on budget, and above expectations. Learn how we work.",
  openGraph: {
    title: "Our Process | DBJ Technologies",
    description: "A proven 4-phase process refined over hundreds of projects. Discovery, Design, Develop, Deploy.",
  },
};

export default function ProcessPage() {
  return <ProcessContent />;
}
