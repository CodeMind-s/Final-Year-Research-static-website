"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  range?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  range = 100,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 160, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 160, damping: 18, mass: 0.6 });

  useEffect(() => {
    // Only on non-touch devices
    if ("ontouchstart" in window) return;

    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < range) {
        const factor = (1 - dist / range) * strength;
        rawX.set(dx * factor);
        rawY.set(dy * factor);
      } else {
        rawX.set(0);
        rawY.set(0);
      }
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY, range, strength]);

  return (
    <motion.div ref={ref} style={{ x, y }} className="inline-block">
      <motion.div
        className={className}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
