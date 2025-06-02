import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "child-development-app",
    companyName: "Naresuan University",
    type: "Professional",
    category: ["Full Stack", "Mobile Dev"],
    shortDescription:
      "Developed a mobile and backend system to digitize the DSPM child development handbook using React Native Node.js and MySQL Features include authentication push notifications and real-time child health tracking",
    // websiteLink: "https://builtdesign.in",
    techStack: [
      "React Native",
      "Typescript",
      "Node.js",
      "express.js",
      "MySQL",
      "Expo Go",
      "Figma",
      "Postman",
    ],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-03-25"),
    companyLogoImg: "/experience/nu/nu_screen_dekdek.png",
    pagesInfoArr: [
      {
        title: "Main Page",
        description: "Initial screen with app branding and navigation options",
        imgArr: [
          "/experience/nu/splash_screen.png",
          "/experience/nu/login_register.png",
          "/experience/nu/addchild_parent.png",
          "/experience/nu/editchild_parent.png",
          "/experience/nu/gotoassessment.png",
          "/experience/nu/assessment.png",
        ],
      },
      {
        title: "More Features",
        description:
          "Additional features including child profile management, assessment history, and notifications",
        imgArr: ["/experience/nu/more_feature.png"],
      },
      {
        title: "Clients Dashboard",
        description:
          "User-friendly dashboard for parents & supervisor to manage child profiles and assessments",
        imgArr: ["/experience/nu/client_dashboard.png"],
      },
      {
        title: "Admin Dashboard",
        description:
          "Comprehensive admin dashboard for managing users, assessments,child and system settings",
        imgArr: ["/experience/nu/admin_dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project aimed to develop a mobile application for assessing early childhood development, based on the Developmental Surveillance and Promotion Manual (DSPM). The application is designed to support both parents and caregivers in monitoring and evaluating the developmental progress of children from birth to six years old, providing a convenient, accurate, and accessible tool for developmental assessment.",
        "The application offers personalized developmental checklists and practical guidance on how to promote each child's development according to their age. It is cross-platform and compatible with both iOS and Android devices, using React Native as the core development framework. MySQL is employed as the database system to store assessment records, while the backend is developed using Node.js to handle system operations and API integrations.",
        "System testing results confirm that the application performs as intended. Parents are able to register an account, add child profiles, and complete developmental assessments efficiently. Caregivers can manage groups of children under their supervision and access assessment data according to the permissions granted by the child's parent.",
        "Additionally, the system generates clear, easy-to-understand reports of each assessment and provides timely notifications for upcoming evaluations.",
        "Based on user testing, the application effectively reduces the complexity of early childhood development assessments and supports continuous tracking, enabling parents to follow up on their child’s growth and development conveniently and consistently.",
      ],
      bullets: [
        "Developed a cross-platform mobile application for early childhood development assessment based on the DSPM framework.",
        "Enabled parents to register, manage child profiles, and perform age-appropriate developmental assessments.",
        "Built secure role-based access features allowing caregivers to monitor and manage groups of children with parent-approved permissions.",
        "Implemented intuitive notifications to remind users of upcoming assessments for continuous tracking.",
        "Used React Native for front-end development and integrated Node.js with MySQL for robust backend and data storage.",
      ],
    },
  },
  {
    id: "chatbot-application",
    companyName: "Software Park Thailand",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "Line Dev"],
    shortDescription:
      "Line Chatbot Application for Software Park Thailand, developed using JavaScript, Node.js, and firebase. with features like user authentication,rich menu, real-time chat data storage, and integration with LINE Messaging API.",
    techStack: [
      "Javascript",
      "Node.js",
      "express.js",
      "Firebase",
      "Postman",
      "Google Sheets",
      "LINE Messaging API",
    ],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "/experience/softwarepark/chatbot_screen.png",
    pagesInfoArr: [
      {
        title: "Course booking system",
        description:
          "Interactive course booking system allowing users to reserve spots in various courses offered by Software Park Thailand",
        imgArr: ["/experience/softwarepark/chatbot_system2.png"],
      },
      {
        title: "Rich Menu and Carousel Templates",
        description:
          "Crafted dynamic rich menus and adaptive carousel templates to broadcast real-time updates, course recommendations, and personalized content directly within the LINE chat interface.",
        imgArr: ["/experience/softwarepark/chatbot_screen.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Line Chatbot Application for Software Park Thailand, developed using JavaScript, Node.js, and firebase. with features like user authentication,rich menu, real-time chat data storage, and integration with LINE Messaging API.`,
      ],
      bullets: [
        "Engineered a sophisticated LINE Chatbot leveraging Node.js and Firebase to deliver seamless real-time chat experiences.",
        "Implemented rich menus, flexible carousel templates, and contextual logic to enhance interactive user engagement.",
        "Integrated a secure authentication system ensuring personalized interactions and data privacy.",
        "Developed a dynamic reservation system within the chatbot, enabling users to book services effortlessly through natural conversation flow.",
        "Orchestrated Firestore to store and retrieve chat data in real-time, ensuring consistent and responsive communication.",
      ],
    },
  },
  {
    id: "travel-flutter-app",
    companyName: "Travel Flutter App",
    type: "Personal Project",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted a Travel App using Flutter, showcasing my skills in mobile development and UI/UX design.",
    githubLink: "https://github.com/Yuthapump/travel-flutter-app",
    techStack: ["Flutter", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg:
      "/experience/sideproject/travel-flutter-app/overall_screen.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "Initial screen with app branding and loading animation",
        imgArr: ["/experience/sideproject/travel-flutter-app/splashscreen.png"],
      },
      // {
      //   title: "Login/Signup Authentication",
      //   description: "Secure user authentication system with Firebase",
      //   imgArr: ["/experience/apex/app_1.webp"],
      // },
      {
        title: "home Travel screen",
        description:
          "Home screen with featured destinations and user-friendly navigation",
        imgArr: ["/experience/sideproject/travel-flutter-app/homepage.png"],
      },
      {
        title: "Explore Screen",
        description: "Interactive travel destination exploration interface",
        imgArr: ["/experience/sideproject/travel-flutter-app/explorepage.png"],
      },
      {
        title: "favorite travel Screen",
        description: "User's favorite destinations and saved trips",
        imgArr: ["/experience/sideproject/travel-flutter-app/favoritepage.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In this personal project, I embarked on a journey to create a Travel App using Flutter, showcasing my skills in mobile development and UI/UX design.",
      ],
      bullets: [
        "Designed and developed a user-friendly interface with Flutter, focusing on intuitive navigation and responsive design",
      ],
    },
  },

  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/experience/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/experience/cirql/web_1.png", "/experience/cirql/web_2.png"],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/experience/cirql/web_3.png", "/experience/cirql/web_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Cirql Dashboard' personal project, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
        "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
  {
    id: "portfolio-website",
    companyName: "My Portfolio Website",
    type: "Personal Project",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Developed a personal portfolio website using React, showcasing my skills, projects, and experiences.",
    websiteLink: "",
    githubLink: "https://github.com/Yuthapump/my-resume",
    techStack: ["React", "Tailwind CSS", "Typescript", "Node.js"],
    startDate: new Date("2024-03-01"),
    endDate: new Date(""),
    companyLogoImg: "/experience/sideproject/my-resume/resume-home.png",
    pagesInfoArr: [
      {
        title: "Skills Section",
        description: "Showcasing my skills",
        imgArr: ["/experience/sideproject/my-resume/resume-skills.png"],
      },
      {
        title: "Experience Section",
        description: "Highlighting my professional experiences and projects",
        imgArr: ["/experience/sideproject/my-resume/resume-experience.png"],
      },
      {
        title: "Career",
        description: "Career section with my career goals and aspirations",
        imgArr: ["/experience/sideproject/my-resume/resume-career.png"],
      },
      {
        title: "Certificates Section",
        description: "Showcasing my certifications and achievements",
        imgArr: ["/experience/sideproject/my-resume/resume-certificate.png"],
      },
      {
        title: "Contact Section",
        description: "Contact information",
        imgArr: ["/experience/sideproject/my-resume/resume-contact.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This personal project involved the development of a portfolio website using React, Tailwind CSS, and Typescript. The website serves as a platform to showcase my skills, projects, and experiences in a visually appealing and interactive manner.",
      ],
      bullets: [
        "Designed and implemented a responsive portfolio website using React and Tailwind CSS.",
      ],
    },
  },
  {
    id: "first-login-page",
    companyName: "First Login Page",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed a minimalistic first login page using HTML and CSS, focusing on user experience and simplicity.",
    websiteLink: "https://login-first.onrender.com",
    githubLink: "https://github.com/Yuthapump/First_Login_Page",
    techStack: ["HTML 5", "CSS 3"],
    startDate: new Date("2024-04-30"),
    endDate: new Date("2024-0430"),
    companyLogoImg: "/experience/sideproject/firstlogin/screen1.png",
    pagesInfoArr: [
      {
        title: "login Page",
        description: "Minimalistic first login page with a clean design",
        imgArr: ["/experience/sideproject/firstlogin/screen1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project is a personal endeavor where I developed a minimalistic first login page using HTML and CSS. The focus was on creating a simple yet effective user interface that enhances the user experience during the initial login process.",
      ],
      bullets: [
        "Implemented a minimalistic design using HTML and CSS to enhance user experience.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
