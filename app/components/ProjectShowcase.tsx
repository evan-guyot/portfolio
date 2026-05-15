"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project, PROJECTS } from "../data/projects";
import { LangDictionary } from "../dictionaries/types";
import cn from "../lib/cn";

export default function ProjectShowcase({
  projects = PROJECTS,
  dict,
}: {
  projects?: Project[];
  dict: LangDictionary;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const col1 = projects.filter((_, i) => i % 3 === 0);
  const col2 = projects.filter((_, i) => i % 3 === 1);
  const col3 = projects.filter((_, i) => i % 3 === 2);

  const col2a = projects.filter((_, i) => i % 2 === 0);
  const col2b = projects.filter((_, i) => i % 2 === 1);

  const colProps = { hoveredId, setHoveredId, setSelected };

  return (
    <>
      <h2 className="text-center mb-8 text-2xl text-text-secondary md:text-3xl font-semibold tracking-tight">
        {dict.sections.projects}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-start gap-10 mx-auto w-fit">
        <div className="flex gap-3 w-fit shrink-0 md:hidden">
          <ProjectColumn data={col2a} offset="" {...colProps} dict={dict} />
          <ProjectColumn
            data={col2b}
            offset="mt-16"
            {...colProps}
            dict={dict}
          />
        </div>

        <div className="hidden md:flex gap-3 w-fit shrink-0">
          <ProjectColumn data={col1} offset="" {...colProps} dict={dict} />
          <ProjectColumn data={col2} offset="mt-16" {...colProps} dict={dict} />
          <ProjectColumn data={col3} offset="mt-8" {...colProps} dict={dict} />
        </div>

        <div className="flex flex-col gap-5 w-fit shrink-0">
          {projects.map((p) => (
            <ProjectRow
              key={p.id}
              project={p}
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onClick={() => setSelected(p)}
              dict={dict}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          dict={dict}
          onClose={() => setSelected(null)}
        />
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
  dict,
}: {
  data: Project[];
  offset: string;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  setSelected: (project: Project | null) => void;
  dict: LangDictionary;
}) {
  return (
    <div className={`flex flex-col gap-3 ${offset}`}>
      {data.map((p) => (
        <ProjectCard
          key={p.id}
          project={p}
          dict={dict}
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
  dict,
  hoveredId,
  onHover,
  onClick,
}: {
  project: Project;
  dict: LangDictionary;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) {
  const isActive = hoveredId === project.id;
  const isDimmed = hoveredId !== null && !isActive;

  const t = dict.projects[project.id];

  return (
    <div
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      className={cn(
        "w-37.5 h-40 rounded-xl cursor-pointer p-4 flex flex-col justify-between",
        "bg-surface/50 border border-border backdrop-blur transition-transform duration-300",
        "hover:border-border-subtle hover:scale-[1.03]",
        isDimmed && "opacity-60",
      )}
    >
      <div>
        <h3 className="text-sm font-semibold">{t.title}</h3>
        <p className="text-[11px] text-text-muted mt-1">{project.tech}</p>
      </div>
    </div>
  );
}

function ProjectRow({
  project,
  dict,
  hoveredId,
  onHover,
  onClick,
}: {
  project: Project;
  dict: LangDictionary;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) {
  const isActive = hoveredId === project.id;
  const t = dict.projects[project.id];

  return (
    <div
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      className={cn(
        "cursor-pointer w-fit",
        !isActive && hoveredId !== null && "opacity-50",
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "w-3 h-3 rounded bg-neutral-400 dark:bg-white/30 duration-300",
            isActive && "bg-neutral-700 dark:bg-white w-4",
          )}
        />

        <span className="font-semibold">{t.title}</span>
      </div>

      <p className="text-xs text-text-muted ml-6 mt-1 uppercase tracking-widest">
        {project.tech}
      </p>
    </div>
  );
}
