/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  paths: {
    "@/components/*": ["components/*"],
  },
};

module.exports = nextConfig;
