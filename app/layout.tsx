import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";
import Credit from "./components/pack/credit";

import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { MainNav } from "./components/pack/main-nav";

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
    <html lang="en" className={cn(fonts.nunito.className, "scroll-smooth")} suppressHydrationWarning style={{scrollBehavior:'smooth'}} >
      <body>
          <Providers>
            <MainNav />
             <div className="pt-24"> {/* Add padding top to avoid content being hidden by the fixed header */}
               {children}
             </div>
             <Credit />
          </Providers>
        </body>
    </html>
  );
}
