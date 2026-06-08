"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
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
    description: "Programming languages I work with",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++"],
    color: "from-dracula-purple to-dracula-pink",
  },
  {
    name: "Machine Learning",
    description: "ML frameworks and libraries",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "XGBoost"],
    color: "from-dracula-pink to-dracula-orange",
  },
  {
    name: "Data Science",
    description: "Data processing and analysis tools",
    icon: <Database className="w-6 h-6" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    color: "from-dracula-orange to-dracula-yellow",
  },
  {
    name: "Web Development",
    description: "Web technologies and frameworks",
    icon: <Globe className="w-6 h-6" />,
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "Docker"],
    color: "from-dracula-yellow to-dracula-green",
  },
  {
    name: "DevOps & Tools",
    description: "Deployment and infrastructure tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git", "GitHub Actions", "AWS", "Linux", "MongoDB"],
    color: "from-dracula-green to-dracula-blue",
  },
  {
    name: "AI/ML Operations",
    description: "AI deployment and management",
    icon: <Zap className="w-6 h-6" />,
    skills: ["MLOps", "Kubernetes", "MLflow", "Kubeflow", "FastAPI"],
    color: "from-dracula-blue to-dracula-purple",
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
