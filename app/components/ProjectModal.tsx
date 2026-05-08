"use client";

import { useEffect, useState } from "react";
import { Project } from "../data/projects";
import cn from "../lib/cn";
import Link from "next/link";
import { LangDictionary } from "../dictionaries/types";

export default function ProjectModal({
  project,
  dict,
  onClose,
}: {
  project: Project;
  dict: LangDictionary;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 200);
  };

  const t = dict.projects[project.id];

  return (
    <div
      onClick={handleClose}
      className={cn(
        "fixed inset-0 flex items-center justify-center z-50",
        "transition-all duration-200",
        isOpen ? "bg-black/70 backdrop-blur-sm" : "bg-black/0",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-elevated border border-border rounded-2xl p-8 max-w-lg w-full mx-4",
          "transform transition-all duration-200 ease-out",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4",
        )}
      >
        <h2 className="text-2xl font-semibold">{t.title}</h2>
        <p className="text-sm text-text-muted mb-4">{project.tech}</p>

        <p className="text-text-secondary mb-6">{t.description}</p>

        <div className="flex gap-4">
          {project.github === null && project.live === null ? (
            <>{dict.common.comingSoon}</>
          ) : (
            <>
              {project.github !== null && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-sky-600 dark:text-sky-300 hover:underline"
                >
                  {dict.common.github}
                </Link>
              )}

              {project.live !== null && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="text-sky-600 dark:text-sky-300 hover:underline"
                >
                  {dict.common.live}
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
