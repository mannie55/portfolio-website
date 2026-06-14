import type { Metadata } from "next";

import { Bio } from "@/components/about/bio";
import { Approach } from "@/components/about/approach";
import { Skills } from "@/components/about/skills";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

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
            <Button 
              href="https://www.ajidevictor.com/get-started" 
              className="group h-auto rounded-full px-6 py-4"
            >
              <span className="text-body-md font-semibold uppercase tracking-wider">Reach out</span>
              <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform group-hover:translate-x-1">
                <svg 
                  width="15" 
                  height="15" 
                  viewBox="0 0 15 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path 
                    d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
