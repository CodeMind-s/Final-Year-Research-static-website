"use client";

import { useId, useMemo } from "react";

const COLS = 12;
const ROWS = 7;

const ACCENTS = [
  { x: "8%", y: "25%", size: 10, dur: 5 },
  { x: "22%", y: "70%", size: 8, dur: 6 },
  { x: "55%", y: "15%", size: 12, dur: 7 },
  { x: "75%", y: "60%", size: 9, dur: 5.5 },
  { x: "90%", y: "30%", size: 7, dur: 4.5 },
];

export function SaltCrystalBackground() {
  const id = useId();
  const patternId = `crystal-${id.replace(/:/g, "")}`;

  const nodes = useMemo(() => {
    const arr: { left: string; top: string; size: number; delay: string; dur: string; large: boolean }[] = [];
    for (let i = 0; i < COLS * ROWS; i++) {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const isLarge = (col + row) % 2 === 0;
      arr.push({
        left: `${(col / (COLS - 1)) * 100}%`,
        top: `${(row / (ROWS - 1)) * 95}%`,
        size: isLarge ? 5 : 3,
        delay: `${((col * 0.15 + row * 0.25) % 3).toFixed(2)}s`,
        dur: `${(3.5 + (i % 4) * 0.8).toFixed(1)}s`,
        large: isLarge,
      });
    }
    return arr;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <svg
        className="absolute inset-0 w-full h-full animate-crystal-pulse"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--crystal-color)" strokeWidth="0.8" />
            <line x1="0" y1="0" x2="30" y2="30" stroke="var(--crystal-color)" strokeWidth="0.4" strokeDasharray="2 8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      <div className="absolute inset-0">
        {nodes.map((n, i) => (
          <span
            key={i}
            className={`crystal-node absolute rounded-full ${
              n.large ? "bg-teal-400 dark:bg-teal-400" : "bg-teal-300 dark:bg-teal-500"
            } ${n.large ? "crystal-node-lg" : "crystal-node-sm"}`}
            style={{
              left: n.left,
              top: n.top,
              width: n.size,
              height: n.size,
              animationDelay: n.delay,
              animationDuration: n.dur,
            }}
          />
        ))}
      </div>

      {ACCENTS.map((node, i) => (
        <span
          key={`accent-${i}`}
          className="crystal-accent absolute rounded-full bg-teal-400/30 dark:bg-teal-300/20"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
            animationDuration: `${node.dur}s`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
