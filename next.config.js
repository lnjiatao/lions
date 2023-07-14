/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
