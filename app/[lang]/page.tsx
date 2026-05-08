import { FaLinkedinIn, FaGithub, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import ProjectShowcase from "../components/ProjectShowcase";
import CoursesTable from "../components/CoursesTable";
import LanguagesSection from "../components/LanguageSection";
import { dictionaries, Locale } from "../dictionaries";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const dict = dictionaries[lang];

  return (
    <main className="min-h-screen bg-base text-text-primary px-6 py-16 font-mono">
      <ThemeToggle /> <LanguageSwitcher />
      <section className="max-w-3xl mx-auto text-center space-y-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {dict.hero.title}
        </h1>
        <p className="text-lg text-text-muted">{dict.hero.subtitle}</p>

        <div className="flex justify-center pt-4">
          <div className="bg-black/10 dark:bg-white/20 p-2 rounded-xl flex justify-center gap-4">
            <Link
              href="https://github.com/evan-guyot"
              target="_blank"
              className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 w-fit transition-transform hover:scale-105"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/evan-guyot/"
              target="_blank"
              className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 w-fit transition-transform hover:scale-105"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.codingame.com/profile/62a1a27448bd855a9aa16d1220cf82b40245717"
              target="_blank"
              className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 w-fit transition-transform hover:scale-105"
            >
              <FaLaptopCode className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      <ProjectShowcase dict={dict} />
      <CoursesTable dict={dict} />
      <LanguagesSection />
    </main>
  );
}
