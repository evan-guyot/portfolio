export type Project = {
  id: string;
  title: string;
  tech: string;
  description: string;
  github: string | null;
  live: string | null;
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "TalkCare - Q&A Platform",
    tech: "Vite 8 + React 19 + .NET 10 + MongoDB",
    description:
      "Full-stack StackOverflow-like platform built with Domain-Driven Design (DDD). Backend powered by .NET REST APIs with MongoDB, and a React 19 + Vite 8 frontend using TypeScript. Includes authentication, questions, answers, voting system and tagging.",
    github: null,
    live: "https://talkcare.eguyot.dev",
  },
  {
    id: "2",
    title: "Minesweeper Game",
    tech: "Angular 21 + .NET 10 (MVC + REST APIs)",
    description:
      "Modern Minesweeper game built with Angular 21 and a .NET 10 backend using MVC architecture with layered services. Supports both offline mode and online multiplayer mode with a global leaderboard and score tracking.",
    github: null,
    live: "https://minesweeper.eguyot.dev",
  },
  {
    id: "3",
    title: "Real-time Chat App",
    tech: "Vite + Express.js + WebSockets",
    description:
      "Real-time chat application built with TypeScript on both frontend and backend. Uses Express.js with WebSockets for instant messaging and a Vite-powered React frontend for fast and responsive UI.",
    github: "https://github.com/evan-guyot/express-chats",
    live: null,
  },
];
