import React from 'react';

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

const fetchData = async (code) => {
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
};

export default async function Page({ params, searchParams }) {
  const { airport, statistic } = await fetchData(params.id);

  const show_departures = searchParams?.show_departures || 6;
  const show_arrivals = searchParams?.show_arrivals || 6;

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>
          {airport.name}
        </h3>
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
