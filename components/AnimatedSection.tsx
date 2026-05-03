"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  parallax?: boolean;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Renders content visible by SSR (no opacity:0 baked in).
 * Once mounted on the client, plays an entrance animation when scrolled into view.
 * This avoids the "empty layout flash" while JS hydrates.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = false,
  parallax = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  useEffect(() => setMounted(true), []);

  const motionStyle = parallax ? { y: parallaxY } : undefined;

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial={mounted ? "hidden" : false}
        animate={mounted && isInView ? "visible" : undefined}
        style={motionStyle}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={mounted ? { opacity: 0, y: 28 } : false}
      animate={mounted && isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      style={motionStyle}
    >
      {children}
    </motion.div>
  );
}
