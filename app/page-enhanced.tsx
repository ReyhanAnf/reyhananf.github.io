/**
 * ENHANCED PORTFOLIO LAYOUT
 *
 * This is an alternative main page that uses all the enhanced components.
 * To use this, replace the content of app/page.tsx with this file.
 *
 * Enhanced Components Used:
 * - header-improved.tsx: Better hero section with stats
 * - about-improved.tsx: Enhanced about with statistics
 * - skill-enhanced.tsx: Organized skills by category with tech stack showcase
 * - experience-enhanced.tsx: Timeline-based experience section
 * - project-enhanced.tsx: Featured project + grid showcase
 * - contact-enhanced.tsx: Multiple contact methods + social links
 * - sidebar.tsx: Fixed left sidebar with profile
 * - floating-nav.tsx: Floating right navigation with active indicators
 */

import BlogsWrapper from "./components/pack/blogs_wrapper"
import Certificates from "./components/pack/certificates"
import Experiment from "./components/pack/experiment"
import Header from "./components/pack/header-improved"
import Project from "./components/pack/project-enhanced"
import Experience from "./components/pack/experience-enhanced"
import Skill from "./components/pack/skill-enhanced"
import About from "./components/pack/about-improved"
import Contact from "./components/pack/contact-enhanced"
import Sidebar from "./components/pack/sidebar"
import FloatingNav from "./components/pack/floating-nav"

export default function HomeEnhanced() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="px-5 md:px-32 py-5 max-w-full md:ml-96">
        <Header />
        <About />
        <Skill />
        <Experience />
        <Project />
        <Experiment />
        <Certificates />
        <Contact />
        <BlogsWrapper />
      </main>
    </div>
  )
}
