import React from 'react';
import Image from 'next/image';

import FlightProgress from '@/components/Swipe/FlightPreview/FlightProgress';

import { convertSecondsToDuration, getDateDifferenceHM } from '@/utils/date';
import { getDistanceFromLatLonInKm } from '@/utils/distance';
import dayjs from 'dayjs';

import styles from './FlightPreview.module.scss';

export default function FlightPreview({
  destinationAirport,
  airport,
  flight,
}) {
  const {
    route_time, departure_actual, arrival, arrival_actual,
    departure, waypoints, aircraft,
  } = flight;

  return (
    <div className={`${styles.planePanel} preview`}>
      <div className={styles.image}>
        <Image
          src={aircraft?.photo_url}
          alt={aircraft?.model}
          width="100"
          height="60"
          className={styles.img}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.iata}>{destinationAirport.iata}</p>
          <p className={styles.distance}>{`${getDistanceFromLatLonInKm(waypoints[0], waypoints[1])} km`}</p>
          <p className={styles.iata}>{airport.iata}</p>
        </div>
        <FlightProgress />
        <div className={styles.info}>
          <p className={styles.time}>
            {
              getDateDifferenceHM(dayjs(), departure_actual || departure)
            }
            {' '}
            ago
          </p>
          <p className={styles.distance}>
            {convertSecondsToDuration(route_time)}
          </p>
          <p className={styles.time}>
            in
            {
              ` ${getDateDifferenceHM(dayjs(), arrival_actual || arrival)}`
            }
          </p>
        </div>
      </div>
    </div>
  );
}
