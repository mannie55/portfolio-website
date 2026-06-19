"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CaseStudyBody } from "@/components/case-studies/case-study-body";
import { CaseStudyHeader } from "@/components/case-studies/case-study-header";
import { CaseStudyHighImpactHeader } from "@/components/case-studies/case-study-high-impact-header";
import { CaseStudyNav } from "@/components/case-studies/case-study-nav";
import type { CaseStudy, CaseStudySummary } from "@/types/case-study";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CaseStudyDetailsContentProps = {
  study: CaseStudy;
  previous: CaseStudySummary | null;
  next: CaseStudySummary | null;
};

export function CaseStudyDetailsContent({
  study,
  previous,
  next,
}: CaseStudyDetailsContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reveals = gsap.utils.toArray<HTMLElement>(".case-study-reveal");

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="py-24">
      {study.metrics ? (
        <CaseStudyHighImpactHeader study={study} />
      ) : (
        <CaseStudyHeader study={study} />
      )}
      <CaseStudyBody blocks={study.body} />
      <CaseStudyNav previous={previous} next={next} />
    </div>
  );
}
