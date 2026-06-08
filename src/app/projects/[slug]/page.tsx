import { Section } from "@/components/ui";

export const metadata = {
  title: "Project | AI Developer Portfolio",
};

export function generateStaticParams() {
  return [{ slug: "myown-sql" }, { slug: "learnnext" }, { slug: "notes-app" }];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Section title={slug.replace(/-/g, " ")}>
      <div className="max-w-3xl mx-auto text-center text-dracula-fg-muted">
        <p>Project details coming soon...</p>
      </div>
    </Section>
  );
}
