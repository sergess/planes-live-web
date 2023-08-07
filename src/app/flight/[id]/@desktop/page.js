import React from 'react';

import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import { getFlightInfo } from '@/api/flight';
import DateBlock from '@/components/FlightInfo/DateBlock';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default async function Page({ params }) {
  const flightRequest = getFlightInfo(params.id);

  const [flightData] = await Promise.all([flightRequest]);

  const { flight } = flightData[0];

  return (
    <div>
      <DateBlock />
      <FlightCard iata={flight?.iata} />
      <LastUpdateCard />
      <DelayHistoryCard />
      <Map
        latitude={flight.waypoints[0].lat}
        longitude={flight.waypoints[0].lon}
        latitudeEnd={flight.waypoints[1].lat}
        longitudeEnd={flight.waypoints[1].lon}
        code={params.id}
      />
    </div>
  );
}
