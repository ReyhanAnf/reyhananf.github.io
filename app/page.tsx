// app/page.tsx
'use client'

import About from "./components/pack/about"
import Header from "./components/pack/header"
import Product from "./components/pack/product"
import Project from "./components/pack/project"
import Skill from "./components/pack/skill"
import { FloatingDockMenu } from "./components/ui/floating-dock-menu"

export default function Home() {

  return (
  <main className="bg-grad px-5 md:px-32 py-5 max-w-full" overflow-x-hidden overflow-y-hidden>
    <div className="flex fixed flex-row items-center justify-between w-full z-50">
      <h1 className="text-2xl font-bold px-5 bg-emerald-950 py-2 bg-opacity-15 rounded-md backdrop-blur-lg ">
        <span>{"<"}</span>ReyhanAnf<span>{"/>"}</span>
      </h1>
      <FloatingDockMenu />
    </div>
    <Header />
    <About />
    <Project />
    <Product />
    <Skill />
  </main>
  )
}
