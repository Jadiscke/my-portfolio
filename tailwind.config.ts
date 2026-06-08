import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dracula-bg": "#282a36",
        "dracula-bg-darker": "#191a21",
        "dracula-bg-lighter": "#32343a",
        "dracula-purple": "#bd93f9",
        "dracula-pink": "#ff79c6",
        "dracula-orange": "#ffb86c",
        "dracula-yellow": "#f1fa8c",
        "dracula-green": "#50fa7b",
        "dracula-red": "#ff5555",
        "dracula-blue": "#8be9fd",
        "dracula-fg": "#f8f8f2",
        "dracula-fg-muted": "#8890b8",
        "dracula-fg-highlight": "#8be9fd",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
