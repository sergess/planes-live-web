import React, { cache } from 'react';

import {
  BASE_API, request_uri,
} from '@/constants/index';
import { getHeaders } from '@/utils/api';

import AirportContacts from '@/components/AirportContacts';
import InfoList from '@/components/InfoList';
import Statistics from '@/components/Statistics';
import Security from '@/components/Security';
import Map from '@/components/Map';
import styles from './page.module.css';

const fetchData = cache(async (code) => {
  const uri = `${request_uri}airport/${code}`;
  const headers = getHeaders(uri);

  const response = await fetch(`${BASE_API}${uri}`, {
    headers,
  });
    // Recommendation: handle errors
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();

  return data;
});

export const generateMetadata = async ({ params }) => {
  const { airport } = await fetchData(params.id);

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
  const { airport, statistic } = await fetchData(params.id);

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
      <Map
        latitude={airport.lat}
        longitude={airport.lon}
        code={params.id}
      />
    </>
  );
}
