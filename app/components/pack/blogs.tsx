'use client'

import React, { useState } from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BlogPost } from './types'
import { motion } from "framer-motion";
import Image from "next/image"
import { Cross1Icon, MinusCircledIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons'

type BlogsProps = {
  posts: BlogPost[]
}

const cardVariants = {
  offscreen: {
    opacity: 0.4,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0
  }
};

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  const [showmore, setShowmore] = useState(6)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false) // State for fullscreen mode

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post === selectedPost ? null : post)  // Toggle post details
  }

  const handleCloseModal = () => {
    setSelectedPost(null)
  }

  const toggleFullscreen = () => {
    const modalElement = document.getElementById('modal') as HTMLElement;
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (modalElement.requestFullscreen) {
        modalElement.requestFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);  // Toggle fullscreen state
  }

  return (
    <div id="products" className="flex flex-col items-center justify-center my-14 w-full gap-4 text-neutral-200">
      <div className="text-center ">
        <h1 className="text-3xl sm:4xl font-bold border-b-2 border-[#64CCC5]"><span className="text-[#64CCC5]">&</span>BLOGS</h1>
        <span>Just a task</span>
      </div>

      <motion.div
        initial={cardVariants.offscreen}
        whileInView={cardVariants.onscreen}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-[90%] my-2 justify-between items-end transition-all duration-700">
        {posts.map((post, index) => (
          (index >= showmore ? (
            ""
          ) : (
            <div className="bg-[#0b2e3b] bg-opacity-50 backdrop-blur-sm p-1 rounded-md bg-cover shadow-lg min-h-80 flex justify-between flex-col" key={index}>
              { post.thumbnail && <Image src={post.thumbnail} alt={post.title} width={300} height={100} className="w-full h-32 sm:h-32 md:h-32 lg:h-32 rounded-md object-cover" />}
              <div className="m-1 py-3 px-2">
                <div className="text-sm text-[#64CCC5]">
                  {post.title.toUpperCase()}
                </div>
                <div className="text-xl font-semibold">
                  {post.title}
                </div>
              </div>
              <div className="px-2 flex flex-row justify-between gap-2 items-center">
                <Button 
                  variant={"link"} 
                  className={cn(buttonVariants({ variant: "link" }), "bg-[#64CCC5] bg-opacity-10 hover:bg-[#64CCC5] hover:text-gray-900")}
                  onClick={() => handlePostClick(post)}
                >
                  View
                </Button>
              </div>
            </div>
          ))
        ))}
      </motion.div>
      <Button variant={"outline"} className="hover:bg-[#64CCC5] hover:text-gray-900 border-[#64CCC5]" onClick={()=>{(showmore > 6 ?  setShowmore(6) : setShowmore(posts.length))}}>{showmore > 6 ?  "Show Less" : "Show More"}</Button>

      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div 
            id="modal" 
            className={`relative bg-[#0b2e3b] bg-opacity-70 backdrop-blur-sm p-6 rounded-lg w-[90%] md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto ${isFullscreen ? 'w-full h-full' : ''}`}
          >
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-white p-2">
              <Cross1Icon />
            </button>
            <button 
              onClick={toggleFullscreen} 
              className="absolute top-2 left-2 text-white p-2"
            >
              {isFullscreen ? < MinusCircledIcon /> : <OpenInNewWindowIcon />}
            </button>
            <h2 className="text-3xl font-semibold text-[#64CCC5] mb-4">{selectedPost.title}</h2>
            <div className="prose max-w-none prose-p:leading-relaxed prose-h2:text-xl prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-ul:pl-6 prose-li:marker:text-[#64CCC5]" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Blogs
