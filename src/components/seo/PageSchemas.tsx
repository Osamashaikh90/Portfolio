import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbsForPage, buildBreadcrumbSchema } from "@/lib/seo/schema";
import type { PageSeoEntry } from "@/lib/seo/seo-config";

interface PageSchemasProps {
  page: PageSeoEntry;
}

/** Page-specific BreadcrumbList JSON-LD. */
export default function PageSchemas({ page }: PageSchemasProps) {
  return <JsonLd data={buildBreadcrumbSchema(breadcrumbsForPage(page))} />;
}
