'use client'

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Contact() {

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleMailClick = () => {
    const subject = encodeURIComponent("Let's Collaborate!");
    const body = encodeURIComponent("Hi Reyhan, I’d love to connect with you about a project or collaboration.");
    window.open(`mailto:andreafirdausr@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };
  return '';
//   return (
    // <div id="contact" className="flex flex-col items-center justify-center my-16 w-full gap-4">
    //   <div className="text-center mb-12">
    //     <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
    //       Let's Connect
    //     </h1>
    //     <p className="text-muted-foreground mt-2">
    //       Feel free to reach out directly via email.
    //     </p>
    //   </div>

    //   <motion.div
    //     variants={itemVariants}
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true, amount: 0.2 }}
    //     className="flex flex-col items-center justify-center gap-4 bg-card p-8 rounded-xl border shadow-md"
    //   >
    //     <Button onClick={handleMailClick} className="px-6 py-3 text-lg">
    //       📧 Send Email
    //     </Button>

    //     <a
    //       href="mailto:andreafirdausr@gmail.com"
    //       className="text-muted-foreground hover:text-primary transition"
    //     >
    //       andreafirdausr@gmail.com
    //     </a>
    //   </motion.div>
    // </div>
//   );
}
