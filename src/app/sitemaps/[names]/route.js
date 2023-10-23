import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export,func-style
export async function GET(request, context) {
  const req = await fetch(`${process.env.SITEMAP_BASE_URL}/${context?.params?.names}`);
  const body = await req.text();
  const res = new NextResponse(body);
  res.headers.set('content-type', 'application/xml');
  res.headers.set('cache-control', 'public, max-age=86400');

  return res;
}
