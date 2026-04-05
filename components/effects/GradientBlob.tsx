"use client";

import { motion } from "framer-motion";

interface GradientBlobProps {
  className?: string;
  colors?: [string, string, string];
}

export function GradientBlob({
  className = "",
  colors = ["#3b82f6", "#06b6d4", "#8b5cf6"],
}: GradientBlobProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        className="h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 40%, ${colors[2]} 70%, transparent 100%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["50%", "40%", "50%", "45%", "50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
