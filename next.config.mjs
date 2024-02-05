/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: { images: { unoptimized: true } },
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/plsplspls",
};

export default nextConfig;
