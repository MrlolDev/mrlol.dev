"use client";
import Link from "next/link";
import { Github, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import BackButton from "../ui/BackButton";
type ProjectStatus = "closed" | "acquired" | "active";

const projects: Array<{
  title: string;
  description: string;
  year: string;
  stats?: Record<string, string>;
  status?: ProjectStatus;
  github?: string;
  link?: string;
  tags: string[];
}> = [
  {
    title: "DeepSeek WhatsApp",
    description:
      "Advanced AI-powered WhatsApp bot leveraging DeepSeek's technology, processing over 1 million tokens daily for natural language interactions",
    year: "2025",
    stats: {
      "daily tokens": "1,000,000+",
    },
    status: "active",
    tags: ["TypeScript", "WhatsApp API", "DeepSeek", "Node.js"],
    github: "https://github.com/MrlolDev/deepseek-whatsapp",
    link: "https://go.mrlol.dev/wsp",
  },
  {
    title: "Faceless Avatar",
    description:
      "AI-powered avatar generation platform utilizing custom fine-tuned models. Successfully created over 500 unique, personalized avatars for users",
    year: "2025",
    stats: {
      "avatars generated": "500+",
    },
    status: "active",
    tags: [
      "Fine-tuning",
      "Replicate",
      "Shadcn/UI",
      "Next.js",
      "TypeScript",
      "Supabase",
    ],
    link: "https://faceless-avatar.com",
  },
  {
    title: "College Decision Countdown",
    description:
      "Interactive platform helping students track college application deadlines and decisions. Attracted over 5,000 unique visitors during peak admission season",
    year: "2024-2025",
    status: "active",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    link: "https://collegedecision.us",
  },
  {
    title: "Turing AI",
    description:
      "Highly successful AI Discord bot that scaled to serve 200,000+ servers and 400,000+ users. Later acquired for its innovative features and large user base",
    year: "2022-2024",
    stats: {
      servers: "200,000+",
      users: "400,000+",
    },
    status: "acquired",
    github: "https://github.com/TuringAI-Team/chatgpt-discord-bot",
    link: "https://dsc.gg/turing",
    tags: ["TypeScript", "Discord.js", "OpenAI", "Node.js", "Supabase"],
  },
  {
    title: "Wolfgg",
    description:
      "Feature-rich gaming community platform designed for streamers, featuring real-time interactions and custom integrations. Grew to serve over 1,000 active users",
    year: "2021-2023",
    stats: {
      users: "1,000+",
    },
    status: "closed",
    link: "https://wolfgg.live",
    tags: ["Express.js", "MongoDB", "SCSS", "Socket.io", "EJS"],
  },
  {
    title: "Loick.team",
    description:
      "Full-service development agency specializing in venture building and technical partnerships. Successfully delivered multiple collaborative projects",
    year: "2021-2022",
    status: "closed",
    link: "https://loick.team",
    github: "https://github.com/TeamLoick",
    tags: ["JavaScript", "Node.js", "TypeScript", "Venture Building"],
  },
  {
    title: "KLDesigns",
    description:
      "Creative design and animation agency delivering high-quality digital content. Specialized in custom animations and brand identity development",
    year: "2021",
    status: "closed",
    link: "https://kldesigns.xyz",
    tags: ["Adobe Photoshop", "Adobe After Effects", "HTML", "CSS"],
  },
];

export default function Projects() {
  // Update state to track both expanded tags and descriptions
  const [expandedProjects, setExpandedProjects] = useState<{
    tags: Set<string>;
    descriptions: Set<string>;
  }>({
    tags: new Set(),
    descriptions: new Set(),
  });

  const toggleTags = (projectTitle: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      tags: new Set(
        prev.tags.has(projectTitle)
          ? Array.from(prev.tags).filter((t) => t !== projectTitle)
          : [...prev.tags, projectTitle]
      ),
    }));
  };

  const toggleDescription = (projectTitle: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      descriptions: new Set(
        prev.descriptions.has(projectTitle)
          ? Array.from(prev.descriptions).filter((d) => d !== projectTitle)
          : [...prev.descriptions, projectTitle]
      ),
    }));
  };

  const getStatusConfig = (status: "closed" | "acquired" | "active") => {
    const configs = {
      closed: {
        bg: "bg-red-50",
        text: "text-red-600",
        label: "Archived",
        border: "border-red-200 hover:border-red-300",
      },
      acquired: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        label: "Acquired",
        border: "border-purple-200 hover:border-purple-300",
      },
      active: {
        bg: "bg-green-50",
        text: "text-green-600",
        label: "Active",
        border: "border-green-200 hover:border-green-300",
      },
    } as const;
    return configs[status] || configs.active;
  };

  return (
    <div className="h-full flex flex-col gap-6 w-full max-w-6xl mx-auto items-start justify-start py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      <BackButton />
      <>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base px-2">
          Featuring some of my most impactful projects that have shaped my
          journey as a developer.
        </p>
      </>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`bg-white rounded-lg border shadow-sm hover:shadow-md transition-all p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative group ${
              project.status
                ? getStatusConfig(project.status).border
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {project.status && (
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-0.5 sm:py-1 ${
                    getStatusConfig(project.status).bg
                  } ${
                    getStatusConfig(project.status).text
                  } text-[10px] sm:text-xs rounded-full font-medium`}
                >
                  {getStatusConfig(project.status).label}
                </span>
              </div>
            )}
            <div className="flex justify-between items-start">
              <h2 className="text-lg sm:text-xl font-medium text-gray-800">
                {project.title}
              </h2>
            </div>
            <p className="text-gray-600">
              {expandedProjects.descriptions.has(project.title)
                ? project.description
                : project.description.length > 100
                ? project.description.slice(0, 100) + "..."
                : project.description}
              {project.description.length > 100 && (
                <button
                  onClick={() => toggleDescription(project.title)}
                  className="ml-1 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                >
                  {expandedProjects.descriptions.has(project.title)
                    ? "Show less"
                    : "Read more"}
                </button>
              )}
            </p>

            <div className="flex flex-wrap gap-2">
              {(expandedProjects.tags.has(project.title)
                ? project.tags
                : project.tags.slice(0, 4)
              ).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <button
                  onClick={() => toggleTags(project.title)}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  {expandedProjects.tags.has(project.title)
                    ? "Show less"
                    : `+${project.tags.length - 4} more`}
                </button>
              )}
            </div>
            <div className="flex justify-between items-center mt-auto pt-2">
              <div className="flex gap-3 sm:gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                )}
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
