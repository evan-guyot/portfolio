export type Course = {
  id: string;
  name: string;
  provider: string;
  github: string | null;
  link: string;
};

export const COURSES: Course[] = [
  {
    id: "1",
    name: "Start with React",
    provider: "OpenClassroom",
    github: null,
    link: "https://openclassrooms.com/fr/courses/7008001-debutez-avec-react",
  },
  {
    id: "2",
    name: "Next.js Dashboard Full-Stack Web Application",
    provider: "Next.js",
    github: "https://github.com/evan-guyot/nextjs-course-fullstack",
    link: "https://nextjs.org/learn/dashboard-app",
  },
  {
    id: "3",
    name: "Build your first Astro Blog",
    provider: "Astro",
    github: "https://github.com/evan-guyot/astrojs-blog",
    link: "https://docs.astro.build/en/tutorial/0-introduction/",
  },
  {
    id: "4",
    name: "Develop in C# and .NET",
    provider: "Evan Boissonnot",
    github: null,
    link: "https://www.udemy.com/course/developper-avec-csharp-dotnet-formation-complete-dotnet",
  },
];
