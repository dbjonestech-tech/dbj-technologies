"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code2, DollarSign, Headphones, Users, Zap, Layers, Eye, Award, Target } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GridBackground } from "@/components/effects/GridBackground";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { CTASection } from "@/components/sections/CTA";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const guarantees = [
  {
    icon: Award,
    title: "90+ Lighthouse Scores",
    description: "Every project ships with verified 90+ scores in Performance, Accessibility, Best Practices, and SEO. No exceptions.",
  },
  {
    icon: Code2,
    title: "100% Code Ownership",
    description: "You own every line of code, every design file, every asset. Full source code and documentation delivered at launch.",
  },
  {
    icon: DollarSign,
    title: "Fixed-Price Transparency",
    description: "Your project cost is agreed before development begins. No hourly billing, no scope creep, no surprise invoices.",
  },
  {
    icon: Headphones,
    title: "30-Day Post-Launch Support",
    description: "Every project includes 30 days of complimentary post-launch support. Bugs, questions, adjustments — we've got you.",
  },
];

const differentiators = [
  {
    icon: Users,
    title: "Senior Engineers Only",
    description: "No juniors learning on your project. Every team member has 5+ years of production experience.",
  },
  {
    icon: Target,
    title: "Small Team, Big Impact",
    description: "You work directly with the people building your product. No layers of account managers between you and the engineers.",
  },
  {
    icon: Layers,
    title: "Modern Stack, Always",
    description: "We use the same technologies as the world's best tech companies. Your project benefits from cutting-edge tooling.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    description: "We don't disappear after launch. Our best client relationships span years of continuous collaboration.",
  },
  {
    icon: Zap,
    title: "Performance Obsession",
    description: "Every millisecond matters. We engineer for speed because your users and search rankings demand it.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description: "Shared project boards, weekly updates, and direct communication. You always know exactly where things stand.",
  },
];

export default function WhyDBJContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <GridBackground />
        <GradientBlob className="-top-40 -right-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent-blue mb-6"
          >
            Why DBJ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-section font-bold leading-tight"
          >
            Built Different,
            <br />
            <span className="text-gradient">On Purpose.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            What makes DBJ different from agencies and freelancers? Guarantees
            you can measure, transparency you can trust, and engineering you can
            depend on.
          </motion.p>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-32">
        <SectionHeading
          label="Promises We Keep"
          title="Our Guarantees"
          description="These aren't marketing claims. They're commitments baked into every contract."
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {guarantees.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover gradient-border p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-32 bg-bg-secondary/50">
        <SectionHeading
          label="The DBJ Difference"
          title="How We're Different"
          description="We're not the cheapest option — we're the one you won't regret choosing."
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-cyan">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 border-y border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-secondary to-bg-primary" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
