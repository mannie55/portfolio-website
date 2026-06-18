"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PillButton } from "@/components/ui/pill-button";
import type { CaseStudySummary } from "@/types/case-study";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectsProps {
  studies: CaseStudySummary[];
}

export function Projects({ studies }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Match media for Desktop only (min-width: 1024px)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Set initial state of all project card buttons only on desktop
        gsap.set(".project-card-button", { opacity: 0, y: 20 });

        const wrappers = gsap.utils.toArray<HTMLElement>(".project-card-wrapper");
        
        wrappers.forEach((wrapper, index) => {
          const card = wrapper.querySelector("article");
          if (!card) return;

          // For the last card, don't pin it or fade it out as it scrolls.
          if (index === wrappers.length - 1) {
            return;
          }

          gsap.timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top 120px", // Pin card below the top of viewport to clear header
              end: "bottom 120px", // End pinning when bottom of wrapper passes the trigger line
              scrub: true,
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            }
          })
          .to(card, {
            opacity: 0,
            scale: 0.8,
            ease: "none",
          });
        });
      });

      // Match media for Mobile only (max-width: 1023px)
      mm.add("(max-width: 1023px)", () => {
        const wrappers = gsap.utils.toArray<HTMLElement>(".project-card-wrapper");
        
        wrappers.forEach((wrapper) => {
          const card = wrapper.querySelector("article");
          const content = wrapper.querySelector(".project-card-content");
          if (!card) return;

          // Scale and fade in the card itself on scroll
          gsap.fromTo(
            card,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: wrapper,
                start: "top 85%",
                once: true,
              },
            }
          );

          // Fade up the text content inside the card
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
                  trigger: wrapper,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    const button = e.currentTarget.querySelector(".project-card-button");
    if (button) {
      gsap.to(button, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    const button = e.currentTarget.querySelector(".project-card-button");
    if (button) {
      gsap.to(button, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    }
  };

  if (studies.length === 0) return null;

  return (
    <section
      ref={containerRef}
      aria-labelledby="projects-heading"
      className="relative flex w-full flex-col items-start py-24 px-0 md:px-6"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <h2
          id="projects-heading"
          className="font-heading text-h2 text-white uppercase"
        >
          PROJECTS
        </h2>
        <PillButton href="/case-studies" label="View more" variant="white" />
      </div>

      <div className="mt-10 flex w-full flex-col gap-10">
        {studies.map((project, index) => (
          <div
            key={project.slug}
            className="project-card-wrapper w-full relative"
            style={{ zIndex: index + 1 }}
          >
            <article
              className="group flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 p-4 lg:p-6 rounded-[20px] bg-surface w-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col flex-1 w-full max-w-[504px] md:max-w-none lg:max-w-[504px] items-start gap-12 project-card-content">
                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="font-heading text-h4 leading-tight text-white/90">
                    {project.title}
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    {project.tools.map((tag) => (
                      <li
                        key={tag}
                        className="inline-flex rounded-full bg-surface-elevated px-4 py-2"
                      >
                        <span className="text-body-xs text-white/90">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-6 w-full">
                  <p className="text-body-sm md:text-body leading-relaxed text-foreground-muted">
                    {project.summary}
                  </p>
                  
                  <PillButton
                    href={`/case-studies/${project.slug}`}
                    label="View Project"
                    variant="white"
                    className="project-card-button w-fit"
                  />
                </div>
              </div>
              
              <div className="relative flex-1 w-full max-w-[606px] md:max-w-none lg:max-w-[606px] aspect-[1.515] overflow-hidden rounded-lg">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 606px"
                />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
