"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioChat from "./PortfolioChat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6 z-50
            h-12 w-12
            border-4 border-black
            bg-green-600
            shadow-[4px_4px_0_#000]
            text-white font-bold
            active:translate-x-1 active:translate-y-1 active:shadow-none
          "
        >
          💬
        </button>
      )}

      {/* Chat Popup */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6 z-50
            w-[320px] sm:w-90
            h-105                     /* 👈 HEIGHT HERE */
            border-4 border-black
            bg-card
            shadow-[6px_6px_0_#000]
            flex flex-col                 /* 👈 IMPORTANT */
          "
        >
          {/* Close Button */}
          <div className="flex justify-end border-b-4 border-black bg-muted px-2 py-1">
            <Button
              size="sm"
              variant="secondary"
              className="border-2 border-black"
              onClick={() => setOpen(false)}
            >
              ✕
            </Button>
          </div>

          {/* Chat */}
          <div className="flex-1 overflow-hidden">
            <PortfolioChat />
          </div>
        </div>
      )}
    </>
  );
}
