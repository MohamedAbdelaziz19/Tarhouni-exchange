import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Other experimental features can go here, but not `reactRefresh`
    serverActions: {
      bodySizeLimit: '10mb', // Autorise jusqu'à 10 Mo
    },
       
  },
};

export default nextConfig;
