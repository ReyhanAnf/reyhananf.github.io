"use client";

import { motion } from "framer-motion";

export default function About(){

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center my-16 w-full"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">ABOUT ME</h1>
                <p className="text-muted-foreground mt-2">A little bit about my journey.</p>
            </div>
            <div className="p-8 bg-card text-card-foreground rounded-xl shadow-md w-[90%] max-w-4xl">
                <p className="text-base md:text-lg text-center text-balance">
                Software Engineer with a background in Information Systems, passionate about Python programming and continuously exploring new technologies. Currently enhancing skills in developing innovative solutions.
                </p>
            </div>
        </motion.div>
    )
}