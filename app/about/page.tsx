import type { Metadata } from "next";

import { Bio } from "@/components/about/bio";
import { Approach } from "@/components/about/approach";
import { Skills } from "@/components/about/skills";
import { PageContainer } from "@/components/layout/page-container";
import { PillButton } from "@/components/ui/pill-button";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am, how I think, and how I work.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="py-page lg:py-section-md">
        <div className="space-y-48">
          <Bio />
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
            <div className="space-y-16">
              <Skills />
            </div>
            <div>
              <Approach />
            </div>
          </div>
          
          <div className="flex justify-end">
            <PillButton 
              href="/contact" 
              label="Reach out"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
