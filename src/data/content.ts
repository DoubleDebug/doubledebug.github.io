/** Trusted HTML authored in this file — rendered with `set:html`. */
export type Html = string;

export type Profile = {
  firstName: string;
  lastName: string;
  fullName: string;
  brand: string;
  location: string;
  description: Html;
  quote: string;
  siteUrl: string;
};

export type AboutFact = {
  key: string;
  value: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  company: string | null;
  client: string | null;
  teamSize: string | null;
  duration: string;
  tags: string[];
  skills: string[];
  overview: string;
  role: string;
  highlights: string[];
};

export type JourneyEntry = {
  date: string;
  badge: { label: string; color: "red" | "blue" } | null;
  role: string;
  org: string;
  description: string;
};

export type ContactLink = {
  platform: string;
  label: string;
  href: string;
};

export const profile: Profile = {
  firstName: "Dušan",
  lastName: "Dodić",
  fullName: "Dušan Dodić",
  brand: "dušan dodić",
  location: "Niš, Serbia",
  description: `
  <ul>
    <li>
    I'm a full time frontend engineer at <a href="https://ascalab.com/">Ascalab</a>,
    a Slovenian company focused on software development and product testing.
    </li>
    <li>
    I've been drawn to the full process of software development ever since I discovered
    it in middle school.
    </li>
    <li>
    In my free time I enjoy nature, playing with my dog, table tennis and a good crime thriller.
    </li>
    </ul>
  `,
  quote: "I obsess over the structural details so the end user never has to.",
  siteUrl: "https://doubledebug.vercel.app/",
};

export const aboutFacts: AboutFact[] = [
  { key: "role", value: "Frontend engineer @ Ascalab" },
  { key: "location", value: "Niš, Serbia" },
  { key: "education", value: "Faculty of Electronic Engineering, Niš" },
  {
    key: "interests",
    value:
      "Full stack development · UX · Clean architecture · Test driven development · Teamwork & Team leadership",
  },
  { key: "stack", value: "Typescript · React · NextJS · Firebase · Supabase · NodeJS" },
  { key: "experience", value: "5 years" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "technical skills",
    items: [
      "Typescript",
      "React",
      "NextJS",
      "NodeJS",
      "SignalR & websockets",
      "Firebase & Supabase",
      "SQL & databases",
    ],
  },
  {
    label: "soft skills",
    items: [
      "Client communication",
      "Teamwork and team leadership",
      "Requirement analysis",
      "Code review & debugging",
      "Deployment & releases",
      "Task estimation",
      "Context-rich documentation",
    ],
  },
];

export const skillTagSubtitle: string =
  "Other skills related to tooling, task management and documentation:";

export const skillTags: string[] = [
  "windows",
  "linux",
  "git",
  "vs code",
  "visual studio",
  "docker",
  "various CLI tools",
  "figma",
  "jira",
  "trello",
  "confluence",
  "excalidraw",
];

/**
 * Temporarily disabled: hides the per-project detail pages and turns the
 * project cards into plain, non-clickable cards. Set back to true to restore
 * both the pages and their links.
 */
export const projectPagesEnabled = false;

