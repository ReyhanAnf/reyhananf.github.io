'use client'

import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { EXPERIMENT } from "@/lib/vars";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IconX } from '@tabler/icons-react';

export default function Experiment() {
    const [selectedProject, setSelectedProject] = useState(EXPERIMENT[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project: any) => {
        setSelectedProject(project);
        if (window.innerWidth < 768) { // md breakpoint
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const ProjectDetails = ({ project }: { project: any }) => (
        <div className="bg-card text-card-foreground rounded-xl border shadow-md overflow-hidden w-full h-full flex flex-col">
            <div className="relative w-full h-64"> 
                <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mt-1 font-serif">{project.title}</h3>
                <p className="text-muted-foreground mt-3 flex-grow min-h-[60px]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((timg: any, i: number) => (
                        <div key={i} className="flex items-center bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                            {timg.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-4 bg-muted/50 flex justify-end gap-2">
                <Button asChild variant="secondary">
                    <Link href={project.source}>View Source</Link>
                </Button>
                <Button asChild>
                    <Link href={project.link}>Visit</Link>
                </Button>
            </div>
        </div>
    );

    return (
        <div id="experiments" className="flex flex-col items-center justify-center my-16 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">Experimental Projects</h1>
                <p className="text-muted-foreground mt-2">A collection of my experimental and personal projects.</p>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col md:flex-row gap-8 w-full max-w-6xl min-h-[70vh]">
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                    {EXPERIMENT.map((project) => (
                        <button
                            key={project.title}
                            onClick={() => handleProjectClick(project)}
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
                <div className="w-full md:w-1/2 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedProject.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <ProjectDetails project={selectedProject} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden w-full max-w-6xl">
                {EXPERIMENT.map((project) => (
                    <button
                        key={project.title}
                        onClick={() => handleProjectClick(project)}
                        className="w-full p-4 text-left rounded-lg transition-colors duration-300 bg-card border shadow-md hover:bg-muted"
                    >
                        <h3 className="font-semibold text-lg text-card-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.category.toUpperCase()}</p>
                    </button>
                ))}
            </div>

            {/* Modal for Mobile */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 md:hidden" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-card text-left align-middle shadow-xl transition-all">
                                    <div className="relative">
                                        <ProjectDetails project={selectedProject} />
                                        <button onClick={closeModal} className="absolute top-2 right-2 p-1 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80">
                                            <IconX size={20} />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}