import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  rating: number;
  icon: any;
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

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 10);
