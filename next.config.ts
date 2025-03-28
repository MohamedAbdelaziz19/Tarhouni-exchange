import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
    
    // Autres fonctionnalités expérimentales
    serverActions: {
      bodySizeLimit: '100mb', // Autorise jusqu'à 100 Mo
    },
  },
};

export default nextConfig;
