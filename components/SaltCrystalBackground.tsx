"use client";

import { motion } from "framer-motion";
import { useId } from "react";

const COLS = 18;
const ROWS = 10;

export function SaltCrystalBackground() {
  const id = useId();
  const patternId = `crystal-${id}`;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Base SVG lattice grid */}
      <svg
        className="absolute inset-0 w-full h-full animate-crystal-pulse"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="var(--crystal-color)"
              strokeWidth="0.8"
            />
            {/* Diagonal connectors for crystal lattice */}
            <line x1="0" y1="0" x2="30" y2="30" stroke="var(--crystal-color)" strokeWidth="0.4" strokeDasharray="2 8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Animated lattice nodes (Na+ / Cl- ions) */}
      <div className="absolute inset-0">
        {Array.from({ length: COLS * ROWS }).map((_, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const isLarge = (col + row) % 2 === 0;
          const delay = ((col * 0.15 + row * 0.25) % 3).toFixed(2);
          const duration = (3.5 + (i % 4) * 0.8).toFixed(1);

          return (
            <motion.span
              key={i}
              className={`absolute rounded-full ${
                isLarge
                  ? "bg-teal-400 dark:bg-teal-400"
                  : "bg-teal-300 dark:bg-teal-500"
              }`}
              style={{
                left: `${(col / (COLS - 1)) * 100}%`,
                top: `${(row / (ROWS - 1)) * 95}%`,
                width: isLarge ? 5 : 3,
                height: isLarge ? 5 : 3,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                opacity: [
                  isLarge ? 0.08 : 0.04,
                  isLarge ? 0.35 : 0.18,
                  isLarge ? 0.08 : 0.04,
                ],
                scale: [1, isLarge ? 1.8 : 1.4, 1],
              }}
              transition={{
                duration: parseFloat(duration),
                repeat: Infinity,
                delay: parseFloat(delay),
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Larger highlight crystal nodes scattered for accent */}
      {[
        { x: "8%", y: "25%", size: 10, dur: 5 },
        { x: "22%", y: "70%", size: 8, dur: 6 },
        { x: "55%", y: "15%", size: 12, dur: 7 },
        { x: "75%", y: "60%", size: 9, dur: 5.5 },
        { x: "90%", y: "30%", size: 7, dur: 4.5 },
      ].map((node, i) => (
        <motion.span
          key={`accent-${i}`}
          className="absolute rounded-full bg-teal-400/30 dark:bg-teal-300/20"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            opacity: [0.05, 0.25, 0.05],
            scale: [1, 2, 1],
            boxShadow: [
              "0 0 0px transparent",
              "0 0 12px rgba(45,212,191,0.4)",
              "0 0 0px transparent",
            ],
          }}
          transition={{
            duration: node.dur,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
