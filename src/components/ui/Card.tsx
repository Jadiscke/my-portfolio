import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  variant?: "default" | "elevated" | "outline" | "interactive";
  hoverEffect?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  title,
  subtitle,
  image,
  variant = "default",
  hoverEffect = false,
  onClick,
}: CardProps) {
  const baseStyles =
    "bg-dracula-bg-darker rounded-xl overflow-hidden shadow-xl border border-dracula-bg-lighter/30";

  const variantStyles = {
    default: baseStyles,
    elevated: `${baseStyles} shadow-2xl`,
    outline: `${baseStyles} border-2 border-dracula-purple bg-dracula-bg/80`,
    interactive: `${baseStyles} ${hoverEffect ? 'hover:shadow-2xl hover:border-dracula-purple/50 hover:-translate-y-1' : ''} transition-all duration-300`,
  };

  const contentStyles = "p-6";

  return (
    <div
      onClick={onClick}
      className={cn(
        variantStyles[variant],
        className
      )}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-dracula-bg-lighter">
          <img
            src={image}
            alt={title || ""}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className={contentStyles}>
        {title && (
          <h3 className="text-xl font-bold text-dracula-fg mb-2">{title}</h3>
        )}
        {subtitle && (
          <p className="text-dracula-fg-muted text-sm mb-3">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
