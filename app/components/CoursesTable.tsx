import Link from "next/link";
import { Course, COURSES } from "../data/courses";
import { FaGithub } from "react-icons/fa";
import { LangDictionary } from "../dictionaries/types";

export default function CoursesTable({
  courses = COURSES,
  dict,
}: {
  courses?: Course[];
  dict: LangDictionary;
}) {
  const displayedCourses = [...courses].reverse();

  return (
    <section className="max-w-5xl mx-auto mt-24">
      <h2 className="text-center mb-8 text-2xl md:text-3xl font-semibold text-text-secondary">
        {dict.sections.courses}
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-border bg-surface/40 backdrop-blur">
        <table className="w-full text-left text-sm">
          <thead className="text-text-muted uppercase tracking-widest text-xs border-b border-border">
            <tr>
              <th className="p-4">Course Title</th>
              <th className="p-4">Provider</th>
              <th className="p-4">Github Repo.</th>
              <th className="p-4">Course</th>
            </tr>
          </thead>

          <tbody className="last:border-b-0">
            {displayedCourses.map((c) => {
              const translated = dict.courses[c.id];

              return (
                <tr
                  key={c.id}
                  className="border-b border-border hover:bg-elevated/40 transition"
                >
                  <td className="p-4 font-medium text-text-primary">
                    {translated.name}
                  </td>

                  <td className="p-4 text-text-muted">{translated.provider}</td>

                  <td className="p-4 text-text-muted">
                    {c.github !== null ? (
                      <Link
                        href={c.github}
                        target="_blank"
                        className="text-sky-600 dark:text-sky-300"
                      >
                        <FaGithub
                          size={16}
                          className="text-center hover:text-sky-500 dark:hover:text-sky-400"
                        />
                      </Link>
                    ) : (
                      <>{dict.common.noLink}</>
                    )}
                  </td>

                  <td className="p-4">
                    <Link
                      href={c.link}
                      target="_blank"
                      className="text-sky-600 dark:text-sky-300 hover:underline hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      {dict.common.visit}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
