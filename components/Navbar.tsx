"use client";

import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "@/components/ModeToggle";
import { smoothScroll } from "@/utils/smoothScroll";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-(--color-card) px-6 py-3 shadow-[4px_4px_0_#000]">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-widest hover:underline"
        >
          Rohaz.dev
        </Link>

        {/* Minecraft Menu */}
        <Menubar className="border-4 border-black bg-(--color-background) gap-2 px-2 shadow-[3px_3px_0_#000]">
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link
                href="/"
                className="px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]"
              >
                Home
              </Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link
                href="#timeline"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("timeline");
                }}
                className="px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]"
              >
                My Journey
              </Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link
                href="#summary"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("summary");
                }}
                className="px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]"
              >
                About
              </Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("skills");
                }}
                className="px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]"
              >
                Skills
              </Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("projects");
                }}
                className="px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]"
              >
                Projects
              </Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link
                href="#achievements"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("achievements");
                }}
                className="px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]"
              >
                Achievements
              </Link>
            </MenubarTrigger>
          </MenubarMenu>

          {/* Contact dropdown */}
          <MenubarMenu>
            <MenubarTrigger className="px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
              Contact
            </MenubarTrigger>

            <MenubarContent className="border-4 border-black bg-(--color-card) shadow-[4px_4px_0_#000] p-2 space-y-2">
              <a
                href="tel:+916283583232"
                className="block border-2 border-black bg-muted px-3 py-1 text-xs shadow-[2px_2px_0_#000]"
              >
                📞 +91 62835 83232
              </a>

              <a
                href="mailto:rohazbhalla3@gmail.com"
                className="block border-2 border-black bg-muted px-3 py-1 text-xs shadow-[2px_2px_0_#000]"
              >
                ✉️ rohazbhalla3@gmail.com
              </a>

              <a
                href="/docs/Rohaz_Bhalla_Software_Engineer.pdf"
                download
                className="block border-2 border-black bg-green-700 text-white px-3 py-1 text-xs shadow-[2px_2px_0_#000] hover:bg-green-800"
              >
                ⬇ Download Resume
              </a>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
}
