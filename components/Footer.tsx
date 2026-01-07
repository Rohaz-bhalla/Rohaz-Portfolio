"use client";

import { smoothScroll } from "@/utils/smoothScroll";
import { GithubIcon, LinkedinIcon, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-card shadow-[0_-4px_0_#000]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top row */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold tracking-widest">Rohaz.dev</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Full-Stack Developer • Building block by block
            </p>
          </div>

          {/* Center Links */}
          <div className="flex gap-4 text-xs">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("projects");
              }}
              className="border-2 border-black bg-muted px-3 py-1 shadow-[2px_2px_0_#000]"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("skills");
              }}
              className="border-2 border-black bg-muted px-3 py-1 shadow-[2px_2px_0_#000]"
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("contact");
              }}
              className="border-2 border-black bg-muted px-3 py-1 shadow-[2px_2px_0_#000]"
            >
              Contact
            </a>
          </div>

          {/* Right – Social Icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rohaz-bhalla/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black bg-muted p-2 shadow-[2px_2px_0_#000] hover:-translate-y-px"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/RohazBhalla"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black bg-muted p-2 shadow-[2px_2px_0_#000] hover:-translate-y-px"
              aria-label="X (Twitter)"
            >
              <X className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/Rohaz-bhalla"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black bg-muted p-2 shadow-[2px_2px_0_#000] hover:-translate-y-px"
              aria-label="X (Twitter)"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t-2 border-black pt-4 text-center text-[10px] text-muted-foreground">
          Designed & built by Rohaz Bhalla • Inspired by Minecraft UI
        </div>
      </div>
    </footer>
  );
}
