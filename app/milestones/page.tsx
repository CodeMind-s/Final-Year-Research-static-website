"use client";

import { useState, useMemo } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { milestones, type MilestoneStatus } from "@/lib/milestones";
import { ChevronDown } from "lucide-react";

type Filter = "All" | MilestoneStatus;

const filters: Filter[] = ["All", "Completed", "In Progress", "Upcoming"];

export default function MilestonesPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? milestones : milestones.filter((m) => m.status === filter)),
    [filter]
  );

  const totalMarks = useMemo(() => {
    return milestones.reduce((sum, m) => {
      if (!m.marks || m.marks === "—") return sum;
      const n = parseFloat(m.marks);
      return Number.isFinite(n) ? sum + n : sum;
    }, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <AnimatedSection delay={0} className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">Project Milestones</h1>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
          All assessments and deliverables across the full BrineX research timeline.
          Total assessment weight: <span className="font-mono font-semibold text-teal-600 dark:text-teal-400">{totalMarks}%</span>
        </p>
        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />Completed</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />In Progress</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 inline-block" />Upcoming</span>
        </div>
      </AnimatedSection>

      {/* Filter dropdown */}
      <div className="flex items-center justify-end mb-10 gap-3">
        <label htmlFor="milestone-filter" className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Filter by status:
        </label>
        <div className="relative">
          <select
            id="milestone-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as Filter)}
            className="appearance-none cursor-pointer text-sm font-medium pl-4 pr-10 py-2 rounded-xl
                       bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                       text-slate-700 dark:text-slate-200 outline-none
                       focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20 transition-colors"
          >
            {filters.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
        </div>
      </div>

      {filtered.length > 0 ? (
        <MilestoneTimeline milestones={filtered} />
      ) : (
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 py-12">
          No milestones in this category.
        </p>
      )}
    </div>
  );
}
