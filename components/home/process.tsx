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
};

type ImageCard = CardBase & {
  type: "image";
  imageAlt: string;
  imageClassName: string;
  contentClassName?: string;
  contentWrapClassName?: string;
};

type TextCard = CardBase & {
  type: "text";
  contentClassName?: string;
};

const cards: Array<ImageCard | TextCard> = [
  {
    id: "discovery-call",
    type: "image",
    title: "Discovery Call",
    description:
      "We talk through your project, what you have, and what done looks like.",
    className:
      "relative row-[1_/_2] col-[1_/_7] w-full h-[240.89px] flex items-center justify-between p-6 bg-surface-primary rounded-2xl",
    imageAlt: "Discovery component",
    imageClassName:
      "relative flex-1 max-w-[664px] grow mt-[-4.60px] mb-[-4.60px] aspect-[1.61]",
    contentClassName: "relative w-[291px] h-[101.77px]",
  },
  {
    id: "quality-always",
    type: "text",
    title: "Quality always",
    description:
      "From pixel-perfect design to clean development, I make sure you get the highest standards.",
    className:
      "row-[2_/_3] col-[1_/_4] h-fit flex-col items-start pt-[50.47px] pb-[48.55px] px-6 bg-white border border-solid border-border-lighter relative w-full flex rounded-2xl",
    titleClassName:
      "relative flex items-center self-stretch mt-[-1.00px] font-sans font-semibold text-rhino text-h5 tracking-[0] leading-[26.4px]",
    descriptionClassName:
      "relative self-stretch mt-[-1.00px] font-sans font-normal text-rhino text-body-md tracking-[0] leading-[27px]",
  },
  {
    id: "asset-handover",
    type: "image",
    title: "Asset Handover",
    description:
      "You send over your files, credentials, and anything I need to get started.",
    className:
      "row-[2_/_4] col-[4_/_7] h-fit flex-col items-start gap-[49.61px] pt-[51.09px] pb-[44.58px] px-6 bg-surface-primary relative w-full flex rounded-2xl",
    imageAlt: "Asset component here",
    imageClassName: "relative self-stretch w-full flex-[0_0_auto]",
  },
  {
    id: "scope-and-rates",
    type: "image",
    title: "Scope And Rates",
    description: "We align on deliverables and pricing before anything moves.",
    className:
      "row-[1_/_3] col-[7_/_10] h-fit flex-col items-start justify-between pb-[2.27e-13px] pt-[19.4px] px-6 bg-surface-primary relative w-full flex rounded-2xl",
    imageAlt: "Scope component here",
    imageClassName: "relative w-[274px] flex-[0_0_auto]",
    contentWrapClassName:
      "flex flex-col items-start gap-[4.88px] pt-0 pb-[25.49px] px-0 relative self-stretch w-full flex-[0_0_auto]",
  },
  {
    id: "speed-and-quality",
    type: "image",
    title: "Speed and Quality",
    description:
      "I work and keep you in the loop progress, milestones, blockers. No radio silence.",
    className:
      "row-[3_/_4] col-[7_/_13] h-[240.89px] items-center justify-between p-6 bg-surface-primary relative w-full flex rounded-2xl",
    imageAlt: "Speed and quality",
    imageClassName: "relative max-w-[664px] w-[307px]",
    contentClassName: "relative w-[283px] h-[128.77px]",
  },
  {
    id: "clear-process",
    type: "text",
    title: "A Clear Process",
    description:
      "Everything delivered cleanly files, credentials, whatever you need to move forward.",
    className:
      "row-[2_/_3] col-[10_/_13] h-fit flex-col items-start pt-[63.97px] pb-[62.05px] px-6 bg-surface-primary relative w-full flex rounded-2xl",
  },
];

const defaultDarkTitleClassName =
  "relative flex items-center self-stretch mt-[-1.00px] font-sans font-semibold text-white text-h5 tracking-[0] leading-[26.4px]";

const defaultDarkDescriptionClassName =
  "relative flex items-center self-stretch mt-[-1.00px] font-sans font-normal text-white/90 text-body-md tracking-[0] leading-[27px]";

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
                <article key={card.id} className={card.className}>
                  <div className={card.imageClassName}>
                    <DiscoveryComponent />
                  </div>
                  <div className={card.contentClassName}>
                    <div className="flex flex-col w-full items-start justify-center absolute top-[-5px] left-0">
                      <h3 className={card.titleClassName || defaultDarkTitleClassName}>
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex flex-col w-full items-start justify-center absolute top-[27px] left-0">
                      <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            }

            if (card.id === "asset-handover" && card.type === "image") {
              return (
                <article key={card.id} className={card.className}>
                  <div className={card.imageClassName}>
                    <AssetComponent />
                  </div>
                  <div className="flex flex-col items-start gap-[4.87px] relative self-stretch w-full flex-[0_0_auto]">
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
                <article key={card.id} className={card.className}>
                  <div className={card.contentWrapClassName}>
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
                <article key={card.id} className={card.className}>
                  <div className={card.contentClassName}>
                    <div className="flex flex-col w-full items-start justify-center absolute top-[-5px] left-0">
                      <h3 className={card.titleClassName || defaultDarkTitleClassName}>
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex flex-col w-full items-start justify-center absolute top-[27px] left-0">
                      <p className={card.descriptionClassName || defaultDarkDescriptionClassName}>
                        {card.description}
                      </p>
                    </div>
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
              <article key={card.id} className={card.className}>
                <div className="flex flex-col items-start gap-[4.87px] relative self-stretch w-full flex-[0_0_auto]">
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
