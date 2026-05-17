import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// `npm run build` runs OpenNext, which must invoke Next via a different script name
// to avoid infinite recursion (OpenNext shells `npm run build` by default).
const openNextConfig = {
  ...defineCloudflareConfig({}),
  buildCommand: "npm run build:next",
};

export default openNextConfig;
