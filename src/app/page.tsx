import PageSchemas from "@/components/seo/PageSchemas";
import { pageSeo } from "@/lib/seo/seo-config";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <>
      <PageSchemas page={pageSeo.home} />
      <HomePage />
    </>
  );
}
