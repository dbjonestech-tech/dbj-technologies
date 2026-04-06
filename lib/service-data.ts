/* ─── SERVICE DETAIL DATA ──────────────────────────── */
/* Icons are stored as string names and resolved in client components
   to avoid serialization issues across the server/client boundary. */

export interface ServiceDetail {
  slug: string;
  iconName: string;
  title: string;
  tagline: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  longDescription: string;
  benefits: { iconName: string; title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  ctaText: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "web-development",
    iconName: "Globe",
    title: "Web Development",
    tagline: "Pixel-perfect, blazing-fast sites",
    heroTitle: "Web Development That",
    heroHighlight: "Performs & Converts.",
    heroDescription:
      "We engineer high-performance websites using Next.js, React, and modern frameworks. Every build is optimized for speed, accessibility, and search engines from day one.",
    longDescription:
      "Your website is the first impression your business makes. We build sites that load in under a second, rank on page one, and turn visitors into customers. No templates, no page builders — just clean, hand-crafted code built for your specific goals. Every project ships with responsive design, SEO foundations, accessibility compliance, and performance scores that put competitors to shame.",
    benefits: [
      { iconName: "Zap", title: "Sub-Second Load Times", description: "Server-side rendering, static generation, and aggressive optimization deliver pages that load before users blink." },
      { iconName: "Code2", title: "Modern Architecture", description: "Built on Next.js and React with TypeScript — the same stack used by Fortune 500 companies and high-growth startups." },
      { iconName: "Monitor", title: "Responsive on Every Device", description: "Designed mobile-first and tested on real devices. Your site looks and works perfectly on phones, tablets, and desktops." },
      { iconName: "Shield", title: "SEO & Accessibility Built-In", description: "Semantic HTML, structured data, meta optimization, and WCAG AA+ compliance are standard on every build." },
    ],
    process: [
      { step: "01", title: "Discovery & Strategy", description: "We audit your current site, analyze competitors, and define goals, sitemap, and content strategy." },
      { step: "02", title: "Wireframes & Design", description: "Interactive prototypes in Figma that map every page, interaction, and responsive breakpoint." },
      { step: "03", title: "Development & Testing", description: "Hand-coded in Next.js with TypeScript. Every page is tested for performance, accessibility, and cross-browser compatibility." },
      { step: "04", title: "Launch & Optimization", description: "Deployed to production with CI/CD, monitoring, analytics, and 30 days of post-launch support." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Sanity", "WordPress", "Strapi", "Node.js", "PostgreSQL"],
    deliverables: [
      "Fully responsive, production-ready website",
      "CMS integration for content management",
      "SEO setup with sitemap, meta tags, and structured data",
      "Performance audit with 90+ Lighthouse scores",
      "Analytics and conversion tracking setup",
      "Full source code and documentation",
    ],
    faq: [
      { question: "How long does a typical website project take?", answer: "A standard 5–10 page website takes 4–6 weeks from kickoff to launch. More complex sites with custom features or CMS integrations typically run 6–10 weeks." },
      { question: "Do you build on WordPress?", answer: "We can integrate with WordPress as a headless CMS, but our front ends are built with Next.js for dramatically better performance, security, and SEO. We also work with Sanity, Strapi, and other modern CMS platforms." },
      { question: "What happens after launch?", answer: "Every project includes 30 days of complimentary post-launch support. After that, we offer monthly maintenance plans starting at $299/month or ad-hoc support at our standard rate." },
    ],
    relatedSlugs: ["ui-ux-design", "seo-digital-marketing", "ecommerce"],
    ctaText: "Let's Build Your Website",
  },
  {
    slug: "mobile-applications",
    iconName: "Smartphone",
    title: "Mobile Applications",
    tagline: "Native feel, cross-platform reach",
    heroTitle: "Mobile Apps That",
    heroHighlight: "Users Actually Love.",
    heroDescription:
      "We build mobile experiences that feel native on every device. Using React Native and Flutter, we deliver iOS and Android apps from a single codebase without compromising quality.",
    longDescription:
      "Mobile is where your users are. We build cross-platform applications that feel indistinguishable from native — smooth animations, instant responses, and seamless OS integration. One codebase powers both iOS and Android, cutting development time and cost without sacrificing the experience. From push notifications to offline support, biometric auth to App Store optimization, we handle every detail.",
    benefits: [
      { iconName: "Smartphone", title: "True Cross-Platform", description: "One codebase for iOS and Android. React Native and Flutter deliver native performance and feel on both platforms." },
      { iconName: "Zap", title: "Offline-First Architecture", description: "Your app works reliably even without a connection. Data syncs seamlessly when connectivity returns." },
      { iconName: "Shield", title: "Secure by Default", description: "Biometric authentication, encrypted storage, certificate pinning, and secure API communication are built into every app." },
      { iconName: "BarChart3", title: "App Store Optimized", description: "We handle submission, optimization, and compliance for both the Apple App Store and Google Play Store." },
    ],
    process: [
      { step: "01", title: "Product Strategy", description: "We define your app's core value proposition, user personas, feature priorities, and technical architecture." },
      { step: "02", title: "UX & Prototyping", description: "Interactive prototypes tested with real users to validate navigation, flows, and feature design before writing code." },
      { step: "03", title: "Agile Development", description: "Two-week sprints with working builds after each cycle. You test real features on your device throughout development." },
      { step: "04", title: "Launch & Iterate", description: "App Store submission, analytics setup, crash monitoring, and a data-driven iteration plan for post-launch growth." },
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase", "Node.js", "PostgreSQL", "Redis", "AWS"],
    deliverables: [
      "iOS and Android applications from a single codebase",
      "App Store and Google Play submission",
      "Push notification system",
      "Analytics and crash reporting integration",
      "API backend (if needed)",
      "Full source code and deployment documentation",
    ],
    faq: [
      { question: "Should I build native or cross-platform?", answer: "For most businesses, cross-platform (React Native or Flutter) delivers 95%+ native performance at 40–60% less cost. We recommend native only for apps with extreme performance needs like 3D gaming or heavy video processing." },
      { question: "How long does a mobile app take to build?", answer: "A standard app with 10–15 screens takes 8–14 weeks. Complex apps with custom backends, real-time features, or third-party integrations typically run 14–20 weeks." },
      { question: "Do you handle App Store submission?", answer: "Yes. We manage the entire submission process for both Apple and Google, including compliance, metadata, screenshots, and optimization for discoverability." },
    ],
    relatedSlugs: ["web-development", "ui-ux-design", "cloud-devops"],
    ctaText: "Let's Build Your App",
  },
  {
    slug: "cloud-devops",
    iconName: "Cloud",
    title: "Cloud & DevOps",
    tagline: "Scalable infrastructure that never sleeps",
    heroTitle: "Cloud Infrastructure That",
    heroHighlight: "Scales With You.",
    heroDescription:
      "We architect cloud solutions on AWS, GCP, and Azure that scale with your business. From CI/CD pipelines to containerized deployments, your infrastructure is in expert hands.",
    longDescription:
      "Your application is only as reliable as the infrastructure running it. We design, build, and manage cloud environments that auto-scale under load, recover from failures automatically, and cost only what you use. Whether you're migrating from a legacy server, containerizing a monolith, or building cloud-native from scratch, we bring the architecture and automation expertise to make it happen.",
    benefits: [
      { iconName: "Server", title: "Auto-Scaling Architecture", description: "Infrastructure that grows and shrinks with your traffic automatically. Pay for what you use, handle any spike." },
      { iconName: "GitBranch", title: "CI/CD Automation", description: "Automated build, test, and deployment pipelines. Push code, and it's live in minutes with zero manual intervention." },
      { iconName: "Shield", title: "Security & Compliance", description: "Network isolation, secrets management, WAF configuration, and compliance-ready infrastructure from day one." },
      { iconName: "Cpu", title: "24/7 Monitoring", description: "Real-time dashboards, automated alerts, and incident response runbooks. Problems are detected and resolved before users notice." },
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", description: "We assess your current setup, identify bottlenecks, security gaps, and cost inefficiencies." },
      { step: "02", title: "Architecture Design", description: "Cloud-native architecture designed for your scale, compliance requirements, and budget constraints." },
      { step: "03", title: "Build & Migrate", description: "Infrastructure-as-code deployment with Docker, Kubernetes, and Terraform. Zero-downtime migrations." },
      { step: "04", title: "Monitor & Optimize", description: "Ongoing monitoring, cost optimization, and proactive maintenance to keep everything running at peak performance." },
    ],
    technologies: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel", "Cloudflare", "Datadog"],
    deliverables: [
      "Cloud architecture design document",
      "Infrastructure-as-code (Terraform/CloudFormation)",
      "CI/CD pipeline configuration",
      "Monitoring and alerting setup",
      "Security hardening and compliance audit",
      "Runbook and documentation for your team",
    ],
    faq: [
      { question: "Which cloud provider should I use?", answer: "It depends on your needs. AWS offers the broadest services, GCP excels at data and ML, and Azure integrates best with Microsoft ecosystems. For most web applications, we recommend AWS or Vercel for the best balance of features and cost." },
      { question: "Can you manage our infrastructure ongoing?", answer: "Yes. We offer managed infrastructure plans that include 24/7 monitoring, patching, scaling optimization, and incident response. Think of it as a DevOps team on retainer." },
      { question: "How do you handle migrations?", answer: "We plan zero-downtime migrations with rollback strategies at every step. We migrate in phases, validate each stage, and only cut over when everything is verified." },
    ],
    relatedSlugs: ["web-development", "mobile-applications", "ecommerce"],
    ctaText: "Let's Architect Your Cloud",
  },
  {
    slug: "ui-ux-design",
    iconName: "Palette",
    title: "UI/UX Design",
    tagline: "Interfaces users fall in love with",
    heroTitle: "Design That Drives",
    heroHighlight: "Real Business Results.",
    heroDescription:
      "Design is more than aesthetics. We craft user journeys grounded in research and psychology, then bring them to life with motion, interaction design, and pixel-level precision.",
    longDescription:
      "Beautiful design that nobody can use is a waste. We start every design engagement with research — understanding your users, their goals, and the friction points in their journey. Then we design interfaces that feel intuitive, guide users toward action, and make your brand impossible to forget. Every interaction is intentional, every animation serves a purpose, and every pixel is placed with care.",
    benefits: [
      { iconName: "Users", title: "Research-Driven Design", description: "User personas, competitive analysis, and journey mapping ensure every design decision is grounded in real user needs." },
      { iconName: "MousePointer", title: "Interactive Prototypes", description: "Clickable, testable prototypes in Figma before any code is written. Validate with real users before you invest in development." },
      { iconName: "PenTool", title: "Design Systems", description: "Scalable component libraries and style guides that keep your brand consistent as your product grows." },
      { iconName: "Accessibility", title: "Accessibility-First", description: "WCAG AA+ compliant designs with proper contrast, hierarchy, and interaction patterns that work for everyone." },
    ],
    process: [
      { step: "01", title: "Research & Discovery", description: "User interviews, competitive audits, and analytics review to understand the problem space and opportunity." },
      { step: "02", title: "Information Architecture", description: "Sitemaps, user flows, and wireframes that define the structure and logic of every screen." },
      { step: "03", title: "Visual Design", description: "High-fidelity mockups with your brand's personality. Every state, every breakpoint, every micro-interaction designed." },
      { step: "04", title: "Handoff & QA", description: "Pixel-perfect design specs, component documentation, and design QA during development to ensure nothing is lost in translation." },
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Framer", "Principle", "Storybook", "Tailwind CSS", "Lottie", "After Effects"],
    deliverables: [
      "User research findings and personas",
      "Wireframes and user flow diagrams",
      "High-fidelity UI designs (all breakpoints)",
      "Interactive prototype for testing",
      "Design system and component library",
      "Developer handoff documentation",
    ],
    faq: [
      { question: "Do you only do design, or development too?", answer: "We do both. Most clients engage us for design and development together, but we also offer design-only engagements with clean handoff documentation for your internal development team." },
      { question: "What's your design tool of choice?", answer: "Figma is our primary tool for UI design, prototyping, and design systems. We use it for real-time collaboration with clients and seamless developer handoff." },
      { question: "How many revisions are included?", answer: "Our standard engagement includes 2–3 rounds of revisions per phase. We find that starting with research and prototyping drastically reduces revision cycles because we validate early." },
    ],
    relatedSlugs: ["web-development", "mobile-applications", "ecommerce"],
    ctaText: "Let's Design Your Product",
  },
  {
    slug: "ecommerce",
    iconName: "ShoppingCart",
    title: "E-Commerce Solutions",
    tagline: "Stores engineered to convert",
    heroTitle: "E-Commerce That",
    heroHighlight: "Actually Converts.",
    heroDescription:
      "We build e-commerce platforms that turn visitors into customers. From Shopify storefronts to fully custom checkout flows, every element is optimized for conversions and revenue.",
    longDescription:
      "E-commerce is not just about listing products — it's about engineering a buying experience that removes friction at every step. We build stores that load instantly, search intuitively, and check out seamlessly. Whether you need a Shopify storefront, a headless commerce setup, or a fully custom platform, we optimize every element for conversion rate, average order value, and customer lifetime value.",
    benefits: [
      { iconName: "Store", title: "Platform-Agnostic", description: "Shopify, WooCommerce, headless commerce, or fully custom — we build on whatever platform fits your business model and scale." },
      { iconName: "CreditCard", title: "Frictionless Checkout", description: "One-click payments, guest checkout, saved carts, and multiple payment options. Every checkout step is optimized to reduce abandonment." },
      { iconName: "TrendingUp", title: "Conversion Optimization", description: "A/B tested product pages, smart upsells, urgency elements, and analytics-driven improvements that increase revenue." },
      { iconName: "Database", title: "Inventory & Operations", description: "Real-time inventory sync, automated order management, shipping integrations, and back-office tools that scale with your catalog." },
    ],
    process: [
      { step: "01", title: "Commerce Strategy", description: "We analyze your product catalog, margins, fulfillment model, and customer journey to define the right platform and architecture." },
      { step: "02", title: "Store Design", description: "Conversion-optimized product pages, category layouts, and checkout flows designed to maximize revenue per visitor." },
      { step: "03", title: "Build & Integrate", description: "Platform setup, payment processing, shipping, inventory sync, and any third-party integrations your business needs." },
      { step: "04", title: "Launch & Optimize", description: "Go-live with analytics, A/B testing framework, and a 90-day optimization plan to continuously improve conversion rates." },
    ],
    technologies: ["Shopify", "WooCommerce", "Next.js", "Stripe", "PayPal", "Snipcart", "Sanity", "Node.js", "PostgreSQL", "Redis"],
    deliverables: [
      "Fully functional e-commerce store",
      "Payment gateway integration (Stripe, PayPal, etc.)",
      "Inventory management system",
      "Shipping and tax configuration",
      "Analytics and conversion tracking",
      "Staff training and documentation",
    ],
    faq: [
      { question: "Shopify or custom build?", answer: "Shopify is ideal for businesses with standard e-commerce needs and smaller catalogs. Custom builds make sense when you need unique checkout flows, complex pricing, or integrations that Shopify can't support natively." },
      { question: "Can you migrate from our current platform?", answer: "Yes. We handle migrations from any platform including product data, customer records, order history, and SEO redirects to preserve your search rankings." },
      { question: "Do you handle ongoing store management?", answer: "We offer e-commerce maintenance plans that include product updates, seasonal promotions, performance monitoring, and conversion optimization." },
    ],
    relatedSlugs: ["web-development", "ui-ux-design", "seo-digital-marketing"],
    ctaText: "Let's Build Your Store",
  },
  {
    slug: "seo-digital-marketing",
    iconName: "Search",
    title: "SEO & Digital Marketing",
    tagline: "Get found. Get chosen. Get results.",
    heroTitle: "Marketing That Delivers",
    heroHighlight: "Measurable Growth.",
    heroDescription:
      "Visibility is everything. We combine technical SEO with content strategy and paid media to drive qualified traffic, improve rankings, and deliver measurable business growth.",
    longDescription:
      "The best website in the world is useless if nobody finds it. We build SEO and marketing strategies that put your business in front of the right people at the right time. Our approach combines technical SEO fixes with content strategy, local search optimization, and paid media campaigns — all driven by data, not guesswork. Every dollar you spend is tracked, measured, and optimized for maximum return.",
    benefits: [
      { iconName: "FileSearch", title: "Technical SEO", description: "Site speed, crawlability, structured data, core web vitals, and indexing issues diagnosed and fixed at the code level." },
      { iconName: "Target", title: "Content Strategy", description: "Keyword research, content calendars, and high-quality content that builds authority and drives organic traffic month over month." },
      { iconName: "Megaphone", title: "Paid Media", description: "Google Ads, Meta campaigns, and retargeting managed by certified specialists who optimize for conversions, not clicks." },
      { iconName: "BarChart3", title: "Analytics & Reporting", description: "Custom dashboards, monthly reports, and transparent metrics so you always know exactly what your investment is delivering." },
    ],
    process: [
      { step: "01", title: "Audit & Research", description: "Comprehensive technical audit, keyword research, competitor analysis, and baseline performance benchmarking." },
      { step: "02", title: "Strategy & Planning", description: "Custom SEO roadmap, content calendar, and paid media plan aligned with your business goals and budget." },
      { step: "03", title: "Execute & Optimize", description: "Technical fixes, content creation, link building, and campaign management — all executed and continuously optimized." },
      { step: "04", title: "Report & Scale", description: "Monthly reporting with actionable insights. We double down on what works and pivot away from what doesn't." },
    ],
    technologies: ["Google Search Console", "Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Meta Ads", "Screaming Frog", "Hotjar"],
    deliverables: [
      "Technical SEO audit and fix implementation",
      "Keyword strategy and content calendar",
      "Google Ads / Meta Ads campaign setup",
      "Monthly performance reports",
      "Analytics and conversion tracking setup",
      "Ongoing optimization recommendations",
    ],
    faq: [
      { question: "How long until I see SEO results?", answer: "SEO is a long game. Most clients see measurable improvements in 3–4 months and significant traffic growth in 6–12 months. Paid campaigns deliver results immediately but require ongoing investment." },
      { question: "Do you guarantee rankings?", answer: "No legitimate SEO provider guarantees specific rankings — Google's algorithm has hundreds of factors and changes constantly. What we guarantee is a professional, data-driven approach that consistently improves your visibility over time." },
      { question: "Can you manage our existing ad campaigns?", answer: "Absolutely. We audit existing campaigns, identify waste and opportunity, and optimize for better performance. Most clients see improved ROAS within the first month of management." },
    ],
    relatedSlugs: ["web-development", "ecommerce", "ui-ux-design"],
    ctaText: "Let's Grow Your Visibility",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICE_DETAILS.map((s) => s.slug);
}
