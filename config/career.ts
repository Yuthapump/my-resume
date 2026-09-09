import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  // achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  periodLabel?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "mediact",
    position: "Software Developer — Mobile, Web & Backend",
    company: "Mediact",
    location: "",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2026-01-01"),
    periodLabel: "2024–2026 · 2 years",
    logo: "/career/mediact-logo.svg",
    description: [
      "Contributed to Flutter mobile apps and Next.js/React admin and backoffice applications across the Mediact and MediMatch products.",
      "Worked on NestJS/Fastify and Node.js/Koa APIs, MySQL persistence with Prisma/Sequelize, authentication and authorization.",
      "Contributed to notifications and background workers using Firebase Cloud Messaging and AWS SQS, with AWS S3 for file storage.",
      "Worked with Docker builds, GitHub Actions and DigitalOcean deployments, alongside backend and Flutter feature tests.",
    ],
    skills: ["Flutter", "Next.js", "React", "Typescript", "Node.js", "NestJS", "Fastify", "Koa", "MySQL", "Prisma", "Sequelize", "Keycloak", "Firebase / FCM", "AWS S3 / SQS", "Docker", "GitHub Actions", "DigitalOcean", "Vitest"],
  },
  {
    id: "nu",
    position: "Mobile Development Engineer",
    company: "NU",
    location: "Naresuan University, Thailand",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-04-01"),
    description: [
      "Designed and developed mobile applications for child development using React Native",
      "Built backend services with Node.js and Express.js",
      "Used Expo Go for development and testing on mobile devices",
      "Collaborated with the Faculty of Nursing at Naresuan University to develop the application",
    ],

    // achievements: [
    //   "Delivered production code within 1 month of joining by contributing to the P&L dashboard used by traders and senior stakeholders.",
    //   "Led the migration of the UI from Kendo to UBS's internal design system, improving frontend consistency and performance.",
    //   "Built a daily FX rate fetcher by integrating Databricks jobs (Python, Spark SQL) with backend services (Java), automating exchange rate updates.",
    //   "Won UBS's internal AI Venture Challenge by developing data transformation pipelines and anomaly detection models on trading datasets.",
    //   "Collaborated closely with product owners and designers for user-centric features, improving usability and trader workflows.",
    // ],
    skills: ["Typescript", "React", "Node.js", "express.js", "MySQL"],
    companyUrl: "https://www.ubs.com",
    logo: "/career/nu-en-logo.webp",
  },
  {
    id: "softwareparkthailand",
    position: "Software Engineer Intern",
    company: "Software Park Thailand",
    location: "Nonthaburi, Thailand",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2024-06-01"),
    description: [
      "Designed and built systems using the LINE Messaging API to enhance user experience",
      "Developed cross-platform mobile applications using React Native and Flutter",
      "Independently designed and implemented backend infrastructure using Node.js and Express.js to collect and manage data from the LINE Official Account (LINE OA)",
      "Integrated Firebase for real-time database functionality and user authentication",
    ],
    // achievements: [
    //   "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2), improving function call accuracy by 40%.",
    //   "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
    //   "Deployed ML models on AWS SageMaker instead of Replicate, cutting load times by 30%.",
    //   "Created a Next.js dashboard for user analytics.",
    // ],
    skills: [
      "React Native",
      "Flutter",
      "Javascript",
      "Node.js",
      "express.js",
      "Firebase",
      "LINE Messaging API",
    ],
    companyUrl: "https://agentprod.com",
    logo: "/career/spt-logo.jpg",
  },
];
