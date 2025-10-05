'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "@/lib/vars";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconCertificate } from '@tabler/icons-react';

export default function Certificates() {
    const [showCount, setShowCount] = useState(2);

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return '';

    return (
        <div id="certificates" className="flex flex-col items-center justify-center my-16 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">CERTIFICATES & AWARDS</h1>
                <p className="text-muted-foreground mt-2">A collection of my certifications and recognitions.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
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
                            className="bg-card text-card-foreground rounded-xl border shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Placeholder for certificate image */}
                            <div className="relative w-full h-48 bg-secondary flex items-center justify-center">
                                <IconCertificate className="w-16 h-16 text-muted-foreground" />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mt-1">{cert.title}</h3>
                                <p className="text-sm text-primary font-medium mt-1">{cert.issuer}</p>
                                <p className="text-sm text-muted-foreground mt-2 flex-grow">Issued: {cert.date}</p>
                            </div>
                            <div className="p-4 bg-muted/50 flex justify-end gap-2">
                                <Button asChild variant="secondary">
                                    <Link href={cert.link} target="_blank">View Credential</Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {CERTIFICATES.length > 2 && (
                <div className="mt-8">
                    <Button 
                        variant="outline"
                        onClick={() => { showCount > 2 ? setShowCount(2) : setShowCount(CERTIFICATES.length) }}
                    >
                        {showCount > 2 ? "Show Less" : "Show More"}
                    </Button>
                </div>
            )}
        </div>
    );
}
