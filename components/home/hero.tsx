"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AButtonSecondary } from "@/components/ui/button-secondary";
import { heroContent } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Character split text reveal (from codepen)
      tl.fromTo(
        ".hero-char",
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 0.5,
          stagger: 0.05,
        },
        0.2 // Delay of 0.2s
      );

      // 2. Portrait and Description Box fade up smoothly
      tl.fromTo(
        [".hero-portrait", ".hero-description"],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 },
        "-=0.2" // Start relative to timeline
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative py-24">
      <div className="mx-auto grid grid-cols-1 gap-10 lg:flex lg:flex-row lg:items-end lg:gap-14">
        {/* Left: Author Portrait */}
        <div className="hero-portrait order-2 lg:order-none relative h-[30rem] w-full max-w-[31.25rem] md:max-w-none overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-surface to-surface-elevated sm:h-[37.5rem] lg:h-[42.5625rem] lg:w-[39.375rem] lg:max-w-none lg:shrink opacity-0">
          <Image
            src="/images/nnamdi_profile.png"
            alt="Portrait of Nnamdi Ogbonna"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 64rem) 100vw, 39.375rem"
          />
        </div>

        {/* Right: Content */}
        <div className="contents lg:flex lg:flex-1 lg:shrink-0 lg:min-w-[42rem] lg:flex-col lg:items-start lg:gap-8 lg:gap-10">
          <h1 className="order-1 lg:order-none max-w-[50rem] text-h1 font-bold leading-[0.95] text-white uppercase flex flex-wrap">
            {heroContent.headline.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block overflow-hidden pb-[0.05em] whitespace-nowrap mr-[0.3em] last:mr-0">
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex} className="hero-char inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Description Box */}
          <div className="hero-description order-3 lg:order-none relative flex h-full w-full max-w-[42rem] md:max-w-none lg:max-w-[42rem] flex-auto overflow-hidden rounded-[1.25rem] bg-surface p-4 opacity-0">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/bg_grid.svg"
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-start justify-between gap-8 md:gap-[6.7rem] w-full">
              <p className="max-w-[40.25rem] text-body md:text-body-lg lg:text-body-xl text-text-dark">
                {heroContent.description}
              </p>
              <AButtonSecondary label={heroContent.cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
