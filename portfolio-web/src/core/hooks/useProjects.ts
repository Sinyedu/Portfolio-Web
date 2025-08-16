import { useState, useEffect } from "react";
import { Project } from "@/core/types/projectTypes";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  //TODO Input my projects to showcase my own
  useEffect(() => {
    setProjects([
      {
        id: "1",
        title: "Portfolio Website",
        description:
          "My personal site built with Next.js, Tailwind, and TypeScript.",
        tech: ["Next.js", "Tailwind", "TypeScript"],
        link: "https://myportfolio.com",
        github: "https://github.com/me/portfolio",
      },
      {
        id: "2",
        title: "Game UI Clone",
        description: "Recreated a gaming dashboard with React and Tailwind.",
        tech: ["React", "Tailwind"],
        github: "https://github.com/me/game-ui",
      },
    ]);
  }, []);

  return { projects };
}
