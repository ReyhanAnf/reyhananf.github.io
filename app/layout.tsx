import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";
import Credit from "./components/pack/credit";

import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reyhan Andrea Firdaus",
  description: "Personal Portfolio",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fonts.inter.variable, "scroll-smooth")} suppressHydrationWarning style={{scrollBehavior:'smooth'}} >
      <body className="relative bg-[#F4F7FB] dark:bg-[#0B1120] text-foreground antialiased selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col">
          
          <Providers>
            {/* Minimal Top Navigation */}
            <header className="sticky top-0 z-50 w-full bg-[#F4F7FB]/90 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-border">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="font-bold tracking-tight text-sm uppercase">
                  Reyhan Andrea F.
                </div>
                <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
                  <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
                  <Link href="#writing" className="hover:text-foreground transition-colors">Writing</Link>
                  <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
                </nav>
              </div>
            </header>

            {/* Main Application Container */}
            <div className="flex-grow">
               {children}
            </div>
            
            <Credit />
          </Providers>
        </body>
    </html>
  );
}
