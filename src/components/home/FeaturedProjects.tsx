"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, Badge as UIBadge } from "@/components/ui";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  featured: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  tags: string[];
}

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "myown-sql",
    description: "A SQL database engine written from scratch in Go. Implements core database internals including query parsing, execution planning, and storage management.",
    thumbnailUrl: "/images/projects/project1.jpg",
    featured: true,
    githubUrl: "https://github.com/Jadiscke/myown-sql",
    tags: ["Go", "Database Internals", "SQL"],
  },
  {
    id: "2",
    title: "learnnext",
    description: "A web app that recommends personalized learning paths based on your interests, professional experience, and study history using Next.js.",
    thumbnailUrl: "/images/projects/project2.jpg",
    featured: true,
    githubUrl: "https://github.com/Jadiscke/learnnext",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "3",
    title: "notes-app",
    description: "A clean, modern notes application built with TypeScript. Features rich text editing, tagging, search, and a responsive design.",
    thumbnailUrl: "/images/projects/project3.jpg",
    featured: true,
    githubUrl: "https://github.com/Jadiscke/notes-app",
    tags: ["TypeScript", "React", "Full Stack"],
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="heading text-gradient mb-4">Featured Projects</h2>
          <p className="text-dracula-fg-muted max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my work in AI,
            machine learning, and data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-dracula-purple hover:text-dracula-pink transition-colors"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l4 4m4-10H3"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        variant="interactive"
        className="card-hover group"
        image={project.thumbnailUrl}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-dracula-fg group-hover:text-dracula-purple transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-dracula-fg-muted hover:text-dracula-purple"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  className="text-dracula-fg-muted hover:text-dracula-purple"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-dracula-fg-muted text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <UIBadge key={tag} variant="purple" size="sm">
                {tag}
              </UIBadge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
