import { Icons } from "@/components/common/icons";
import { Cloud, Code, Database, Layers, Shield, Smartphone, Wrench } from "lucide-react";

export interface skillsInterface {
  name: string;
  rating?: number;
  icon: any;
  category?: string;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Typescript",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Next.js",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Postman",
    rating: 4,
    icon: Icons.postman,
  },
  {
    name: "Flutter",
    rating: 4,
    icon: Icons.flutter,
  },

  {
    name: "Node.js",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "express.js",
    rating: 5,
    icon: Icons.express,
  },

  {
    name: "HTML 5",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Material UI",
    rating: 3,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    rating: 3,
    icon: Icons.amazonaws,
  },

  {
    name: "MySQL",
    rating: 4,
    icon: Icons.mysql,
  },
];

// Current project technologies are presented without inferred proficiency scores.
const currentGroups = [
  { category: "Languages", icon: Code, names: ["Typescript", "Javascript", "Dart", "SQL", "HTML 5", "CSS 3"] },
  { category: "Web", icon: Layers, names: ["React", "Next.js", "Tailwind CSS", "Material UI", "TanStack Query / Form / Table", "Zustand", "Zod", "React Hook Form"] },
  { category: "Mobile", icon: Smartphone, names: ["Flutter", "GetX / Riverpod", "Dio / Retrofit", "Firebase / FCM"] },
  { category: "Backend & Data", icon: Database, names: ["Node.js", "Bun", "NestJS", "Fastify", "Koa", "REST API / OpenAPI", "MySQL", "Prisma", "Sequelize"] },
  { category: "Cloud & DevOps", icon: Cloud, names: ["Docker", "Docker Compose", "Traefik", "GitHub Actions", "DigitalOcean", "AWS S3 / SQS"] },
  { category: "Security & Quality", icon: Shield, names: ["Keycloak", "JWT / JWKS", "Vitest", "Flutter Testing", "ESLint / Prettier"] },
  { category: "Tools & Workflow", icon: Wrench, names: ["Git / GitHub", "Postman", "DBeaver", "Figma"] },
];

const currentSkills: skillsInterface[] = currentGroups.flatMap(({ category, icon, names }) =>
  names.map((name) => ({ name, category, icon: skillsUnsorted.find((skill) => skill.name === name)?.icon ?? icon }))
);
const currentNames = new Set([...currentSkills.map((skill) => skill.name), "AWS"]);
export const skills: skillsInterface[] = [
  ...currentSkills,
  ...skillsUnsorted.filter((skill) => !currentNames.has(skill.name)).map((skill) => ({ ...skill, category: "Earlier Projects & Tools" })),
];
export const skillCategories = [...currentGroups.map(({ category }) => category), "Earlier Projects & Tools"];
const featuredNames = ["Typescript", "Javascript", "Flutter", "Next.js", "React", "Node.js", "NestJS", "MySQL", "Docker", "GitHub Actions"];
export const featuredSkills = featuredNames.map((name) => skills.find((skill) => skill.name === name)!);
