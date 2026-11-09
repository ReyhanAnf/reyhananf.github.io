import Contact from "./components/pack/contact";
import Experience from "./components/pack/experience";
import Header from "./components/pack/header";
import Project from "./components/pack/project";
import Experiment from "./components/pack/experiment";
import { PROJECT, EXPERIMENT } from "@/lib/vars";

function SectionHeading({ number, title, description, count }: { number: string; title: string; description: string; count?: number }) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
      <div>
        <p className="eyebrow mb-4"><span className="mr-3 text-primary">{number}</span> {title === "Selected work" ? "Built with purpose" : title === "Playground" ? "A space to explore" : "The journey so far"}</p>
        <h2 className="flex items-start gap-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          {title}{count !== undefined && <span className="mt-1 rounded-full border border-border px-2 py-1 font-mono text-[10px] font-normal leading-none tracking-normal text-muted-foreground">{String(count).padStart(2, "0")}</span>}
        </h2>
      </div>
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-right">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <section id="hero" aria-label="Introduction"><Header /></section>
      <section id="projects" aria-label="Selected work" className="portfolio-section">
        <SectionHeading number="01" title="Selected work" count={PROJECT.length} description="Real problems. Thoughtful solutions. A selection of my web development work." />
        <Project />
      </section>
      <section id="experiments" aria-label="Playground" className="portfolio-section">
        <SectionHeading number="02" title="Playground" count={EXPERIMENT.length} description="Side projects, small tools, and ideas built out of curiosity." />
        <Experiment />
      </section>
      <section id="experience" aria-label="Experience" className="portfolio-section">
        <SectionHeading number="03" title="Experience" description="Working across products, teams, and the details that make them work." />
        <Experience />
      </section>
      <section id="contact" aria-label="Contact" className="pb-16 pt-4 sm:pb-24"><Contact /></section>
    </main>
  );
}
