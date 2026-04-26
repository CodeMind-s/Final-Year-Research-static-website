"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import type { DocType } from "@/lib/documents";

interface DocumentCardProps {
  title: string;
  type: DocType;
  filename: string;
  index: number;
}

const typeColors: Record<DocType, string> = {
  Group: "bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700",
  Individual: "bg-cyan-50 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700",
  Technical: "bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700",
  Publication: "bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700",
};

export function DocumentCard({ title, type, filename, index }: DocumentCardProps) {
  return (
    <motion.div
      className="glass backdrop-blur-sm rounded-2xl p-5 border border-slate-200/60 dark:border-slate-700/50 group flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 40px rgba(20,184,166,0.12)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-700/80 shrink-0">
          <FileText size={20} className="text-teal-600 dark:text-teal-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">{title}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${typeColors[type]}`}>
          {type}
        </span>
        <motion.a
          href={`/documents/${filename}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          View
          <motion.span whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
            <ExternalLink size={12} />
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
}
