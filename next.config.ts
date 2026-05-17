import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/coming-soon",
        destination: "/",
        permanent: false,
      },
      {
        source: "/our-approach",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/flooring/:slug",
        destination: "/flooring-options/:slug",
        permanent: true,
      },
      {
        source: "/flooring-options/lvt",
        destination: "/flooring-options/luxury-vinyl-tile",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
