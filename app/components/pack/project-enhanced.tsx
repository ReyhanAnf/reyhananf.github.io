'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconExternalLink,
  IconBrandGithub,
  IconArrowRight,
} from "@tabler/icons-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Otot - Fitness Tracking App",
    description:
      "A comprehensive fitness tracking application built with modern web technologies. Features real-time progress tracking, workout plans, and community features.",
    image: "/product/otot.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/reyhananf",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Pancaindra - Educational Platform",
    description:
      "An interactive educational platform designed to improve learning engagement. Includes course management, progress tracking, and interactive exercises.",
    image: "/product/pancaindra.png",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/reyhananf",
  },
  {
    id: 3,
    title: "Pergerakan Nasional Website",
    description:
      "A professional website for the national movement organization. Responsive design with content management system and news updates.",
    image: "/product/pergerakannasional.png",
    tags: ["HTML", "CSS", "JavaScript", "CMS"],
    live: "#",
  },
  {
    id: 4,
    title: "Pusat Pertumbuhan Dashboard",
    description:
      "Analytics dashboard for business growth tracking. Real-time data visualization, reporting, and insights generation.",
    image: "/product/pusatpertumbuhan.png",
    tags: ["React", "Chart.js", "REST API", "Tailwind"],
    github: "https://github.com/reyhananf",
  },
  {
    id: 5,
    title: "Predict News - ML Project",
    description:
      "Machine learning model for news prediction and sentiment analysis. Built with Python and TensorFlow for accurate predictions.",
    image: "/project/predictnews.png",
    tags: ["Python", "TensorFlow", "ML", "Data Science"],
    github: "https://github.com/reyhananf",
  },
  {
    id: 6,
    title: "Talent Mapping System",
    description:
      "HR management system for talent mapping and skill assessment. Helps organizations identify and nurture talent effectively.",
    image: "/project/talentsmapping.png",
    tags: ["Laravel", "PostgreSQL", "Vue.js"],
    github: "https://github.com/reyhananf",
  },
];

export default function ProjectShowcaseEnhanced() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="my-24 w-full"
    >
      <div className="text-center mb-16">
        <motion.div
          variants={sectionVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Portfolio</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mt-2">
          Showcase of my best work and achievements
        </p>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          variants={itemVariants}
          className="mb-20 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            {/* Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full"
              >
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium text-primary">Featured</span>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {featuredProject.github && (
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <IconBrandGithub className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                )}
                {featuredProject.live && (
                  <a href={featuredProject.live} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      <IconExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Projects Grid */}
      <motion.div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {regularProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      title="View on GitHub"
                    >
                      <IconBrandGithub className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors ml-auto"
                      title="View Live"
                    >
                      <IconExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div variants={itemVariants} className="flex justify-center mt-12">
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects
              <IconArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
