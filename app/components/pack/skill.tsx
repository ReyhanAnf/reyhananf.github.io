import Image from "next/image"
import Marquee from "react-fast-marquee"
import { SOFTWARE, TECH } from "@/lib/vars"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"


 export default function Skill(){
    const skills1 = [
        {
            title: "For Backend",
            tech: [TECH.go, TECH.python]
        },
        {
            title: "Framework Backend",
            tech: [TECH.gin, TECH.django, TECH.flask]
        },
        {
            title: "For Frontend",
            tech: [TECH.javascript, TECH.tailwind]
        },
        {
            title: "Framework Frontend",
            tech: [TECH.nextjs, TECH.reactjs, TECH.shadcn, TECH.aceternity]
        },
        {
            title: "For DevOps & Database",
            tech: [TECH.docker, TECH.mysql, TECH.postgresql]
        },
    ]

    const skills2 = [
        {
            title: "For Office",
            tech: [SOFTWARE.word, SOFTWARE.excel, SOFTWARE.powerpoint]
        },
        {
            title: "For Design Graphics",
            tech: [SOFTWARE.canva, SOFTWARE.inkscape, SOFTWARE.illustrator]
        },
        {
            title: "For Videography",
            tech: [SOFTWARE.capcut, SOFTWARE.aftereffects]
        },

    ]

    return (
        <div id="skills" className="flex flex-col justify-center items-center my-16 transition-all duration-500">
            <h1 className="text-3xl sm:4xl font-bold border-b-2 border-[#64CCC5]"><span className="text-[#64CCC5] ">&</span>MySkills</h1>
            <p className="text-center text-lg font-extralight leading-8 ">Everything is just basic, nothing deep hahaha</p>
            
                <Marquee pauseOnHover={true} speed={60} gradient gradientColor="#030712" gradientWidth={50} direction="left" className=" rounded-2xl py-3 overflow-hidden grid  h-44">
                    {skills1.map((skill,i)=>(
                        <div key={i} className=" flex flex-col justify-center items-center h-[350px] mx-5 gap-2 pr-20">
                            <div className="flex flex-row gap-10 items-center">
                            {skill.tech.map((tech, j)=>(
                                <HoverCard key={j}>
                                    <HoverCardTrigger>
                                        <Image key={j} width={50} height={50} src={tech.image} className={`w-${tech.size}`} alt={tech.name} />
                                    </HoverCardTrigger>
                                    <HoverCardContent className="bg-neutral-900 z-50">
                                        <div className="flex justify-between space-x-4">
                                            <div className="space-y-1 flex flex-row gap-4 items-center">
                                                <Image key={j+100} width={50} height={50} src={tech.image} className={`w-16`} alt={tech.name} />
                                                <h4 className="text-xl font-bold">{tech.name}</h4>
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>

                            ))}
                            </div>
                            <div>{skill.title}</div>
                    </div>
                    ))}
                </Marquee>
             <Marquee pauseOnHover={true} speed={60} gradient gradientColor="#030712" gradientWidth={50} direction="right" className=" rounded-2xl py-3 overflow-hidden grid  h-44">
                {skills2.map((skill,i)=>(
                    <div key={i} className=" flex flex-col justify-center items-center h-[350px] mx-5 gap-2 pr-20">
                        <div className="flex flex-row gap-10 items-center">
                        {skill.tech.map((tech, j)=>(
                            <HoverCard key={j}>
                                <HoverCardTrigger>
                                    <Image key={j} width={50} height={50} src={tech.image} className={`w-${tech.size}`} alt={tech.name} />
                                </HoverCardTrigger>
                                <HoverCardContent className="bg-neutral-900 z-50">
                                    <div className="flex justify-between space-x-4">
                                        <div className="space-y-1 flex flex-row gap-4 items-center">
                                            <Image key={j+100} width={50} height={50} src={tech.image} className={`w-16`} alt={tech.name} />
                                            <h4 className="text-xl font-bold">{tech.name}</h4>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>

                        ))}
                        </div>
                        <div>{skill.title}</div>
                 </div>
                ))}
               
          </Marquee>
            
           
        </div>
    )
 }