export const projects: Project[] = [
  {
    slug: "energy-market",
    title: "Energy Market",
    description: "Real-time trading platform for electricity futures.",
    company: "Ascalab",
    client: "Petrol",
    teamSize: "3–6 people",
    duration: "3 years",
    tags: ["NextJS", "Typescript", "SignalR"],
    skills: [
      "NextJS",
      "React",
      "Typescript",
      "NodeJS",
      "SignalR",
      "websockets",
      "MUI design system",
      "Redux",
      "Vitest",
      "React Query",
      "C# .NET",
    ],
    overview:
      "A real-time trading platform for electricity and natural gas, built for Petrol — one of the largest energy companies in the region. The platform lets traders follow live market data and execute trades on a system where latency and correctness directly translate into money, so real-time communication over SignalR and websockets sits at the core of the frontend architecture.",
    role: "I worked on the project for three years as a frontend engineer and later took on team leadership responsibilities — coordinating a team of 3–6 people, managing the project, communicating extensively with the client and writing documentation, all while maintaining a live production app in cooperation with an external DevOps team.",
    highlights: [
      "Real-time market data and trading flows built on SignalR and websockets",
      "UI built with React, NextJS and the MUI design system, with Redux and React Query for state and data fetching",
      "Unit and component testing with Vitest against a C# .NET backend",
      "Team leadership, project management and client-facing communication",
      "Ongoing maintenance of a live production app, working alongside an external DevOps team",
    ],
  },
  {
    slug: "iot",
    title: "IOT",
    description:
      "Data-heavy admin dashboard with a complex authentication scheme and dozens of modules.",
    company: "Ascalab",
    client: "Petrol",
    teamSize: "4–8 people",
    duration: "3.5 years",
    tags: ["NextJS", "NextAuth", "MUI", "DataGridPro"],
    skills: [
      "NextJS",
      "React",
      "Typescript",
      "NodeJS",
      "NextAuth",
      "MUI component suite",
      "MUI premium components",
      "Client communication",
      "Wireframe implementation",
      "Multi-environment deployments",
      "Production releases",
    ],
    overview:
      "A data-heavy administration dashboard for Petrol’s IOT systems: dozens of modules behind a complex authentication scheme, presented through a standardized, table-focused UI. The size of the module surface and the volume of data made consistency and reusability the main engineering challenges — shared table patterns, filters and forms that behave identically across the whole app.",
    role: "Over three and a half years I worked as a frontend engineer on a team of 4–8 people — implementing client wireframes, communicating with the client both online and in person, providing developer support for the live production app, and preparing releases and deployments across multiple environments.",
    highlights: [
      "Dozens of modules unified behind a standardized, table-focused UI",
      "Complex authentication scheme implemented with NextAuth",
      "Built with the MUI component suite, including premium data-grid components",
      "Deployments to multiple environments and preparation of production releases",
      "Direct client collaboration — from wireframes to developer support for the live app",
    ],
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant",
    description: "Healthcare AI assistant for document analysis, summarization and log processing.",
    company: "Ascalab",
    client: "Bridgehead",
    teamSize: "4–6 people",
    duration: "1 year",
    tags: ["React", "EntraID", "Docker"],
    skills: [
      "React",
      "Typescript",
      "NextJS",
      "NextAuth",
      "Microsoft EntraID auth",
      "React Query",
      "Vitest",
      "Docker",
      "Gitlab",
    ],
    overview:
      "A healthcare AI assistant built for Bridgehead, used for document analysis, summarization of extensive documentation and log processing. In a domain where accuracy and access control matter as much as the AI itself, the app pairs an AI-driven workflow with enterprise-grade authentication through Microsoft EntraID.",
    role: "I spent a year on the project as a frontend engineer in a team of 4–6 people, building the React/NextJS frontend, integrating NextAuth with Microsoft EntraID, and covering the data layer and tests with React Query and Vitest in a Dockerized GitLab workflow.",
    highlights: [
      "AI-assisted document analysis, summarization and log processing for healthcare",
      "Enterprise authentication via NextAuth with Microsoft EntraID",
      "Data fetching and caching with React Query, tested with Vitest",
      "Dockerized development and CI on GitLab",
    ],
  },
  {
    slug: "schedule-maker",
    title: "Schedule Maker",
    description: "School schedule generation based on dynamic sets of rules.",
    company: null,
    client: null,
    teamSize: null,
    duration: "3 months",
    tags: ["NextJS", "Supabase", "AI"],
    skills: [
      "NextJS",
      "Supabase database",
      "Supabase functions",
      "Supabase auth",
      "Cloudflare",
      "AI-driven context engineering",
      "Agentic AI development",
      "CSP algorithm",
      "Excel import/export",
      "pnpm",
    ],
    overview:
      "A personal project that generates school schedules from dynamic sets of rules. At its heart is a constraint-satisfaction (CSP) algorithm balancing hard constraints (a teacher can’t be in two classrooms at once) against soft ones (preferences like free periods), with schedules imported from and exported to Excel.",
    role: "Solo project — I designed and built the whole thing: the NextJS app, the Supabase backend (database, functions and auth), Cloudflare deployment, and the CSP solver itself, leaning on AI-driven context engineering and agentic AI development throughout.",
    highlights: [
      "CSP algorithm with hard and soft constraints for schedule generation",
      "Dynamic, user-defined rule sets",
      "Supabase for database, functions and authentication",
      "Excel imports and exports",
      "Deployed on Cloudflare; built with heavy use of agentic AI tooling",
    ],
  },
  {
    slug: "myreddit",
    title: "MyReddit",
    description:
      "Reddit clone with posts, subreddits, custom feeds, profiles, inbox and multiple auth options.",
    company: null,
    client: null,
    teamSize: null,
    duration: "5–6 months",
    tags: ["React", "Firebase", "Algolia"],
    skills: [
      "NodeJS",
      "Express",
      "Firebase database",
      "Firebase auth",
      "Firebase storage",
      "Firebase analytics",
      "React",
      "Typescript",
      "Algolia search",
    ],
    overview:
      "A full-featured Reddit clone: posts, subreddits, custom feeds, user profiles, an inbox and multiple authentication options. Recreating a product of Reddit’s scope meant covering a wide feature surface — content creation, communities, feeds and messaging — backed by fast full-text search through Algolia.",
    role: "Solo project — I built the React/Typescript frontend and the NodeJS/Express backend, with Firebase providing the database, authentication, storage and analytics, and Algolia powering search.",
    highlights: [
      "Posts, subreddits, custom feeds, user profiles and an inbox",
      "Multiple authentication options via Firebase auth",
      "Full-text search with Algolia",
      "NodeJS + Express backend with Firebase database, storage and analytics",
    ],
  },
  {
    slug: "drag-n-crop",
    title: "Drag ’n’ Crop",
    description: "Image and video cropping web tool.",
    company: null,
    client: null,
    teamSize: null,
    duration: "3 months",
    tags: ["Svelte", "Rust", "FFMpeg"],
    skills: [
      "Svelte",
      "SvelteKit",
      "Rust",
      "Rocket",
      "Typescript",
      "FFMpeg",
      "Flowbite design system",
      "yarn",
    ],
    overview:
      "A web tool for cropping images and videos: drag a file in, crop it visually, download the result. Media processing runs through FFMpeg behind a Rust (Rocket) backend, while the SvelteKit frontend keeps the drag-and-drop cropping experience fast and simple.",
    role: "Solo project — and a deliberate step outside my usual stack: Svelte and SvelteKit on the frontend with the Flowbite design system, and Rust with Rocket driving FFMpeg on the backend.",
    highlights: [
      "Drag-and-drop cropping for both images and videos",
      "FFMpeg-based media processing behind a Rust (Rocket) API",
      "SvelteKit frontend styled with Flowbite",
    ],
  },
];

