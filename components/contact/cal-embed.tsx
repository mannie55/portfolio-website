"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

import { calComUrl } from "@/lib/constants";
import { colorSemantic } from "@/lib/design-tokens";

function getCalLink(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    return pathname.startsWith("/") ? pathname.slice(1) : pathname;
  } catch {
    return url.replace(/^https?:\/\/cal\.com\//, "");
  }
}

export function CalEmbed() {
  const calLink = getCalLink(calComUrl);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    void (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: colorSemantic.accent } },
      });
    })();
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[700px] rounded-[20px] bg-surface-elevated animate-pulse" />
    );
  }

  return (
    <div
      className="min-h-[700px] overflow-hidden rounded-[20px]"
      style={{ colorScheme: "dark" }}
    >
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "700px" }}
        config={{
          layout: "month_view",
          theme: "dark",
          // @ts-expect-error - Cal.com types are outdated
          styles: { branding: { brandColor: colorSemantic.accent } },
        }}
      />
    </div>
  );
}
