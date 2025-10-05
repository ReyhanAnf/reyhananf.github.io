'use client'

import { motion } from "framer-motion"

const skills = [
    {
        title: "Backend Development",
        tech: [
            { name: "Go (Gin)", level: 90 },
            { name: "Python (Django, Flask)", level: 85 },
            { name: "Node.js (Express)", level: 75 },
        ]
    },
    {
        title: "Frontend Development",
        tech: [
            { name: "React / Next.js", level: 95 },
            { name: "JavaScript / TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 95 },
        ]
    },
    {
        title: "DevOps & Databases",
        tech: [
            { name: "Docker", level: 80 },
            { name: "PostgreSQL / MySQL", level: 85 },
            { name: "CI/CD", level: 70 },
        ]
    },
    {
        title: "Software & Design",
        tech: [
            { name: "Figma / Adobe XD", level: 80 },
            { name: "Adobe Creative Suite", level: 75 },
            { name: "Microsoft Office Suite", level: 95 },
        ]
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const SkillBar = ({ name, level }: { name: string, level: number }) => {
    return (
        <div className="w-full mb-4">
            <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-card-foreground">{name}</span>
                <span className="text-sm font-medium text-primary">{level}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
                <motion.div 
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </div>
    )
}

export default function Skill(){
    return (
        <div id="skills" className="flex flex-col justify-center items-center my-24 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">Skills & Expertise</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">The technologies and tools I use to build modern web applications.</p>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full max-w-6xl"
            >
                {skills.map((skillCategory, i) => (
                    <div key={i}>
                        <h3 className="text-2xl font-semibold mb-6 text-left font-serif text-primary">{skillCategory.title}</h3>
                        <div className="space-y-4">
                            {skillCategory.tech.map((tech, j) => (
                                <SkillBar key={j} name={tech.name} level={tech.level} />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}