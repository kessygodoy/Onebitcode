import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        hostname: 'images-assets.nasa.gov',
      },
    ]
  }
};

export default nextConfig;
