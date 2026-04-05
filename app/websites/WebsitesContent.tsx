"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GridBackground } from "@/components/effects/GridBackground";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { CTASection } from "@/components/sections/CTA";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

const categories = ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.map((p) => p.category)))];

export default function WebsitesContent() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === active);

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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-section font-bold leading-tight"
          >
            Websites That
            <br />
            <span className="text-gradient">Speak for Themselves.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Every project is a partnership. Here&apos;s a selection of work we&apos;re proud of.
          </motion.p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-accent-blue text-white shadow-glow-blue"
                    : "border border-white/[0.08] bg-white/[0.02] text-text-secondary hover:text-white hover:border-white/[0.15]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card-hover overflow-hidden group cursor-pointer"
                >
                  {/* Gradient placeholder image */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                    role="img"
                    aria-label={`${project.title} project preview`}
                  >
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-white border border-white/20">
                        View Project <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 dot-grid opacity-20" aria-hidden="true" />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-display text-lg font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
