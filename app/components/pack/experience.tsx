'use client'

import { EXPERIENCE } from "@/lib/vars";
import { motion, Variants } from "framer-motion";

export default function Experience() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="w-full">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="w-full flex flex-col"
            >
                {EXPERIENCE.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 py-10 md:py-16 border-t border-border group"
                    >
                        {/* Left Meta */}
                        <div className="col-span-4 md:col-span-3 lg:col-span-3 flex flex-col gap-1 mb-6 md:mb-0">
                             <p className="text-xs font-bold tracking-widest text-foreground uppercase">{exp.date}</p>
                             <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-1">
                                {exp.company}
                             </p>
                        </div>
                        
                        {/* Right Content */}
                        <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-5 flex flex-col gap-6">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                                {exp.title}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}