import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/config";

const socialLinks = [
  { name: "GitHub", icon: Github, href: siteConfig.github },
  { name: "LinkedIn", icon: Linkedin, href: siteConfig.linkedin },
  { name: "Twitter", icon: Twitter, href: siteConfig.twitter },
  { name: "Instagram", icon: Instagram, href: siteConfig.instagram },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dracula-bg-darker border-t border-dracula-bg-lighter/30">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dracula-purple to-dracula-pink flex items-center justify-center">
                <span className="text-dracula-fg font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gradient">AI Portfolio</span>
            </Link>
            <p className="text-dracula-fg-muted max-w-md">
              Building innovative AI and machine learning solutions.
              Exploring the intersection of technology and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dracula-fg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dracula-fg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li className="text-dracula-fg-muted">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-dracula-purple transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                  aria-label={`Connect on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dracula-bg-lighter/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dracula-fg-muted text-sm text-center md:text-left">
            © {currentYear} AI Portfolio. All rights reserved.
          </p>
          <p className="text-dracula-fg-muted text-sm flex items-center justify-center md:justify-end gap-1">
            Made with <Heart className="w-3 h-3 text-dracula-pink fill-dracula-pink" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
