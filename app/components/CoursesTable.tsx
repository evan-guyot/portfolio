import Link from "next/link";
import { Course, COURSES } from "../data/courses";
import { FaGithub } from "react-icons/fa";

export default function CoursesTable({
  courses = COURSES,
}: {
  courses?: Course[];
}) {
  const displayedCourses = [...courses].reverse();

  return (
    <section className="max-w-5xl mx-auto mt-24">
      <h2 className="text-center mb-8 text-2xl md:text-3xl font-semibold text-neutral-300">
        Courses
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
        <table className="w-full text-left text-sm">
          <thead className="text-neutral-400 uppercase tracking-widest text-xs border-b border-neutral-800">
            <tr>
              <th className="p-4">Course&apos;s Title</th>
              <th className="p-4">Provider</th>
              <th className="p-4">Github repo.</th>
              <th className="p-4">Course</th>
            </tr>
          </thead>

          <tbody className="last:border-b-0">
            {displayedCourses.map((c) => (
              <tr
                key={c.id}
                className="border-b border-neutral-800 hover:bg-neutral-800/40 transition"
              >
                <td className="p-4 font-medium text-neutral-200">{c.name}</td>
                <td className="p-4 text-neutral-400">{c.provider}</td>
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
                    <>no link</>
                  )}
                </td>
                <td className="p-4">
                  <Link
                    href={c.link}
                    target="_blank"
                    className="text-sky-300 hover:underline hover:text-sky-400"
                  >
                    visit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
