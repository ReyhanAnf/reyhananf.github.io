import type { BlogPost } from "./types";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Blogs({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="max-w-3xl rounded-xl border border-border bg-card p-7 sm:p-10">
        <BookOpen size={24} className="mb-5 text-muted-foreground" aria-hidden="true" />
        <h2 className="text-lg font-semibold tracking-tight">More notes on the blog</h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">The article feed is unavailable right now. You can still read my posts directly on the blog.</p>
        <a href="https://reyntech.blogspot.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">Visit the blog <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in new tab)</span></a>
      </div>
    );
  }

  return (
    <div className="max-w-3xl divide-y divide-border border-y border-border">
      {posts.map((post, index) => (
        <article key={post.id}>
          <a href={post.link || `/blog/${post.id}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-md py-7 sm:gap-6">
            <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            <div className="min-w-0 flex-grow">
              <p className="eyebrow mb-2">Technical notes</p>
              <h2 className="text-base font-medium leading-relaxed tracking-tight transition-colors group-hover:text-primary sm:text-lg">{post.title}</h2>
            </div>
            <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </article>
      ))}
    </div>
  );
}
