import { useFBX } from "@react-three/drei";
import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  openai,
  postcss,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  shoppy,
  hoobank,
  ai_summarizer,
  threejs,
  UI_UX,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI/UX",
    icon:UI_UX,
  } 
  ];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postcss",
    icon: postcss,
  },
  {
    name: "openai",
    icon: openai,
  },
];

const projects = [
  {
    name: "Ai-Summarizer",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ai_summarizer,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hoobank",
    description:
      "Frontend web design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/parsingerror-line7/https---github.com-parsingerror-line7-BankUI-UX.git",
  },
  {
    name: "E-Commerce Dashboard",
    description:
      "a user interface that displays a set of metrics and key performance indicators (KPIs) related to the sales, revenue, products, and customers of an e-commerce business..",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: shoppy,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };