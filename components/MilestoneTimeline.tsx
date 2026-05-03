"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import type { Milestone, MilestoneStatus } from "@/lib/milestones";

interface MilestoneTimelineProps {
  milestones: Milestone[];
}

const statusConfig: Record<MilestoneStatus, { badge: string; dot: string; glow: string }> = {
  Completed: {
    badge: "bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700/60",
    dot: "bg-teal-500 ring-teal-500/30",
    glow: "shadow-teal-500/40",
  },
  "In Progress": {
    badge: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/60",
    dot: "bg-amber-500 ring-amber-500/30",
    glow: "shadow-amber-500/40",
  },
  Upcoming: {
    badge: "bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700/50",
    dot: "bg-slate-400 ring-slate-400/30",
    glow: "shadow-slate-400/20",
  },
};

function MilestoneNode({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;
  const cfg = statusConfig[milestone.status];

  return (
    <div className={`relative flex items-center gap-0
      ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
    >
      {/* ── Content card (flex-1 on each side) ── */}
      <div className="flex-1 flex md:px-8 px-4">
        <motion.div
          ref={ref}
          className={`flex-1 glass rounded-xl p-4 shadow-glass
                      border border-slate-200/60 dark:border-slate-700/50
                      ${isLeft ? "md:text-right" : ""}`}
          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 300 } }}
        >
          <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">
            {milestone.title}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{milestone.date}</p>
          {milestone.description && (
            <p className={`text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed ${isLeft ? "md:text-right" : ""}`}>
              {milestone.description}
            </p>
          )}
          <div className={`flex items-center gap-2 mt-2 flex-wrap ${isLeft ? "md:justify-end" : ""}`}>
            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${cfg.badge}`}>
              {milestone.status}
            </span>
            {milestone.marks && milestone.marks !== "—" && (
              <span className="inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
                {milestone.marks}
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Center dot ── */}
      <motion.div
        className={`relative z-10 w-5 h-5 rounded-full ring-4 shrink-0 shadow-lg ${cfg.dot} ${cfg.glow}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.02 }}
      />

      {/* ── Spacer opposite side ── */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.15"],
  });
  const rawPathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(rawPathLength, { stiffness: 60, damping: 20 });

  return (
    <div ref={containerRef} className="relative">
      {/* ── Animated SVG spine - absolutely centered ── */}
      <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1 100"
          style={{ display: "block" }}>
          {/* Track */}
          <line x1="0.5" y1="0" x2="0.5" y2="100"
            stroke="var(--color-border)" strokeWidth="10" vectorEffect="non-scaling-stroke" />
          {/* Progress */}
          <motion.line
            x1="0.5" y1="0" x2="0.5" y2="100"
            stroke="var(--color-accent)"
            strokeWidth="10"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            style={{
              pathLength,
              scaleY: pathLength,
              transformOrigin: "top",
            }}
          />
        </svg>
      </div>

      {/* ── Nodes ── */}
      <div className="flex flex-col gap-5 relative z-10">
        {milestones.map((m, i) => (
          <MilestoneNode key={m.title + i} milestone={m} index={i} />
        ))}
      </div>
    </div>
  );
}
