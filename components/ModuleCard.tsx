"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface ModuleCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  accentColor: string;
  glowColor: string;
  index: number;
}

export function ModuleCard({
  icon: Icon,
  name,
  description,
  accentColor,
  glowColor,
  index,
}: ModuleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-8, 8]), { stiffness: 200, damping: 25 });
  const shimmerX = useTransform(rawX, [-1, 1], ["20%", "80%"]);
  const shimmerY = useTransform(rawY, [-1, 1], ["20%", "80%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set(((e.clientX - r.left) / r.width) * 2 - 1);
    rawY.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }

  function onLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      className="perspective-1000"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={cardRef}
        className="relative h-full rounded-2xl overflow-hidden cursor-default preserve-3d"
        style={{ rotateX, rotateY }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Card surface */}
        <div
          className={`glass h-full rounded-2xl p-6 border-t-2 ${accentColor}
                      border-x border-b border-slate-200/60 dark:border-slate-700/60
                      hover:border-x-teal-500/20 dark:hover:border-x-teal-400/20
                      transition-colors shadow-glass`}
        >
          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
            style={{
              background: useTransform(
                [shimmerX, shimmerY],
                ([x, y]) => `radial-gradient(circle at ${x} ${y}, ${glowColor} 0%, transparent 65%)`
              ),
            }}
          />

          {/* Icon */}
          <div className={`inline-flex p-3 rounded-xl mb-4 bg-slate-100 dark:bg-slate-800/80
                           border border-slate-200/60 dark:border-slate-700/60`}>
            <Icon size={22} className={`${accentColor.replace("border-t-", "text-")}`} />
          </div>

          {/* Content */}
          <h3 className="text-base font-bold mb-2 text-slate-900 dark:text-slate-100">{name}</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
        </div>

        {/* Glow beneath */}
        <div
          className="absolute inset-x-4 bottom-0 h-1 blur-lg opacity-40 rounded-full pointer-events-none"
          style={{ backgroundColor: glowColor }}
        />
      </motion.div>
    </motion.div>
  );
}
