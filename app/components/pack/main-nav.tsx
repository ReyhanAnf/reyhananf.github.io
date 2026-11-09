"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "projects", label: "Work" },
  { id: "experiments", label: "Playground" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
    setActive("");
    if (pathname !== "/") return;

    const updateActive = () => {
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        setActive("contact");
        return;
      }
      const current = links.filter(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 180;
      }).at(-1);
      setActive(current?.id ?? "");
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const href = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <header ref={header} className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Reyhan Andrea Firdaus — home" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-[11px] font-semibold tracking-tight text-background">raf<span className="text-blue-400">.</span></span>
          <span className="text-sm font-semibold tracking-tight">Reyhan Andrea F.</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }) => (
            <Link key={id} href={href(id)} aria-current={active === id ? "location" : undefined} className={cn("rounded-md px-4 py-2 text-[13px] font-medium transition-colors hover:bg-secondary hover:text-foreground", active === id ? "bg-secondary text-foreground" : "text-muted-foreground")}>
              {label}
            </Link>
          ))}
        </nav>
        <a href="mailto:andreafirdausr@gmail.com" className="hidden items-center gap-2 text-[13px] font-medium transition-colors hover:text-primary lg:inline-flex">
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button ref={menuButton} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-border hover:bg-secondary md:hidden">
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="border-t border-border bg-background px-5 py-3 md:hidden" onBlur={(event) => {
        if (!header.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}>
        {links.map(({ id, label }, index) => (
          <Link key={id} href={href(id)} onClick={() => setOpen(false)} aria-current={active === id ? "location" : undefined} className={cn("flex min-h-12 items-center justify-between rounded-md px-3 text-sm transition-colors hover:bg-secondary", active === id && "bg-secondary text-primary")}>
            {label}<span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
