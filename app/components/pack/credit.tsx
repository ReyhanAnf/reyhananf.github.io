import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Credit() {
  return (
    <footer className="border-t border-border">
      <div className="page-shell flex flex-col justify-between gap-5 py-7 text-[11px] text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Reyhan Andrea Firdaus</p>
        <div className="flex flex-wrap items-center gap-6">
          <a href="/blogs" className="inline-flex min-h-8 items-center gap-1 transition-colors hover:text-foreground">Writing <ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href="/Reyhan%20Andrea%20Firdaus.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1 transition-colors hover:text-foreground">View résumé <ArrowUpRight size={12} aria-hidden="true" /><span className="sr-only"> (PDF, opens in new tab)</span></a>
          <a href="#main-content" className="inline-flex min-h-8 items-center gap-1.5 transition-colors hover:text-foreground">Back to top <ArrowUp size={12} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
