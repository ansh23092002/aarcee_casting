import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure we're only using App Router
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
