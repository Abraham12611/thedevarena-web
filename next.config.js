/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    NEXT_PUBLIC_AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    NEXT_PUBLIC_AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
  },
};

module.exports = nextConfig;