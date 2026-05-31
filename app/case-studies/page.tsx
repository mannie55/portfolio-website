import type { Metadata } from "next";

import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected projects and case studies.",
};

export default async function CaseStudiesPage() {
  const studies = await getAllCaseStudies();

  return (
    <PageContainer>
      <SectionHeading
        as="h1"
        title="Case Studies"
        description="A selection of projects I've worked on — from problem to approach to outcome."
      />
      <div className="mt-12">
        <CaseStudyGrid studies={studies} />
      </div>
    </PageContainer>
  );
}
