/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
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

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- Load session from localStorage ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem("portfolioChatSession");
    if (stored) setSessionId(stored);
  }, []);

  /* ---------------- Auto scroll ---------------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* ---------------- Send message ---------------- */
  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch(
        "https://support-core-pearl.vercel.app/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: userMsg,
            sessionId,
            source: "portfolio",
          }),
        }
      );

      const data = await res.json();

      // Save session for continuity
      if (data.sessionId && !sessionId) {
        localStorage.setItem("portfolioChatSession", data.sessionId);
        setSessionId(data.sessionId);
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply ?? "No response." },
      ]);
    } catch (err) {
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

  /* ---------------- Clear chat ---------------- */
  function clearChat() {
    setMessages([]);
    localStorage.removeItem("portfolioChatSession");
    setSessionId(null);
  }

  return (
    <div className="flex h-full flex-col border-4 border-black bg-card shadow-[6px_6px_0_#000]">
      {/* Header */}
      <div className="flex items-center justify-between border-b-4 border-black bg-muted px-3 py-2">
        <p className="text-sm font-bold">🤖 Rohaz Bot</p>
        <Button
          size="sm"
          variant="secondary"
          className="border-2 border-black"
          onClick={clearChat}
        >
          Clear
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] border-2 border-black p-2 shadow-[2px_2px_0_#000]
              ${
                m.role === "user"
                  ? "ml-auto bg-muted"
                  : "bg-white/80"
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

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 border-t-4 border-black p-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about Rohaz..."
          className="flex-1 border-2 border-black px-2 text-sm outline-none"
        />
        <Button onClick={sendMessage} disabled={loading}>
          Send
        </Button>
      </div>
    </div>
  );
}
