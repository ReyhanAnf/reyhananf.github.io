'use client'

import { EXPERIENCE } from "@/lib/vars";
import { motion } from "motion/react"

export default function Experience() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div id="experience" className="flex flex-col items-center justify-center my-16 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">EXPERIENCE</h1>
                <p className="text-muted-foreground mt-2">My professional journey so far.</p>
            </div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="w-full max-w-4xl flex flex-col items-center"
            >
                {EXPERIENCE.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="relative w-full flex justify-start md:justify-center items-start"
                    >
                        {/* Desktop: Centered Line */}
                        <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
                        {/* Mobile: Left-aligned Line */}
                        <div className="block md:hidden absolute top-0 left-5 w-0.5 h-full bg-border -translate-x-1/2"></div>

                        {/* Content for Desktop (alternating sides) */}
                        <div className="hidden md:flex w-full items-start justify-center mb-12">
                            {/* Left Side */}
                            <div className={`w-1/2 pr-8 text-right ${index % 2 !== 0 ? 'order-3' : ''}`}>
                                {index % 2 === 0 && 
                                    <div className="bg-card p-6 rounded-lg border shadow-md">
                                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                        <p className="text-md text-primary font-medium mt-1">{exp.company}</p>
                                        <p className="text-muted-foreground mt-3 text-sm">{exp.description}</p>
                                    </div>
                                }
                            </div>

                           

                            {/* Right Side */}
                            <div className={`w-1/2 pl-8 md:translate-x-full ${index % 2 === 0 ? 'order-3' : ''}`}>
                                {index % 2 !== 0 && 
                                    <div className="bg-card p-6 rounded-lg border shadow-md">
                                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                        <p className="text-md text-primary font-medium mt-1">{exp.company}</p>
                                        <p className="text-muted-foreground mt-3 text-sm">{exp.description}</p>
                                    </div>
                                }
                            </div>

                             {/* Dot in the middle */}
                            <div className="z-10">
                                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                            </div>
                        </div>

                        {/* Content for Mobile (single column) */}
                        <div className="block md:hidden w-full mb-8">
                            <div className="relative pl-12">
                                <div className="absolute top-0 left-5 z-10">
                                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                                </div>
                                <div className="bg-card p-6 rounded-lg border shadow-md">
                                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                    <p className="text-md text-primary font-medium mt-1">{exp.company}</p>
                                    <p className="text-muted-foreground mt-3 text-sm">{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}