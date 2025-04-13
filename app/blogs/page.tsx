'use client'

import BlogsWrapper from "../components/pack/blogs_wrapper"

export default function Page() {
  return (
    <main className="bg-grad px-5 md:px-32 py-5 max-w-full" overflow-x-hidden overflow-y-hidden>
      <div className="flex fixed flex-row items-center justify-between w-full z-50 ">
        <h1 className="text-2xl font-bold px-5 bg-emerald-950 py-2 bg-opacity-15 rounded-md backdrop-blur-lg ">
          <span>{"<"}</span>ReyhanAnf<span>{"/>"}</span>
        </h1>
      </div>
      <div className="mt-10">
      <BlogsWrapper />
      </div>
    </main>
  )
}
