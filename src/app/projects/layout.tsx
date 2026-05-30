import type { Metadata } from "next";
import PageSchemas from "@/components/seo/PageSchemas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/seo-config";

const page = pageSeo.projects;

export const metadata: Metadata = buildPageMetadata({ page });

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content">
      <PageSchemas page={page} />
      <h1 className="sr-only">Projects — React, Next.js & MERN Portfolio</h1>
      {children}
    </main>
  );
}
