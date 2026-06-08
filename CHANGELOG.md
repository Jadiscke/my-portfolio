# Changelog

## [0.1.0] - 2026-06-08

### Added
- Tailwind CSS configuration with Dracula theme colors
- Route pages: `/about`, `/projects`, `/projects/[slug]`, `/blog`, `/contact`, `/admin`, `/login`
- Root layout with `ThemeProvider`, `Header`, and `Footer`
- `animate-scroll` CSS keyframe animation
- Site config (`src/config.ts`) with name, social links, email, bio, location
- Custom image loader for GitHub Pages basePath support
- GitHub Actions workflow for automated deployment to GitHub Pages
- Placeholder images for projects and blog posts
- Skills infrastructure: `find-skills`, `vercel-react-best-practices`, `web-design-guidelines`, `next-best-practices`, `using-git-worktrees`, `github-actions-docs`, `vercel-composition-patterns`, `webapp-testing`, `test-driven-development`

### Fixed
- **Route structure**: Deleted 17-level-deep broken glob-pattern directories, replaced with proper Next.js App Router routes
- **Root layout**: Wired up `ThemeProvider`, `Header`, `Footer` — app shell now renders correctly
- **Broken `.gitignore`**: Replaced markdown todo doc with proper ignore patterns (`node_modules/`, `.next/`, `.env.local`, etc.)
- **Invalid CSS**: Fixed `hsl()` with hex values → `color-mix()`, removed no-op light theme media query
- **Auth system**: Removed `@auth/core` dependency and unused auth config (no providers configured)
- **Unused dependencies**: Removed `emailjs`, `emailjs-com`, `drizzle-orm`
- **Orphaned components**: Deleted `DraculaTheme.tsx` (CSS vars already in `globals.css`), `proxy.ts`
- **Theme storage key**: Aligned to `"dracula-theme"` across `ThemeProvider` and `ThemeToggle`
- **`Header.tsx`**: Removed `<Footer />` rendered inside `<header>` (was rendering footer at top of page)
- **Shared index**: Updated to export `DraculaThemeProvider` correctly
- **`Hero.tsx`**: 
  - Replaced local `Badge` duplicate with barrel import
  - Fixed hydration mismatch from `Math.random()` in particle animation
  - Fixed `null` keyframe value in framer-motion
  - Removed 5 unused `lucide-react` imports
  - Updated code snippet from Python/AI to Go (matches user's actual stack)
- **`FeaturedProjects.tsx`, `Skills.tsx`, `LatestBlog.tsx`**: Added `"use client"` directive for framer-motion compatibility
- **Component imports**: Standardized to barrel imports from `@/components/ui`
- **Dual exports**: Removed `export default` from `Input.tsx` and `TextArea.tsx`
- **`Section.tsx`**: Removed duplicate `id` on `<h2>` (same as section's id)
- **`Card.tsx`**: Removed redundant `"card"`/`"card-hover"` class strings
- **`Button.tsx`**: 
  - Replaced `[key: string]: any` index signature with `[key: string]: unknown`
  - Fixed `asChild` to use `React.cloneElement` (proper Radix-style pattern)
- **`utils.ts:generateSlug()`**: Fixed broken while-loop that never executed
- **`vercel.json`**: Removed malformed API rewrite and redundant security headers
- **`Skills.tsx`**: Removed invalid `bg-opacity-10` on gradient, replaced with opacity modifier syntax
- **`global-error.tsx`**: Error details only shown in development mode
- **Empty directories**: Removed `admin/`, `blog/`, `contact/`, `projects/` components dirs, `api/webhooks/`, `data/`
- **Contrast**: Lightened `--dracula-fg-muted` from `#6272a4` to `#8890b8` for WCAG AA compliance
- **Card clickability**: Project cards now open GitHub repos in new tab, GitHub icon links use `target="_blank"`
- **`@types/node`**: Installed for CI TypeScript compilation

### Changed
- Portfolio renamed from "AI Developer" to "Full Stack Developer" with user's real name (Vinícius Jadiscke de Souza Tasso)
- Skills section updated to reflect actual tech stack (TypeScript, Go, Next.js, Tailwind CSS, DevOps)
- Featured projects updated with real repos: `myown-sql`, `learnnext`, `notes-app`
- About page with personal bio and background
- Blog posts with relevant development topics
- Social links in `NavBar` and `Footer` now use `siteConfig`
- Tailwind config updated with consistent Dracula color values
- `next.config.mjs`: Changed from `output: "standalone"` to `output: "export"` with `/my-portfolio` basePath
- Package scripts: `lint` uses `next lint`, `dev` uses `next dev`
- ESLint config removed (Next.js 16.2 `next lint` has a bug with flat config)

### Removed
- `@auth/core`, `emailjs`, `emailjs-com`, `drizzle-orm` dependencies
- `src/auth/` directory
- `src/components/shared/DraculaTheme.tsx`
- `src/app/proxy.ts`
- Empty component directories
- `.env.local` placeholder secrets (kept only `NODE_ENV`)
- `docs/` and `.claude/` from git tracking
