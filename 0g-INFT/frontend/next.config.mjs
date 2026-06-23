/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  // Don't fail the production build on ESLint errors (same code runs in `next dev`).
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;