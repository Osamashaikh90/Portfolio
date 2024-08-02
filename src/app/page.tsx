"use client"
import {useRef,useEffect} from "react";
import Hero from "./components/Hero";
import dynamic from "next/dynamic";
export default function Home() {
  const DynamicTitleComponent = dynamic(()=>import("./components/DynamicTitleComponent"),{ssr:false});
  return (
    <main >
      <Hero />
      <DynamicTitleComponent />
    </main>
  )
}
