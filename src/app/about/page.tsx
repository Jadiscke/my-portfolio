import { Section } from "@/components/ui";
import { siteConfig } from "@/config";

export const metadata = {
  title: `About | ${siteConfig.title}`,
  description: "About Vinícius Jadiscke de Souza Tasso - Industrial Engineer and Full Stack Developer",
};

export default function AboutPage() {
  return (
    <Section title="About Me" subtitle="Industrial Engineer & Full Stack Developer">
      <div className="max-w-3xl mx-auto space-y-6 text-dracula-fg-muted leading-relaxed">
        <p>
          I&apos;m Vinícius Jadiscke de Souza Tasso, an Industrial Engineer turned
          Full Stack Developer based in Brasília, Brazil. I&apos;m passionate about building
          software that solves real problems — from web applications to database engines.
        </p>
        <p>
          With a background in Industrial Engineering, I bring a systems-thinking approach
          to software development. I enjoy working across the full stack, building everything
          from responsive frontends with React and Next.js to backend systems in Go and
          TypeScript.
        </p>
        <p>
          One of my favorite projects is{" "}
          <a href="https://github.com/Jadiscke/myown-sql" className="text-dracula-purple hover:text-dracula-pink">
            myown-sql
          </a>
          , a SQL database engine built from scratch in Go — because understanding how
          things work under the hood is what drives me.
        </p>
        <p>
          When I&apos;m not coding, you can find me contributing to open source,
          exploring new technologies, or working on side projects that push my
          understanding of computer science and software engineering.
        </p>
      </div>
    </Section>
  );
}
