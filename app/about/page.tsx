import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DBJ Technologies — a Dallas-based web development and technology company engineering fast, beautiful, and scalable digital solutions since 2018.",
  openGraph: {
    title: "About Us | DBJ Technologies",
    description:
      "Meet the team behind DBJ Technologies. Senior engineers, award-winning designers, and a culture of craft.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
