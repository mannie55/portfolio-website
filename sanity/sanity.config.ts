import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { caseStudy } from "./schema/caseStudy";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

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
