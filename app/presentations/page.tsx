"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Presentation, ExternalLink } from "lucide-react";

const presentations = [
  { title: "Proposal Presentation", date: "September 2025", href: "/presentations/Proposal_Presentation.pdf", upcoming: false },
  { title: "Progress Presentation I", date: "December 2025", href: "/presentations/Progress_Presentation_I.pdf", upcoming: false },
  { title: "Progress Presentation II", date: "March 2026", href: "/presentations/Progress_Presentation_II.pdf", upcoming: false },
  { title: "Final Presentation", date: "June 2026", href: "/presentations/Final_Presentation.pdf", upcoming: false },
];

export default function PresentationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <AnimatedSection delay={0} className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">Presentations</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Slides from past presentations. Future presentations will be added as they are completed.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {presentations.map((p, i) => (
          <motion.div
            key={p.title}
            className="glass backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/50 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 40px rgba(20,184,166,0.12)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-700/80 shrink-0">
                <Presentation size={20} className="text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{p.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{p.date}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              {p.upcoming ? (
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-700/50">
                  Upcoming
                </span>
              ) : (
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/50">
                  Available
                </span>
              )}
              {!p.upcoming && (
                <motion.a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Slides
                  <motion.span whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                    <ExternalLink size={12} />
                  </motion.span>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
