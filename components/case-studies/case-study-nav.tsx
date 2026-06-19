import Link from "next/link";

import type { CaseStudySummary } from "@/types/case-study";

type CaseStudyNavProps = {
  previous: CaseStudySummary | null;
  next: CaseStudySummary | null;
};

export function CaseStudyNav({ previous, next }: CaseStudyNavProps) {
  return (
    <nav
      aria-label="Case study navigation"
      className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between case-study-reveal"
    >
      <Link
        href="/case-studies"
        className="text-body-sm text-muted"
      >
        All case studies
      </Link>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        {previous ? (
          <Link
            href={`/case-studies/${previous.slug}`}
            className="text-body-sm text-muted"
          >
            Previous: {previous.title}
          </Link>
        ) : null}
        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="text-body-sm text-muted"
          >
            Next: {next.title}
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
