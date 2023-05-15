/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/uc',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/file/d/**',
      },
      {
        protocol: 'https',
        hostname: 'googleapis.com',
        port: '',
        pathname: '/auth/**',
      },
    ],
  },
  // webpack5: true,
}

module.exports = nextConfig

