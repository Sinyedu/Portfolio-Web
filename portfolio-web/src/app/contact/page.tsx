"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thanks for reaching out! (This is a demo form 🚀)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-12 mt-12">
        <header className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-400 mb-4">
            Let’s Connect
          </h1>
          <p className="text-gray-300">
            Got a project idea, collaboration, or just want to chat about games
            & code? Drop me a message 👇
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        <section className="pt-8 text-center space-y-3">
          <p className="text-gray-400">Or reach me directly:</p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:nyblomsimon@gmail.com"
              className="text-green-400 hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/sinyedu"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/simonnyblom/"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
