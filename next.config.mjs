/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponents: true,
    serverComponentsMiddleware: true,
    appDir: true,
  },
}

export default nextConfig;
