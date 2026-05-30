import type { MetadataRoute } from "next";
import { defaultSeo, siteConfig } from "@/lib/seo/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: defaultSeo.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    orientation: "portrait-primary",
    lang: "en",
    categories: ["portfolio", "technology", "business"],
    icons: [
      {
        src: defaultSeo.ogImage,
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
