"use client";

import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import workflowLottie from "@/public/animations/workflow_lottie.json";

// Animation speed in seconds for a full cycle
const ANIMATION_DURATION = "30s";

type AssetItem = {
  id: string;
  label: string;
  type: "image" | "lottie";
  src?: string;
  animationData?: any;
  alt: string;
};

const assetItems: AssetItem[] = [
  {
    id: "workflow-1",
    label: "Workflows",
    type: "lottie",
    animationData: workflowLottie,
    alt: "Workflow animation",
  },
  {
    id: "logo-1",
    label: "Brand Logo",
    type: "image",
    src: "/images/components/brand_logo.png",
    alt: "Brand logo",
  },
  {
    id: "image-1",
    label: "Images",
    type: "image",
    src: "/images/components/brand_image.png",
    alt: "Brand image",
  },
  {
    id: "video-1",
    label: "Videos",
    type: "image",
    src: "/images/components/brand_video_image.png",
    alt: "Video preview",
  },
  {
    id: "color-1",
    label: "Colors",
    type: "image",
    src: "/images/components/brand_color_pallete.png",
    alt: "Color palette",
  },
];

// Duplicate rows to create a seamless infinite scroll
const row1Items = [...assetItems, ...assetItems, ...assetItems];
const row2Items = [...assetItems, ...assetItems, ...assetItems];

function AssetCard({ item }: { item: AssetItem }) {
  return (
    <article className="flex h-[4.3125rem] w-[5.625rem] flex-shrink-0 flex-col gap-px">
      <div className="relative h-[3.5625rem] w-full overflow-hidden rounded-t-[0.625rem] bg-white">
        {item.type === "lottie" ? (
          <div className="flex h-full w-full items-center justify-center bg-slate-50">
            <Lottie
              animationData={item.animationData}
              loop={true}
              autoplay={true}
              className="h-full w-full"
            />
          </div>
        ) : (
          item.src && (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />
          )
        )}
      </div>

      <div className="relative flex h-[0.6875rem] w-full flex-col items-start justify-center bg-white px-[0.625rem] py-0 rounded-b-[0.625rem]">
        <p className="w-fit whitespace-nowrap text-[0.375rem] leading-[0.625rem] text-black">
          {item.label}
        </p>
      </div>
    </article>
  );
}

export const AssetComponent = () => {
  return (
    <section className="mx-auto h-[16.25rem] w-[17.125rem] overflow-hidden rounded-[1.25rem] bg-[#e2e7f2] py-4 shadow-sm">
      {/* Search Bar */}
      <div className="relative mx-auto mb-6 flex h-8 w-[13.75rem] overflow-hidden rounded-[0.5rem] bg-white shadow-sm">
        <div className="flex w-8 items-center justify-center bg-[#516ca7]">
          <Image
            src="/images/components/search_icon.svg"
            alt="Search"
            width={12}
            height={12}
            className="h-3 w-3"
          />
        </div>
        <input
          type="search"
          placeholder="Search assets..."
          className="flex-1 px-3 text-[0.75rem] outline-none placeholder:text-slate-400"
          readOnly
        />
      </div>

      {/* Animated Rows */}
      <div className="flex flex-col gap-3">
        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden">
          <div
            className="flex animate-marquee gap-2 px-1"
            style={{ "--duration": ANIMATION_DURATION } as React.CSSProperties}
          >
            {row1Items.map((item, index) => (
              <AssetCard
                key={`${item.id}-r1-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex overflow-hidden">
          <div
            className="flex animate-marquee-reverse gap-2 px-1"
            style={{ "--duration": ANIMATION_DURATION } as React.CSSProperties}
          >
            {row2Items.map((item, index) => (
              <AssetCard
                key={`${item.id}-r2-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetComponent;
