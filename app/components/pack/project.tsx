import { PROJECT } from "@/lib/vars";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Project() {
  return (
    <div className="grid gap-x-7 gap-y-10 md:grid-cols-2 md:gap-y-12">
      {PROJECT.map((project, index) => {
        const featured = index === 0;
        const hostname = new URL(project.link).hostname;
        return (
          <article key={project.title} className={cn("group relative min-w-0", featured && "md:col-span-2")}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title} (opens in new tab)`} className={cn("project-card block rounded-xl", featured && "overflow-hidden border border-border bg-card md:grid md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center")}>
              <div className={cn("overflow-hidden rounded-xl border border-border bg-secondary/60 p-4 sm:p-6", featured && "rounded-b-none border-0 bg-secondary/40 dark:bg-secondary/20 md:rounded-none md:p-8")}>
                <div className="overflow-hidden rounded-lg border border-border/80 bg-background shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                  <div className={cn("relative aspect-[16/10] overflow-hidden", featured && "md:aspect-[4/3]")}>
                    <Image src={project.image} alt={`${project.title} application preview`} fill sizes={featured ? "(max-width: 767px) 100vw, 640px" : "(max-width: 767px) 100vw, 540px"} className="object-cover object-top" />
                  </div>
                </div>
              </div>
              <div className={cn("pt-5", featured && "p-6 sm:p-8 lg:p-10")}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="eyebrow text-[10px]">{featured ? "Featured project" : "Full-stack development"}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted-foreground">{hostname}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className={cn("text-xl font-semibold leading-snug tracking-[-0.035em] transition-colors group-hover:text-primary", featured && "sm:text-3xl")}>{project.title}</h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight size={16} aria-hidden="true" /></span>
                </div>
                <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{project.description}</p>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => <li key={tech.name} className="rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground">{tech.name}</li>)}
                </ul>
                {featured && <span className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-primary">Explore project <ArrowUpRight size={14} aria-hidden="true" /></span>}
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
}
