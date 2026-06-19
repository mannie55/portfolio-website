"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bio } from "./bio";
import { Skills } from "./skills";
import { Approach } from "./approach";
import { PillButton } from "@/components/ui/pill-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reveals = gsap.utils.toArray<HTMLElement>(".about-reveal");

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
    <div ref={containerRef} className="space-y-48">
      <Bio />
      
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-16 about-reveal">
          <Skills />
        </div>
        <div className="about-reveal">
          <Approach />
        </div>
      </div>
      
      <div className="flex justify-end about-reveal">
        <PillButton 
          href="/contact" 
          label="Reach out"
        />
      </div>
    </div>
  );
}
