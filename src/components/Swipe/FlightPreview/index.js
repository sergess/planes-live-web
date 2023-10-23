'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

import FlightProgress from '@/components/Swipe/FlightPreview/FlightProgress';
import { getDateDifference, getDateDifferenceHM } from '@/utils/date';
import { calculatePercentageOfRestPath, getDistanceFromLatLonInKm } from '@/utils/distance';
import flightContext from '@/contexts/flight/FlightContext';

import { STATUS } from '@/constants/flight';
import {
  ACTIVE_COLOR, DEFAULT_COLOR, EARLIER_COLOR, LATER_COLOR,
} from '@/constants/colors';
import styles from './FlightPreview.module.scss';

const PLACEHOLDER_URL = '/svg/placeholder_airliner.svg';
const EMPTY_LABEL = 'Time n/a';
const EMPTY_CODE_LABEL = 'N/A';

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
const getLabelColor = (status, actualDate, date) => {
  if (status === STATUS.CANCELLED) {
    return DEFAULT_COLOR;
  }

  if (!actualDate) {
    return ACTIVE_COLOR;
  }
  const diff = getDateDifference(actualDate, date)?.$ms;

  if (diff < 0) {
    return EARLIER_COLOR;
  }
  if (diff > 0) {
    return LATER_COLOR;
  }

  return ACTIVE_COLOR;
};
const getLabelByStatus = (status, time, isEnd = false) => {
  if (!time) {
    return EMPTY_LABEL;
  }
  if (status === STATUS.ACTIVE) {
    if (isEnd) {
      return `in ${getDateDifferenceHM(dayjs(), time)}`;
    }

    return `${getDateDifferenceHM(dayjs(), time)} ago`;
  }
  if (status === STATUS.COMPLETED) {
    return `${getDateDifferenceHM(dayjs(), time)} ago`;
  }
  if (status === STATUS.SCHEDULED) {
    return `in ${getDateDifferenceHM(dayjs(), time)}`;
  }

  return EMPTY_LABEL;
};

export default function FlightPreview() {
  const { flightData } = useContext(flightContext);

  const flight = flightData?.flight;
  const airport = flightData?.destinationAirport;
  const destinationAirport = flightData?.departureAirport;

  if (!flight || !airport || !destinationAirport) {
    return null;
  }

  if (flight.status === STATUS.CANCELLED) return '';

  const {
    departure_actual, arrival, arrival_actual,
    departure, waypoints, aircraft, status,
  } = flight;
  const total = getDateDifferenceHM(
    arrival_actual || arrival,
    departure_actual || departure,
  );

  const startLabel = getLabelByStatus(status, departure_actual || departure);
  const endLabel = getLabelByStatus(status, arrival_actual || arrival, true);

  return (
    <div className={`${styles.planePanel} preview`}>
      <div className={styles.image}>
        <Image
          src={aircraft?.photo_url || PLACEHOLDER_URL}
          alt="Airplane"
          width="100"
          height="60"
          className={styles.img}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.iata}>{destinationAirport.iata || EMPTY_CODE_LABEL}</p>
          <p className={styles.distance}>{`${getDistanceFromLatLonInKm(waypoints[0], waypoints[waypoints.length - 1])} km`}</p>
          <p className={styles.iata}>{airport.iata || EMPTY_CODE_LABEL}</p>
        </div>
        <FlightProgress value={getValue(flight)} />
        <div className={styles.info}>
          <p
            className={styles.time}
            style={{
              color: getLabelColor(status, departure_actual, departure),
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
              color: getLabelColor(status, arrival_actual, arrival),
            }}
          >
            {endLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
