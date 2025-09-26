/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '',
};

module.exports = nextConfig;

