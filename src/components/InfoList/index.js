import React from 'react';

import Arrival from '@/assets/svg/arrival';
import { BASE_API, request_uri } from '@/constants/index';
import { getHeaders } from '@/utils/api';
import Item from './Item';
import styles from './infoList.module.css';

const fetchData = async (code, query) => {
  const uri = `${request_uri}airport/${code}/${query}`;
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

export default async function InfoList({
  label, code, query, isArrival,
}) {
  const response = await fetchData(code, query);
  const dateKey = isArrival ? 'arrival' : 'departure';
  const airportLabel = isArrival ? 'origin:' : 'destination';

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <Arrival />
        <p>{label}</p>
      </div>
      <div className={styles.container}>
        {response.map(({ flight }) => (
          <Item
            icao={flight.icao}
            airportLabel={flight[airportLabel]}
            dateValue={flight[dateKey]}
            actualDateValue={flight[`${dateKey}_actual`]}
          />
        ))}
      </div>
    </div>
  );
}
