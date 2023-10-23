import { NextResponse } from 'next/server';

import { Flight } from '@/services/flight';

// eslint-disable-next-line import/prefer-default-export,func-style
export async function POST(request) {
  const { flight, date } = await request.json();

  const flightService = new Flight();

  const data = await flightService.getFlightDataById(flight, date);

  if (!data) {
    return NextResponse.json({ error: 'Bad request' }, { status: 500 });
  }

  return NextResponse.json(data);
}
