/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // This will make pages using toast client-side only
    appDir: true,
  }
}

module.exports = nextConfig