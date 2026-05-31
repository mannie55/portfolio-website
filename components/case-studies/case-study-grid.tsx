import type { CaseStudySummary } from "@/types/case-study";

import { CaseStudyCard } from "./case-study-card";

type CaseStudyGridProps = {
  studies: CaseStudySummary[];
};

export function CaseStudyGrid({ studies }: CaseStudyGridProps) {
  if (studies.length === 0) {
    return (
      <p className="text-muted">No case studies yet. Check back soon.</p>
    );
  }

  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {studies.map((study) => (
        <li key={study.slug}>
          <CaseStudyCard study={study} />
        </li>
      ))}
    </ul>
  );
}
