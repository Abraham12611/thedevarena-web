/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Required for Netlify
  target: 'serverless'
}

module.exports = nextConfig