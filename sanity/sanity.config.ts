import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { caseStudy } from "./schema/caseStudy";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ruboxzxa";
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "portfolio",
  title: "Portfolio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [caseStudy],
  },
});
