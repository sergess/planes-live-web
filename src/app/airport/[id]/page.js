import React from 'react';

import {
  BASE_API, request_uri,
} from '@/constants/index';
import { getHeaders } from '@/utils/api';

import AirportContacts from '@/components/AirportContacts';
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
  const { airport } = await fetchData(params.id);
  console.log(airport, 'headers');

  return (
    <main className={styles.container}>
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
    </main>
  );
}
