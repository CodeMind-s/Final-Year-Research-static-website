"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, BarChart2, Compass, Eye, Layers } from "lucide-react";
import Link from "next/link";
import { SaltCrystalBackground } from "./SaltCrystalBackground";
import { MagneticButton } from "./MagneticButton";

/* ── Letter Mask Word ──────────────────────────── */
function MaskWord({ word, delay, accent }: { word: string; delay: number; accent?: boolean }) {
  return (
    <span className="word-mask mr-[0.22em]">
      <motion.span
        className={`inline-block ${accent ? "text-teal-500 dark:text-teal-400" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.72, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

const line1 = ["Replacing", "Guesswork", "with"];
const line2 = ["AI", "-", "From", "Harvest"];
const line3 = ["to", "Quality", "to", "Trade"];

/* ── Platform Data for Glass Card ─────────────── */
const modules = [
  { icon: BarChart2, name: "Crystal", metric: "R²=0.97", color: "text-teal-500 dark:text-teal-400" },
  { icon: Compass, name: "Compass", metric: "1.16% MAPE", color: "text-cyan-500 dark:text-cyan-400" },
  { icon: Eye, name: "Vision", metric: "99.41% prec.", color: "text-emerald-500 dark:text-emerald-400" },
  { icon: Layers, name: "Valor", metric: "R²=0.90", color: "text-green-500 dark:text-green-400" },
];

/* ── Refractive Glass Card ─────────────────────── */
function RefractiveCard() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 120, damping: 20 });
  const shimmerX = useTransform(rawX, [-1, 1], ["0%", "100%"]);
  const shimmerY = useTransform(rawY, [-1, 1], ["0%", "100%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - r.left) / r.width) * 2 - 1);
    rawY.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }

  return (
    <div className="perspective-1000">
      <motion.div
        className="relative rounded-2xl overflow-hidden cursor-default"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={onMove}
        onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glass base */}
        <div className="glass rounded-2xl p-6 shadow-glass-lg border border-teal-500/10 dark:border-teal-400/10">
          {/* Refractive shimmer overlay */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: useTransform(
                [shimmerX, shimmerY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x} ${y}, rgba(45,212,191,0.12) 0%, transparent 60%)`
              ),
            }}
          />

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                BrineX Platform
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">Live AI Modules</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700/50 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Live
            </span>
          </div>

          {/* Module rows */}
          <div className="space-y-3 mb-5">
            {modules.map((m, i) => (
              <motion.div
                key={m.name}
                className="flex items-center justify-between p-3 rounded-xl
                           bg-slate-50/80 dark:bg-slate-800/60
                           border border-slate-200/80 dark:border-slate-700/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              >
                <div className="flex items-center gap-2.5">
                  <m.icon size={14} className={m.color} />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{m.name}</span>
                </div>
                <span className={`text-xs font-mono font-bold ${m.color}`}>{m.metric}</span>
              </motion.div>
            ))}
          </div>

          {/* Footer stat */}
          <motion.div
            className="pt-4 border-t border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.35 }}
          >
            <span className="text-xs text-slate-500 dark:text-slate-500">Stress tested</span>
            <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
              3,112 req · 0 failures
            </span>
          </motion.div>
        </div>

        {/* Corner glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-teal-400/20 dark:bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-cyan-400/15 dark:bg-cyan-500/10 blur-2xl pointer-events-none" />
      </motion.div>
    </div>
  );
}

/* ── Hero ──────────────────────────────────────── */
export function HeroSection() {
  const wordDelay = (i: number) => 0.2 + i * 0.085;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Layered background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            "linear-gradient(135deg, var(--hero-from) 0%, var(--hero-mid) 50%, var(--hero-to) 100%)",
        }}
      />

      {/* Salt crystal lattice */}
      <SaltCrystalBackground />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, var(--color-bg) 100%)" }}
      />

      {/* Main grid content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         glass border border-teal-500/20
                         text-sm text-teal-700 dark:text-teal-300"
            >
              <span className="text-base">🌊</span>
              <span className="font-medium">Puttalam Salt Society × SLIIT</span>
            </motion.div>

            {/* Heading — Letter Mask */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold tracking-tight leading-[1.1]
                           text-slate-900 dark:text-white">
              <div className="flex flex-wrap">
                {line1.map((w, i) => (
                  <MaskWord key={w} word={w} delay={wordDelay(i)} />
                ))}
              </div>
              <div className="flex flex-wrap mt-1">
                {line2.map((w, i) => (
                  <MaskWord key={w} word={w} delay={wordDelay(line1.length + i)} accent={w === "AI"} />
                ))}
              </div>
              <div className="flex flex-wrap mt-1">
                {line3.map((w, i) => (
                  <MaskWord key={w} word={w} delay={wordDelay(line1.length + line2.length + i)} />
                ))}
              </div>
            </h1>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-xl
                         text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              An integrated AI platform for Sri Lanka&apos;s solar salt industry — production
              forecasting, market intelligence, real-time quality control, and federated
              waste valorization.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton>
                <Link
                  href="/domain"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm
                             bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-500
                             text-white shadow-teal transition-all duration-200"
                >
                  Explore the Platform
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm
                             glass border border-slate-200 dark:border-slate-700
                             text-slate-700 dark:text-slate-200 hover:border-teal-500/40
                             transition-all duration-200"
                >
                  Meet the Team
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Micro stat pills */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {[
                { label: "Production R²", value: "0.9732" },
                { label: "Vision Precision", value: "99.41%" },
                { label: "Price MAPE", value: "1.16%" },
              ].map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs
                             bg-slate-100 dark:bg-slate-800/60
                             border border-slate-200 dark:border-slate-700/50
                             text-slate-500 dark:text-slate-400"
                >
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400">{s.value}</span>
                  <span>{s.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column — Refractive Card ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-none">
              <RefractiveCard />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1
                   text-slate-400 dark:text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
