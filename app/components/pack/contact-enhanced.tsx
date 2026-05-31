'use client';

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";

interface ContactMethod {
  icon: any;
  label: string;
  value: string;
  href: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: IconMail,
    label: "Email",
    value: "andreafirdausr@gmail.com",
    href: "mailto:andreafirdausr@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: IconBrandWhatsapp,
    label: "WhatsApp",
    value: "+62 851-5623-8076",
    href: "https://wa.me/6285156238076",
    color: "text-green-500",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Tasikmalaya, Indonesia",
    href: "#",
    color: "text-red-500",
  },
  {
    icon: IconClock,
    label: "Availability",
    value: "Mon - Fri, 9AM - 5PM WIB",
    href: "#",
    color: "text-yellow-500",
  },
];

const socialLinks = [
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/reyhananf",
    color: "text-blue-600 hover:text-blue-700",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    href: "https://github.com/reyhananf",
    color: "text-gray-800 dark:text-white hover:text-gray-900",
  },
  {
    icon: IconBrandInstagram,
    label: "Instagram",
    href: "https://instagram.com/reyhananf",
    color: "text-pink-600 hover:text-pink-700",
  },
];

export default function ContactEnhanced() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="my-24 w-full py-16"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={sectionVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I'm always open to new opportunities and collaborations. Feel free to reach out
            if you have a project in mind or just want to chat about technology and innovation.
          </p>
        </div>

        {/* Main CTA Card */}
        <motion.div
          variants={itemVariants}
          className="mb-16 p-10 bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-2xl border border-primary/20 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to start a project?
          </h3>
          <p className="text-muted-foreground mb-8">
            Don't hesitate to get in touch. I'm excited to discuss new ideas and opportunities.
          </p>
          <motion.div
            variants={sectionVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="mailto:andreafirdausr@gmail.com">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12">
                <IconMail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </a>
            <a href="https://wa.me/6285156238076" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="font-semibold px-8 h-12">
                <IconBrandWhatsapp className="w-4 h-4 mr-2" />
                Message on WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={idx}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                variants={itemVariants}
                whileHover={{ y: -5, x: 5 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${method.color} text-2xl group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {method.label}
                    </p>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={sectionVariants}
          className="p-8 bg-card rounded-xl border border-border text-center"
        >
          <h3 className="text-lg font-bold text-foreground mb-6">
            Connect on Social Media
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-all ${social.color}`}
                  title={social.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          variants={sectionVariants}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>
            I'll get back to you as soon as possible. Usually within 24 hours! 🚀
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
