"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { smoothScroll } from "@/utils/smoothScroll";
import { Button } from "./ui/button";

const slot = `
  h-9 min-w-[64px]
  flex items-center justify-center
  border-2 border-black
  shadow-[2px_2px_0_#000]
  text-xs font-bold
  transition
  bg-[#c6c6c6] text-black
  dark:bg-[#3a3a3a] dark:text-white
  hover:bg-[#b0b0b0] dark:hover:bg-[#4a4a4a]
  active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
`;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Journey", "timeline"],
    ["About", "summary"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Awards", "achievements"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-black bg-[#AAAAAA] dark:bg-[#1f1f1f] shadow-[4px_4px_0_#000]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">

        {/* Logo Slot */}
        <Link
          href="/"
          className="
            h-9 px-3 flex items-center
            border-2 border-black
            bg-[#8bd971] dark:bg-[#4caf50]
            text-black font-extrabold
            shadow-[2px_2px_0_#000]
          "
        >
          Rohaz.dev
        </Link>

        {/* Desktop Hotbar */}
        <div className="hidden md:flex gap-2">
          {links.map(([label, target]) => (
            <Button
              key={label}
              onClick={() => {
                if (!target.startsWith("/")) smoothScroll(target);
              }}
              className={`${slot} ${
                pathname === target
                  ? "bg-[#8bd971] dark:bg-[#4caf50]"
                  : ""
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Mobile ☰ Slot */}
          <Button
            onClick={() => setOpen(!open)}
            className={`md:hidden ${slot}`}
          >
            ☰
          </Button>

          {/* Theme Toggle Slot */}
          <div className="h-9 w-9 flex items-center justify-center border-2 border-black bg-[#c6c6c6] dark:bg-[#3a3a3a] shadow-[2px_2px_0_#000]">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Inventory Menu */}
      {open && (
        <div className="md:hidden border-t-4 border-black bg-[#AAAAAA] dark:bg-[#1f1f1f] px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            {links.map(([label, target]) => (
              <Button
                key={label}
                onClick={() => {
                  setOpen(false);
                  if (!target.startsWith("/")) smoothScroll(target);
                }}
                className={slot}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
