import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: "/opt/data/enkay-dev-portfolio",
  },
};

export default nextConfig;
