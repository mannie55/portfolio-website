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
      <div className="pt-[100px] pb-16 md:pt-[140px] md:pb-24 lg:pt-[160px] lg:pb-32">
        <AboutContent />
      </div>
    </PageContainer>
  );
}
