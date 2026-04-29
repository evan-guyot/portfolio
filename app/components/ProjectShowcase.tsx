"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project, PROJECTS } from "../data/projects";
import cn from "../lib/cn";

export default function ProjectShowcase({
  projects = PROJECTS,
}: {
  projects?: Project[];
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  // 3-column split (md+)
  const col1 = projects.filter((_, i) => i % 3 === 0);
  const col2 = projects.filter((_, i) => i % 3 === 1);
  const col3 = projects.filter((_, i) => i % 3 === 2);

  // 2-column split (sm)
  const col2a = projects.filter((_, i) => i % 2 === 0);
  const col2b = projects.filter((_, i) => i % 2 === 1);

  const colProps = { hoveredId, setHoveredId, setSelected };

  return (
    <>
      <h2 className="text-center mb-8 text-2xl text-neutral-300 md:text-3xl font-semibold tracking-tight">
        Projects
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-start gap-10 mx-auto w-fit">
        {/* 2-column layout — visible on small screens only */}
        <div className="flex gap-3 w-fit shrink-0 md:hidden">
          <ProjectColumn data={col2a} offset="" {...colProps} />
          <ProjectColumn data={col2b} offset="mt-16" {...colProps} />
        </div>

        {/* 3-column layout — visible on md+ only */}
        <div className="hidden md:flex gap-3 w-fit shrink-0">
          <ProjectColumn data={col1} offset="" {...colProps} />
          <ProjectColumn data={col2} offset="mt-16" {...colProps} />
          <ProjectColumn data={col3} offset="mt-8" {...colProps} />
        </div>

        <div className="flex flex-col gap-5 w-fit shrink-0">
          {projects.map((p) => (
            <ProjectRow
              key={p.id}
              project={p}
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function ProjectColumn({
  data,
  offset,
  hoveredId,
  setHoveredId,
  setSelected,
}: {
  data: Project[];
  offset: string;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  setSelected: (project: Project | null) => void;
}) {
  return (
    <div className={cn("flex flex-col gap-3", offset)}>
      {data.map((p: Project) => (
        <ProjectCard
          key={p.id}
          project={p}
          hoveredId={hoveredId}
          onHover={setHoveredId}
          onClick={() => setSelected(p)}
        />
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  hoveredId,
  onHover,
  onClick,
}: {
  project: Project;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) {
  const isActive = hoveredId === project.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      className={cn(
        "w-37.5 h-40 rounded-xl cursor-pointer p-4 flex flex-col justify-between",
        "bg-neutral-900/50 border border-neutral-800 backdrop-blur transition-all duration-300",
        "hover:border-neutral-600 hover:scale-[1.03]",
        isDimmed && "opacity-60",
      )}
    >
      <div>
        <h3 className="text-sm font-semibold">{project.title}</h3>
        <p className="text-[11px] text-neutral-400 mt-1">{project.tech}</p>
      </div>
    </div>
  );
}

function ProjectRow({
  project,
  hoveredId,
  onHover,
  onClick,
}: {
  project: Project;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) {
  const isActive = hoveredId === project.id;

  return (
    <div
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      className={cn(
        "cursor-pointer transition w-fit",
        !isActive && hoveredId !== null && "opacity-50",
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "w-3 h-3 rounded bg-white/30 transition-all",
            isActive && "bg-white w-4",
          )}
        />
        <span className="font-semibold">{project.title}</span>
      </div>

      <p className="text-xs text-neutral-400 ml-6 mt-1 uppercase tracking-widest">
        {project.tech}
      </p>
    </div>
  );
}
