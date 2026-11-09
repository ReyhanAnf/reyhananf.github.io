import { EXPERIMENT } from "@/lib/vars";
import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";

export default function Experiment() {
  return (
    <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {EXPERIMENT.map((experiment) => {
        const demo = experiment.link !== "#";
        const source = experiment.source !== "#";
        const destination = demo ? experiment.link : source ? experiment.source : undefined;
        const preview = (
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-secondary">
            <Image src={experiment.image} alt={`${experiment.title} preview`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" />
            {destination && <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/95 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background"><ArrowUpRight size={15} aria-hidden="true" /></span>}
          </div>
        );
        return (
          <article key={experiment.title} className="group flex min-w-0 flex-col">
            {destination ? <a href={destination} target="_blank" rel="noopener noreferrer" aria-label={`${demo ? "Open" : "View source for"} ${experiment.title} (opens in new tab)`} className="block rounded-lg">{preview}</a> : preview}
            <div className="mt-4 flex items-center justify-between gap-2">
              <h3 className="text-[15px] font-semibold tracking-tight">{destination ? <a href={destination} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">{experiment.title}<span className="sr-only"> (opens in new tab)</span></a> : experiment.title}</h3>
              {source && <a href={experiment.source} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${experiment.title} (opens in new tab)`} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"><Code2 size={16} aria-hidden="true" /></a>}
            </div>
            <p className="mt-2 flex-grow text-xs leading-6 text-muted-foreground">{experiment.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium text-muted-foreground">
              {experiment.tech.map((tech) => <span key={tech.name}>{tech.name}</span>)}
              {!destination && <span className="ml-auto">Personal tool</span>}
            </div>
          </article>
        );
      })}
    </div>
  );
}
