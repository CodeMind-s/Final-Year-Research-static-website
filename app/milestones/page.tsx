import { AnimatedSection } from "@/components/AnimatedSection";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { milestones } from "@/lib/milestones";

export default function MilestonesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <AnimatedSection delay={0} className="mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">Project Milestones</h1>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
          All assessments and deliverables across the full BrineX research timeline.
        </p>
        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />Completed</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />In Progress</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 inline-block" />Upcoming</span>
        </div>
      </AnimatedSection>

      <MilestoneTimeline milestones={milestones} />
    </div>
  );
}
