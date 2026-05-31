'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconDownload,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const socialLinks = [
    {
      icon: IconBrandLinkedin,
      href: "https://linkedin.com/in/reyhananf",
      label: "LinkedIn",
      color: "text-blue-600",
    },
    {
      icon: IconBrandInstagram,
      href: "https://instagram.com/reyhananf",
      label: "Instagram",
      color: "text-pink-600",
    },
    {
      icon: IconBrandGithub,
      href: "https://github.com/reyhananf",
      label: "GitHub",
      color: "text-gray-800 dark:text-white",
    },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="hidden md:flex fixed left-0 top-0 h-screen w-96 bg-card border-r border-border p-8 flex-col overflow-y-auto z-50"
    >
      {/* Profile Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex justify-center mb-6"
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
          <Image
            src="/reyn_rbg.png"
            alt="Reyhan Andrea Firdaus"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Name & Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground">Reyhan Andrea Firdaus</h1>
        <p className="text-primary font-semibold mt-2">Full-Stack Developer</p>
        <p className="text-sm text-muted-foreground mt-1">Tasikmalaya, Indonesia</p>
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground text-center mb-8 leading-relaxed">
        Building elegant, scalable solutions with modern web technologies. Passionate about clean code and great UX.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <motion.div
          whileHover={{ y: -5 }}
          className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center"
        >
          <p className="text-xl font-bold text-primary">5+</p>
          <p className="text-xs text-muted-foreground">Years Active</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center"
        >
          <p className="text-xl font-bold text-primary">20+</p>
          <p className="text-xs text-muted-foreground">Projects</p>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-8">
        {socialLinks.map(({ icon: Icon, href, label, color }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors ${color}`}
            title={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 mb-8">
        <Link href="#contact" className="block w-full">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            Hire Me
          </Button>
        </Link>
        <a
          href="https://wa.me/6285156238076"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button
            variant="outline"
            className="w-full"
            size="lg"
          >
            <IconBrandWhatsapp className="w-4 h-4 mr-2" />
            Chat
          </Button>
        </a>
        <a
          href="/Reyhan Andrea Firdaus.pdf"
          download
          className="block w-full"
        >
          <Button
            variant="ghost"
            className="w-full"
            size="lg"
          >
            <IconDownload className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </a>
      </div>

      {/* Divider */}
      <div className="flex-grow" />

      {/* Footer */}
      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>© 2024 Reyhan Andrea Firdaus</p>
        <p className="mt-2">Crafted with ❤️ and code</p>
      </div>
    </motion.aside>
  );
}
