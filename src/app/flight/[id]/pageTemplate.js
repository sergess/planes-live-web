import React from 'react';

import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import DateBlock from '@/components/FlightInfo/DateBlock';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
import { Flight } from '@/services/index';

export default async function PageTemplate({ params }) {
  // React will automatically dedupe the requests
  const flightService = new Flight();
  const flightRequest = await flightService.getFlightInfo(params.id);
  const getCommonData = await flightService.getCommonFlightData();
  const [flightData, commonData] = await Promise.all([flightRequest, getCommonData]);
  const { flight } = flightData[0];

  const airport = commonData.airports.find((a) => a.icao === flight.origin);
  const airline = commonData.airlines.find((a) => a.icao === flight.airline_icao);
  const destinationAirport = commonData.airports.find((a) => a.icao === flight.destination);

  return (
    <>
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
