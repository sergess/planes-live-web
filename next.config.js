/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  images: {
    domains: ['https://web-dev-28887a.planeslive.com/'],
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
