import { Section } from "@/components/ui";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Project | AI Developer Portfolio",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) notFound();

  return (
    <Section title={slug.replace(/-/g, " ")}>
      <div className="max-w-3xl mx-auto text-center text-dracula-fg-muted">
        <p>Project details coming soon...</p>
      </div>
    </Section>
  );
}
