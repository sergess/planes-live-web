import React from 'react';

import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import DateBlock from '@/components/FlightInfo/DateBlock';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
import { Flight } from '@/services/index';
import { getAirport } from '@/api/airport';

export default async function PageTemplate({ params }) {
  // React will automatically dedupe the requests
  const flightService = new Flight();
  const flightRequest = await flightService.getFlightInfo(params.id);
  const { flight } = flightRequest[0];
  const [{ airport: destinationAirport }, { airport }] = await Promise.all(
    [getAirport(flight?.destination), getAirport(flight?.origin)],
  );

  return (
    <>
      <DateBlock />
      <FlightCard
        city={airport.city}
        logoUrl=""
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
        arrivalTerminal={flight.arrival_terminal}
        departureTerminal={flight.departure_terminal}
        arrivalGate={flight.arrival_gate}
        departureGate={flight.departure_gate}
      />
      <LastUpdateCard />
      <DelayHistoryCard />
    </>
  );
}
