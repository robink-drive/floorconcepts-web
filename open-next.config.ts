import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// `npm run build` runs OpenNext, which must invoke Next via a different script name
// to avoid infinite recursion (OpenNext shells `npm run build` by default).
export default {
  ...defineCloudflareConfig({}),
  buildCommand: "npm run build:next",
};
