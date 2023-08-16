import { NextResponse } from 'next/server';

import { Flight } from '@/services/index';

export async function POST(request) {
  const { query } = await request.json();

  const flightService = new Flight();

  const searchSuggestions = await flightService.querySearch(query);

  if (!searchSuggestions) {
    return NextResponse.json({ error: 'Bad request' }, { status: 500 });
  }

  return NextResponse.json(searchSuggestions);
}
