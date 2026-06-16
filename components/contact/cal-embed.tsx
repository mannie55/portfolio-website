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
        styles: { branding: { brandColor: colorSemantic.accent } },
        cssVarsPerTheme: {
          dark: {
            "cal-brand": colorSemantic.accent,
            "cal-brand-color": colorSemantic.accent,
          },
          light: {
            "cal-brand": colorSemantic.accent,
            "cal-brand-color": colorSemantic.accent,
          },
        },
      });
    })();
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[700px] rounded-[20px] bg-surface-elevated animate-pulse" />
    );
  }

  return (
    <div className="min-h-[700px] overflow-hidden rounded-[20px]">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "700px" }}
        config={{
          layout: "month_view",
          // @ts-expect-error - Cal.com types are outdated
          styles: { branding: { brandColor: colorSemantic.accent } },
          // @ts-expect-error - Cal.com types are outdated
          cssVarsPerTheme: {
            dark: {
              "cal-brand": colorSemantic.accent,
              "cal-brand-color": colorSemantic.accent,
            },
            light: {
              "cal-brand": colorSemantic.accent,
              "cal-brand-color": colorSemantic.accent,
            },
          },
        }}
      />
    </div>
  );
}
