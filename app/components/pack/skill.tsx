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
        <div className="flex flex-col justify-center items-center w-full">
            <div className="relative w-full overflow-hidden bg-secondary/20 rounded-2xl p-4 sm:p-5">
                <motion.div 
                    className="flex gap-12"
                    animate={{
                        x: ['0%', '-100%'],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 25, // Slightly slower for readability
                        repeat: Infinity,
                    }}
                >
                    {/* Render the list of skills twice for a seamless loop */}
                    {[...allSkills, ...allSkills].map((skill, i) => (
                        <div key={i} className="flex-shrink-0 flex flex-col items-center justify-center gap-1.5">
                            <Image 
                                width={32} 
                                height={32} 
                                src={skill.image} 
                                className={`w-8 h-8 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300`} 
                                alt={skill.name} 
                            />
                            <span className="text-[10px] font-medium text-muted-foreground">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}