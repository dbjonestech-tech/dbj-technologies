import { PRICING_TIERS } from "./constants";

/* ─── EXTENDED PRICING DATA ────────────────────────── */

export interface PricingDetail {
  slug: string;
  tierName: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  idealFor: string[];
  whatsIncluded: { title: string; description: string }[];
  timeline: string;
  revisions: string;
  support: string;
  addOns: { title: string; price: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const PRICING_DETAILS: PricingDetail[] = [
  {
    slug: "starter",
    tierName: "Starter",
    heroTitle: "The Starter Package:",
    heroHighlight: "Launch With Confidence.",
    heroDescription:
      "Everything a small business or personal brand needs to go live with a professional, high-performance website. No bloat, no fluff — just a clean, fast site that works.",
    idealFor: [
      "Small businesses launching their first professional website",
      "Personal brands and freelancers who need an online presence",
      "Startups validating a product or idea",
      "Local businesses upgrading from a DIY builder",
    ],
    whatsIncluded: [
      { title: "Up to 5 Custom Pages", description: "Home, About, Services, Contact, and one additional page of your choice — all designed and coded from scratch." },
      { title: "Responsive Design", description: "Mobile-first design that looks and works perfectly on phones, tablets, laptops, and desktops." },
      { title: "Basic SEO Setup", description: "Meta tags, sitemap, robots.txt, Open Graph tags, and structured data so search engines can find and index your site." },
      { title: "Contact Form", description: "A functional, validated contact form that sends submissions directly to your email." },
      { title: "Performance Optimization", description: "Image optimization, lazy loading, and code splitting to achieve fast load times out of the box." },
      { title: "1 Round of Revisions", description: "One full round of design revisions after the initial build to dial in the details." },
    ],
    timeline: "3–4 weeks from kickoff to launch",
    revisions: "1 round of design revisions included",
    support: "30 days of post-launch support at no additional cost",
    addOns: [
      { title: "CMS Integration", price: "+$500", description: "Add a content management system (Sanity, WordPress, or Strapi) so you can update content without touching code." },
      { title: "Additional Pages", price: "+$300/page", description: "Extra pages beyond the included 5, designed and developed to match." },
      { title: "Custom Animations", price: "+$400", description: "Scroll-triggered animations, hover effects, and micro-interactions for a more dynamic feel." },
      { title: "Analytics Setup", price: "+$200", description: "Google Analytics and conversion tracking configured and tested." },
    ],
    faq: [
      { question: "Is the Starter package right for me?", answer: "If you need a clean, professional website with up to 5 pages and don't require a CMS or complex custom features, the Starter package is the ideal choice. It's designed to get you online quickly with high quality." },
      { question: "Can I upgrade to Professional later?", answer: "Absolutely. We build every Starter site on the same modern architecture as our Professional and Enterprise projects. Adding pages, CMS, or advanced features later is straightforward." },
      { question: "What if I need more than 1 revision round?", answer: "Additional revision rounds are available for $400 each. Most Starter clients find that one focused round is sufficient when we nail the discovery phase." },
    ],
  },
  {
    slug: "professional",
    tierName: "Professional",
    heroTitle: "The Professional Package:",
    heroHighlight: "Built for Growth.",
    heroDescription:
      "For growing companies that need a high-performance website with advanced features, CMS integration, custom animations, and priority support. This is our most popular package.",
    idealFor: [
      "Growing companies that need more than a basic website",
      "Businesses requiring CMS-managed content",
      "Companies that want custom animations and interactions",
      "Teams that need priority support and faster turnaround",
    ],
    whatsIncluded: [
      { title: "Up to 15 Custom Pages", description: "A comprehensive site with service pages, landing pages, blog templates, and more — all custom designed and coded." },
      { title: "Responsive Design", description: "Pixel-perfect design across all devices with custom breakpoint optimization." },
      { title: "Advanced SEO & Analytics", description: "Complete SEO setup, schema markup, analytics integration, conversion tracking, and search console configuration." },
      { title: "CMS Integration", description: "Full content management system so your team can update pages, blog posts, and media without developer help." },
      { title: "Custom Animations & Interactions", description: "Scroll-triggered animations, parallax effects, hover states, and micro-interactions that elevate the experience." },
      { title: "3 Rounds of Revisions", description: "Three full rounds of design revisions to ensure every detail meets your standards." },
      { title: "Performance Optimization", description: "Advanced optimization including image CDN, code splitting, prefetching, and 90+ Lighthouse scores guaranteed." },
      { title: "Priority Support (48h)", description: "Post-launch issues and questions are addressed within 48 hours during business hours." },
    ],
    timeline: "5–8 weeks from kickoff to launch",
    revisions: "3 rounds of design revisions included",
    support: "30 days of priority post-launch support, then optional maintenance plan",
    addOns: [
      { title: "Blog System", price: "+$800", description: "Full blog with categories, tags, author pages, and RSS feed — all CMS-managed." },
      { title: "E-Commerce (up to 50 products)", price: "+$2,000", description: "Shopify or custom e-commerce integration with payment processing and product management." },
      { title: "Multi-Language Support", price: "+$1,200", description: "i18n setup with language switcher and CMS-managed translations." },
      { title: "Custom API Integrations", price: "+$600/integration", description: "CRM, marketing automation, scheduling, or any third-party API connected to your site." },
    ],
    faq: [
      { question: "Why is Professional the most popular?", answer: "It hits the sweet spot for most businesses — enough pages for a comprehensive site, CMS so your team stays independent, animations that make a strong impression, and priority support for peace of mind." },
      { question: "What CMS do you recommend?", answer: "For most Professional projects, we recommend Sanity for its flexibility and developer experience. We also work with WordPress (headless), Strapi, and Contentful depending on your team's needs." },
      { question: "Can I add e-commerce later?", answer: "Yes. The Professional architecture supports adding e-commerce functionality as an upgrade at any time." },
    ],
  },
  {
    slug: "enterprise",
    tierName: "Enterprise",
    heroTitle: "The Enterprise Package:",
    heroHighlight: "Full-Scale Digital Transformation.",
    heroDescription:
      "Custom web applications, cloud infrastructure, dedicated engineering, and white-glove service. For organizations that need technology to be a competitive advantage.",
    idealFor: [
      "Organizations needing custom web applications or SaaS platforms",
      "Companies requiring cloud infrastructure and DevOps",
      "Businesses with complex integrations and data requirements",
      "Teams that want a dedicated project manager and engineering team",
    ],
    whatsIncluded: [
      { title: "Unlimited Custom Pages", description: "No page limits. We build as many pages, views, and application screens as your project requires." },
      { title: "Custom Web Application", description: "Full-stack application development with user authentication, dashboards, data management, and custom business logic." },
      { title: "Full-Stack Development", description: "Front end, back end, API development, and database design — all built by our senior engineering team." },
      { title: "Cloud Infrastructure Setup", description: "Production-grade cloud architecture on AWS, GCP, or Azure with auto-scaling, security, and monitoring." },
      { title: "CI/CD & DevOps Pipeline", description: "Automated build, test, and deployment pipelines with staging environments and rollback capabilities." },
      { title: "Dedicated Project Manager", description: "A single point of contact who manages timeline, scope, communication, and quality throughout the engagement." },
      { title: "SLA & Uptime Guarantee", description: "Contractual uptime guarantees with defined response times and escalation procedures." },
      { title: "24/7 Priority Support", description: "Round-the-clock support with guaranteed response times for critical issues." },
    ],
    timeline: "8–20 weeks depending on scope (defined during discovery)",
    revisions: "Unlimited revisions within agreed project scope",
    support: "Dedicated ongoing support with custom SLA",
    addOns: [
      { title: "AI/ML Integration", price: "Custom", description: "AI-powered features including recommendations, natural language processing, predictive analytics, and more." },
      { title: "Data Migration", price: "Custom", description: "Migration of existing data, users, and content from legacy systems with validation and rollback plans." },
      { title: "Training & Documentation", price: "Included", description: "Comprehensive documentation and hands-on training for your team to manage and extend the platform." },
      { title: "Ongoing Managed Services", price: "Custom", description: "Fully managed infrastructure, updates, monitoring, and feature development on a monthly retainer." },
    ],
    faq: [
      { question: "How is Enterprise pricing determined?", answer: "Enterprise projects are scoped and priced based on a paid discovery phase. We define the technical requirements, architecture, timeline, and team composition — then provide a detailed, fixed-price proposal." },
      { question: "Do you provide a dedicated team?", answer: "Yes. Enterprise clients get a dedicated project manager and a core engineering team assigned for the duration of the project. No rotating resources, no handoff friction." },
      { question: "What does the SLA cover?", answer: "Our SLAs define uptime guarantees (typically 99.9%), response times for different severity levels, and escalation procedures. The specific terms are customized based on your operational requirements." },
    ],
  },
];

export function getPricingBySlug(slug: string): PricingDetail | undefined {
  return PRICING_DETAILS.find((p) => p.slug === slug);
}

export function getPricingSlugs(): string[] {
  return PRICING_DETAILS.map((p) => p.slug);
}

export function getPricingTierByName(name: string) {
  return PRICING_TIERS.find((t) => t.name === name);
}
