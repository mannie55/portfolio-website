"use client";

import dynamic from "next/dynamic";

export const CalEmbedDynamic = dynamic(
  () => import("./cal-embed").then((mod) => mod.CalEmbed),
  {
    ssr: false,
    loading: () => (
      <div
        role="status"
        aria-label="Loading scheduling calendar"
        className="min-h-[700px] rounded-[20px] bg-surface-elevated animate-pulse"
      />
    ),
  }
);
