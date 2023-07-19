/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  images: {
    domains: ['https://web-dev-28887a.planeslive.com/'],
    formats: ['image/webp'],
  },
  experimental: {
    appDir: true,
  },
};
