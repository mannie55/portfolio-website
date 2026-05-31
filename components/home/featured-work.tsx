import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import type { CaseStudySummary } from "@/types/case-study";

type FeaturedWorkProps = {
  studies: CaseStudySummary[];
};

export function FeaturedWork({ studies }: FeaturedWorkProps) {
  return (
    <section className="py-section">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          title="Featured work"
          description="A few projects I'm proud of — click through for the full story."
        />
        <Button href="/case-studies" variant="ghost" className="shrink-0">
          View all →
        </Button>
      </div>
      <div className="mt-10">
        <CaseStudyGrid studies={studies} />
      </div>
    </section>
  );
}
