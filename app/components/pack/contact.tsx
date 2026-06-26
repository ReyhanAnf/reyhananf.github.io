'use client';

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export default function Contact() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const handleMailClick = () => {
        window.open("mailto:andreafirdausr@gmail.com", "_blank");
    };

    return (
        <div className="w-full">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 py-24 md:py-32"
            >
                <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col items-center justify-center text-center gap-12">
                    <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-foreground max-w-5xl leading-[1.05]">
                        Let's build something exceptional.
                    </h2>
                    
                    <div className="flex flex-col items-center gap-8">
                        <Button 
                            size="lg" 
                            onClick={handleMailClick} 
                            variant="default"
                            className="rounded-none bg-foreground text-background px-12 py-8 text-xs font-bold tracking-widest uppercase hover:bg-foreground/90 transition-colors duration-300"
                        >
                            Contact Me
                        </Button>
                        
                        <div className="flex items-center gap-6 mt-4">
                            <Link href="https://github.com/reyhananf" target="_blank" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                                <IconBrandGithub className="w-5 h-5" stroke={1.5} />
                            </Link>
                            <Link href="https://linkedin.com/in/reyhananf" target="_blank" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                                <IconBrandLinkedin className="w-5 h-5" stroke={1.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
  );
}
