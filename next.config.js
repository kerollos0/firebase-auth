/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  paths: {
    "@/components/*": ["components/*"],
  },
};

module.exports = nextConfig;
