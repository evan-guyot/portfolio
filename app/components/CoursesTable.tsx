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
      <h2 className="text-center mb-8 text-2xl md:text-3xl font-semibold text-neutral-300">
        {dict.sections.courses}
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
        <table className="w-full text-left text-sm">
          <thead className="text-neutral-400 uppercase tracking-widest text-xs border-b border-neutral-800">
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
                  className="border-b border-neutral-800 hover:bg-neutral-800/40 transition"
                >
                  <td className="p-4 font-medium text-neutral-200">
                    {translated.name}
                  </td>

                  <td className="p-4 text-neutral-400">
                    {translated.provider}
                  </td>

                  <td className="p-4 text-neutral-400">
                    {c.github !== null ? (
                      <Link
                        href={c.github}
                        target="_blank"
                        className="text-sky-300"
                      >
                        <FaGithub
                          size={16}
                          className="text-center hover:text-sky-400"
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
                      className="text-sky-300 hover:underline hover:text-sky-400"
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
