import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config";
import { DraculaThemeProvider } from "@/components/shared";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.bio,
  keywords: ["Full Stack Developer", "TypeScript", "Next.js", "Go", "React", "Tailwind CSS"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-dracula-bg text-dracula-fg antialiased">
        <DraculaThemeProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </DraculaThemeProvider>
      </body>
    </html>
  );
}
