import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // i18n block removed as it's unsupported in App Router
  // experimental.pwa block removed as it's deprecated
};

export default nextConfig;
