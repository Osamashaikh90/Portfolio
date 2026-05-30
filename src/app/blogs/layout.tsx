import type { Metadata } from "next";
import PageSchemas from "@/components/seo/PageSchemas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/seo-config";

const page = pageSeo.blogs;

export const metadata: Metadata = buildPageMetadata({ page });

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content">
      <PageSchemas page={page} />
      {children}
    </main>
  );
}
