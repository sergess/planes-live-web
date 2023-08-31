import { NextResponse } from 'next/server';

import Flight from "@/services/flight";

// eslint-disable-next-line import/prefer-default-export,func-style
export async function POST(request) {
  const { query } = await request.json();

  console.log('query', query);

  const flightService = new Flight();

  const data = await flightService.getAvailableFlightDates(query);

  if (!data) {
    return NextResponse.json({ error: 'Bad request' }, { status: 500 });
  }

  return NextResponse.json(data);
}