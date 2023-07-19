import React from 'react';

import styles from './item.module.css';

export default async function Item({
  departure, arrival, icao, airlineIcao,
}) {
  const departureDate = new Date(departure);
  const arrivalDate = new Date(arrival);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.timeLg}>
          {departureDate.getHours()}
          :
          {departureDate.getMinutes()}
        </p>
        <p className={styles.timeSm}>
          {arrivalDate.getHours()}
          :
          {arrivalDate.getMinutes()}
        </p>
      </div>
      <div className={styles.title}>
        {icao}
      </div>
      <div>
        <div className={styles.city}>
          London
        </div>
        <div className={styles.timeSm} style={{ textAlign: 'right' }}>{airlineIcao}</div>
      </div>
    </div>
  );
}
