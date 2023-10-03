/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  output: 'standalone',
  images: {
    domains: [
      'https://web-dev-28887a.planeslive.com',
      'https://flightradar.s3.appcnt.com',
    ],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flightradar.s3.appcnt.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "@/styles/variables.scss";',
  },
  experimental: {
    appDir: true,
  }
};
