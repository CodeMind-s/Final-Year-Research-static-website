import { AnimatedSection } from "@/components/AnimatedSection";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers, supervisors } from "@/lib/team";
import { Mail, Building2, FlaskConical } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      {/* Team */}
      <AnimatedSection delay={0} className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">The Team Behind BrineX</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Four final-year computing students at SLIIT, each leading one AI module of the integrated platform.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {teamMembers.map((member, i) => (
          <TeamMemberCard key={member.studentId} member={member} index={i} />
        ))}
      </div>

      {/* Supervisors */}
      <AnimatedSection delay={0} className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Supervisors</h2>
        <div className="h-px bg-gradient-to-r from-teal-500/30 to-transparent mt-2" />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {supervisors.map((s, i) => (
          <AnimatedSection key={s.email} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/50 flex gap-4 items-start">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-400/40 bg-slate-100 dark:bg-slate-700 shrink-0">
                {s.image ? (
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
                    {s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{s.name}</p>
                <p className="text-xs text-teal-600 dark:text-teal-400 font-mono mt-0.5">{s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{s.department}</p>
                <a
                  href={`mailto:${s.email}`}
                  className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mt-2"
                >
                  <Mail size={11} />
                  {s.email}
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Institution */}
      <AnimatedSection delay={0} className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Institution &amp; Partners</h2>
        <div className="h-px bg-gradient-to-r from-teal-500/30 to-transparent mt-2" />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="glass rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/50 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <Building2 size={18} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">University</p>
              <p className="text-sm text-slate-900 dark:text-slate-100 font-semibold">Sri Lanka Institute of Information Technology (SLIIT)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Faculty of Computing, Malabe, Sri Lanka</p>
            </div>
          </div>
          <div className="flex gap-3">
            <FlaskConical size={18} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">External Partner</p>
              <p className="text-sm text-slate-900 dark:text-slate-100 font-semibold">Puttalam Salt Society (PSS)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Puttalam, Sri Lanka</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-4.5 shrink-0 mt-0.5">
              <span className="text-teal-600 dark:text-teal-400 text-sm">📄</span>
            </div>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Publication</p>
              <p className="text-sm text-slate-900 dark:text-slate-100 font-semibold">ICHORA 2026 - Accepted</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Project ID: 25-26J-431 &nbsp;·&nbsp; Paper ID: 230</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
