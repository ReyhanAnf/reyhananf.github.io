'use client';

import { EXPERIMENT } from "@/lib/vars";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Experiment() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <div className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-16"
      >
        {EXPERIMENT.map((exp, index) => (
          <motion.article 
            key={index} 
            variants={itemVariants}
            className="group flex flex-col gap-6"
          >
            {/* Premium Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary border border-border">
                {exp.image && exp.image !== 'none' ? (
                  <>
                      {/* Grayscale overlay effect for premium feel */}
                      <Image 
                          src={exp.image} 
                          alt={exp.title} 
                          fill 
                          className="object-cover transition-all duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-multiply dark:mix-blend-lighten"
                      />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                    <span className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold">No Preview</span>
                  </div>
                )}
            </div>

            {/* Content block */}
            <div className="flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4 mb-4">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground transition-colors duration-300">
                    {exp.title}
                  </h3>
                  {(exp.link !== '#' || exp.source !== '#') && (
                     <Link href={exp.link !== '#' ? exp.link : exp.source} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                        <IconArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" stroke={1.5} />
                     </Link>
                  )}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-8 text-[10px] font-bold text-foreground uppercase tracking-widest">
                {exp.tech.map((t: any, i: number) => (
                    <span key={i} className="flex items-center">
                        {t.name}
                        {i < exp.tech.length - 1 && <span className="ml-4 text-muted-foreground/50">|</span>}
                    </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}