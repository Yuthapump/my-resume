import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Benz Yuthapum's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Tech Stack & Tools",
    metadata: {
      title: "Skills",
      description:
        "Benz Yuthapum's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "My experience in building web & mobile applications.",
    metadata: {
      title: "Experience",
      description: "Benz Yuthapum's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "I’m currently seeking new opportunities — let’s talk.",
    metadata: {
      title: "Contact",
      description: "Contact Naman Barkiya.",
    },
  },
  contributions: {
    title: "Education",
    description: "",
    metadata: {
      title: "Education",
      description: "More about Benz Yuthapum.",
    },
  },
  certificates: {
    title: "Certificates",
    description: "Certificates and achievements.",
    metadata: {
      title: "Certificates",
      description: "Benz Yuthapum's certificates and achievements.",
    },
  },
  resume: {
    title: "Resume",
    description: "Benz Yuthapum's resume.",
    metadata: {
      title: "Resume",
      description: "Benz Yuthapum's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Naman Barkiya's professional journey and career timeline.",
    },
  },
};
