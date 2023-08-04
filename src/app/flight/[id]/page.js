import React, { cache } from 'react';

import Swipe from '@/components/Swipe';

import { BASE_API, request_uri } from '@/constants/index';
import { getHeaders } from '@/utils/api';
import Status from '@/components/Status';
import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
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
const fetchData2 = async () => {
  const uri = `${request_uri}data`;
  const headers = getHeaders(uri);

  const response = await fetch(`${BASE_API}${uri}`, {
    cache: 'no-store',
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
export default async function Page({
  params, searchParams = {
    drawer: 0,
  },
}) {
  const date = new Date();
  const [day, month] = date.toString().split(' ');
  const flightRequest = fetchData(params.id);
  const commonRequest = fetchData2();

  const [flightData] = await Promise.all([flightRequest, commonRequest]);
  const { flight } = flightData[0];
  // const { airports } = commonData;
  // console.log(airports.length, 'airports');
  // console.log(flight, airports.find((a) => a.origin === flight.icao));

  return (
    <div className={styles.container}>
      <div className={`${styles.drawer} ${getDrawerState(+searchParams.drawer || 0)}`}>
        <Swipe id={params.id} state={+searchParams.drawer || 0} />
        <div className={styles.body}>
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
          <LastUpdateCard />
          <DelayHistoryCard />
        </div>
      </div>
    </div>
  );
}
