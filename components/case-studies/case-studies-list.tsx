"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyGrid } from "./case-study-grid";
import type { CaseStudySummary } from "@/types/case-study";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CaseStudiesListProps = {
  studies: CaseStudySummary[];
};

function splitTextIntoChars(element: HTMLElement): () => void {
  const originalHTML = element.innerHTML;
  const text = (element.textContent || "").trim();

  // Set aria-label to read text cleanly
  element.setAttribute("aria-label", text);

  // Clear original content
  element.innerHTML = "";

  // Wrap all split text chars in aria-hidden to avoid screen readers spelling them
  const ariaHiddenWrapper = document.createElement("span");
  ariaHiddenWrapper.setAttribute("aria-hidden", "true");
  ariaHiddenWrapper.className = "contents";

  const words = text.split(/\s+/);
  words.forEach((word, wordIndex) => {
    if (!word) return;

    // Word container wrapper to handle character overflow clipping
    const wordSpan = document.createElement("span");
    wordSpan.className = "inline-block overflow-hidden pb-[0.05em] whitespace-nowrap";

    // Inner span to bundle characters
    const wordInner = document.createElement("span");
    wordInner.className = "reveal-word inline-block";

    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.className = "reveal-char inline-block";
      charSpan.textContent = char;
      wordInner.appendChild(charSpan);
    });

    wordSpan.appendChild(wordInner);
    ariaHiddenWrapper.appendChild(wordSpan);

    // Add spacing text nodes between words
    if (wordIndex < words.length - 1) {
      ariaHiddenWrapper.appendChild(document.createTextNode(" "));
    }
  });

  element.appendChild(ariaHiddenWrapper);

  return () => {
    element.innerHTML = originalHTML;
    element.removeAttribute("aria-label");
  };
}

export function CaseStudiesList({ studies }: CaseStudiesListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Heading slide-up split reveal (like hero heading)
      const heading = containerRef.current?.querySelector(".case-studies-heading");
      const title = heading?.querySelector("h1");
      const desc = heading?.querySelector("p");

      if (heading && title) {
        // Ensure the title container is visible once GSAP hydration begins
        gsap.set(heading, { opacity: 1 });

        // Split text into character spans
        const restoreDOM = splitTextIntoChars(title);

        const chars = title.querySelectorAll(".reveal-char");
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.fromTo(
          chars,
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 0.4,
            stagger: 0.02,
          },
          0.2 // Delay of 0.2s before character animation begins
        );

        if (desc) {
          tl.fromTo(
            desc,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.0 },
            "0.2" // Start slightly before or as text reveal finishes
          );
        }

        // Return cleanup function to restore DOM structure if unmounted
        return () => {
          restoreDOM();
        };
      }
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      // 2. Case study cards fade & scale reveal (like process cards)
      const cards = gsap.utils.toArray<HTMLElement>(".case-study-card");

      cards.forEach((card) => {
        const content = card.querySelector(".case-study-card-content");

        gsap.fromTo(
          card,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <SectionHeading
        as="h1"
        title="Case Studies"
        description="A selection of projects I've worked on — from problem to approach to outcome."
        className="case-studies-heading opacity-0"
      />
      <div className="mt-24">
        <CaseStudyGrid studies={studies} />
      </div>
    </div>
  );
}
