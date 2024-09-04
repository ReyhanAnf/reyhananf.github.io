import React from "react";
import { FloatingDock, FloatingDockDesktop } from "./floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandProducthunt,
  IconBrandSkype,
  IconBrandTelegram,
  IconBrandX,
  IconCapProjecting,
  IconHome,
  IconSkiJumping,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockMenu() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Project",
      icon: (
        <IconCapProjecting className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#projects",
    },
  
    {
      title: "Products",
      icon: (
        <IconBrandProducthunt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#products",
    },
    {
      title: "Skills",
      icon: (
        <IconSkiJumping className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#skills",
    },
  ];
  return (
    <div className="flex fixed justify-end w-full mr-6 pr-6 md:-right-[30%]">
      <FloatingDock
      mobileConst={false}
      defaultOpen={false}
        items={links}
      />
    </div>
  );
}

export function FloatingDockSocial() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/reyhan-andrea-firdaus/",
    },

    {
      title: "Telegram",
      icon: (
        <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://t.me/reyhananf",
    },
  
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/reyhn.anf",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ReyhanAnf",
    },
  ];
  return (
    <div className="flex justify-center w-full">
      <FloatingDockDesktop items={links} className="flex flex-row" />
    </div>
  );
}
