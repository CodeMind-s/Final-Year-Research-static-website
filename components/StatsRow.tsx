"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Stat {
  raw: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { raw: "3112", suffix: "+", label: "Stress Test Requests" },
  { raw: "1.16", suffix: "%", label: "SARIMAX MAPE Month+1" },
  { raw: "99.41", suffix: "%", label: "Vision Precision" },
  { raw: "0.9732", label: "Production Forecast R²" },
];

/* ── Single rolling digit column ───────────────── */
function RollingDigit({ digit, delay }: { digit: string; delay: number }) {
  const DIGIT_H = 1.15; // em
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const idx = digits.indexOf(digit);

  if (idx === -1) {
    // Not a numeric digit (., %, +, etc.) - just render statically
    return (
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
      >
        {digit}
      </motion.span>
    );
  }

  return (
    <span
      className="inline-block overflow-hidden"
      style={{ height: `${DIGIT_H}em`, verticalAlign: "bottom" }}
    >
      <motion.span
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: `-${idx * DIGIT_H}em` }}
        transition={{
          duration: 1.4,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {digits.map((d) => (
          <span
            key={d}
            className="block text-center tabular-nums"
            style={{ height: `${DIGIT_H}em`, lineHeight: `${DIGIT_H}em` }}
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/* ── Animated stat value ────────────────────────── */
function AnimatedValue({ raw, prefix, suffix, triggerDelay }: {
  raw: string; prefix?: string; suffix?: string; triggerDelay: number;
}) {
  const chars = (raw + (suffix ?? "")).split("");

  return (
    <span className="inline-flex items-end font-bold text-3xl md:text-4xl tabular-nums
                     text-teal-600 dark:text-teal-400">
      {prefix && <span>{prefix}</span>}
      {chars.map((ch, i) => (
        <RollingDigit key={i} digit={ch} delay={triggerDelay + i * 0.06} />
      ))}
    </span>
  );
}

/* ── Stats Row ─────────────────────────────────── */
export function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="glass rounded-2xl p-6 text-center
                     border border-slate-200/60 dark:border-slate-700/50
                     shadow-glass"
          initial={mounted ? { opacity: 0, y: 24 } : false}
          whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
        >
          <div className="flex justify-center mb-2">
            {isInView && (
              <AnimatedValue
                raw={stat.raw}
                prefix={stat.prefix}
                suffix={stat.suffix}
                triggerDelay={i * 0.15}
              />
            )}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-1">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
