import type { Metadata } from "next";

import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";
import { CTASection } from "@/components/home/cta-section";
import { Footer } from "@/components/layout/footer";
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
    <>
      <PageContainer>
        <div className="py-24">
          <SectionHeading
            as="h1"
            title="Case Studies"
            description="A selection of projects I've worked on — from problem to approach to outcome."
          />
          <div className="mt-24">
            <CaseStudyGrid studies={studies} />
          </div>
        </div>
      </PageContainer>
      {/* 100vh Combined Block for CTA and Footer */}
      <div className="mx-auto flex min-h-screen w-full max-w-container-xxlarge flex-col px-page py-24 xl:px-0">
        <CTASection title="got a project in mind?" />
        <Footer />
      </div>
    </>
  );
}
