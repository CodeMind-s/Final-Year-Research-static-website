"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  label: string;
  category?: string;
}

export function TechBadge({ label, category }: TechBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 border border-slate-700 text-teal-400 hover:border-teal-500/50 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {category && (
        <span className="text-slate-500">{category}/</span>
      )}
      {label}
    </motion.span>
  );
}
