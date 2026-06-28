import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  studioHost: 'nnamdiogbonna',
  deployment: {
    appId: 'lbdgw74wfbhf8c0xuhk4haj5',
  },
});
