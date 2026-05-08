import { FaStar } from "react-icons/fa";
import { LANGUAGES } from "../data/languages";

export default function LanguagesSection() {
  return (
    <section className="max-w-5xl mx-auto mt-24">
      <h2 className="text-center mb-8 text-2xl md:text-3xl font-semibold text-neutral-300">
        Languages & Frameworks
      </h2>

      <div className="columns-1 md:columns-2 gap-4 space-y-4">
        {LANGUAGES.map((lang) => (
          <div
            key={lang.title}
            className="break-inside-avoid rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur p-6 transition hover:bg-neutral-900/70"
          >
            <div className="flex items-center gap-2 mb-5">
              <h3 className="text-lg font-semibold text-neutral-100">
                {lang.title}
              </h3>

              {lang.favorite && <FaStar className="text-yellow-400 w-4 h-4" />}
            </div>

            <div className="flex flex-col gap-4">
              {lang.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full text-xs tracking-wide uppercase bg-neutral-800 text-neutral-300 border border-neutral-700">
                      {skill.name}
                    </span>

                    <span className="text-xs text-neutral-400">
                      {skill.level}/5
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-neutral-300 transition-all duration-500"
                      style={{
                        width: `${(skill.level / 5) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
