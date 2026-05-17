import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// `npm run build` runs OpenNext, which must invoke Next via a different script name
// to avoid infinite recursion (OpenNext shells `npm run build` by default).
const openNextConfig = {
  ...defineCloudflareConfig({
    // All routes are SSG — serve prerendered HTML from static assets to avoid
    // running the full Next.js server (and hitting Worker CPU limits) per request.
    incrementalCache: staticAssetsIncrementalCache,
    enableCacheInterception: true,
  }),
  buildCommand: "npm run build:next",
};

export default openNextConfig;
