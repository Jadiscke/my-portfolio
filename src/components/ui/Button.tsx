import { cn } from "@/lib/utils";
import { ReactNode, ComponentPropsWithoutRef } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  asChild?: boolean;
  href?: string;
  disabled?: boolean;
  className?: string;
  [key: string]: unknown;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  loading = false,
  asChild = false,
  href,
  className,
  disabled,
  ...restProps
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dracula-bg disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-dracula-purple hover:bg-dracula-pink text-dracula-fg shadow-lg shadow-dracula-purple/20 hover:shadow-dracula-purple/40",
    secondary: "bg-dracula-bg-lighter hover:bg-dracula-purple/50 text-dracula-purple border border-dracula-purple/30",
    ghost: "text-dracula-fg-muted hover:text-dracula-fg hover:bg-dracula-fg/10",
    outline: "border-2 border-dracula-purple text-dracula-purple hover:bg-dracula-purple/10",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  const loadingStyle = loading ? "pointer-events-none relative" : "";

  const Tag = asChild ? (href ? "a" : "button") : "button";

  return (
    <Tag
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyle,
        loadingStyle,
        className
      )}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading && (
        <svg
          className="animate-spin absolute inset-0 m-auto w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.359 0 2 3.359 2 8z"
          />
        </svg>
      )}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </Tag>
  );
}
