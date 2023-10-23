import { NextResponse } from 'next/server';

import { ApiV212 } from '@/services/api-v2.12';

// eslint-disable-next-line import/prefer-default-export,func-style
export async function POST(request) {
  const { query } = await request.json();

  const apiV212Service = new ApiV212();

  const searchSuggestions = await apiV212Service.querySearch(query);

  if (!searchSuggestions) {
    return NextResponse.json({ error: 'Bad request' }, { status: 500 });
  }

  return NextResponse.json(searchSuggestions);
}
