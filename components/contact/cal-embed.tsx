"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import { calComUrl } from "@/lib/constants";

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

  useEffect(() => {
    void (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#D4AF37" } },
      });
    })();
  }, []);

  return (
    <div className="min-h-[500px] overflow-hidden rounded-lg border border-border">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "500px" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
