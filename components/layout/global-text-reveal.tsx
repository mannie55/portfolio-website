"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger globally on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Splits text elements into styled nested character span structures to enable clipped translations.
 * Returns a restoration function to revert the DOM to its original state.
 */
function splitTextIntoChars(element: HTMLElement): () => void {
  const originalHTML = element.innerHTML;
  const text = (element.textContent || "").trim();

  // Clear original content
  element.innerHTML = "";

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
    element.appendChild(wordSpan);

    // Add spacing text nodes between words
    if (wordIndex < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });

  return () => {
    element.innerHTML = originalHTML;
  };
}

/**
 * GlobalTextReveal Component
 * Automatically hooks into Next.js routing transitions to find and animate
 * h2 headings as they enter the viewport using ScrollTrigger.
 */
export function GlobalTextReveal() {
  const pathname = usePathname();

  useGSAP(
    () => {
      let cleanups: Array<() => void> = [];
      let scrollTriggers: ScrollTrigger[] = [];

      // Defer slightly to allow Next.js route transition and hydration to settle
      const timer = setTimeout(() => {
        const h2Elements = document.querySelectorAll<HTMLElement>("h2:not(.no-reveal)");

        h2Elements.forEach((element) => {
          // 1. Split text into character spans
          const restoreDOM = splitTextIntoChars(element);
          cleanups.push(restoreDOM);

          // 2. Find generated characters
          const chars = element.querySelectorAll(".reveal-char");
          if (chars.length === 0) return;

          // 3. Create ScrollTrigger animation
          const anim = gsap.fromTo(
            chars,
            { yPercent: 115 },
            {
              yPercent: 0,
              duration: 0.4,
              stagger: 0.02,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );

          if (anim.scrollTrigger) {
            scrollTriggers.push(anim.scrollTrigger);
          }
        });

        // 4. Recalculate ScrollTrigger positions
        ScrollTrigger.refresh();
      }, 150);

      return () => {
        clearTimeout(timer);
        scrollTriggers.forEach((trigger) => trigger.kill());
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { dependencies: [pathname] }
  );

  return null; // Logic-only component
}
