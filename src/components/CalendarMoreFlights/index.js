import React, { useContext } from 'react';

import { formatDate } from '@/utils/date';
import { HOUR_MINUTE_TIME_FORMAT } from '@/constants/date';
import flightContext from '@/contexts/flight/FlightContext';

import styles from './CalendarMoreFlights.module.scss';

export default function CalendarMoreFlights({ flights, onClick }) {
  const { flightData } = useContext(flightContext);

  const {
    timezone_name: destinationTz,
  } = flightData.destinationAirport;

  const {
    timezone_name: departureTz,
  } = flightData.departureAirport;

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <span>Departure</span>
        <span>Arrival</span>
      </div>
      {
        flights.map((item, key) => {
          const departure = formatDate(item.flight.departure, HOUR_MINUTE_TIME_FORMAT, departureTz);
          const arrival = formatDate(item.flight.arrival, HOUR_MINUTE_TIME_FORMAT, destinationTz);

          return (
            <button type="button" key={item.id} className={styles.row} onClick={onClick(key)}>
              <span>{departure}</span>
              <span>{arrival}</span>
            </button>
          );
        })
      }
    </div>
  );
}
