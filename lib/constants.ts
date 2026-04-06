import {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  ShoppingCart,
  Search,
  Code2,
  Server,
  Shield,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  XCircle,
  type LucideIcon,
} from "lucide-react";

/* ─── SITE META ─────────────────────────────────────── */
export const SITE = {
  name: "DBJ Technologies",
  tagline: "Engineering that ships.",
  description:
    "DBJ Technologies is a web development and technology studio based in Dallas, TX. We build high-performance websites, modern web applications, and cloud infrastructure using Next.js, React, and TypeScript.",
  url: "https://dbjtechnologies.com",
  email: "hello@dbjtechnologies.com",
  address: "Dallas, TX",
};

/* ─── NAV LINKS ─────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

/* ─── FOOTER LINKS (EXTENDED) ─────────────────────── */
export const FOOTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/* ─── SUPPORT LINKS (FOOTER) ──────────────────────── */
export const SUPPORT_LINKS = [
  { label: "Maintenance & Support", href: "/maintenance-support" },
  { label: "Why DBJ", href: "/why-dbj" },
] as const;

/* ─── SOCIAL LINKS ──────────────────────────────────── */
/* Only include verified, active profiles. Add others as they are created. */
export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/dbjtechnologies", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/company/dbjtechnologies", icon: "linkedin" },
] as const;

/* ─── STATS (COMMITMENTS, NOT VANITY METRICS) ──────── */
export const STATS = [
  { value: 90, suffix: "+", label: "Lighthouse Score Standard" },
  { value: 100, suffix: "%", label: "Client Code Ownership" },
  { value: 30, suffix: "-day", label: "Post-Launch Support" },
  { value: 4, suffix: "-phase", label: "Delivery Process" },
];

/* ─── SERVICES ──────────────────────────────────────── */
export interface ServiceItem {
  icon: LucideIcon;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Globe,
    slug: "web-development",
    title: "Web Development",
    tagline: "Pixel-perfect, blazing-fast sites",
    description:
      "We engineer high-performance websites using Next.js, React, and modern frameworks. Every build is optimized for speed, accessibility, and search engines from day one.",
    features: [
      "Next.js & React architecture",
      "Server-side rendering & static generation",
      "Performance-first engineering",
      "CMS integration (WordPress, Sanity, Strapi)",
    ],
  },
  {
    icon: Smartphone,
    slug: "mobile-applications",
    title: "Mobile Applications",
    tagline: "Native feel, cross-platform reach",
    description:
      "We build mobile experiences that feel native on every device. Using React Native and Flutter, we deliver iOS and Android apps from a single codebase without compromising quality.",
    features: [
      "React Native & Flutter",
      "iOS & Android deployment",
      "Push notifications & offline support",
      "App Store optimization",
    ],
  },
  {
    icon: Cloud,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Scalable infrastructure that stays up",
    description:
      "We architect cloud solutions on AWS, GCP, and Azure that scale with your business. From CI/CD pipelines to containerized deployments, your infrastructure is in expert hands.",
    features: [
      "AWS, GCP, Azure deployments",
      "Docker & Kubernetes orchestration",
      "CI/CD pipeline automation",
      "Monitoring & incident response",
    ],
  },
  {
    icon: Palette,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Interfaces built on research, not guesswork",
    description:
      "Design is more than aesthetics. We craft user journeys grounded in research, then bring them to life with motion, interaction design, and pixel-level precision.",
    features: [
      "User research & personas",
      "Wireframing & interactive prototypes",
      "Design systems & component libraries",
      "Accessibility-first (WCAG AA+)",
    ],
  },
  {
    icon: ShoppingCart,
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    tagline: "Stores engineered to convert",
    description:
      "We build e-commerce platforms that turn visitors into customers. From Shopify storefronts to fully custom checkout flows, every element is optimized for conversions and revenue.",
    features: [
      "Shopify, WooCommerce, custom builds",
      "Payment gateway integration",
      "Inventory & order management",
      "Conversion rate optimization",
    ],
  },
  {
    icon: Search,
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    tagline: "Visibility that compounds over time",
    description:
      "We combine technical SEO with content strategy and paid media to drive qualified traffic, improve rankings, and deliver measurable business growth.",
    features: [
      "Technical SEO audits & fixes",
      "Content strategy & creation",
      "Google Ads & Meta campaigns",
      "Analytics & conversion tracking",
    ],
  },
];

