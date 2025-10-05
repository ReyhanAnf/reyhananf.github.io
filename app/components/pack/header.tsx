'use client';

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // 👉 Fungsi kirim email langsung
  const handleMailClick = () => {
    const subject = encodeURIComponent("Let's Collaborate!");
    const body = encodeURIComponent(
      "Hi Reyhan, I’d love to discuss a project or collaboration opportunity with you."
    );
    window.open(`mailto:andreafirdausr@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <motion.header
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-50vh flex items-start justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl mx-auto">
        {/* Left Column: Image */}
        <motion.div
          variants={imageVariants}
          className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0"
        >
          <Image
            src="/reyn_rbg.png"
            alt="Reyhan Andrea Firdaus"
            fill
            className="object-cover rounded-full border-4 border-primary/20 shadow-lg"
          />
        </motion.div>

        {/* Right Column: Content */}
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif">
            Reyhan Andrea Firdaus
          </h1>

          <p className="text-xl md:text-2xl text-primary mt-2 font-semibold">
            <Typewriter
              words={["Full-Stack Developer", "Software Engineer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <p className="text-muted-foreground mt-4 max-w-lg">
            I build modern, scalable, and user-friendly web applications, passionate about
            solving problems with clean and efficient code.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-2 mt-5 text-muted-foreground">
            <div className="flex items-center gap-2">
              <IconMail className="w-5 h-5 text-primary/80" />
              <span>andreafirdausr@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <IconMapPin className="w-5 h-5 text-primary/80" />
              <span>Tasikmalaya, Indonesia</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
            {/* ✅ Tombol langsung buka email */}
            <Button size="lg" onClick={handleMailClick}>
              Contact Me
            </Button>

            <Button asChild size="lg" variant="secondary">
              <a
                href="/Reyhan Andrea Firdaus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
