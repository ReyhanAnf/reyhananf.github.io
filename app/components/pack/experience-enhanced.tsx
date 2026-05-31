'use client';

import { motion, Variants } from "framer-motion";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "PT. Kilau Berlian Nusantara",
    position: "Front-End Developer",
    duration: "September 2024 - Present",
    location: "Tasikmalaya, Indonesia",
    description: [
      "Develop responsive web applications using Next.js and React",
      "Collaborate with UI/UX designers to implement pixel-perfect designs",
      "Optimize performance and implement best practices",
      "Maintain clean, reusable code architecture",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
  },
  {
    id: 2,
    company: "PT. Akasata Cyber Technology",
    position: "Junior Security Operation Center",
    duration: "February 2024 - August 2024",
    location: "Jakarta, Indonesia",
    description: [
      "Monitor and manage security operations",
      "Analyze security events and incidents",
      "Implement security best practices",
      "Coordinate with development team on security improvements",
    ],
    skills: ["Security", "Monitoring", "Incident Response", "Cyber Security"],
  },
  {
    id: 3,
    company: "PT. Hamengku Karya",
    position: "Internship Android Developer",
    duration: "August 2023 - September 2023",
    location: "Bandung, Indonesia",
    description: [
      "Create UI design for mobile applications",
      "Build Android applications using React Native",
      "Learn mobile app development best practices",
      "Collaborate with cross-functional teams",
    ],
    skills: ["React Native", "Android", "JavaScript", "Mobile Development"],
  },
  {
    id: 4,
    company: "PT. Eka Mandiri Asa Sejati",
    position: "Junior Web Developer",
    duration: "April 2022 - January 2023",
    location: "Garut, Indonesia",
    description: [
      "Develop website profiles and CMS systems",
      "Create database structures and optimize queries",
      "Implement responsive web designs",
      "Provide technical support to clients",
    ],
    skills: ["Laravel", "PHP", "MySQL", "HTML/CSS", "JavaScript"],
  },
];

export default function ExperienceEnhanced() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="experience"
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
          <span className="text-sm font-medium text-primary">Career Path</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
          Work Experience
        </h2>
        <p className="text-muted-foreground mt-2">
          My professional journey and achievements
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent md:transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-0`}
              >
                {/* Timeline Dot */}
                <motion.div className="md:flex-1 flex items-start">
                  {/* Mobile dot */}
                  <div className="relative md:hidden">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute top-2 -left-8.5"
                    />
                  </div>

                  {/* Desktop dot */}
                  <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:flex-1">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="md:flex-1 p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <IconBriefcase className="w-5 h-5 text-primary/60" />
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{exp.duration}</span>
                    <div className="flex items-center gap-1">
                      <IconMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
