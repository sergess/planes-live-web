import React, { cache } from 'react';

import Swipe from '@/components/Swipe';

import { BASE_API, request_uri } from '@/constants/index';
import { getHeaders } from '@/utils/api';
import Status from '@/components/Status';
import FlightCard from '@/components/FlightCard';
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

const fetchData = cache(async (code) => {
  const uri = `${request_uri}position/icao/${code}`;
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

export default async function Page({
  params, searchParams = {
    drawer: 0,
  },
}) {
  const date = new Date();
  const [day, month] = date.toString().split(' ');
  const response = await fetchData(params.id);
  const { flight } = response[0];

  return (
    <div className={styles.container}>
      <div className={`${styles.drawer} ${getDrawerState(+searchParams.drawer || 0)}`}>
        <Swipe id={params.id} state={+searchParams.drawer || 0} />
        <p className={styles.label}>
          <span className={styles.date}>
            {day}
            ,
            {' '}
            {month}
            {' '}
            {date.getDate()}
          </span>
          <span className={styles.changeLabel}>
            Change date
          </span>
        </p>
        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <span className={styles.flightLabel}>
              {flight.iata}
            </span>
            <Status />
          </div>
          <FlightCard />
        </div>
      </div>
    </div>
  );
}
