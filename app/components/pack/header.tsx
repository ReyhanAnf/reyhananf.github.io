'use client';

import { Cover } from "@/app/components/ui/cover";
import { Button } from "@/components/ui/button";
import {
    IconArrowRight,
    IconDownload,
    IconMail,
    IconMapPin,
} from "@tabler/icons-react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 16 },
    },
  };

  const portraitVariants: Variants = {
    hidden: { opacity: 0, rotate: -2, scale: 0.92 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.45 } },
  };

  const handleMailClick = () => {
    const subject = encodeURIComponent("Collaboration Inquiry");
    const body = encodeURIComponent(
      "Hi Reyhan,\n\nI found your portfolio and would like to discuss a potential project or collaboration.\n\nThanks!"
    );
    window.open(
      `mailto:andreafirdausr@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <motion.header
      id="home"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="pt-6"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Portrait: Small, discrete, grayscale */}
          <motion.div variants={portraitVariants} className="flex-shrink-0">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border bg-card shadow-sm grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/reyn_rbg.png"
                alt="Portrait of Reyhan Andrea Firdaus"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <div className="text-center md:text-left flex-grow">
            <motion.p variants={fadeUp} className="text-sm font-medium text-muted-foreground">
              Hi, I am
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl font-serif"
            >
              <Cover>Reyhan Andrea Firdaus</Cover>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-3 text-lg text-primary sm:text-xl">
              <span className="font-semibold">Software Engineer </span>
              <span className="font-semibold text-muted-foreground">| </span>
              <span className="font-semibold text-primary">
                <Typewriter
                  words={["Full‑Stack Developer", "Backend Engineer", "Problem Solver"]}
                  loop
                  cursor
                  cursorStyle="▍"
                  typeSpeed={65}
                  deleteSpeed={40}
                  delaySpeed={1200}
                />
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-muted-foreground leading-relaxed text-sm sm:text-base">
              Focused on engineering reliable, high-performance, and responsive modern web architectures. Dedicated to clean code, pragmatic solutions, and delivering software backed by tangible outcomes.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-transparent">
                <IconMail className="h-4 w-4 text-primary" />
                <span>andreafirdausr@gmail.com</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-transparent">
                <IconMapPin className="h-4 w-4 text-primary" />
                <span>Tasikmalaya, Indonesia</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-row items-center justify-center gap-3 md:justify-start"
            >
              <Button size="sm" onClick={handleMailClick} className="gap-2 text-xs font-semibold px-4 py-2">
                Email Direct <IconArrowRight className="h-3 w-3" />
              </Button>

              <Button asChild size="sm" variant="secondary" className="gap-2 text-xs font-semibold px-4 py-2 bg-secondary/80 hover:bg-secondary">
                <a
                  href="/Reyhan Andrea Firdaus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download CV <IconDownload className="h-3 w-3" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
