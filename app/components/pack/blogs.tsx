'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import type { BlogPost } from './types'
import { motion } from "framer-motion"
import Link from 'next/link'

type BlogsProps = {
  posts: BlogPost[]
}

const Blogs: React.FC<BlogsProps> = ({ posts }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="blogs" className="flex flex-col items-center justify-center my-16 w-full gap-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">BLOGS</h1>
        <p className="text-muted-foreground mt-2">My thoughts and findings on technology and development.</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-4xl flex flex-col"
      >
        {posts.map((post, index) => (
          <motion.div 
            key={post.id} 
            variants={itemVariants}
            className="w-full py-6 border-b border-border/50 flex justify-between items-center"
          >
            <h3 className="text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h3>
            <Button asChild variant="ghost">
              <Link href={`/blog/${post.id}`}>Read More</Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Blogs;