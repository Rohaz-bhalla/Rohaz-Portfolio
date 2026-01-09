"use client";

import { useEffect, useState } from "react";

export default function RealmLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1; // 1% per tick
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => setVisible(false), 500);
      }
    }, 50); // 100 × 50ms = ~5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="w-[360px] border-4 border-black bg-[#1e1e1e] p-6 shadow-[6px_6px_0_#000] text-center">
        
        {/* Title */}
        <p className="mb-4 text-sm font-bold tracking-widest text-white">
          ⛏ GENERATING THE REALM OF ROHAZ
        </p>

        {/* Percentage */}
        <p className="mb-2 text-xs text-gray-300">
          {progress}%
        </p>

        {/* Minecraft XP Bar */}
        <div className="h-4 w-full border-2 border-black bg-[#3a3a3a] overflow-hidden">
          <div
            className="h-full bg-green-600 transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Hint */}
        <p className="mt-4 text-[10px] text-gray-400">
          Loading chunks...
        </p>
      </div>
    </div>
  );
}
