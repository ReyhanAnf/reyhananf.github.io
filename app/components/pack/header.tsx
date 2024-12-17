
import Image from "next/image"
import { Cover } from "../ui/cover"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { FloatingDockSocial } from "../ui/floating-dock-menu"

export default function Header(){
    const name = `Reyhan`
    const lastname = `Firdaus`

    return(
        <header className="flex flex-col sm:flex-row w-full sm:justify-evenly items-center my-5 mb-7">
            <Image priority src={"/reyn_rbg.png"} alt="Reyhan" width={300} height={400} className="w-auto h-auto" />
            <div className="flex flex-col text-center justify-center gap-4">
                <h1 className="scroll-m-20 text-2xl sm:text-3xl lg:text-4xl items-start font-extrabold">
                    Hi, I`m <span className="text-[#64CCC5]">{`<`}</span>{name}<Cover className="sticky z-50">Andrea</Cover>{lastname}<span className="text-[#64CCC5]">{`/>`}</span>
                </h1>
                <div className="text-center text-lg text-neutral-200">
                Hello there, thanks for coming. I am not anyone here, but I enjoy backend or frontend development and developing a simple program.
                </div>
                <div className="flex gap-2 justify-center">
                    <Link href="mailto:andreafirdausr@gmail.com" className={cn(buttonVariants({variant: "link"}), "bg-[#64CCC5] text-neutral-900")}>Contact Me</Link>
                    <Link href="https://drive.google.com/file/d/16Of8GkhClPuutGVaFucXY_9Ae27-xUkr/view?usp=sharing" className={cn(buttonVariants({variant: "outline"}), "border-[#64CCC5] ")}>Download My Resume</Link>
                </div>
                <div className="">
                <FloatingDockSocial />
                </div>
            </div>
        </header>
    )
}
