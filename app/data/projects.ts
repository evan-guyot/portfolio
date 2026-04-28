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
    title: "JS Chatting application",
    tech: "Vite + Express.js",
    description:
      "Real-time chat application built with TypeScript on both ends. Uses WebSockets via Express.js for instant message delivery, with a Vite-powered frontend for fast development and builds.",
    github: "https://github.com/evan-guyot/express-chats",
    live: null,
  },
  {
    id: "2",
    title: ".NET Chatting application",
    tech: ".NET + React.js",
    description:
      "Full-stack chat app powered by ASP.NET Core on the backend and React on the frontend. Leverages SignalR for real-time communication and a clean component-based UI.",
    github: "https://github.com/evan-guyot/ChatOn",
    live: null,
  },
  {
    id: "3",
    title: "Werewolf Game",
    tech: ".NET + React.js",
    description:
      "Online multiplayer Werewolf game supporting both human players and AI-controlled bots. Handles game state, role assignment, and turn-based logic through a .NET backend with a React interface.",
    github: null,
    live: null,
  },
];
