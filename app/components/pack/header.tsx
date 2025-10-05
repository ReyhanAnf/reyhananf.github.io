'use client';

import Link from "next/link";
import { motion } from "motion/react"
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconMail, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";

export default function Header() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.header 
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 w-full max-w-6xl h-[600px]">
        
        {/* Main Info Box */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 row-span-2 bg-card p-6 rounded-xl border shadow-md flex flex-col justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Reyhan Andrea Firdaus</h1>
            <p className="text-lg md:text-xl text-primary mt-2">Full-Stack Developer & System Architect</p>
            <p className="text-muted-foreground mt-4 max-w-lg">
              I build modern, scalable, and user-friendly web applications. Passionate about solving problems with clean and efficient code.
            </p>
          </div>
          <div className="flex justify-end">
             <Button asChild size="lg">
                <a href="/Reyhan Andrea Firdaus.pdf" target="_blank" rel="noopener noreferrer" download>
                  Download CV
                </a>
              </Button>
          </div>
        </motion.div>

        {/* Profile Picture Box */}
        <motion.div 
          variants={itemVariants}
          className="relative overflow-hidden bg-card rounded-xl border shadow-md"
        >
            <Image src="/reyn_rbg.png" alt="Reyhan Andrea Firdaus" fill className="object-cover scale-110" />
        </motion.div>

        {/* Contact Info Box */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 bg-card p-6 rounded-xl border shadow-md flex flex-col justify-center gap-4"
        >
            <div className="flex items-center gap-3">
                <IconMail className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">andreafirdausr@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
                <IconMapPin className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Bekasi, Indonesia</span>
            </div>
        </motion.div>

      </div>
    </motion.header>
  );
}
