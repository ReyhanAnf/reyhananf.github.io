import { ArrowDown, ArrowUpRight } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Header() {
  return (
    <div id="home" className="pb-12 pt-16 sm:pb-16 sm:pt-24 lg:pt-28">
      <div className="mb-8 flex items-center gap-2.5 sm:mb-10">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
        <p className="eyebrow">Software engineer · Indonesia</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
        <h1 className="min-w-0 [overflow-wrap:anywhere] text-[clamp(2.25rem,10.8vw,2.75rem)] font-semibold leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-[clamp(3.75rem,6.2vw,5rem)]">
          Reyhan Andrea<br />Firdaus<span className="text-primary">.</span>
        </h1>
        <div className="min-w-0 lg:pb-1">
          <h2 className="mb-4 text-xl font-medium leading-snug tracking-tight sm:text-2xl [overflow-wrap:anywhere]">Thoughtful code.<br />Useful experiences.</h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-[15px]">
            I build web applications that make everyday work simpler. From a clean interface to the systems behind it, I care about making things work well.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href="#projects" className="action-button whitespace-nowrap bg-foreground text-background hover:bg-primary hover:text-primary-foreground">Explore my work <ArrowDown size={15} aria-hidden="true" /></a>
            <a href="mailto:andreafirdausr@gmail.com" className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap text-[13px] font-medium transition-colors hover:text-primary">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-5 border-t border-border pt-6 sm:mt-20 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
          <span className="text-muted-foreground">Working with</span>
          <span className="font-medium">Laravel</span><span className="font-medium">React</span><span className="font-medium">Next.js</span>
        </div>
        <div className="flex items-center gap-5 text-xs font-medium">
          <a href="https://github.com/reyhananf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"><IconBrandGithub size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" /><span className="sr-only"> (opens in new tab)</span></a>
          <a href="https://linkedin.com/in/reyhananf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"><IconBrandLinkedin size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" /><span className="sr-only"> (opens in new tab)</span></a>
        </div>
      </div>
    </div>
  );
}
