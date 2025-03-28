import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tarhouni-exchange.com/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://www.tarhouni-exchange.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.tarhouni-exchange.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Ajoute d'autres URLs si nécessaire
  ];
}
