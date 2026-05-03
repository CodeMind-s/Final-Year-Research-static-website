interface InfiniteMarqueeProps {
  items: string[];
  className?: string;
}

export function InfiniteMarquee({ items, className = "" }: InfiniteMarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden marquee-host group ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }} />

      <div className="marquee-track flex gap-10 w-max py-2">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-mono whitespace-nowrap select-none
                       text-slate-500 dark:text-slate-500
                       hover:text-teal-600 dark:hover:text-teal-400
                       transition-colors cursor-default"
          >
            {item}
            <span className="mx-5 text-slate-300 dark:text-slate-700">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
