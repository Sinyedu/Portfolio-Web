"use client";

import { useProjects } from "@/core/hooks/useProjects";

export default function ProjectsPage() {
  const { projects } = useProjects();

  return (
    <main className="min-h-screen p-8 mt-12 bg-black text-white">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 rounded-2xl p-6 hover:border-green-400 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-sm bg-gray-800 rounded-md text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-sm text-green-400 hover:underline"
                >
                  Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
