import React from 'react';

import Swipe from '@/components/Swipe';
import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
import { getCommonData, getFlightInfo } from '@/api/flight';
import DateBlock from '@/components/FlightInfo/DateBlock';

import styles from './page.module.css';

const getDrawerState = (state = 0) => {
  if (+state === 0) {
    return styles.middle;
  }
  if (+state === 1) {
    return styles.top;
  }
  if (+state === -1) {
    return styles.bottom;
  }

  return '';
};

export default async function Page({
  params, searchParams = {
    drawer: 0,
  },
}) {
  const flightRequest = getFlightInfo(params.id);

  const [flightData, commonData] = await Promise.all([flightRequest, getCommonData()]);
  const { flight } = flightData[0];
  const airport = commonData.airports.find((a) => a.icao === flight.origin);
  const airline = commonData.airlines.find((a) => a.icao === flight.airline_icao);
  const destinationAirport = commonData.airports.find((a) => a.icao === flight.destination);
  const departureTime = flight.departure_actual || flight.departure;
  const arrivalTime = flight.arrival_actual || flight.arrival;

  return (
    <div className={styles.container}>
      <div className={`${styles.drawer} ${getDrawerState(+searchParams.drawer || 0)}`}>
        <Swipe id={params.id} state={+searchParams.drawer || 0} />
        <div className={styles.body}>
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
            departureTime={departureTime}
            arrivalTime={arrivalTime}
          />
          <LastUpdateCard />
          <DelayHistoryCard />
        </div>
      </div>
    </div>
  );
}
