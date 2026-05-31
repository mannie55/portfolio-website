import type { Metadata } from "next";

import { Bio } from "@/components/about/bio";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionHeading
        as="h1"
        title="About"
        description="A bit about who I am and what I do."
      />
      <div className="mt-12 space-y-16">
        <Bio />
        <Skills />
        <Experience />
      </div>
    </PageContainer>
  );
}
