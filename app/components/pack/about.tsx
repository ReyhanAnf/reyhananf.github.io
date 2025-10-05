'use client';

import { motion } from "framer-motion";

export default function About(){

    const sectionVariants = {
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
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">My Story</h1>
                <p className="text-muted-foreground mt-2">From curiosity to creation.</p>
            </div>
            <div className="p-10 bg-card text-card-foreground rounded-xl border shadow-md w-full max-w-4xl">
                <p className="text-lg md:text-xl text-center text-balance leading-relaxed">
                    My journey into technology began not in a classroom, but from a simple curiosity about how things work. I started with a deep dive into Python, and what began as a hobby quickly became a passion. I love the process of transforming a complex problem into a simple, beautiful, and intuitive solution. Today, I channel that passion into building modern web applications, always striving to learn, grow, and push the boundaries of what's possible.
                </p>
            </div>
        </motion.div>
    )
}