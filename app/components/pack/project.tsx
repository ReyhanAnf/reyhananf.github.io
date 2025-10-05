'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECT } from "@/lib/vars";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Project() {
    const [selectedProject, setSelectedProject] = useState(PROJECT[0]);

    return (
        <div id="projects" className="flex flex-col items-center justify-center my-16 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">Projects</h1>
                <p className="text-muted-foreground mt-2">A selection of my personal and academic projects.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl min-h-[70vh]">
                {/* Left Column: Project List */}
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    {PROJECT.map((project) => (
                        <button
                            key={project.title}
                            onClick={() => setSelectedProject(project)}
                            className={cn(
                                "w-full p-4 text-left rounded-lg transition-colors duration-300",
                                selectedProject.title === project.title
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "hover:bg-muted"
                            )}
                        >
                            <h3 className="font-semibold text-lg">{project.title}</h3>
                            <p className={cn("text-sm", selectedProject.title === project.title ? "text-primary-foreground/80" : "text-muted-foreground")}>
                                {project.category.toUpperCase()}
                            </p>
                        </button>
                    ))}
                </div>

                {/* Right Column: Project Preview */}
                <div className="w-full md:w-2/3 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedProject.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-card text-card-foreground rounded-xl border shadow-md overflow-hidden w-full h-full flex flex-col"
                        >
                            <div className="relative w-full h-96"> 
                                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mt-1 font-serif">{selectedProject.title}</h3>
                                <p className="text-muted-foreground mt-3 flex-grow min-h-[60px]">{selectedProject.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {selectedProject.tech.map((timg, i) => (
                                        <div key={i} className="flex items-center bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                                            <Image src={timg.image} alt={timg.name} width={14} height={14} className="mr-1.5" />
                                            {timg.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-muted/50 flex justify-end gap-2">
                                <Button asChild variant="secondary">
                                    <Link href={selectedProject.source}>View Source</Link>
                                </Button>
                                <Button asChild>
                                    <Link href={selectedProject.link}>Visit</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}