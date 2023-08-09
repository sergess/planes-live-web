import React from 'react';

import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import { getCommonData, getFlightInfo } from '@/api/flight';
import DateBlock from '@/components/FlightInfo/DateBlock';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default async function Page({ params }) {
  const flightRequest = getFlightInfo(params.id);

  const [flightData, commonData] = await Promise.all([flightRequest, getCommonData()]);
  const { flight } = flightData[0];

  const airport = commonData.airports.find((a) => a.icao === flight.origin);
  const airline = commonData.airlines.find((a) => a.icao === flight.airline_icao);
  const destinationAirport = commonData.airports.find((a) => a.icao === flight.destination);

  return (
    <div>
      <DateBlock />
      <FlightCard
        city={airport.city}
        logoUrl={airline.logo_url_s}
        iata={flight?.iata}
        name={airport.name}
        originIata={airport.iata}
        destinationIata={destinationAirport.iata}
        destinationCity={destinationAirport.city}
        destinationName={destinationAirport.name}
        departureTime={flight.departure}
        arrivalTime={flight.arrival}
        actualArrivalTime={flight.arrival_actual}
        actualDepartureTime={flight.departure_actual}
      />
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
