"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dracula-bg">
      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-dracula-fg mb-4">Something went wrong!</h2>
        <pre className="text-dracula-fg-muted bg-dracula-bg-lighter p-4 rounded-lg mb-4 overflow-auto max-h-64">
          {process.env.NODE_ENV === "development" ? error.toString() : "An unexpected error occurred."}
        </pre>
        <button onClick={reset} className="px-4 py-2 bg-dracula-purple text-dracula-fg rounded-lg hover:bg-dracula-pink transition-colors">
          Try again
        </button>
      </div>
    </div>
  );
}