/* ─── PROCESS STEPS ─────────────────────────────────── */
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn your business, goals, audience, and competitive landscape to define a clear strategy.",
  },
  {
    step: "02",
    title: "Design",
    description: "Interactive prototypes and visual designs that align with your brand and are validated before development.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Clean, tested, production-grade code built on modern frameworks with performance baked in.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Launch to scalable cloud infrastructure with CI/CD, monitoring, and ongoing support.",
  },
];

/* ─── TECH STACK ────────────────────────────────────── */
export const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "AWS", "Docker", "PostgreSQL", "MongoDB", "Redis",
  "Tailwind CSS", "Figma", "Vercel", "GraphQL", "Kubernetes",
];

/* ─── TESTIMONIALS ──────────────────────────────────── */
/* Add real client testimonials as they come in.
   The TestimonialsSection renders nothing when this is empty. */
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

/* ─── CLIENT LOGOS ─────────────────────────────────── */
/* Add real client names/logos as permission is obtained.
   The ClientLogos section renders nothing when this is empty. */
export const CLIENT_LOGOS: string[] = [];

/* ─── PRICING ───────────────────────────────────────── */
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  popular: boolean;
  features: PricingFeature[];
  cta: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    description: "For small businesses and personal brands launching their first professional site.",
    monthlyPrice: 2499,
    annualPrice: 1999,
    popular: false,
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Responsive design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form", included: true },
      { text: "1 round of revisions", included: true },
      { text: "CMS integration", included: false },
      { text: "Custom animations", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "For growing companies that need advanced features, CMS integration, and custom design.",
    monthlyPrice: 5999,
    annualPrice: 4999,
    popular: true,
    features: [
      { text: "Up to 15 pages", included: true },
      { text: "Responsive design", included: true },
      { text: "Advanced SEO & analytics", included: true },
      { text: "CMS integration", included: true },
      { text: "Custom animations & interactions", included: true },
      { text: "3 rounds of revisions", included: true },
      { text: "Performance optimization", included: true },
      { text: "Priority support (48h)", included: true },
    ],
    cta: "Go Professional",
  },
  {
    name: "Enterprise",
    description: "Custom web applications with dedicated engineering, infrastructure, and white-glove service.",
    monthlyPrice: null,
    annualPrice: null,
    popular: false,
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Custom web application", included: true },
      { text: "Full-stack development", included: true },
      { text: "Cloud infrastructure setup", included: true },
      { text: "CI/CD & DevOps pipeline", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "SLA & uptime guarantee", included: true },
      { text: "24/7 priority support", included: true },
    ],
    cta: "Contact Us",
  },
];

/* ─── FAQ ───────────────────────────────────────────── */
export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Technical" | "Billing" | "Support";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "General",
    question: "What types of businesses does DBJ Technologies work with?",
    answer: "We work with businesses of all sizes — from solo entrepreneurs launching their first site to growing companies that need complex web applications. Our focus is growth-stage companies that need technology built right the first time.",
  },
  {
    category: "General",
    question: "How long does a typical project take?",
    answer: "A standard 5–10 page website takes 4–6 weeks. Complex web applications with custom backends typically run 8–16 weeks. We provide a detailed timeline during the discovery phase before any commitment.",
  },
  {
    category: "General",
    question: "Do you work with clients outside of Texas?",
    answer: "Yes. While we're based in Dallas, we work with clients across the US and internationally. All project management, design reviews, and communication happens digitally.",
  },
  {
    category: "Technical",
    question: "What technologies do you use?",
    answer: "Our core stack includes Next.js, React, TypeScript, Node.js, and Tailwind CSS. For backends, we use PostgreSQL, MongoDB, and Redis. We deploy on AWS, Vercel, and GCP depending on project needs.",
  },
  {
    category: "Technical",
    question: "Will my website be mobile-responsive?",
    answer: "Every project we deliver is fully responsive across all devices and screen sizes. We test on real devices — not just browser emulators — to ensure a consistent experience everywhere.",
  },
  {
    category: "Technical",
    question: "Do you provide hosting and domain setup?",
    answer: "Yes. We handle hosting setup on Vercel, AWS, or your preferred provider, plus domain registration, DNS configuration, SSL certificates, and email setup.",
  },
  {
    category: "Technical",
    question: "Can you integrate with our existing tools and APIs?",
    answer: "Yes. We regularly integrate with CRMs (HubSpot, Salesforce), payment processors (Stripe, PayPal), analytics platforms, and custom APIs. If it has an API, we can connect it.",
  },
  {
    category: "Billing",
    question: "How does your pricing work?",
    answer: "We offer fixed-price project packages based on scope. All projects begin with a discovery phase that produces a detailed scope, timeline, and cost breakdown before development begins. No hourly billing, no surprise invoices.",
  },
  {
    category: "Billing",
    question: "What are your payment terms?",
    answer: "Standard projects require 50% upfront and 50% upon completion. Larger engagements are broken into milestone-based payments. We accept bank transfers, credit cards, and checks.",
  },
  {
    category: "Billing",
    question: "Are there any ongoing costs after launch?",
    answer: "Hosting and domain fees are minimal (typically $20–50/month). We also offer optional maintenance plans starting at $299/month that include updates, monitoring, backups, and priority support.",
  },
  {
    category: "Support",
    question: "What happens after my project launches?",
    answer: "Every project includes 30 days of post-launch support at no additional cost. After that, we offer monthly maintenance plans or ad-hoc support at our standard rate.",
  },
  {
    category: "Support",
    question: "How do I request changes or updates after launch?",
    answer: "Maintenance plan clients submit requests through our support portal and receive responses within 24–48 hours. We also accept ad-hoc requests via email for one-off updates.",
  },
];

