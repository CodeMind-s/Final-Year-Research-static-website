import { AnimatedSection } from "@/components/AnimatedSection";
import { DocumentCard } from "@/components/DocumentCard";
import { documents } from "@/lib/documents";

export default function DocumentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <AnimatedSection delay={0} className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">Project Documents</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          All research and technical documents produced by the BrineX team.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {documents.map((doc, i) => (
          <DocumentCard
            key={doc.filename}
            title={doc.title}
            type={doc.type}
            filename={doc.filename}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
