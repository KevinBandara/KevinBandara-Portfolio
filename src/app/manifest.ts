import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kevin Bandara — Full-Stack Software Developer, AI Systems Builder & Founder of Corvento Technologies",
    short_name: "Kevin Bandara",
    description:
      "Official portfolio of Kevin Bandara — Full-Stack Software Developer, AI Systems Builder, Creative Designer, and Founder of Corvento Technologies in Colombo, Sri Lanka.",
    start_url: "/",
    display: "standalone",
    background_color: "#06070B",
    theme_color: "#38BDF8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/KevinPortrait.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
