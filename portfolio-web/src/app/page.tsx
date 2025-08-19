"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const messages = [
  "Welcome to my portfolio.",
  "I’m a Frontend Developer, Gamer, and Storyteller.",
  "Choose your path below...",
];

export default function HomePage() {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (messageIndex < messages.length) {
      if (charIndex < messages[messageIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + messages[messageIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setText("");
          setCharIndex(0);
          setMessageIndex(messageIndex + 1);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, messageIndex]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono px-4">
      <div className="border-2 border-green-400 rounded-xl p-6 max-w-2xl bg-black/80">
        <p className="text-lg md:text-2xl min-h-[2em]">{text}</p>
      </div>

      {messageIndex === messages.length && (
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="px-6 py-2 border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
          >
            View Projects
          </Link>
          <Link
            href="/work"
            className="px-6 py-2 border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
          >
            Skills & Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>
      )}
    </main>
  );
}
