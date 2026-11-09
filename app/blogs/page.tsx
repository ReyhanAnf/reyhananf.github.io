import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogsWrapper from "../components/pack/blogs_wrapper";

export default function Page() {
  return (
    <main className="page-shell py-12 sm:py-20">
      <Link href="/" className="mb-10 inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"><ArrowLeft size={14} aria-hidden="true" /> Back to portfolio</Link>
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-4">Notes from the process</p>
        <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Writing<span className="text-primary">.</span></h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">Thoughts, things I’ve learned, and notes on technology.</p>
      </div>
      <BlogsWrapper />
    </main>
  )
}
