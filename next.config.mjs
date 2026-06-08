/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimize for Vercel deployment
  output: "standalone",
  compress: true,
  // Use webpack instead of Turbopack (if Turbopack is unstable)
  // Note: In Next.js 16.2, Turbopack is the default build system
};

export default nextConfig;
