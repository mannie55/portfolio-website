"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DiscoveryComponent } from "@/components/ui/discovery-component";
import { AssetComponent } from "@/components/ui/asset-component";
import { ScopeComponent } from "@/components/ui/scope-component";
import { AButtonSecondary } from "@/components/ui/button-secondary";
import { SectionHeading } from "@/components/ui/section-heading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CardBase = {
  id: string;
  title: string;
  description: string;
  className: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
};

type ImageCard = CardBase & {
  type: "image";
  imageAlt: string;
  imageClassName: string;
};

type TextCard = CardBase & {
  type: "text";
};

const cards: Array<ImageCard | TextCard> = [
  {
    id: "discovery-call",
    type: "image",
    title: "Discovery Call",
    description:
      "We talk through your project, what you have, and what done looks like.",
    className:
      "relative lg:row-[1_/_2] lg:col-[1_/_7] w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-surface rounded-2xl",
    imageAlt: "Discovery component",
    imageClassName: "relative flex items-center justify-center",
    contentClassName: "flex flex-col items-start text-left gap-2 max-w-[291px]",
  },
  {
    id: "quality-always",
    type: "text",
    title: "Quality always",
    description:
      "From pixel-perfect design to clean development, I make sure you get the highest standards.",
    className:
      "lg:row-[2_/_3] lg:col-[1_/_4] h-full flex flex-col items-center justify-center p-6 bg-white relative w-full rounded-2xl",
    titleClassName:
      "relative flex items-center justify-start text-left self-stretch mt-[-1.00px] font-sans font-semibold text-text-dark text-h5 tracking-[0] leading-[26.4px]",
    descriptionClassName:
      "relative flex items-center justify-start text-left self-stretch mt-[-1.00px] font-sans font-normal text-text-dark/90 text-body-sm md:text-body lg:text-body-md tracking-[0] leading-[27px]",
    contentClassName: "flex flex-col items-start text-left gap-2 w-full",
  },
  {
    id: "asset-handover",
    type: "image",
    title: "Asset Handover",
    description:
      "You send over your files, credentials, and anything I need to get started.",
    className:
      "lg:row-[2_/_4] lg:col-[4_/_7] h-full flex flex-col md:flex-row lg:flex-col items-center justify-center gap-6 p-6 bg-surface relative w-full rounded-2xl",
    imageAlt: "Asset component here",
    imageClassName: "relative flex items-center justify-center w-full",
    contentClassName: "flex flex-col items-start text-left gap-2 w-full",
  },
  {
    id: "scope-and-rates",
    type: "image",
    title: "Scope And Rates",
    description: "We align on deliverables and pricing before anything moves.",
    className:
      "lg:row-[1_/_3] lg:col-[7_/_10] h-full flex flex-col md:flex-row lg:flex-col items-center justify-center gap-6 p-6 bg-surface relative w-full rounded-2xl",
    imageAlt: "Scope component here",
    imageClassName: "relative flex items-center justify-center w-full",
    contentClassName: "flex flex-col items-start text-left gap-2 w-full",
  },
  {
    id: "speed-and-quality",
    type: "image",
    title: "Speed and Quality",
    description:
      "I work and keep you in the loop progress, milestones, blockers. No radio silence.",
    className:
      "relative lg:row-[3_/_4] lg:col-[7_/_13] w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-surface relative rounded-2xl",
    imageAlt: "Speed and quality",
    imageClassName: "relative flex items-center justify-center w-[307px]",
    contentClassName: "flex flex-col items-start text-left gap-2 max-w-[283px]",
  },
  {
    id: "clear-process",
    type: "text",
    title: "A Clear Process",
    description:
      "Everything delivered cleanly files, credentials, whatever you need to move forward.",
    className:
      "lg:row-[2_/_3] lg:col-[10_/_13] h-full flex flex-col items-center justify-center p-6 bg-surface relative w-full rounded-2xl",
    contentClassName: "flex flex-col items-start text-left gap-2 w-full",
  },
];

