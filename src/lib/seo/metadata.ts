import type { Metadata } from "next";
import { defaultSeo, siteConfig, type PageSeoEntry } from "./seo-config";

function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export interface BuildPageMetadataOptions {
  page: PageSeoEntry;
  /** Additional path segments for dynamic routes (future use). */
  pathSuffix?: string;
}

/**
 * Builds Next.js Metadata for a route with canonical, Open Graph, and Twitter tags.
 */
export function buildPageMetadata({
  page,
  pathSuffix = "",
}: BuildPageMetadataOptions): Metadata {
  const pathname = `${page.path}${pathSuffix}`.replace(/\/+/g, "/") || "/";
  const canonicalUrl = absoluteUrl(pathname);
  const title = page.title;
  const description = page.description;

  return {
    title: { absolute: title },
    description,
    keywords: [...defaultSeo.keywords],
    authors: [{ name: defaultSeo.author }],
    creator: defaultSeo.creator,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      title,
      description,
      siteName: defaultSeo.ogSiteName,
      images: [
        {
          url: defaultSeo.ogImage,
          width: 1200,
          height: 630,
          alt: `${defaultSeo.creator} — Full Stack Developer portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultSeo.ogImage],
      creator: defaultSeo.twitterHandle,
    },
  };
}

/** Root layout metadata (metadataBase + default home page). */
export function buildRootMetadata(): Metadata {
  const home = buildPageMetadata({
    page: {
      path: "/",
      title: defaultSeo.title,
      description: defaultSeo.description,
      breadcrumbLabel: "Home",
      changeFrequency: "weekly",
      priority: 1,
    },
  });

  return {
    metadataBase: new URL(siteConfig.url),
    ...home,
    title: {
      default: defaultSeo.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    applicationName: siteConfig.name,
    category: "technology",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      title: siteConfig.shortName,
      statusBarStyle: "black-translucent",
    },
    other: {
      "mobile-web-app-capable": "yes",
    },
  };
}

export { absoluteUrl };
