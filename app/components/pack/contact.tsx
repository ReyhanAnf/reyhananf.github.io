'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react"

export default function Contact() {

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div id="contact" className="flex flex-col items-center justify-center my-16 w-full gap-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">GET IN TOUCH</h1>
                <p className="text-muted-foreground mt-2">Have a question or want to work together? Leave a message.</p>
            </div>

            <motion.form 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                action="https://formspree.io/f/YOUR_FORM_ID" // IMPORTANT: Replace with your Formspree form ID
                method="POST"
                className="w-full max-w-2xl space-y-6 bg-card p-8 rounded-xl border shadow-md"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your Message" required rows={6} />
                </div>
                <div className="text-right">
                    <Button type="submit">Send Message</Button>
                </div>
            </motion.form>
        </div>
    );
}
