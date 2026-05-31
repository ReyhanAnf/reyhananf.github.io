'use client';

import { motion, Variants } from "framer-motion";

export default function About(){

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const statVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
    };

    const stats = [
        { value: "5+", label: "Years of Experience", icon: "🚀" },
        { value: "20+", label: "Projects Completed", icon: "✨" },
        { value: "100%", label: "Client Satisfaction", icon: "👌" },
    ];

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
                <motion.div
                    variants={sectionVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">About Me</span>
                </motion.div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">My Journey</h1>
                <p className="text-muted-foreground mt-2">From curiosity to crafting elegant solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        variants={statVariants}
                        whileHover={{ y: -10 }}
                        className="flex flex-col items-center p-6 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all cursor-pointer"
                    >
                        <span className="text-3xl mb-2">{stat.icon}</span>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground text-center mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="p-10 bg-card text-card-foreground rounded-xl border shadow-md w-full max-w-4xl">
                <p className="text-lg md:text-xl text-center text-balance leading-relaxed">
                    Full-Stack Software Engineer specializing in building robust applications with Python, PHP/Laravel, and Next.js. Currently expanding my expertise into Go (Golang) to develop high-performance, scalable solutions. I'm passionate about creating elegant code, delivering exceptional user experiences, and turning complex problems into simple, beautiful solutions.
                </p>
            </div>
        </motion.div>
    )
}
