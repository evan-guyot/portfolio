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
      { name: "Vite", level: 3.5 },
      { name: "Next.js", level: 3.5 },
      { name: "Express.js", level: 3 },
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
    title: "NoSQL",
    skills: [
      { name: "MongoDB", level: 3.5 },
      { name: "Firestore", level: 2.5 },
    ],
  },
  {
    title: "React Native",
    skills: [{ name: "Expo", level: 3.5 }],
  },
];
