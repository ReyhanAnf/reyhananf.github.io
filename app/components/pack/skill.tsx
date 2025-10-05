'use client'

import Image from "next/image"
import { SOFTWARE, TECH } from "@/lib/vars"
import { motion } from "framer-motion"

const allSkills = [
    ...Object.values(TECH),
    ...Object.values(SOFTWARE),
];

export default function Skill(){
    return (
        <div id="skills" className="flex flex-col justify-center items-center my-16 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">Skills & Expertise</h1>
                <p className="text-muted-foreground mt-2">Technologies and tools I work with.</p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-card border rounded-xl p-6">
                <motion.div 
                    className="flex gap-12"
                    animate={{
                        x: ['0%', '-100%'],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 20, // Adjust duration for speed
                        repeat: Infinity,
                    }}
                >
                    {/* Render the list of skills twice for a seamless loop */}
                    {[...allSkills, ...allSkills].map((skill, i) => (
                        <div key={i} className="flex-shrink-0 flex flex-col items-center justify-center gap-2">
                            <Image 
                                width={48} 
                                height={48} 
                                src={skill.image} 
                                className={`w-12 h-12 object-contain`} 
                                alt={skill.name} 
                            />
                            <span className="text-xs text-muted-foreground">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}