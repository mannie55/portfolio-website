"use client";

import { useEffect, useRef, useMemo } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import faqChevron from "@/public/animations/faq_chevron.json";

interface LottieChevronProps {
  isOpen: boolean;
}

export function LottieChevron({ isOpen }: LottieChevronProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const isFirstRender = useRef(true);

  // Programmatically thicken the stroke in the Lottie JSON
  const thickenedAnimationData = useMemo(() => {
    const data = JSON.parse(JSON.stringify(faqChevron));
    
    // Recursive function to find and update stroke widths
    const increaseStroke = (obj: any) => {
      if (typeof obj !== 'object' || obj === null) return;
      
      // Look for the stroke width property 'w' with a constant value 'k'
      if (obj.
        w && typeof obj.w.k === 'number' && obj.mn?.includes('Stroke')) {
        obj.w.k = 100; // Increased from 60 to 100 for more weight
      }
      
      for (const key in obj) {
        increaseStroke(obj[key]);
      }
    };
    
    increaseStroke(data);
    return data;
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      if (isOpen) {
        lottieRef.current?.goToAndStop(17, true);
      } else {
        lottieRef.current?.goToAndStop(0, true);
      }
      isFirstRender.current = false;
      return;
    }

    if (isOpen) {
      lottieRef.current?.setDirection(1);
      lottieRef.current?.playSegments([0, 17], true);
    } else {
      lottieRef.current?.setDirection(-1);
      lottieRef.current?.playSegments([17, 0], true);
    }
  }, [isOpen]);

  return (
    <div className="flex h-[33px] w-[33px] items-center justify-center overflow-hidden rounded-[8px] border border-border-subtle bg-white p-2">
      <Lottie
        lottieRef={lottieRef}
        animationData={thickenedAnimationData}
        loop={false}
        autoplay={false}
        className="h-full w-full"
        style={{ filter: "brightness(0) contrast(100%)" }}
      />
    </div>
  );
}
