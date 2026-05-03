"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleCard } from "@/components/ModuleCard";
import { StatsRow } from "@/components/StatsRow";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { BarChart2, Compass, Eye, Layers } from "lucide-react";

const modules = [
  {
    icon: BarChart2,
    name: "Crystal",
    description: "Dual-input BiLSTM + Linear Regression for 60-day crystallization forecasting and 2-month production planning.",
    accentColor: "border-t-teal-500 text-teal-500",
    glowColor: "rgba(20,184,166,0.25)",
  },
  {
    icon: Compass,
    name: "Compass",
    description: "SARIMAX price forecasting (1.16% MAPE), yield ratio demand estimation, and transparent rule-based seller ranking.",
    accentColor: "border-t-cyan-500 text-cyan-500",
    glowColor: "rgba(6,182,212,0.25)",
  },
  {
    icon: Eye,
    name: "Vision",
    description: "YOLOv8m real-time salt purity detection - 99.41% precision across 3 classes at ~45ms per frame.",
    accentColor: "border-t-emerald-500 text-emerald-500",
    glowColor: "rgba(16,185,129,0.25)",
  },
  {
    icon: Layers,
    name: "Valor",
    description: "FedSalt federated learning for privacy-preserving salt waste valorization - R²=0.904 on held-out data.",
    accentColor: "border-t-green-500 text-green-500",
    glowColor: "rgba(34,197,94,0.25)",
  },
];

const techStack = [
  "NestJS", "TypeScript", "Python", "FastAPI", "Docker", "MongoDB", "gRPC", "Kafka",
  "ONNX", "YOLOv8m", "SARIMAX", "BiLSTM", "Next.js 14", "GitHub Actions", "AWS EC2", "AWS SQS",
];

const beforeAfter = [
  { before: "Manual logbook harvest records", after: "60-day BiLSTM crystallization forecasting" },
  { before: "Experience-based harvest timing", after: "Data-driven production planning (R²=0.9732)" },
  { before: "Informal price negotiation", after: "SARIMAX price forecasts (1.16% MAPE)" },
  { before: "No demand visibility", after: "Yield-ratio demand estimation per landowner" },
  { before: "Manual quality inspection", after: "YOLOv8m real-time purity grading (99.41% precision)" },
  { before: "Isolated saltern operations", after: "FedSalt federated collaboration (R²=0.904)" },
];

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <AnimatedSection className="text-center mb-12" delay={0}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight
                     text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {sub && (
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-lg mx-auto">
          {sub}
        </p>
      )}
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
    </AnimatedSection>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div>
      <HeroSection />

      {/* ── Module Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <SectionHeading
          title="Four Integrated AI Modules"
          sub="Each module addresses a distinct challenge in the solar salt value chain."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((m, i) => (
            <ModuleCard
              key={m.name}
              icon={m.icon}
              name={m.name}
              description={m.description}
              accentColor={m.accentColor}
              glowColor={m.glowColor}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <SectionHeading title="Performance at a Glance" />
        <StatsRow />
      </section>

      {/* ── Before / After ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        <SectionHeading
          title="Why BrineX?"
          sub="From guesswork to data-driven intelligence at every step of the salt value chain."
        />
        <div className="glass rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700/50 shadow-glass">
          <div className="grid grid-cols-2 border-b border-slate-200/60 dark:border-slate-700/50
                          bg-slate-50/80 dark:bg-slate-800/60">
            <div className="px-6 py-3 text-xs font-semibold uppercase tracking-wider
                            text-slate-400 dark:text-slate-500">Before</div>
            <div className="px-6 py-3 text-xs font-semibold uppercase tracking-wider
                            text-teal-600 dark:text-teal-400
                            border-l border-slate-200/60 dark:border-slate-700/50">After</div>
          </div>
          {beforeAfter.map((row, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-2 border-b border-slate-100/80 dark:border-slate-800/60 last:border-0"
              initial={mounted ? { opacity: 0, x: -16 } : false}
              whileInView={mounted ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{row.before}</div>
              <div className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200
                              border-l border-slate-100/80 dark:border-slate-800/60">{row.after}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tech Marquee ── */}
      <section className="pb-24">
        <AnimatedSection className="text-center mb-8" delay={0}>
          <p className="text-xs font-semibold uppercase tracking-widest
                        text-slate-400 dark:text-slate-600">
            Technology Stack
          </p>
        </AnimatedSection>
        <InfiniteMarquee items={techStack} />
      </section>
    </div>
  );
}
