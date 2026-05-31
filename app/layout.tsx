import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";
import Credit from "./components/pack/credit";

import { Providers } from "./providers";
import { cn } from "@/lib/utils";

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
      <body>
          <Providers>
             <div className="pt-8 sm:pt-12">
               {children}
             </div>
             <Credit />
          </Providers>
        </body>
    </html>
  );
}
