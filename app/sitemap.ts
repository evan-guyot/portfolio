import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://eguyot.dev/fr",
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: "https://eguyot.dev/fr",
          en: "https://eguyot.dev/en",
        },
      },
    },
    {
      url: "https://eguyot.dev/en",
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: "https://eguyot.dev/fr",
          en: "https://eguyot.dev/en",
        },
      },
    },
  ];
}
