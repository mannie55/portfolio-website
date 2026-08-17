"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AButtonSecondary } from "@/components/ui/button-secondary";
import SpinGradientButton from "@/components/ui/spin-gradient-button";
import { heroContent, calComUrl } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Ensure the title container is visible once GSAP hydration begins
      tl.set(".hero-title", { opacity: 1 });

      // 1. Text slide up (split text reveal)
      tl.fromTo(
        ".hero-char",
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 0.4,
          stagger: 0.02,
        },
        0.2 // Delay of 0.2s before character animation begins
      );

      // 2. Badge, Portrait and Description fade up smoothly
      tl.fromTo(
        [".hero-badge", ".hero-portrait", ".hero-description"],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.15 },
        "0.2" // Start slightly before or as text reveal finishes
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative pt-[100px] pb-16 md:pt-[140px] md:pb-24 lg:pt-[160px] lg:pb-32">
      {/* Availability badge — always above everything on every breakpoint */}
      <div className="hero-badge mb-8 opacity-0">
        <SpinGradientButton />
      </div>

      <div className="mx-auto grid grid-cols-1 gap-10 lg:flex lg:flex-row lg:items-start lg:gap-14">
        {/* Left: Author Portrait */}
        <div className="hero-portrait order-2 lg:order-none relative h-[24rem] w-full max-w-[31.25rem] md:max-w-none overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-surface to-surface-elevated sm:h-[37.5rem] lg:h-[42.5625rem] lg:w-[39.375rem] lg:max-w-none lg:shrink opacity-0">
          <Image
            src="/images/nnamdi_profile.png"
            alt="Portrait of Nnamdi Ogbonna"
            fill
            priority
            unoptimized
            className="object-cover object-top"
            sizes="(max-width: 64rem) 100vw, 39.375rem"
          />
        </div>

        {/* Right: Content */}
        <div className="contents lg:flex lg:flex-1 lg:shrink-0 lg:min-w-[42rem] lg:flex-col lg:items-start lg:gap-8 lg:gap-10">
          <h1 
            className="hero-title order-1 lg:order-none max-w-[50rem] text-h1 font-bold leading-[0.95] text-white uppercase flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] opacity-0"
            aria-label={heroContent.headline}
          >
            <span aria-hidden="true" className="flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]">
              {heroContent.headline.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
                  <span className="hero-word inline-block">
                    {word.split("").map((char, charIndex) => (
                      <span key={charIndex} className="hero-char inline-block">
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          {/* Description & CTA */}
          <div className="hero-description order-3 lg:order-none relative flex flex-col items-start gap-8 md:gap-10 w-full max-w-[42rem] opacity-0">
            <p className="max-w-[40.25rem] text-body md:text-body-lg lg:text-body-xl text-white/80">
              {heroContent.description}
            </p>
            <AButtonSecondary label={heroContent.cta} href={calComUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
