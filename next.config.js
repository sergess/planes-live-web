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
  },
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/tiktok',
        destination: 'https://app.adjust.com/15ahhs38_15oktx40',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://app.adjust.com/15euweik_15z3769z',
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://app.adjust.com/15zzlugx_159kqd79',
        permanent: true,
      },
      {
        source: '/app-ads.txt',
        destination: 'https://apalon.com/app-ads.txt',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'token',
            value: '',
          },
        ],
        destination: '/reset-password',
        permanent: false,
      },
    ];
  },
  env: {
    X_API_KEY: 'JGZE8xU8ex',
  },
};
