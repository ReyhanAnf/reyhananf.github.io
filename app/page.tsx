import Contact from "./components/pack/contact";
import Experience from "./components/pack/experience";
import Header from "./components/pack/header";
import Project from "./components/pack/project";
import Experiment from "./components/pack/experiment";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background pb-32">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-32 md:gap-y-48 pt-24 md:pt-32">
        
        <section id="hero" className="col-span-4 md:col-span-8 lg:col-span-12">
          <Header />
        </section>

        <section id="projects" className="col-span-4 md:col-span-8 lg:col-span-12 scroll-mt-32 pt-16 border-t border-border">
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border-b border-border pb-4 mb-16">
            <span>01</span>
            <span>/</span>
            <span>Selected Projects</span>
          </div>
          <Project />
        </section>

        <section id="experiments" className="col-span-4 md:col-span-8 lg:col-span-12 scroll-mt-32 pt-16 border-t border-border">
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border-b border-border pb-4 mb-16">
            <span>02</span>
            <span>/</span>
            <span>Experiments</span>
          </div>
          <Experiment />
        </section>

        <section id="experience" className="col-span-4 md:col-span-8 lg:col-span-12 scroll-mt-32 pt-16 border-t border-border">
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border-b border-border pb-4 mb-16">
            <span>03</span>
            <span>/</span>
            <span>Experience</span>
          </div>
          <Experience />
        </section>

        <section id="contact" className="col-span-4 md:col-span-8 lg:col-span-12 scroll-mt-32 pt-16 border-t border-border">
          <Contact />
        </section>

      </main>
    </div>
  );
}
