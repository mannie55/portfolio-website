import type { Metadata } from "next";

import { CaseStudiesList } from "@/components/case-studies/case-studies-list";
import { PageContainer } from "@/components/layout/page-container";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected projects and case studies.",
};

export default async function CaseStudiesPage() {
  const studies = await getAllCaseStudies();

  return (
    <PageContainer>
      <div className="py-24">
        <CaseStudiesList studies={studies} />
      </div>
    </PageContainer>
  );
}
