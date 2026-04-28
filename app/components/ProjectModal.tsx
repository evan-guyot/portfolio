"use client";

import { useEffect, useState } from "react";
import { Project } from "../data/projects";
import cn from "../lib/cn";
import Link from "next/link";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
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
          "bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-lg w-full mx-4",
          "transform transition-all duration-200 ease-out",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4",
        )}
      >
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="text-sm text-neutral-400 mb-4">{project.tech}</p>

        <p className="text-neutral-300 mb-6">{project.description}</p>

        <div className="flex gap-4">
          {project.github === null && project.live === null ? (
            <>coming soon..</>
          ) : (
            <>
              {project.github !== null && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-sky-300 hover:underline"
                >
                  GitHub
                </Link>
              )}
              {project.live !== null && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="text-sky-300 hover:underline"
                >
                  Live
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
