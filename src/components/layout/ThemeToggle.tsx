"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui";

type Theme = "dark" | "light" | "system";

interface ThemeToggleProps {
  themes: {
    dark: string;
    light: string;
    system: string;
  };
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeToggle({
  themes = {
    dark: "Dark",
    light: "Light",
    system: "System",
  },
  defaultTheme = "dark",
  storageKey = "dracula-theme",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(defaultTheme);
    }

    // Apply theme to document
    const root = document.documentElement;
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
      root.classList.remove("light", "dark");
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);

    // Update document classes
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-dracula-fg-muted whitespace-nowrap">
        {themes[theme]}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleThemeChange("dark")}
        className="w-8 h-8 p-0"
        aria-label="Switch to dark theme"
      >
        <Moon className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleThemeChange("light")}
        className="w-8 h-8 p-0"
        aria-label="Switch to light theme"
      >
        <Sun className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleThemeChange("system")}
        className="w-8 h-8 p-0"
        aria-label="Use system theme"
      >
        <Monitor className="w-4 h-4" />
      </Button>
    </div>
  );
}
