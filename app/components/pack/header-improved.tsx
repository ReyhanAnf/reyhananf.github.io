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
  IconArrowRight,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-6xl mx-auto px-6">
        {/* Left Column: Content */}
        <motion.div variants={itemVariants} className="flex-1 text-center md:text-left">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 w-fit"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for work</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4"
          >
            Turning Ideas Into <span className="text-primary">Reality</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary font-semibold mb-6"
          >
            <Typewriter
              words={["Full-Stack Developer", "Software Engineer", "Problem Solver"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Building elegant, scalable solutions with modern web technologies.
            I specialize in crafting user-centric applications that solve real problems with clean, efficient code.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10"
          >
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10">
                <IconMail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">andreafirdausr@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10">
                <IconMapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">Tasikmalaya, Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10"
          >
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link href="#projects" className="block">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 rounded-lg"
                >
                  View My Work
                  <IconArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <a
                href="https://wa.me/6285156238076"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full font-semibold px-8 h-12 rounded-lg hover:bg-primary/5"
                >
                  <IconBrandWhatsapp className="w-4 h-4 mr-2" />
                  Let's Chat
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <span className="text-sm text-muted-foreground">Connect with me:</span>
            <div className="flex gap-3">
              {[
                { Icon: IconBrandLinkedin, href: 'https://linkedin.com/in/reyhananf', label: 'LinkedIn' },
                { Icon: IconBrandGithub, href: 'https://github.com/reyhananf', label: 'GitHub' },
                { Icon: IconBrandInstagram, href: 'https://instagram.com/reyhananf', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          variants={imageVariants}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5">
            <Image
              src="/reyn_rbg.png"
              alt="Reyhan Andrea Firdaus"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
