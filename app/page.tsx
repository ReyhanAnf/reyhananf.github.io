import BlogsWrapper from "./components/pack/blogs_wrapper"
import Certificates from "./components/pack/certificates"
import Contact from "./components/pack/contact"
import Experience from "./components/pack/experience"
import Header from "./components/pack/header"
import Project from "./components/pack/project"
import Experiment from "./components/pack/experiment"
import Skill from "./components/pack/skill"
import About from "./components/pack/about"

export default function Home() {
  return (
    <main className="px-5 md:px-32 py-5 max-w-full" overflow-x-hidden overflow-y-hidden>
      <Header />
      <About />
      <Experience />
      <Project />
      <Experiment />
      <Certificates />
      <Skill />
      <Contact />
      <BlogsWrapper />
    </main>
  )
}
