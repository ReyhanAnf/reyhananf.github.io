'use client';

import { PROJECT } from "@/lib/vars";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function Project() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
        viewport={{ once: true, amount: 0.05 }}
        className="flex flex-col gap-32 md:gap-48"
      >
        {PROJECT.map((project, index) => {
           const layoutType = index % 4;
           // 0 = Image Left
           // 1 = Text Left (Image Right)
           // 2 = Full Width Image
           // 3 = Split Layout

           let imageCols = "";
           let textCols = "";
           let wrapperClass = "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-12 items-center group";

           if (layoutType === 0) {
              imageCols = "col-span-4 md:col-span-8 lg:col-span-7 order-1";
              textCols = "col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9 order-2";
           } else if (layoutType === 1) {
              imageCols = "col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6 order-1 lg:order-2";
              textCols = "col-span-4 md:col-span-8 lg:col-span-4 order-2 lg:order-1";
           } else if (layoutType === 2) {
              imageCols = "col-span-4 md:col-span-8 lg:col-span-12 order-1";
              textCols = "col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-4 order-2 text-center";
           } else {
              imageCols = "col-span-4 md:col-span-4 lg:col-span-6 order-1";
              textCols = "col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-8 order-2";
           }

           return (
             <motion.article 
                key={index} 
                variants={itemVariants}
                className={wrapperClass}
              >
                {/* CSS Browser Mockup */}
                <div className={cn("relative w-full rounded-sm overflow-hidden bg-background border border-border shadow-sm transition-shadow duration-500 hover:shadow-md", imageCols)}>
                  {/* Browser Header */}
                  <div className="h-8 w-full bg-secondary border-b border-border flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-border" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative w-full aspect-[16/9] bg-secondary/50 overflow-hidden">
                      {project.image !== 'none' ? (
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover object-top transition-transform duration-[1s] ease-out group-hover:scale-105"
                            priority={index === 0}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-muted-foreground text-xs uppercase tracking-widest">No Preview</span>
                        </div>
                      )}
                  </div>
                </div>

                {/* Text Block */}
                <div className={cn("flex flex-col gap-6", textCols)}>
                  <div className={cn("flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border-b border-border pb-4 mb-2", layoutType === 2 ? "justify-center" : "")}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>/</span>
                    <span>{project.category}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className={cn("flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold text-foreground uppercase tracking-wider mt-4", layoutType === 2 ? "justify-center" : "")}>
                    {project.tech.map((t: any, i: number) => (
                      <span key={i} className="flex items-center">
                        {t.name}
                        {i < project.tech.length - 1 && <span className="ml-3 text-muted-foreground">|</span>}
                      </span>
                    ))}
                  </div>

                  {project.link !== '#' && (
                    <Link href={project.link} target="_blank" className={cn("mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors group/link w-fit", layoutType === 2 ? "mx-auto" : "")}>
                      View Project <IconArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
             </motion.article>
           );
        })}
      </motion.div>
    </div>
  );
}
