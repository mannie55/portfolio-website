"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { usePathname } from "next/navigation";

// In a real application without Club GSAP, importing ScrollSmoother will fail.
// We are attempting to import it to see if it works, or we will use gsap-trial.
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

interface SmoothScrollerProps {
  children: React.ReactNode;
}

export function SmoothScroller({ children }: SmoothScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      // Initialize ScrollSmoother
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
      });

      return () => {
        smoother.kill();
      };
    },
    { scope: wrapperRef, dependencies: [pathname] }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
