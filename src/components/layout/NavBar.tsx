"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useTheme } from "@/components/shared";
import { Button } from "@/components/ui";
import { siteConfig } from "@/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

interface NavBarProps {
  hideNav?: boolean;
  showThemeToggle?: boolean;
  showSocialLinks?: boolean;
}

export function NavBar({
  hideNav = false,
  showThemeToggle = true,
  showSocialLinks = true,
}: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  if (hideNav) return null;

  const handleThemeChange = (newTheme: "dark" | "light" | "system") => {
    setTheme(newTheme);
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "dark":
        return "Dark";
      case "light":
        return "Light";
      default:
        return "System";
    }
  };

  return (
    <nav className="container mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dracula-purple to-dracula-pink flex items-center justify-center">
            <span className="text-dracula-fg font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-gradient">AI Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-dracula-fg-muted hover:text-dracula-purple hover:bg-dracula-purple/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          {showThemeToggle && (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-dracula-fg-muted">{getThemeLabel()}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleThemeChange("dark")}
                className="w-8 h-8 p-0"
                aria-label="Switch to dark theme"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleThemeChange("light")}
                className="w-8 h-8 p-0"
                aria-label="Switch to light theme"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75ZM6.75 8.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM21.75 9a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V9.75a.75.75 0 0 1 .75-.75ZM16.75 13.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V14.25a.75.75 0 0 1 .75-.75ZM13.5 18.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75ZM8.25 19.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V20.25a.75.75 0 0 1 .75-.75Zm5.25-10.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5H13.5Z" />
                </svg>
              </Button>
            </div>
          )}

          {showSocialLinks && (
            <div className="flex items-center space-x-3">
              <a
                href={siteConfig.github}
                className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.twitter}
                className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.instagram}
                className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-dracula-fg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-dracula-bg-lighter/30"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-dracula-bg-lighter/30 pt-4">
                {showThemeToggle && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dracula-fg-muted">Theme</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleThemeChange("dark")}
                        className="w-8 h-8 p-0"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleThemeChange("light")}
                        className="w-8 h-8 p-0"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75ZM6.75 8.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM21.75 9a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V9.75a.75.75 0 0 1 .75-.75ZM16.75 13.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V14.25a.75.75 0 0 1 .75-.75ZM13.5 18.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75ZM8.25 19.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V20.25a.75.75 0 0 1 .75-.75Zm5.25-10.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5H13.5Z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              {showSocialLinks && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dracula-fg-muted">Connect</span>
                  <div className="flex items-center space-x-4">
                    <a
                      href={siteConfig.github}
                      className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.linkedin}
                      className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.twitter}
                      className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.instagram}
                      className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-dracula-fg-muted hover:text-dracula-purple transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
