import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start your next web project with DBJ Technologies. Tell us about your goals and we will respond within 24 hours with a plan.",
  openGraph: {
    title: "Contact Us | DBJ Technologies",
    description:
      "Get in touch with DBJ Technologies. We respond to all inquiries within 24 hours.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
