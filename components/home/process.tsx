"use client";

import Image from "next/image";
import { DiscoveryComponent } from "@/components/ui/discovery-component";
import { AssetComponent } from "@/components/ui/asset-component";
import { ScopeComponent } from "@/components/ui/scope-component";
import { Button } from "@/components/ui/button";

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
      "relative row-[1_/_2] col-[1_/_7] w-full h-full flex items-center justify-center gap-8 p-6 bg-surface rounded-2xl",
    imageAlt: "Discovery component",
    imageClassName: "relative flex items-center justify-center",
    contentClassName: "flex flex-col items-center text-center gap-2 max-w-[291px]",
  },
  {
    id: "quality-always",
    type: "text",
    title: "Quality always",
    description:
      "From pixel-perfect design to clean development, I make sure you get the highest standards.",
    className:
      "row-[2_/_3] col-[1_/_4] h-full flex flex-col items-center justify-center p-6 bg-white relative w-full rounded-2xl",
    titleClassName:
      "relative flex items-center justify-center text-center self-stretch mt-[-1.00px] font-sans font-semibold text-text-dark text-h5 tracking-[0] leading-[26.4px]",
    descriptionClassName:
      "relative flex items-center justify-center text-center self-stretch mt-[-1.00px] font-sans font-normal text-text-dark/90 text-body-md tracking-[0] leading-[27px]",
    contentClassName: "flex flex-col items-center text-center gap-2 w-full",
  },
  {
    id: "asset-handover",
    type: "image",
    title: "Asset Handover",
    description:
      "You send over your files, credentials, and anything I need to get started.",
    className:
      "row-[2_/_4] col-[4_/_7] h-full flex flex-col items-center justify-center gap-6 p-6 bg-surface relative w-full rounded-2xl",
    imageAlt: "Asset component here",
    imageClassName: "relative flex items-center justify-center w-full",
    contentClassName: "flex flex-col items-center text-center gap-2 w-full",
  },
  {
    id: "scope-and-rates",
    type: "image",
    title: "Scope And Rates",
    description: "We align on deliverables and pricing before anything moves.",
    className:
      "row-[1_/_3] col-[7_/_10] h-full flex flex-col items-center justify-center gap-6 p-6 bg-surface relative w-full rounded-2xl",
    imageAlt: "Scope component here",
    imageClassName: "relative flex items-center justify-center w-full",
    contentClassName: "flex flex-col items-center text-center gap-2 w-full",
  },
  {
    id: "speed-and-quality",
    type: "image",
    title: "Speed and Quality",
    description:
      "I work and keep you in the loop progress, milestones, blockers. No radio silence.",
    className:
      "row-[3_/_4] col-[7_/_13] w-full h-full flex items-center justify-center gap-8 p-6 bg-surface relative rounded-2xl",
    imageAlt: "Speed and quality",
    imageClassName: "relative flex items-center justify-center w-[307px]",
    contentClassName: "flex flex-col items-center text-center gap-2 max-w-[283px]",
  },
  {
    id: "clear-process",
    type: "text",
    title: "A Clear Process",
    description:
      "Everything delivered cleanly files, credentials, whatever you need to move forward.",
    className:
      "row-[2_/_3] col-[10_/_13] h-full flex flex-col items-center justify-center p-6 bg-surface relative w-full rounded-2xl",
    contentClassName: "flex flex-col items-center text-center gap-2 w-full",
  },
];

const defaultDarkTitleClassName =
  "relative flex items-center justify-center text-center self-stretch mt-[-1.00px] font-sans font-semibold text-white text-h5 tracking-[0] leading-[26.4px]";

const defaultDarkDescriptionClassName =
  "relative flex items-center justify-center text-center self-stretch mt-[-1.00px] font-sans font-normal text-white/90 text-body-md tracking-[0] leading-[27px]";

export const Process = () => {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative flex flex-col items-start py-28"
    >
      {/* Background layer using local design theme bg */}
      <div className="absolute inset-0 z-0 bg-rhino-darkest" />

      <div className="relative z-10 flex w-full max-w-[1344px] flex-col gap-[31.55px]">
        <header className="flex flex-col w-full max-w-[979px] items-start gap-[9.11px]">
          <div className="h-[18px]" aria-hidden="true" />
          <h2
            id="process-heading"
            className="font-heading text-h2 uppercase text-white leading-none tracking-[-0.60px] whitespace-nowrap"
          >
            Straightforward from start to finish.
          </h2>
        </header>

        <div className="grid grid-cols-12 grid-rows-3 h-[754.67px] gap-4 w-full">
          {cards.map((card) => {
            if (card.id === "discovery-call" && card.type === "image") {
              return (
                <article key={card.id} id={card.id} className={card.className}>
                  <div className={card.imageClassName}>
                    <DiscoveryComponent />
                  </div>
                  <div className={card.contentClassName}>
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
                <article key={card.id} id={card.id} className={card.className}>
                  <div className={card.imageClassName}>
                    <AssetComponent />
                  </div>
                  <div className={card.contentClassName}>
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
                <article key={card.id} id={card.id} className={card.className}>
                  <div className={card.contentClassName}>
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
                <article key={card.id} id={card.id} className={card.className}>
                  <div className={card.contentClassName}>
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
              <article key={card.id} id={card.id} className={card.className}>
                <div className={card.contentClassName}>
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
          <Button
            href="/get-started"
            className="row-[1_/_2] col-[10_/_13] self-end justify-self-end w-fit h-[53px] rounded-full font-medium"
          >
            Book a strategy call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
