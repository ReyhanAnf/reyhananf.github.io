import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";
import Credit from "./components/pack/credit";
import { MainNav } from "./components/pack/main-nav";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Reyhan Andrea Firdaus — Software Engineer",
  description: "Software engineer building thoughtful web applications with Laravel, React, and Next.js. Explore selected projects, experiments, and experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fonts.inter.variable} ${fonts.playfairDisplay.variable}`} suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Providers>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <MainNav />
          <div id="main-content" tabIndex={-1} className="flex-grow">{children}</div>
          <Credit />
        </Providers>
      </body>
    </html>
  );
}
