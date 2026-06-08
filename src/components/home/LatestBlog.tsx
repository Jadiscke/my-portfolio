"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    title: "Introduction to Neural Networks",
    summary: "A beginner's guide to understanding how neural networks work...",
    featuredImage: "/images/blog/neural-network.jpg",
    author: siteConfig.name,
    tags: ["Deep Learning", "Tutorial"],
    publishedAt: "2024-06-01",
    readingTime: 5,
  },
  {
    id: "2",
    title: "Building AI Applications with Next.js",
    summary: "How to integrate AI models into web applications using Next.js...",
    featuredImage: "/images/blog/nextjs-ai.jpg",
    author: siteConfig.name,
    tags: ["Next.js", "Full Stack"],
    publishedAt: "2024-05-15",
    readingTime: 8,
  },
  {
    id: "3",
    title: "Understanding Transformer Models",
    summary: "A deep dive into the architecture that powers modern AI...",
    featuredImage: "/images/blog/transformer.jpg",
    author: siteConfig.name,
    tags: ["NLP", "Research"],
    publishedAt: "2024-05-01",
    readingTime: 12,
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
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
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
