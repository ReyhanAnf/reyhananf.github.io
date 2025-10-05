'use client';

import { motion, Variants } from "framer-motion";

export default function About(){

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.div 
            id="about"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center my-24 w-full"
        >
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">About Me</h1>
                <p className="text-muted-foreground mt-2">From curiosity to creation.</p>
            </div>
            <div className="p-10 bg-card text-card-foreground rounded-xl border shadow-md w-full max-w-4xl">
                <p className="text-lg md:text-xl text-center text-balance leading-relaxed">
                    Full-Stack Software Engineer specializing in building robust applications with Python, PHP/Laravel, and Next.js. Currently expanding my expertise into Go (Golang) to develop high-performance, scalable solutions
                </p>
            </div>
        </motion.div>
    )
}