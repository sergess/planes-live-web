import { NextResponse } from 'next/server';

const generateSiteMap = (posts) => (`<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts
    .map(({ id }) => `
       <url>
           <loc>${`https://jsonplaceholder.typicode.com/posts/${id}`}</loc>
       </url>
     `)
    .join('')}
   </urlset>
 `
);

// eslint-disable-next-line import/prefer-default-export,func-style
export async function GET() {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await request.json();
  const sitemap = generateSiteMap(posts);
  const response = new NextResponse(sitemap);
  response.headers.set('content-type', 'application/xml');
  response.headers.set('cache-control', 'public, max-age=86400');

  return response;
  // const res = new NextResponse(sitemap, {
  //   status: 200,
  //   headers: new Headers({
  //     'content-type': 'application/xml',
  //     'cache-control': 'public, max-age=86400',
  //   }),
  // });
  //
  // return res;
}
