'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "⚛️",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    icon: "🔧",
    skills: [
      "Node.js",
      "Python",
      "PHP",
      "Laravel",
      "Django",
      "Flask",
      "REST API",
    ],
  },
  {
    name: "Databases",
    icon: "💾",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
  },
  {
    name: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git", "Docker", "Linux", "VS Code", "Postman", "GitHub"],
  },
  {
    name: "Other Languages",
    icon: "📚",
    skills: ["Go", "Java", "C++", "SQL"],
  },
  {
    name: "Soft Skills",
    icon: "🎯",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Leadership"],
  },
];

export default function SkillsEnhanced() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      id="skills"
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
          <span className="text-sm font-medium text-primary">Expertise</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground mt-2">
          Technologies and tools I work with
        </p>
      </div>

      <motion.div className="max-w-5xl mx-auto">
        {/* Skill Categories Grid */}
        <motion.div
          variants={sectionVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              whileHover={{ y: -5 }}
              className="p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg hover:border-primary/50 transition-all"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-foreground">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          variants={sectionVariants}
          className="p-8 bg-gradient-to-r from-primary/5 via-card to-primary/5 rounded-2xl border border-primary/10"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Tech Stack Highlights
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "/tech/reactjs.svg" },
              { name: "Next.js", icon: "/tech/next.svg" },
              { name: "TypeScript", icon: "/tech/javascript.svg" },
              { name: "Tailwind", icon: "/tech/tailwind.svg" },
              { name: "Node.js", icon: "/tech/nodejs.png" },
              { name: "Python", icon: "/tech/python.svg" },
              { name: "Laravel", icon: "/tech/laravel.svg" },
              { name: "PHP", icon: "/tech/php.png" },
              { name: "MySQL", icon: "/tech/mysql.svg" },
              { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
              { name: "Docker", icon: "/tech/docker.svg" },
              { name: "Go", icon: "/tech/go.svg" },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-muted-foreground text-center">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
