'use client'

import React from 'react'
import type { BlogPost } from './types'
import { motion, Variants } from "framer-motion"
import Link from 'next/link'

import { IconArrowUpRight, IconBooks } from '@tabler/icons-react'

type BlogsProps = {
  posts: BlogPost[]
}

const Blogs: React.FC<BlogsProps> = ({ posts }) => {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="flex flex-col w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-3xl flex flex-col gap-3"
      >
        {posts.map((post, index) => (
          <motion.div 
            key={post.id} 
            variants={itemVariants}
            className="w-full bg-secondary/25 hover:bg-secondary/40 p-4 rounded-xl flex justify-between items-center group transition-all duration-300 cursor-pointer"
          >
            <div className="flex-grow min-w-0 pr-4">
              <div className="flex items-center gap-2 mb-1.5 text-primary text-[10px] font-semibold tracking-wider uppercase">
                <IconBooks className="w-3.5 h-3.5" />
                <span>Technical Blog</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground lowercase">reyntech.blogspot.com</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug truncate">
                <Link href={post.link || `/blog/${post.id}`} target="_blank">{post.title}</Link>
              </h4>
            </div>
            <Link href={post.link || `/blog/${post.id}`} target="_blank" className="w-8 h-8 rounded-lg bg-card text-muted-foreground flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 flex-shrink-0">
              <IconArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Blogs;