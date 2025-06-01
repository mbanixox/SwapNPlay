import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io', 
      },
      {
        protocol: 'https',
        // Change this to your own Pinata gateway hostname if needed
        hostname: 'jade-brilliant-gecko-232.mypinata.cloud', 
      },
    ],
  },
};

export default nextConfig;
