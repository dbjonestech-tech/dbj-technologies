"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";

export function ClientLogos() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative min-h-[200px] py-20 overflow-hidden border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-10"
        >
          Trusted by forward-thinking companies
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="mx-8 flex shrink-0 items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] px-8 py-4 min-h-[60px] min-w-[160px] transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04] group"
            >
              <span className="font-display text-lg font-bold text-text-muted transition-colors duration-500 group-hover:text-white whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
