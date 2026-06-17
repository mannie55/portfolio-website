import { createClient } from "@sanity/client";

export const sanityConfigured = Boolean(
  (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ruboxzxa") &&
    (process.env.NEXT_PUBLIC_SANITY_DATASET || "production"),
);

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ruboxzxa",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});
