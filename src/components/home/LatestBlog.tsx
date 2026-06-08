"use client";

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, Badge as UIBadge } from "@/components/ui";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { siteConfig } from "@/config";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  featuredImage?: string;
  author: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
}

const latestBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a SQL Database Engine in Go",
    summary: "A deep dive into implementing core database internals — from query parsing to execution — in the Go programming language.",
    featuredImage: "/images/blog/neural-network.jpg",
    author: siteConfig.name,
    tags: ["Go", "Databases", "Systems"],
    publishedAt: "2026-05-01",
    readingTime: 12,
  },
  {
    id: "2",
    title: "From Industrial Engineering to Software Development",
    summary: "How my engineering background shapes the way I approach system design, problem solving, and software architecture.",
    featuredImage: "/images/blog/nextjs-ai.jpg",
    author: siteConfig.name,
    tags: ["Career", "Engineering", "Mindset"],
    publishedAt: "2026-04-15",
    readingTime: 8,
  },
  {
    id: "3",
    title: "Modern Web Development with Next.js and TypeScript",
    summary: "Patterns, best practices, and lessons learned from building production-ready applications with the modern web stack.",
    featuredImage: "/images/blog/transformer.jpg",
    author: siteConfig.name,
    tags: ["Next.js", "TypeScript", "Web Dev"],
    publishedAt: "2026-04-01",
    readingTime: 6,
  },
];

export function LatestBlog() {
  return (
    <section id="blog" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="heading text-gradient mb-4">Latest from the Blog</h2>
          <p className="text-dracula-fg-muted max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on AI, machine learning, and
            software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
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
            href="/blog"
            className="inline-flex items-center gap-2 text-dracula-purple hover:text-dracula-pink transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function BlogPostCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card variant="interactive" className="card-hover">
        <div className="flex flex-col gap-4">
          {post.featuredImage && (
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="flex flex-col gap-3 flex-grow">
            <div className="flex items-center gap-4 text-sm text-dracula-fg-muted">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </span>
            </div>

            <h3 className="text-xl font-bold text-dracula-fg hover:text-dracula-purple transition-colors">
              {post.title}
            </h3>

            <p className="text-dracula-fg-muted text-sm leading-relaxed flex-grow">
              {post.summary}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-dracula-fg-muted text-sm">
                by {post.author}
              </span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <UIBadge key={tag} variant="purple" size="sm">
                    {tag}
                  </UIBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
