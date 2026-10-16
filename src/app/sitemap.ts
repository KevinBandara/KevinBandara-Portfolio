import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kevinbandara.is-a.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/KevinPortrait.jpg`,
        `${baseUrl}/MyPic.png`,
        `${baseUrl}/CorventoTechLogo.jpg`,
        `${baseUrl}/DanumaAI.jpg`,
      ],
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
