import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname:"th.bing.com",
          },
    ]
  }
};

export default nextConfig;
