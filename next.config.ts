import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "ja"],
    localeDetection: true,
  },
  experimental: {
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
  },
};

export default nextConfig;
