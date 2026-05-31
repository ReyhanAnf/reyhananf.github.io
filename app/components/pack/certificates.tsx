'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "@/lib/vars";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconTrophy, IconAward, IconArrowUpRight } from '@tabler/icons-react';

export default function Achievements() {
    const [showCount, setShowCount] = useState(2);

    const cardVariants = {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -15 },
    };

    return (
        <div className="flex flex-col w-full gap-3">
                <AnimatePresence>
                    {CERTIFICATES.slice(0, showCount).map((cert) => (
                        <motion.div
                            key={cert.title}
                            layout
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="bg-secondary/25 hover:bg-secondary/40 p-4 rounded-xl flex items-center justify-between gap-3 group transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-10 h-10 rounded-lg bg-card text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <IconTrophy className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-sm text-foreground truncate">{cert.title}</h4>
                                        <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">Verified</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                                        Issued by <span className="text-primary font-semibold">{cert.issuer}</span>
                                    </p>
                                    <p className="text-[10px] text-muted-foreground/80 mt-0.5">Completion: {cert.date}</p>
                                </div>
                            </div>
                            <Link href={cert.link} target="_blank" className="w-8 h-8 rounded-lg bg-card text-muted-foreground flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 flex-shrink-0" title="Verify Credential">
                                <IconArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            {CERTIFICATES.length > 2 && (
                <div className="mt-2 flex justify-center">
                    <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => { showCount > 2 ? setShowCount(2) : setShowCount(CERTIFICATES.length) }}
                        className="text-xs text-muted-foreground hover:text-primary"
                    >
                        {showCount > 2 ? "Show Less" : "Show All"}
                    </Button>
                </div>
            )}
        </div>
    );
}
