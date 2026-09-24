import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern, smaller formats — big win over the original PNG/JPG.
    formats: ["image/avif", "image/webp"],
    // Once an image is optimized, keep it cached at the edge for 31 days so
    // repeat/first-of-day visitors get it instantly instead of re-optimizing.
    minimumCacheTTL: 60 * 60 * 24 * 31,
    // Quality levels we actually request from next/image.
    qualities: [75, 82],
  },
};

export default nextConfig;
