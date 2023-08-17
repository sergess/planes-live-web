import React from 'react';

import { Flight, Airport } from '@/services/index';
import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import DateBlock from '@/components/FlightInfo/DateBlock';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';

const flightService = new Flight();
const airportService = new Airport();

export default async function PageTemplate({ params }) {
  // React will automatically dedupe the requests
  const flightRequest = await flightService.getFlightInfo(params.id);
  const { flight } = flightRequest[0];
  const [{ airport: destinationAirport }, { airport }] = await Promise.all(
    [airportService.getAirport(flight?.destination), airportService.getAirport(flight?.origin)],
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
        status={flight.status}
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
        arrivalBaggageClaim={flight.arrival_baggage_claim}
        departureCheckInDesk={flight.departure_check_in_desk}
      />
      {!!flight?.actions?.length
        && (
        <LastUpdateCard
          actions={flight.actions}
          departureTime={flight.departure}
          arrivalTime={flight.arrival}
          arrivalGate={flight.arrival_gate}
          arrivalTerminal={flight.arrival_terminal}
          departureTerminal={flight.departure_terminal}
        />
        )}
      <DelayHistoryCard />
    </>
  );
}