const defaultDarkTitleClassName =
  "relative flex items-center justify-start text-left self-stretch mt-[-1.00px] font-sans font-semibold text-white text-h5 tracking-[0] leading-[26.4px]";

const defaultDarkDescriptionClassName =
  "relative flex items-center justify-start text-left self-stretch mt-[-1.00px] font-sans font-normal text-white/90 text-body-sm md:text-body lg:text-body-md tracking-[0] leading-[27px]";

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");

      cards.forEach((card) => {
        const content = card.querySelector(".process-card-content");

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
    <section
      ref={containerRef}
      aria-labelledby="process-heading"
      className="relative flex flex-col items-start py-24"
    >
      {/* Background layer using local design theme bg */}
      <div className="absolute inset-0 z-0 bg-rhino-darkest" />

      <div className="relative z-10 flex w-full max-w-[1344px] flex-col gap-12">
        <SectionHeading
          id="process-heading"
          title="STRAIGHTFORWARD FROM START TO FINISH."
          className="w-full max-w-[979px]"
        />

        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-3 lg:h-[754.67px] gap-4 w-full">
          {cards.map((card) => {
            if (card.id === "discovery-call" && card.type === "image") {
              return (
                <article key={card.id} id={card.id} className={`${card.className} process-card`}>
                  <div className={card.imageClassName}>
                    <DiscoveryComponent />
                  </div>
                  <div className={`${card.contentClassName} process-card-content`}>
                    <h3 className={card.titleClassName || defaultDarkTitleClassName}>
                      {card.title}
                    </h3>
                    <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                      {card.description}
                    </p>
                  </div>
                </article>
              );
            }

            if (card.id === "asset-handover" && card.type === "image") {
              return (
                <article key={card.id} id={card.id} className={`${card.className} process-card`}>
                  <div className={card.imageClassName}>
                    <AssetComponent />
                  </div>
                  <div className={`${card.contentClassName} process-card-content`}>
                    <h3 className={card.titleClassName || defaultDarkTitleClassName}>
                      {card.title}
                    </h3>
                    <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                      {card.description}
                    </p>
                  </div>
                </article>
              );
            }

            if (card.id === "scope-and-rates" && card.type === "image") {
              return (
                <article key={card.id} id={card.id} className={`${card.className} process-card`}>
                  <div className={`${card.contentClassName} process-card-content`}>
                    <h3 className={card.titleClassName || defaultDarkTitleClassName}>
                      {card.title}
                    </h3>
                    <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                      {card.description}
                    </p>
                  </div>
                  <div className={card.imageClassName}>
                    <ScopeComponent />
                  </div>
                </article>
              );
            }

            if (card.id === "speed-and-quality" && card.type === "image") {
              return (
                <article key={card.id} id={card.id} className={`${card.className} process-card`}>
                  <div className={`${card.contentClassName} process-card-content`}>
                    <h3 className={card.titleClassName || defaultDarkTitleClassName}>
                      {card.title}
                    </h3>
                    <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                      {card.description}
                    </p>
                  </div>
                  <div className={card.imageClassName}>
                    <Image
                      src="/images/components/speed_and_quality.svg"
                      alt={card.imageAlt}
                      width={307}
                      height={150}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                </article>
              );
            }

            return (
              <article key={card.id} id={card.id} className={`${card.className} process-card`}>
                <div className={`${card.contentClassName} process-card-content`}>
                  <h3 className={card.titleClassName || defaultDarkTitleClassName}>
                    {card.title}
                  </h3>
                  {card.id === "quality-always" ? (
                    <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                      From pixel-perfect design to
                      <br />
                      clean development, I make sure you get the highest standards.
                    </p>
                  ) : (
                    <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                      {card.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}

          {/* Book a strategy call CTA */}
          <AButtonSecondary
            href="/get-started"
            label="Book a discovery call"
            className="hidden lg:inline-flex lg:row-[1_/_2] lg:col-[10_/_13] lg:self-end lg:justify-self-end w-fit h-[53px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
