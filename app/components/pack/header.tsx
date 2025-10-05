'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";
import { Typewriter } from 'react-simple-typewriter';

export default function Header() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
      className="min-h-screen flex flex-col items-center justify-center text-center py-16 md:py-24"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-cyan-400 animate-gradient-xy"
        style={{
          backgroundSize: '200% 200%',
        }}
      >
        Reyhan Andrea Firdaus
      </motion.h1>

      <motion.p 
        variants={itemVariants}
        className="text-xl md:text-2xl text-primary mt-4 font-semibold"
      >
        <Typewriter
            words={['Full-Stack Developer', 'System Architect', 'Problem Solver']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
      </motion.p>

      <motion.p 
        variants={itemVariants}
        className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg"
      >
        I build modern, scalable, and user-friendly web applications. Passionate about solving problems with clean and efficient code.
      </motion.p>

      <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
        <Button asChild size="lg">
          <a href="/Reyhan Andrea Firdaus.pdf" target="_blank" rel="noopener noreferrer" download>
            Download CV
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mt-10">
        <Link href="https://github.com/reyhananf" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
          <IconBrandGithub size={28} />
        </Link>
        <Link href="https://linkedin.com/in/reyhananf" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
          <IconBrandLinkedin size={28} />
        </Link>
        <Link href="https://instagram.com/reyhananf" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
          <IconBrandInstagram size={28} />
        </Link>
      </motion.div>

    </motion.header>
  );
}