'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconHome,
  IconUser,
  IconTools,
  IconBriefcase,
  IconBooks,
  IconMail,
} from '@tabler/icons-react';

interface NavItem {
  id: string;
  label: string;
  icon: any;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: IconHome, href: '#home' },
  { id: 'about', label: 'About', icon: IconUser, href: '#about' },
  { id: 'skills', label: 'Skills', icon: IconTools, href: '#skills' },
  { id: 'experience', label: 'Experience', icon: IconBriefcase, href: '#experience' },
  { id: 'projects', label: 'Projects', icon: IconBooks, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: IconMail, href: '#contact' },
];

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Show nav when at top or when scrolling up, hide when scrolling down past 300px
      if (currentScroll < 300) {
        setIsVisible(true);
      } else if (currentScroll < lastScrollTopRef.current) {
        // Scrolling up
        setIsVisible(true);
      } else {
        // Scrolling down past 300px
        setIsVisible(false);
      }

      lastScrollTopRef.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    // Intersection Observer for active section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50% 0px -50% 0px' }
    );

    // Observe all sections that exist in the DOM
    navItems.forEach(item => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="hidden md:flex fixed top-8 right-8 z-40 flex-col gap-2 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-2 shadow-lg"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.a
                key={item.id}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-lg transition-all duration-300 relative group ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary/10 text-muted-foreground hover:text-foreground'
                }`}
                title={item.label}
              >
                <Icon size={20} />

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <span className="text-xs font-medium whitespace-nowrap bg-foreground text-background px-2 py-1 rounded">
                    {item.label}
                  </span>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
