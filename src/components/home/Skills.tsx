"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Terminal,
  Zap,
} from "lucide-react";
import { Badge as UIBadge } from "@/components/ui";

interface SkillCategory {
  name: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    description: "Programming languages I use daily",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["TypeScript", "Go", "Python", "SQL", "JavaScript"],
    color: "from-dracula-purple/30 to-dracula-pink/20",
  },
  {
    name: "Frontend",
    description: "Web interface technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: ["Next.js", "React", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
    color: "from-dracula-pink/30 to-dracula-orange/20",
  },
  {
    name: "Backend & Databases",
    description: "Server-side and data layer",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "PostgreSQL", "SQLite", "REST APIs", "Database Internals"],
    color: "from-dracula-orange/30 to-dracula-yellow/20",
  },
  {
    name: "Engineering",
    description: "Systems and software design",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["System Design", "Data Structures", "Algorithms", "Problem Solving", "Architecture"],
    color: "from-dracula-yellow/20 to-dracula-green/20",
  },
  {
    name: "DevOps & CI/CD",
    description: "Deployment and automation",
    icon: <Zap className="w-6 h-6" />,
    skills: ["Git", "GitHub Actions", "Docker", "Linux", "Vercel"],
    color: "from-dracula-green/20 to-dracula-blue/20",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-dracula-bg-darker">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="heading text-gradient mb-4">Technical Skills</h2>
          <p className="text-dracula-fg-muted max-w-2xl mx-auto">
            My technical toolkit for building innovative AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className={`card card-hover bg-gradient-to-br ${category.color}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
          >
            <span className="text-dracula-fg">{category.icon}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-dracula-fg">{category.name}</h3>
            <p className="text-dracula-fg-muted text-sm">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <UIBadge key={skill} variant="default" size="sm">
              {skill}
            </UIBadge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
