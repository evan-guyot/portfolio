export type Project = {
  title: string;
  favorite: boolean;
  skills: { name: string; level: number }[];
};

export const LANGUAGES = [
  {
    title: "C#",
    favorite: true,
    skills: [
      { name: ".NET Core", level: 4.5 },
      { name: ".NET Framework", level: 4 },
    ],
  },
  {
    title: "JavaScript & TypeScript",
    skills: [
      { name: "React", level: 4 },
      { name: "Angular", level: 4 },
      { name: "Next.js", level: 3.5 },
      { name: "Express.js", level: 3 },
      { name: "Electron", level: 2 },
    ],
  },
  {
    title: "SQL",
    skills: [
      { name: "PostgreSQL", level: 4 },
      { name: "SQL Server", level: 4 },
      { name: "Oracle Database", level: 4 },
    ],
  },
  {
    title: "React Native",
    skills: [{ name: "Expo", level: 3.5 }],
  },
  {
    title: "Java",
    skills: [{ name: "Spring Boot", level: 3.5 }],
  },
];
