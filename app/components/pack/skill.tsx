'use client'

import Image from "next/image"
import { SOFTWARE, TECH } from "@/lib/vars"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { motion } from "framer-motion"

const skills = [
    {
        title: "Backend",
        tech: [TECH.go, TECH.python, TECH.gin, TECH.django, TECH.flask]
    },
    {
        title: "Frontend",
        tech: [TECH.javascript, TECH.tailwind, TECH.nextjs, TECH.reactjs, TECH.shadcn, TECH.aceternity]
    },
    {
        title: "DevOps & Databases",
        tech: [TECH.docker, TECH.mysql, TECH.postgresql]
    },
    {
        title: "Office & Design",
        tech: [SOFTWARE.word, SOFTWARE.excel, SOFTWARE.powerpoint, SOFTWARE.canva, SOFTWARE.inkscape, SOFTWARE.illustrator, SOFTWARE.capcut, SOFTWARE.aftereffects]
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Skill(){
    return (
        <div id="skills" className="flex flex-col justify-center items-center my-16 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">SKILLS</h1>
                <p className="text-muted-foreground mt-2">Technologies and tools I work with.</p>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
            >
                {skills.map((skillCategory, i) => (
                    <motion.div 
                        key={i} 
                        variants={itemVariants}
                        className="bg-card text-card-foreground rounded-xl border shadow-md p-6"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-center text-primary">{skillCategory.title}</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skillCategory.tech.map((tech, j) => (
                                <HoverCard key={j}>
                                    <HoverCardTrigger className="cursor-pointer">
                                        <div className="flex items-center justify-center bg-secondary p-3 rounded-2xl hover:bg-accent transition-colors">
                                            <Image 
                                                width={40} 
                                                height={40} 
                                                src={tech.image} 
                                                className={`w-10 h-10 object-contain`} 
                                                alt={tech.name} 
                                            />
                                        </div>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="bg-popover text-popover-foreground border-border">
                                        <div className="flex items-center gap-4">
                                            <Image 
                                                width={40} 
                                                height={40} 
                                                src={tech.image} 
                                                className={`w-10 h-10 object-contain`} 
                                                alt={tech.name} 
                                            />
                                            <h4 className="text-lg font-bold">{tech.name}</h4>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}