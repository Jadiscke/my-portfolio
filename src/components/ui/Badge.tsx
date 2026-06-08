import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "purple" | "pink" | "orange" | "green" | "red" | "blue" | "yellow";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  const variantColors = {
    default: "bg-dracula-fg/10 text-dracula-fg",
    purple: "bg-dracula-purple/20 text-dracula-purple border border-dracula-purple/30",
    pink: "bg-dracula-pink/20 text-dracula-pink border border-dracula-pink/30",
    orange: "bg-dracula-orange/20 text-dracula-orange border border-dracula-orange/30",
    green: "bg-dracula-green/20 text-dracula-green border border-dracula-green/30",
    red: "bg-dracula-red/20 text-dracula-red border border-dracula-red/30",
    blue: "bg-dracula-blue/20 text-dracula-blue border border-dracula-blue/30",
    yellow: "bg-dracula-yellow/20 text-dracula-yellow border border-dracula-yellow/30",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variantColors[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}

export type { BadgeProps };
