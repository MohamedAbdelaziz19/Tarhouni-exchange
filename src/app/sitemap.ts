import { MetadataRoute } from "next";
export const dynamic = "force-static"; // Force la génération statique

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.tarhouni-exchange.com/", lastModified: new Date().toISOString() },
    { url: "https://www.tarhouni-exchange.com/about", lastModified: new Date().toISOString() },
    { url: "https://www.tarhouni-exchange.com/contact", lastModified: new Date().toISOString() },
    { url: "https://www.tarhouni-exchange.com/services", lastModified: new Date().toISOString() },
    { url: "https://www.tarhouni-exchange.com/currency", lastModified: new Date().toISOString() },
  ];
}
