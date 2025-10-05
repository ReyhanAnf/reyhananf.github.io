'use client';

import { useState, useEffect } from 'react';
import { ModeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from 'framer-motion';

export const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      )}
    >
      <motion.nav 
        animate={{ 
          backgroundColor: scrolled ? 'hsl(var(--card) / 0.8)' : 'transparent',
          borderColor: scrolled ? 'hsl(var(--border))' : 'transparent',
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between p-4 mx-auto max-w-screen-xl border-b"
        style={scrolled ? { backdropFilter: 'blur(12px)' } : {}}
      >
        <a href="/" className="text-2xl font-bold text-primary">
          <span>{"<"}</span>ReyhanAnf<span>{"/>"}</span>
        </a>
        <ModeToggle />
      </motion.nav>
    </header>
  );
};