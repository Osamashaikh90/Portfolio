"use client";

import Hero from "./components/Hero";
import dynamic from "next/dynamic";

const DynamicTitleComponent = dynamic(
  () => import("./components/DynamicTitleComponent"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <DynamicTitleComponent />
    </main>
  );
}
