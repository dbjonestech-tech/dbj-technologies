"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradientBorder?: boolean;
  delay?: number;
}

export function Card({
  children,
  className = "",
  hover = true,
  gradientBorder = false,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        hover ? "glass-card-hover" : "glass-card",
        gradientBorder && "gradient-border",
        "p-6 md:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
