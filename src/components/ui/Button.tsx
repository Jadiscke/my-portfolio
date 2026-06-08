import { cn } from "@/lib/utils";
import { ReactNode, Children, isValidElement, cloneElement } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  asChild?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  [key: string]: unknown;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  loading = false,
  asChild = false,
  className,
  disabled,
  ...restProps
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dracula-bg disabled:opacity-50 disabled:cursor-not-allowed",
    {
      "bg-dracula-purple hover:bg-dracula-pink text-dracula-fg shadow-lg shadow-dracula-purple/20 hover:shadow-dracula-purple/40": variant === "primary",
      "bg-dracula-bg-lighter hover:bg-dracula-purple/50 text-dracula-purple border border-dracula-purple/30": variant === "secondary",
      "text-dracula-fg-muted hover:text-dracula-fg hover:bg-dracula-fg/10": variant === "ghost",
      "border-2 border-dracula-purple text-dracula-purple hover:bg-dracula-purple/10": variant === "outline",
    },
    {
      "px-3 py-1.5 text-sm": size === "sm",
      "px-4 py-2 text-sm": size === "md",
      "px-6 py-3 text-base": size === "lg",
    },
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    loading && "pointer-events-none relative",
    className
  );

  if (asChild && isValidElement(children)) {
    const child = Children.only(children) as React.ReactElement<Record<string, unknown>>;
    return cloneElement(child, {
      className: cn(classes, child.props.className as string | undefined),
      disabled: disabled || loading,
      ...restProps,
    });
  }

  const inner = (
    <>
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
    </>
  );

  const Tag = restProps.href ? "a" : "button";

  return (
    <Tag
      className={classes}
      disabled={disabled || loading}
      {...restProps}
    >
      {inner}
    </Tag>
  );
}
