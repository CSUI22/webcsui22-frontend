/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['drive.google.com', 'res.cloudinary.com', 'csui22.imgix.net'],
  },
}

module.exports = nextConfig
