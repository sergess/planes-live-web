import React from 'react';

import Swipe from '@/components/Swipe';
import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
import { getFlightInfo } from '@/api/flight';
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

  const [flightData] = await Promise.all([flightRequest]);
  const { flight } = flightData[0];

  return (
    <div className={styles.container}>
      <div className={`${styles.drawer} ${getDrawerState(+searchParams.drawer || 0)}`}>
        <Swipe id={params.id} state={+searchParams.drawer || 0} />
        <div className={styles.body}>
          <DateBlock />
          <FlightCard iata={flight.iata} />
          <LastUpdateCard />
          <DelayHistoryCard />
        </div>
      </div>
    </div>
  );
}
