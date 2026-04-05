"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/effects/MagneticButton";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-bg-primary to-accent-violet/10" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-accent-blue/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent-violet/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-section font-bold leading-tight"
        >
          Ready to Build
          <br />
          <span className="text-gradient">Something Extraordinary?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto"
        >
          Let&apos;s talk about your project. No pressure, no commitment — just a
          conversation about how technology can accelerate your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Link href="/contact">
            <MagneticButton className="btn-primary text-base" strength={0.2}>
              Start a Conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
