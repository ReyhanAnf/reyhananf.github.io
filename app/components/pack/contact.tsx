'use client';

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Contact() {

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const handleMailClick = () => {
    const subject = encodeURIComponent("Collaboration Inquiry");
    const body = encodeURIComponent("Hi Reyhan,\n\nI would like to discuss a potential project or collaboration.");
    window.open(`mailto:andreafirdausr@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const channels = [
    {
      icon: IconMail,
      label: "Direct Email",
      value: "andreafirdausr@gmail.com",
      actionText: "Send Mail",
      onClick: handleMailClick,
      href: "#"
    },
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn Professional",
      value: "reyhan-andrea-firdaus",
      actionText: "Connect",
      href: "https://www.linkedin.com/in/reyhan-andrea-firdaus/"
    },
    {
      icon: IconBrandGithub,
      label: "GitHub Source Audits",
      value: "ReyhanAnf",
      actionText: "View Code",
      href: "https://github.com/ReyhanAnf"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col gap-3">
        {channels.map((ch, idx) => {
          const Icon = ch.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="w-full bg-secondary/25 hover:bg-secondary/40 p-4 rounded-xl flex items-center justify-between gap-3 group transition-all duration-300"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-card text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-primary font-semibold uppercase tracking-wider block">{ch.label}</span>
                  <span className="text-xs text-muted-foreground font-medium truncate block mt-0.5">{ch.value}</span>
                </div>
              </div>
              
              {ch.onClick ? (
                <Button onClick={ch.onClick} size="sm" variant="outline" className="h-8 px-2.5 text-xs bg-card hover:bg-secondary border border-border gap-1 flex-shrink-0">
                  <span>{ch.actionText}</span>
                  <IconArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              ) : (
                <Button asChild size="sm" variant="outline" className="h-8 px-2.5 text-xs bg-card hover:bg-secondary border border-border gap-1 flex-shrink-0">
                  <Link href={ch.href} target="_blank">
                    <span>{ch.actionText}</span>
                    <IconArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                  </Link>
                </Button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
