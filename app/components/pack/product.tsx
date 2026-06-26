'use client';

import { PRODUCT } from "@/lib/vars";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function Product() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border-b border-border pb-4 mb-12">
        <span>02</span>
        <span>/</span>
        <span>Digital Products</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
      >
        {PRODUCT.map((product, index) => (
          <motion.article 
            key={index} 
            variants={itemVariants}
            className="flex flex-col gap-6 group"
          >
            {/* Minimal Image Container */}
            <div className="relative w-full aspect-video bg-secondary/50 overflow-hidden border border-border">
                {product.image && product.image !== 'none' ? (
                  <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill 
                      className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-xs uppercase tracking-widest">No Preview</span>
                  </div>
                )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{product.category}</span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
                {product.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-semibold text-foreground uppercase tracking-widest mt-2">
                {product.tech?.map((t: any, i: number) => (
                  <span key={i} className="flex items-center">
                    {t.name}
                    {i < product.tech.length - 1 && <span className="ml-3 text-muted-foreground">|</span>}
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
