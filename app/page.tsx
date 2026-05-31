import About from "./components/pack/about";
import BlogsWrapper from "./components/pack/blogs_wrapper";
import Achievements from "./components/pack/certificates";
import Contact from "./components/pack/contact";
import Experience from "./components/pack/experience";
import Experiment from "./components/pack/experiment";
import Header from "./components/pack/header";
import Project from "./components/pack/project";
import Skill from "./components/pack/skill";

export default function Home() {
  const sections = [
    { id: "about", title: "Profile", component: <About />, shaded: true },
    { id: "skills", title: "Expertise", component: <Skill />, shaded: false },
    { id: "experience", title: "Experience", component: <Experience />, shaded: true },
    { id: "projects", title: "Selected Work", component: <Project />, shaded: false },
    { id: "experiments", title: "R&D Research", component: <Experiment />, shaded: true },
    { id: "achievements", title: "Credentials", component: <Achievements />, shaded: false },
    { id: "blogs", title: "Publications", component: <BlogsWrapper />, shaded: true },
    { id: "contact", title: "Direct Contact", component: <Contact />, shaded: false },
  ];

  return (
    <div className="relative min-h-screen bg-dot-grid selection:bg-primary/20 font-sans pb-32">
      {/* Asymmetrical Premium Executive Layout */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Full-width Header Block */}
        <section className="bg-transparent p-0 relative overflow-hidden group">
          <Header />
        </section>

        {/* Full-width Sequential Section Stack */}
        <div className="space-y-8 divide-y divide-border/20 pt-6">
          {sections.map((sec, idx) => (
            <div 
              key={sec.id} 
              id={sec.id} 
              className={`flex flex-col gap-4 pt-8 first:pt-0 first:border-t-0 border-border/20 ${
                sec.shaded ? "bg-secondary/15 p-5 sm:p-6 rounded-2xl border-0" : ""
              }`}
            >
              {/* Top Row: Clean Minimal Header */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                <h3 className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
                  {sec.title}
                </h3>
              </div>
              
              {/* Bottom Row: Full-width Component */}
              <div className="w-full">
                {sec.component}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
