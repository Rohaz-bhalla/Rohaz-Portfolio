"use client"

import Link from "next/link"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"
import { ModeToggle } from "@/components/ModeToggle"

export default function Navbar() {
  return (
    <nav className="w-full border-b-4 border-black bg-(--color-card) px-6 py-3 shadow-[4px_4px_0_#000]">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        {/* Logo / Title */}
        <Link
          href="/"
          className="text-sm font-bold tracking-wider hover:underline"
        >
          Rohaz.dev
        </Link>

        {/* Menu */}
        <Menubar className="border-4 border-black bg-(--color-background) gap-4 shadow-[3px_3px_0_#000]">
          
          <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href="/">Spawn</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>About</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href="/about">Player Stats</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Skills</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href="/skills">Inventory</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Work</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href="/projects">Projects</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/experience">Experience</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Contact</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href="/contact">Portal</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

        </Menubar>

        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  )
}
