export default function WorkPage() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vuejs",
    "Firebase",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Wordpress",
    "Git / GitHub",
    "C#",
    "Node.js",
    "REST / GraphQL",
    "i18n / Localization",
    "UI/UX Design",
  ];

  const funFacts = [
    "🎮 Gamer at heart — love strategy & RPGs",
    "💻 Always exploring new frontend tech",
    "🌍 Passionate about languages & cultures",
    "☕ Coffee powers my late-night coding sessions",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12 mt-12">
        {/* Heading */}
        <header>
          <h1 className="text-3xl md:text-5xl font-bold text-green-400 mb-4">
            My Work & Skills
          </h1>
          <p className="text-gray-300 text-lg">
            A blend of clean code, creative design, and a gamer’s curiosity.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-gray-700 rounded-xl px-4 py-3 text-center hover:border-green-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">A Bit About Me</h2>
          <ul className="space-y-3 text-gray-300">
            {funFacts.map((fact, idx) => (
              <li
                key={idx}
                className="border border-gray-700 rounded-xl px-4 py-3 hover:border-green-400 transition"
              >
                {fact}
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-8">
          <p className="text-gray-400">
            Curious about my projects? 👉{" "}
            <a href="/projects" className="text-green-400 hover:underline">
              Check them out here
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
