import { MetadataRoute } from "next";
export const dynamic = "force-static"; // Force la génération statique

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/",
      },
    ],
    sitemap: "https://www.tarhouni-exchange.com/sitemap.xml",
  };
}
