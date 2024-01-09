import { NextResponse } from 'next/server';

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const session = !!req.cookies.get('next-auth.session-token');
  if (!session) {
    return NextResponse.redirect(new URL(`/login?callbackUrl=${path}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/search'],
};
