import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  minRows?: number;
  maxRows?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helperText, icon, minRows = 4, maxRows = 8, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-dracula-fg-muted mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 bg-dracula-bg-lighter border rounded-lg text-dracula-fg placeholder-dracula-fg-muted resize-y",
            error
              ? "border-dracula-red focus:ring-2 focus:ring-dracula-red/20 focus:border-dracula-red"
              : "border-dracula-bg-lighter/50 focus:outline-none focus:ring-2 focus:border-dracula-purple focus:ring-dracula-purple/50 transition-all",
            className
          )}
          style={{
            minHeight: `${minRows * 2.5}rem`,
            maxHeight: `${maxRows * 2.5}rem`,
          }}
          {...props}
        />
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

TextArea.displayName = "TextArea";
