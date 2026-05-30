import { absoluteUrl } from "./metadata";
import { personSchema, siteConfig, type PageSeoEntry } from "./seo-config";

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personSchema.name,
    jobTitle: personSchema.jobTitle,
    description: personSchema.description,
    url: siteConfig.url,
    image: personSchema.image,
    email: personSchema.email,
    sameAs: personSchema.sameAs,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    url: siteConfig.url,
    description: personSchema.description,
    publisher: {
      "@type": "Person",
      name: personSchema.name,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Breadcrumb trail from home to the current page. */
export function breadcrumbsForPage(page: PageSeoEntry): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: "Home", path: "/" }];
  if (page.path !== "/") {
    items.push({ name: page.breadcrumbLabel, path: page.path });
  }
  return items;
}

export type JsonLdObject = Record<string, unknown>;
