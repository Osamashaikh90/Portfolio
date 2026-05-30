import JsonLd from "@/components/seo/JsonLd";
import { buildPersonSchema, buildWebSiteSchema } from "@/lib/seo/schema";

/** Person + WebSite JSON-LD injected once on every page. */
export default function GlobalSchemas() {
  return <JsonLd data={[buildPersonSchema(), buildWebSiteSchema()]} />;
}
