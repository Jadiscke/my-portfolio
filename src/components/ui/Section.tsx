import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: "default" | "darker" | "lighter";
  padding?: "default" | "comfortable" | "spacious";
  id?: string;
}

export function Section({
  children,
  className,
  title,
  subtitle,
  backgroundColor = "default",
  padding = "default",
  id,
}: SectionProps) {
  const bgColors = {
    default: "bg-dracula-bg",
    darker: "bg-dracula-bg-darker",
    lighter: "bg-dracula-bg-lighter",
  };

  const paddingStyles = {
    default: "py-12 px-4",
    comfortable: "py-16 px-8",
    spacious: "py-20 px-12",
  };

  return (
    <section
      id={id}
      className={bgColors[backgroundColor]}
    >
      <div
        className={paddingStyles[padding]}
      >
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto mb-8 text-center">
            {title && (
              <h2 className="heading text-gradient">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="subheading mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={className}>{children}</div>
      </div>
    </section>
  );
}
