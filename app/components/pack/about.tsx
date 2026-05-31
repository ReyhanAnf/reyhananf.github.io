'use client';

import { motion, Variants } from "framer-motion";

export default function About(){

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
        >
            <div className="p-5 sm:p-6 md:p-8 bg-secondary/30 rounded-2xl w-full">
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground dark:text-slate-300">
                    Software Engineer specializing in modern web ecosystems including <span className="text-primary font-semibold">React/Next.js</span>, <span className="text-primary font-semibold">Go (Golang)</span>, and <span className="text-primary font-semibold">PHP/Laravel</span>. Experienced in engineering multi-tenant architectures, real-time data flows, and workflow automation. Driven by writing clean, testable code and delivering optimized solutions backed by tangible, verifiable project outcomes.
                </p>
            </div>
        </motion.div>
    )
}
