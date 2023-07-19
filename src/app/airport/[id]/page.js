import React from 'react';

import {
  BASE_API, request_uri,
} from '@/constants/index';
import { getHeaders } from '@/utils/api';

import AirportContacts from '@/components/AirportContacts';
import InfoList from '@/components/InfoList';
import Statistics from '@/components/Statistics';
import Security from '@/components/Security';
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

export default async function Page({ params }) {
  const { airport, statistic } = await fetchData(params.id);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {airport.city}
        <br />
        {airport.name}
      </h3>
      <AirportContacts
        city={airport.city}
        country={airport.country}
        iata={airport.iata}
      />
      <InfoList
        label="ARRIVALS"
        code={params.id}
        query="arrivals"
      />
      <InfoList
        label="DEPARTURES"
        code={params.id}
        query="departures"
      />
      <Statistics {...statistic} />
      <Security />
    </div>
  );
}
