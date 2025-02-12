import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jaipur.manipal.edu",
        pathname: "/img/dsw/event/**", 
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "jaipurliteraturefestival.org", 
      },
    ],
  },
};

export default nextConfig;