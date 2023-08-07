import React from 'react';
import dynamic from 'next/dynamic';

import AirportContacts from '@/components/AirportContacts';
import InfoList from '@/components/InfoList';
import Statistics from '@/components/Statistics';
import Security from '@/components/Security';
import { isMobile } from '@/utils/serverComponent';
import { getAirport } from '@/api/airport';
import styles from './page.module.css';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export const generateMetadata = async ({ params }) => {
  const { airport } = await getAirport(params.id);

  return {
    title: `JFK, John F. Kennedy International Airport - Arrivals, 
    Departures & Overview | Planes Live which means its stucture is 
    (${params.id}), [${airport.name}] - 
    | Arrivals, Departures & Overview | Planes Live`,
    description: `Keep track of aircraft arrivals, departures, 
    delays at ${params.name} (${params.id}) and more! (64 wo airport details)`,
  };
};

export default async function Page({ params, searchParams }) {
  const { airport, statistic } = await getAirport(params.id);

  const show_departures = searchParams?.show_departures || 6;
  const show_arrivals = searchParams?.show_arrivals || 6;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {airport.name}
        </h1>
        <AirportContacts
          city={airport.city}
          country={airport.country}
          iata={airport.iata}
          phone={airport.phone}
        />
        <InfoList
          label="ARRIVALS"
          code={params.id}
          query="arrivals"
          showAll={show_arrivals}
          otherQuery={`show_departures=${show_departures}`}
        />
        <InfoList
          label="DEPARTURES"
          code={params.id}
          query="departures"
          showAll={show_departures}
          otherQuery={`show_arrivals=${show_arrivals}`}
        />
        <Statistics {...statistic} />
        <Security />
      </div>
      {!isMobile() && (
      <Map
        latitude={airport.lat}
        longitude={airport.lon}
        code={params.id}
      />
      )}
    </>
  );
}
