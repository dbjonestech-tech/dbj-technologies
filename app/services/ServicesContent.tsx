"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GridBackground } from "@/components/effects/GridBackground";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { CTASection } from "@/components/sections/CTA";
import { SERVICES } from "@/lib/constants";

const whyUs = [
  { title: "Senior Engineers Only", desc: "No juniors learning on your dime. Every team member has 5+ years of production experience." },
  { title: "Fixed-Price Transparency", desc: "You know the cost before we write a single line of code. No surprise invoices, ever." },
  { title: "Performance Guaranteed", desc: "We guarantee 90+ Lighthouse scores on every project. Speed isn't optional — it's the standard." },
  { title: "Scalable Architecture", desc: "We build for today's traffic and tomorrow's growth. No rebuilds needed when you scale 10x." },
  { title: "Post-Launch Support", desc: "30 days of complimentary support after every launch, with optional ongoing maintenance plans." },
  { title: "100% Code Ownership", desc: "You own everything. Full source code, documentation, and deployment guides delivered at launch." },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <GridBackground />
        <GradientBlob className="-top-40 -left-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent-blue mb-6"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-section font-bold leading-tight"
          >
            Everything You Need to
            <br />
            <span className="text-gradient">Dominate Digital.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto"
          >
            From pixel-perfect front ends to bulletproof cloud infrastructure,
            we deliver full-spectrum digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`glass-card p-8 md:p-12 grid gap-8 md:grid-cols-2 items-center ${!isEven ? "md:direction-rtl" : ""}`}
                style={{ direction: "ltr" }}
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-3">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:gap-3 transition-all">
                    Discuss Your Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan" aria-hidden="true" />
                      <span className="text-sm text-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-bg-secondary/50">
        <SectionHeading
          label="Why DBJ"
          title="Why Companies Choose Us"
          description="It's not just about the code — it's about the experience of working with a team that actually gives a damn."
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card-hover p-6"
              >
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
