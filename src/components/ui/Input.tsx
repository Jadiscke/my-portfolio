import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, iconPosition = "left", className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-dracula-fg-muted mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {iconPosition === "left" && icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dracula-fg-muted">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-2.5 bg-dracula-bg-lighter border rounded-lg text-dracula-fg placeholder-dracula-fg-muted",
              error
                ? "border-dracula-red focus:ring-2 focus:ring-dracula-red/20 focus:border-dracula-red"
                : "border-dracula-bg-lighter/50 focus:outline-none focus:ring-2 focus:border-dracula-purple focus:ring-dracula-purple/50 transition-all",
              iconPosition === "left" && "pl-10",
              iconPosition === "right" && "pr-10",
              className
            )}
            {...props}
          />
          {iconPosition === "right" && icon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-dracula-fg-muted">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-dracula-red">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-dracula-fg-muted">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
