import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  basePath: "/indabax-sudan-hackathon",
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb"
    }
  }
};

export default nextConfig;
