import { FaLinkedinIn, FaGithub, FaLaptopCode } from "react-icons/fa";
import ProjectShowcase from "./components/ProjectShowcase";
import CoursesTable from "./components/CoursesTable";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16 font-mono">
      <section className="max-w-3xl mx-auto text-center space-y-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Hi, I&apos;m Evan GUYOT
        </h1>
        <p className="text-lg text-neutral-400">Welcome to my website!</p>

        <div className="flex justify-center pt-4">
          <div className="bg-white/20 p-2 rounded-xl flex justify-center gap-4">
            <Link
              href="https://github.com/evan-guyot"
              target="_blank"
              className="p-4 rounded-xl bg-neutral-900 w-fit transition"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/evan-guyot/"
              target="_blank"
              className="p-4 rounded-xl bg-neutral-900 w-fit transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.codingame.com/profile/62a1a27448bd855a9aa16d1220cf82b40245717"
              target="_blank"
              className="p-4 rounded-xl bg-neutral-900 w-fit transition"
            >
              <FaLaptopCode className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectShowcase />

      <CoursesTable />
    </main>
  );
}
