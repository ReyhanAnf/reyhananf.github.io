'use client';

import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

export default function Header() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleMailClick = () => {
    window.open("mailto:andreafirdausr@gmail.com", "_blank");
  };

  return (
    <motion.header
      id="home"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 items-end min-h-[60vh] pb-12"
    >
      <motion.div variants={fadeUp} className="col-span-4 md:col-span-8 lg:col-span-10 flex flex-col gap-8">
        
        <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-muted-foreground border-b border-border pb-4 mb-4">
          <span>00</span>
          <span>/</span>
          <span>INTRODUCE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Reyhan Andrea Firdaus
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
          Software Engineer
        </p>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            onClick={handleMailClick} 
            variant="outline"
            className="rounded-none border-border bg-background hover:bg-foreground hover:text-background text-foreground px-8 py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300"
          >
            Hubungi Saya
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
