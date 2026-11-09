import { EXPERIENCE } from "@/lib/vars";

export default function Experience() {
  return (
    <div className="divide-y divide-border border-t border-border">
      {EXPERIENCE.map((experience) => (
        <article key={`${experience.company}-${experience.date}`} className="grid gap-3 py-7 sm:grid-cols-[150px_1fr] sm:gap-x-8 lg:grid-cols-[155px_1fr_1.15fr] lg:gap-x-10 lg:py-8">
          <div className="flex items-center gap-3 sm:block">
            <p className="text-xs leading-6 text-muted-foreground">{experience.date}</p>
            {experience.date.includes("Present") && <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/[0.07] px-2 py-0.5 text-[10px] font-medium text-primary sm:mt-2"><span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />Current</span>}
          </div>
          <div>
            <h3 className="text-base font-semibold tracking-tight">{experience.title}</h3>
            <p className="mt-1.5 text-xs leading-6 text-muted-foreground">{experience.company}</p>
          </div>
          <p className="text-[13px] leading-6 text-muted-foreground sm:col-start-2 lg:col-start-auto">{experience.description}</p>
        </article>
      ))}
    </div>
  );
}
