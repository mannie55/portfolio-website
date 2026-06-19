import type { Metadata } from "next";

import { AboutContent } from "@/components/about/about-content";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am, how I think, and how I work.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="py-page lg:py-section-md">
        <AboutContent />
      </div>
    </PageContainer>
  );
}
