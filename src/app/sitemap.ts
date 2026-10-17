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
        `${baseUrl}/og-landscape.jpg`,
        `${baseUrl}/KevinPortrait.jpg`,
        `${baseUrl}/MyPic-opt.jpg`,
        `${baseUrl}/CorventoTechLogo.jpg`,
        `${baseUrl}/AsteroidTechLogo.jpg`,
        `${baseUrl}/MAOS-OfficeLogo.jpg`,
        `${baseUrl}/DanumaAI.jpg`,
      ],
    },
    {
      url: `${baseUrl}/Kevin-Bandara-Resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
