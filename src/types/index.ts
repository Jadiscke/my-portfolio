// Project types
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string;
  covers: string[];
  featured: boolean;
  category: 'Research' | 'Application' | 'Tool' | 'Open Source';
  tags: Tag[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string;
}

// Blog post types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string; // MDX content
  featuredImage?: string;
  author: Author;
  tags: Tag[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

// Admin types
export interface AdminUser {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'user';
}

export interface AuthSession {
  user: AdminUser;
  expires: number;
}

// Type helpers
export type Nullable<T> = { [P in keyof T]: T[P] | null };