/* ─── PORTFOLIO ITEMS ───────────────────────────────── */
export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Apex Ventures Corporate Hub",
    category: "Corporate",
    description: "A corporate site with animated data visualizations and investor portal integration.",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "LuxeThread E-Commerce Platform",
    category: "E-Commerce",
    description: "High-end fashion marketplace with personalized recommendations and optimized page loads.",
    tags: ["React", "Shopify", "Node.js"],
    gradient: "from-violet-600 to-pink-500",
  },
  {
    title: "NovaBridge SaaS Dashboard",
    category: "SaaS",
    description: "Enterprise analytics dashboard with real-time event processing and data visualizations.",
    tags: ["TypeScript", "D3.js", "AWS"],
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    title: "Catalyst Corp Landing Page",
    category: "Landing Pages",
    description: "Conversion-optimized product launch page with A/B tested layouts and clear CTAs.",
    tags: ["Next.js", "Tailwind", "A/B Testing"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Pinnacle AI Platform",
    category: "SaaS",
    description: "AI model management platform with drag-and-drop workflow builder and inference monitoring.",
    tags: ["React", "Python", "Docker"],
    gradient: "from-blue-500 to-violet-600",
  },
  {
    title: "Meridian Group Rebrand",
    category: "Corporate",
    description: "Complete digital rebrand including website, design system, and internal documentation portal.",
    tags: ["Figma", "Next.js", "Storybook"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "FreshCart Grocery Delivery",
    category: "E-Commerce",
    description: "Real-time inventory grocery delivery app with route optimization and driver tracking.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Vertex Labs Product Launch",
    category: "Landing Pages",
    description: "Immersive 3D product showcase with WebGL animations and interactive feature explorer.",
    tags: ["Three.js", "GSAP", "Vercel"],
    gradient: "from-pink-500 to-violet-600",
  },
];

/* ─── ABOUT PAGE ────────────────────────────────────── */
/* Add real team members when ready to publish bios. */
export const TEAM_MEMBERS: { name: string; role: string; bio: string }[] = [];

export const VALUES = [
  { title: "Craft Over Speed", description: "We never ship anything we wouldn't put our name on. Quality is non-negotiable." },
  { title: "Radical Transparency", description: "No black boxes. Clients see every decision, timeline update, and line of code." },
  { title: "Performance Obsession", description: "Every millisecond matters. We engineer for speed because your users and rankings demand it." },
  { title: "Long-Term Partnership", description: "We don't disappear after launch. We grow with our clients and evolve their technology." },
];

/* ─── BUDGET OPTIONS (CONTACT FORM) ─────────────────── */
export const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
];

export const PROJECT_TYPE_OPTIONS = [
  "New Website",
  "Website Redesign",
  "Web Application",
  "Mobile App",
  "E-Commerce Store",
  "SEO & Marketing",
  "Other",
];
