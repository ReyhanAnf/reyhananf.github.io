'use client'

import { EXPERIENCE } from "@/lib/vars";
import { motion, Variants } from "framer-motion";
import { IconBriefcase, IconCalendar } from "@tabler/icons-react";

export default function Experience() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <div className="flex flex-col w-full">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="w-full flex flex-col relative pl-8 md:pl-12 border-l-2 border-border"
            >
                {EXPERIENCE.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="relative w-full mb-8 last:mb-0 group"
                    >
                        {/* Timeline Dot & Icon */}
                        <div className="absolute -left-[45px] md:-left-[61px] top-1.5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-card border border-border text-primary shadow-none group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <IconBriefcase size={14} />
                        </div>

                        {/* Content Card (Borderless, clean background difference) */}
                        <div className="bg-secondary/30 p-5 md:p-6 rounded-2xl border-0 shadow-none hover:bg-secondary/40 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm text-primary font-medium mt-0.5">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-card/60 text-muted-foreground text-[10px] sm:text-xs font-semibold w-fit self-start md:self-center">
                                    <IconCalendar size={10} className="text-primary" />
                                    <span>{exp.date}</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}