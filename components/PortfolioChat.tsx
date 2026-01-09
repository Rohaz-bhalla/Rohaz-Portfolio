"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function PortfolioChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  /* ================= INIT SESSION ================= */
  useEffect(() => {
    const stored = localStorage.getItem("portfolioChatSession");
    if (stored) setSessionId(stored);
  }, []);

  /* ================= CLEANUP ON LEAVE ================= */
  useEffect(() => {
    function cleanup() {
      if (!sessionId) return;

      navigator.sendBeacon(
        `https://support-core-pearl.vercel.app/api/chat?sessionId=${sessionId}`
      );

      localStorage.removeItem("portfolioChatSession");
    }

    window.addEventListener("beforeunload", cleanup);
    return () => window.removeEventListener("beforeunload", cleanup);
  }, [sessionId]);

  /* ================= SEND MESSAGE ================= */
  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    try {
      const res = await fetch(
        "https://support-core-pearl.vercel.app/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: userText,
            sessionId,
            source: "portfolio",
          }),
        }
      );

      const data = await res.json();

      if (data.sessionId && !sessionId) {
        setSessionId(data.sessionId);
        localStorage.setItem("portfolioChatSession", data.sessionId);
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-full flex-col">
      {/* Messages */}
      <div className="flex-1 space-y-2 overflow-y-auto p-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] border-2 border-black p-2 shadow-[2px_2px_0_#000]
              ${
                m.role === "user"
                  ? "ml-auto bg-muted text-black dark:bg-[#3a3a3a] dark:text-white"
                  : "bg-card text-black dark:bg-[#1f1f1f] dark:text-white"
              }`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <p className="text-xs text-muted-foreground">
            Bot is typing…
          </p>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 border-t-4 border-black p-2 bg-background">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="
            flex-1 border-2 border-black px-2 py-1 text-sm
            bg-background text-black
            dark:bg-[#1f1f1f] dark:text-white
          "
          placeholder="Ask about Rohaz..."
        />

        <Button
          onClick={sendMessage}
          disabled={loading}
          className="border-2 border-black"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