export const journey: JourneyEntry[] = [
  {
    date: "2005 — 2013",
    badge: null,
    role: "Primary & Middle School",
    org: "Pečenjevce, Serbia",
    description:
      "First contact with computers: basic computer skills, binary numbers and operations, communication and English at A2.",
  },
  {
    date: "2013 — 2017",
    badge: null,
    role: "Grammar School",
    org: "Leskovac, Serbia",
    description:
      "Informatics, computer hardware, the binary system, algorithms and first concepts of programming — Fortran and Windows Forms. English at B2.",
  },
  {
    date: "2017 — 2021",
    badge: { label: "student", color: "blue" },
    role: "Faculty of Electronic Engineering",
    org: "Niš, Serbia",
    description:
      "Algorithms, computer systems, OOP and OOD, assembly, data structures, databases, operating systems, AI, game theory, software engineering and web development — with projects in C, C++, C#, Java, SQL, Lisp, Javascript, Typescript. English at C1 with technical proficiency.",
  },
  {
    date: "2021 — 2022",
    badge: { label: "remote", color: "blue" },
    role: "Freelance web developer",
    org: "Europe",
    description:
      "Worked with two European clients. Designed static and dynamic websites using HTML, CSS, Javascript, Typescript. Implemented simple backend services using NodeJS, Express, Firebase and MongoDB. Learned to use modern UI libraries such as Tailwind and ChakraUI.",
  },
  {
    date: "2022 — Now",
    badge: { label: "on-site", color: "red" },
    role: "Frontend engineer",
    org: "Ascalab",
    description:
      "Full time frontend developer in Niš, working on multiple agile projects with teams of 3–6 people. Developed and maintained production-grade projects using NextJS, React and Typescript. Worked and communicated directly with clients, often involved in the full process of software delivery. Received feedback from senior mentors and got to work with some amazing engineers (and people!).",
  },
];

export const contactLinks: ContactLink[] = [
  {
    platform: "email",
    label: "duledodicc@gmail.com",
    href: "mailto:duledodicc@gmail.com",
  },
  {
    platform: "github",
    label: "github.com/DoubleDebug",
    href: "https://github.com/DoubleDebug",
  },
  {
    platform: "linkedin",
    label: "linkedin.com/in/double-debug",
    href: "https://www.linkedin.com/in/double-debug/",
  },
  {
    platform: "Old portfolio site",
    label: "doubledebug.vercel.app (2022)",
    href: "https://doubledebug.vercel.app/",
  },
];

export const sectionSubtitles = {
  about: "The short version — who I am and what I do.",
  skills: "What I work with day to day — my technical and soft skills.",
  projects: "Production apps and personal builds.",
  journey: "From binary numbers in Pečenjevce to production apps in Niš.",
  contact: "Whether it’s frontend, architecture or just a good conversation — always open.",
} as const;
