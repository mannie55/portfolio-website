"use client";

import Image from "next/image";
import React, { useId, useState } from "react";
import Lottie from "lottie-react";
import workflowLottie from "@/public/animations/workflow_lottie.json";

/**
 * AssetComponent - Displays a searchable asset library preview.
 * 
 * DESIGN CONSTRAINTS:
 * - Width: 274px (17.125rem)
 * - Height: 260px (16.25rem)
 * - Semantic Tag: <article>
 * - Search Bar Width: Max 200px (12.5rem)
 * - Rows: 2 marquee rows
 */

const SEARCH_BG = "#" + "516ca71a";
const BUTTON_BG = "#" + "516ca7";
const TEXT_COLOR = "#" + "293550";
const PLACEHOLDER_COLOR = "#" + "516ca7";

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

const MarqueeRow = ({ 
  items, 
  direction = "left" 
}: { 
  items: AssetItem[], 
  direction?: "left" | "right" 
}) => {
  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";
  
  return (
    <div className="flex overflow-hidden">
      <div 
        className={`flex w-max will-change-transform ${animationClass}`}
        style={{ "--duration": ANIMATION_DURATION } as React.CSSProperties}
      >
        {/* First Set */}
        <div className="flex gap-2 pr-2">
          {items.map((item, index) => (
            <AssetCard key={`${item.id}-${index}-1`} item={item} />
          ))}
        </div>
        {/* Second Set (Duplicate for seamless loop) */}
        <div className="flex gap-2 pr-2">
          {items.map((item, index) => (
            <AssetCard key={`${item.id}-${index}-2`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const AssetComponent = () => {
  const inputId = useId();
  const [value, setValue] = useState("");

  return (
    <article 
      className="mx-auto h-[16.25rem] w-[17.125rem] overflow-hidden rounded-[1.25rem] bg-blueLight py-4 shadow-sm"
      aria-label="Asset component"
    >
      {/* Search Bar */}
      <form
        role="search"
        style={{ backgroundColor: SEARCH_BG }}
        className="relative mx-auto mb-6 flex h-[1.25rem] w-[12.5rem] items-center rounded-[0.625rem]"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          Search
        </label>
        <button
          type="submit"
          aria-label="Submit search"
          style={{ backgroundColor: BUTTON_BG }}
          className="flex h-full w-[1.875rem] shrink-0 items-center justify-center rounded-l-[0.625rem]"
        >
          <Image
            src="/images/components/search_icon.svg"
            alt=""
            aria-hidden="true"
            width={10}
            height={10}
            className="h-[0.625rem] w-[0.625rem]"
          />
        </button>
        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search assets..."
          style={{ 
            color: TEXT_COLOR,
            ["--placeholder-color" as any]: PLACEHOLDER_COLOR 
          }}
          className="h-full w-[10.625rem] rounded-r-[0.625rem] bg-transparent px-2 text-[0.625rem] leading-none outline-none [&&::placeholder]:text-[--placeholder-color]"
        />
      </form>

      {/* Animated Rows */}
      <div className="flex flex-col gap-3">
        <MarqueeRow items={assetItems} direction="left" />
        <MarqueeRow items={assetItems} direction="right" />
      </div>
    </article>
  );
};

export default AssetComponent;
