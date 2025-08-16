"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4">
      <h1
        className="text-3xl md:text-5xl text-green-400 glitch font-pixel"
        data-text="name"
      >
        Simon Erik Nyblom
      </h1>
      <p className="mt-4 text-base md:text-xl text-gray-300">
        Gamer. Frontend Developer. Language Lover.
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Link
          href="/projects"
          className="px-6 py-2 border-2 border-green-400 hover:bg-green-400 hover:text-black transition"
        >
          View Projects
        </Link>
        <a
          href="#contact"
          className="px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
