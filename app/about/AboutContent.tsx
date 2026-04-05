"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Target, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { GridBackground } from "@/components/effects/GridBackground";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { CTASection } from "@/components/sections/CTA";
import { TEAM_MEMBERS, VALUES, SITE } from "@/lib/constants";

const valueIcons = [Zap, Eye, Target, Heart];

const timeline = [
  { year: "2018", title: "Founded in Dallas", text: "DBJ Technologies launched with a mission to bring enterprise-grade web engineering to businesses of all sizes." },
  { year: "2019", title: "First 50 Projects", text: "Built a reputation for speed and quality, delivering websites and apps across DFW and beyond." },
  { year: "2021", title: "Cloud & DevOps Division", text: "Expanded into managed cloud infrastructure, CI/CD automation, and 24/7 monitoring." },
  { year: "2023", title: "200+ Clients Milestone", text: "Crossed 200 active clients with a 96% retention rate and team of 15+ specialists." },
  { year: "2025", title: "AI & Automation", text: "Integrated AI-powered tools and automation workflows to supercharge client outcomes." },
];

export default function AboutContent() {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-section font-bold leading-tight"
          >
            Engineering Excellence,
            <br />
            <span className="text-gradient">Since Day One.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {SITE.name} was founded on a simple belief: every business deserves technology
            that&apos;s fast, beautiful, and built to last. We&apos;re not an agency — we&apos;re
            your engineering team.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <SectionHeading
          label="Our Story"
          title="The Journey So Far"
        />
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="relative border-l border-white/[0.08] pl-8 ml-4 space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent-blue/40 bg-bg-primary">
                  <div className="h-2 w-2 rounded-full bg-accent-blue" />
                </div>
                <span className="font-mono text-xs text-accent-blue uppercase tracking-widest">
                  {item.year}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-bg-secondary/50">
        <SectionHeading
          label="Our Values"
          title="What Drives Us"
          description="These aren't just words on a wall — they shape every decision we make."
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <Card key={v.title} delay={i * 0.1} gradientBorder>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32">
        <SectionHeading
          label="The Team"
          title="Meet the People Behind the Code"
          description="A small, senior team that punches well above its weight."
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-6 text-center group"
              >
                <div
                  className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 border border-white/[0.06] transition-all duration-500 group-hover:border-accent-blue/30"
                  role="img"
                  aria-label={`Avatar for ${m.name}`}
                >
                  <span className="font-display text-3xl font-bold text-gradient" aria-hidden="true">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold">{m.name}</h3>
                <p className="mt-1 text-sm text-accent-blue font-medium">{m.role}</p>
                <p className="mt-3 text-xs text-text-secondary leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
