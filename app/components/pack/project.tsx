import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PROJECT } from "@/lib/vars"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion";

const cardVariants = {
    offscreen: {
      opacity: 0.4,
      y: 50
    },
    onscreen: {
      opacity : 1,
      y: 0
    }
  };

export default function Project(){
    let category: any = []


    PROJECT.map((v,i)=>{
        if(!category.includes(v.category)){
            category.push(v.category)
        }
    })


    const [showmore, setShowmore] = useState(3)

    return (
        <div id="projects" className="flex flex-col items-center justify-center my-14 w-full gap-4 text-neutral-200 transition-all duration-700" >
            <div className="text-center ">
                <h1 className="text-3xl sm:4xl font-bold border-b-2 border-[#64CCC5]"><span className="text-[#64CCC5]">&</span>PROJECT</h1>
                <span>Just a simple project</span>
            </div>
            <motion.div 
            initial={cardVariants.offscreen}
            whileInView={cardVariants.onscreen}
            viewport={{ once: true}}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-[90%] my-2 justify-center items-start transition-all duration-700">
            {PROJECT.sort(( a, b ) => {
                if ( a.category < b.category ){
                    return -1;
                }
                if ( a.category > b.category ){
                    return 1;
                }
                return 0;
                }).map((project, index)=>(
                (index >= showmore ? (
                    ""
                ): (
                    <motion.div
                    
                    className="bg-[#0b2e3b] bg-opacity-50 backdrop-blur-sm p-1 rounded-md bg-cover shadow-lg w-full transition-all duration-1000" key={index}>
                    <Image src={project.image} alt={project.title} width={500} height={200} className="w-full h-60 sm:h-52 md:h-52 lg:h-64 rounded-md object-cover" />
                    <div className="m-1 py-3 px-2">
                        <div className="text-sm text-[#64CCC5]">
                            {project.category.toUpperCase()}
                        </div>
                        <div className="text-xl font-semibold text-neutral-200">
                            {project.title}
                        </div>
                        <div className="text-sm">
                            {project.description}
                        </div>
                    </div>
                    <div className="px-2 flex flex-row justify-between gap-2 items-center">
                        <div className="w-2/3 flex flex-row gap-2">
                            {project.tech.map((timg, i)=>(
                                <Image key={i} src={timg.image} alt={timg.name} width={60} height={40} className="w-6 h-6 rounded-md object-fill brightness-200" />
                            ))}
                        </div>
                        <Link href={project.source} className={cn(buttonVariants({variant: "link"}), "bg-[#64CCC5] bg-opacity-10 hover:bg-[#64CCC5] hover:text-gray-900")}>View</Link>
                        <Link href={project.link} className={cn(buttonVariants({variant: "link"}), "bg-[#64CCC5] bg-opacity-10 hover:bg-[#64CCC5] hover:text-gray-900")}>Visit</Link>
                    </div>
                </motion.div>
                ))
            ))}
            </motion.div>
            <Button variant={"outline"} className="hover:bg-[#64CCC5] hover:text-gray-900 border-[#64CCC5]" onClick={()=>{(showmore > 3 ?  setShowmore(3) : setShowmore(PROJECT.length))}}>{showmore > 3 ?  "Show Less" : "Show More"}</Button>
        </div>
    )
}
