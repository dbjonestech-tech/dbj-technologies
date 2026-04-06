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
  tagline: "We Build the Future",
  description:
    "DBJ Technologies is a full-service web development and technology company specializing in blazing-fast websites, modern web applications, cloud infrastructure, and digital transformation.",
  url: "https://dbjtechnologies.com",
  email: "hello@dbjtechnologies.com",
  phone: "+1 (469) 555-0147",
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
  { label: "FAQ", href: "/faq" },
] as const;

/* ─── SOCIAL LINKS ──────────────────────────────────── */
export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/dbjtechnologies", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/company/dbjtechnologies", icon: "linkedin" },
  { label: "X / Twitter", href: "https://x.com/dbjtechnologies", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com/dbjtechnologies", icon: "instagram" },
] as const;

/* ─── STATS ─────────────────────────────────────────── */
export const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
  { value: 8, suffix: "+", label: "Years of Excellence" },
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
    tagline: "Scalable infrastructure that never sleeps",
    description:
      "We architect cloud solutions on AWS, GCP, and Azure that scale with your business. From CI/CD pipelines to containerized deployments, your infrastructure is in expert hands.",
    features: [
      "AWS, GCP, Azure deployments",
      "Docker & Kubernetes orchestration",
      "CI/CD pipeline automation",
      "24/7 monitoring & incident response",
    ],
  },
  {
    icon: Palette,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Interfaces users fall in love with",
    description:
      "Design is more than aesthetics. We craft user journeys grounded in research and psychology, then bring them to life with motion, interaction design, and pixel-level precision.",
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
    tagline: "Get found. Get chosen. Get results.",
    description:
      "Visibility is everything. We combine technical SEO with content strategy and paid media to drive qualified traffic, improve rankings, and deliver measurable business growth.",
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
    description: "We learn your business, goals, audience, and competitive landscape to define the perfect strategy.",
  },
  {
    step: "02",
    title: "Design",
    description: "Interactive prototypes and visual designs that align with your brand and delight your users.",
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
export const TESTIMONIALS = [
  {
    quote: "DBJ Technologies completely transformed our digital presence. Our new site loads in under a second and conversions jumped 40% in the first month.",
    name: "Sarah Mitchell",
    role: "CEO, Apex Ventures",
  },
  {
    quote: "Their team doesn't just build websites — they engineer experiences. The attention to detail and performance optimization was beyond anything we'd seen before.",
    name: "Marcus Chen",
    role: "CTO, NovaBridge Labs",
  },
  {
    quote: "We needed a complex e-commerce platform on a tight timeline. DBJ delivered early, under budget, and the quality was exceptional. They're our permanent tech partner now.",
    name: "Daniella Reyes",
    role: "Founder, LuxeThread",
  },
];

/* ─── CLIENT LOGOS (PLACEHOLDER NAMES) ──────────────── */
export const CLIENT_LOGOS = [
  "TechNova", "Meridian Group", "Apex Ventures", "LuxeThread",
  "NovaBridge", "Pinnacle AI", "Vertex Labs", "Catalyst Corp",
];

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
    description: "Perfect for small businesses and personal brands launching their first professional site.",
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
    description: "For growing companies that need a high-performance site with advanced features and integrations.",
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
    description: "Full-scale digital transformation with dedicated engineering, custom infrastructure, and white-glove service.",
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
    answer: "We work with businesses of all sizes — from solo entrepreneurs launching their first site to enterprise organizations needing complex web applications. Our sweet spot is growth-stage companies that need technology to scale.",
  },
  {
    category: "General",
    question: "How long does a typical project take?",
    answer: "A standard 5–10 page website takes 4–6 weeks. Complex web applications with custom backends typically run 8–16 weeks. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    category: "General",
    question: "Do you work with clients outside of Texas?",
    answer: "Absolutely. While we're headquartered in Dallas, we work with clients worldwide. All of our project management, design reviews, and communication happens digitally.",
  },
  {
    category: "Technical",
    question: "What technologies do you use?",
    answer: "Our core stack includes Next.js, React, TypeScript, Node.js, and Tailwind CSS. For backends, we use PostgreSQL, MongoDB, and Redis. We deploy on AWS, Vercel, and GCP depending on project needs.",
  },
  {
    category: "Technical",
    question: "Will my website be mobile-responsive?",
    answer: "Every project we deliver is fully responsive across all devices and screen sizes. We test on real devices — not just browser emulators — to ensure a flawless experience everywhere.",
  },
  {
    category: "Technical",
    question: "Do you provide hosting and domain setup?",
    answer: "Yes. We can set up hosting on Vercel, AWS, or your preferred provider. We also handle domain registration, DNS configuration, SSL certificates, and email setup.",
  },
  {
    category: "Technical",
    question: "Can you integrate with our existing tools and APIs?",
    answer: "Absolutely. We regularly integrate with CRMs (HubSpot, Salesforce), payment processors (Stripe, PayPal), analytics platforms, and custom APIs. If it has an API, we can connect it.",
  },
  {
    category: "Billing",
    question: "How does your pricing work?",
    answer: "We offer fixed-price project packages as well as monthly retainer engagements. All projects begin with a paid discovery phase that includes a detailed scope, timeline, and cost breakdown before any development begins.",
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
    answer: "Every project includes 30 days of post-launch support at no additional cost. After that, we offer monthly maintenance plans or ad-hoc support at our standard hourly rate.",
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
    description: "A sleek corporate site with animated data visualizations and investor portal integration.",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "LuxeThread E-Commerce Platform",
    category: "E-Commerce",
    description: "High-end fashion marketplace with AI-powered recommendations and sub-second page loads.",
    tags: ["React", "Shopify", "Node.js"],
    gradient: "from-violet-600 to-pink-500",
  },
  {
    title: "NovaBridge SaaS Dashboard",
    category: "SaaS",
    description: "Enterprise analytics dashboard processing 10M+ events daily with real-time visualizations.",
    tags: ["TypeScript", "D3.js", "AWS"],
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    title: "Catalyst Corp Landing Page",
    category: "Landing Pages",
    description: "Conversion-optimized product launch page that achieved a 12% signup rate in week one.",
    tags: ["Next.js", "Tailwind", "A/B Testing"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Pinnacle AI Platform",
    category: "SaaS",
    description: "AI model management platform with drag-and-drop workflow builder and real-time inference monitoring.",
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
export const TEAM_MEMBERS = [
  { name: "David Blackwell", role: "Founder & CEO", bio: "15 years in enterprise tech. Previously led engineering at two YC startups." },
  { name: "Jessica Tran", role: "Head of Design", bio: "Award-winning designer. Former design lead at a Fortune 500 SaaS company." },
  { name: "Brandon Kowalski", role: "Lead Engineer", bio: "Full-stack architect specializing in high-traffic distributed systems." },
  { name: "Anika Patel", role: "Project Director", bio: "PMP-certified with a track record of delivering 150+ digital projects on time and on budget." },
];

export const VALUES = [
  { title: "Craft Over Speed", description: "We never ship anything we wouldn't proudly put our name on. Quality is non-negotiable." },
  { title: "Radical Transparency", description: "No black boxes. Clients see every decision, timeline update, and line of code." },
  { title: "Performance Obsession", description: "Every millisecond matters. We engineer for speed because your users demand it." },
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
