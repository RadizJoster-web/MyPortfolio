import { HiCode, HiServer, HiLightningBolt } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";

export const SKILL_CATEGORIES = [
  {
    id: "web",
    title: "Web Development",
    description: "Building modern, responsive web applications",
    icon: HiCode,
    techStack: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    id: "backend",
    title: "Backend & API",
    description: "Creating robust and scalable backend services",
    icon: HiServer,
    techStack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Developing intelligent solutions with ML/AI",
    icon: FaRobot,
    techStack: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Flask",
      "Django",
      "OpenCV",
      "Pandas",
    ],
  },
];
