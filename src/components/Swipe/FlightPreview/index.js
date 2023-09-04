'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

import FlightProgress from '@/components/Swipe/FlightPreview/FlightProgress';
import { getDateDifferenceHM } from '@/utils/date';
import { calculatePercentageOfRestPath, getDistanceFromLatLonInKm } from '@/utils/distance';

import { STATUS } from '@/constants/flight';
import styles from './FlightPreview.module.scss';
import flightContext from "@/contexts/flight/FlightContext";

const EMPTY_LABEL = 'Time n/a';
const ACTIVE_COLOR = '#33CC55';
const DEFAULT_COLOR = 'rgba(255, 255, 255, .5)';
const getValue = (flight) => {
  if (flight.status === STATUS.ACTIVE) {
    return calculatePercentageOfRestPath(flight);
  }
  if (flight.status === STATUS.SCHEDULED) {
    return 0;
  }
  if (flight.status === STATUS.COMPLETED) {
    return 100;
  }

  return 0;
};
const getLabelColor = (status) => (status === STATUS.ACTIVE ? ACTIVE_COLOR : DEFAULT_COLOR);
export default function FlightPreview() {
  const { flightData } = useContext(flightContext);

  const flight = flightData?.flight;
  const airport = flightData?.destinationAirport;
  const destinationAirport = flightData?.departureAirport;

  if (!flight || !airport || !destinationAirport) {
    return null;
  }

  const {
    departure_actual, arrival, arrival_actual,
    departure, waypoints, aircraft, status,
  } = flight;
  const total = getDateDifferenceHM(
    arrival_actual || arrival,
    departure_actual || departure,
  );
  const startLabel = status === STATUS.ACTIVE
    ? `${getDateDifferenceHM(dayjs(), departure_actual || departure)} ago`
    : EMPTY_LABEL;
  const endLabel = status === STATUS.ACTIVE
    ? `in ${getDateDifferenceHM(dayjs(), arrival_actual || arrival)}`
    : EMPTY_LABEL;

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
          <p className={styles.distance}>{`${getDistanceFromLatLonInKm(waypoints[0], waypoints[waypoints.length - 1])} km`}</p>
          <p className={styles.iata}>{airport.iata}</p>
        </div>
        <FlightProgress value={getValue(flight)} />
        <div className={styles.info}>
          <p
            className={styles.time}
            style={{
              color: getLabelColor(status),
            }}
          >
            {startLabel}
          </p>
          <p className={styles.distance}>
            {total}
          </p>
          <p
            className={styles.time}
            style={{
              color: getLabelColor(status),
            }}
          >
            {endLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
