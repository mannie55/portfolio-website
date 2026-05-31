import type { MetadataRoute } from "next";

import { getCaseStudySlugs } from "@/lib/case-studies";
import { siteConfig } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const slugs = await getCaseStudySlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/case-studies",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
