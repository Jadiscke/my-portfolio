import type { Metadata } from "next";
import "./globals.css";
import { DraculaThemeProvider } from "@/components/shared";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AI Developer Portfolio",
  description: "Portfolio showcasing AI/ML projects, research, and contributions",
  keywords: ["AI", "Machine Learning", "Deep Learning", "Portfolio"],
  authors: [{ name: "Alex Developer" }],
  openGraph: {
    title: "AI Developer Portfolio",
    description: "Portfolio showcasing AI/ML projects, research, and contributions",
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
