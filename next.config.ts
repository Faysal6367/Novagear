import type { NextConfig } from "next";

const nextConfig: NextConfig = { // This is the Next.js configuration file for the project. It defines various settings and options that control the behavior of the Next.js framework, including image handling, ESLint configuration, and TypeScript settings.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },
      {
        protocol: 'https',
        hostname: 'github.com'
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
