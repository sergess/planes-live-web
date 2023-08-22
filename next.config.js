/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'standalone',
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
  experimental: {
    appDir: true,
  },
};
