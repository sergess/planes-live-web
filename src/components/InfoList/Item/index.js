import React from 'react';

import styles from './item.module.css';

const formatDate = (d) => d.toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
});
export default async function Item({
  dateValue, actualDateValue, icao, airportLabel,
}) {
  const actual_date = actualDateValue ? new Date(actualDateValue) : null;
  const date = new Date(dateValue);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.timeLg}>
          {formatDate(actual_date || date)}
        </p>
        {actual_date && (
        <p className={styles.timeSm}>
          {formatDate(date)}
        </p>
        )}
      </div>
      <div className={styles.title}>
        {icao}
      </div>
      <div>
        <div className={styles.city}>
          {airportLabel}
        </div>
        <div className={styles.timeSm} style={{ textAlign: 'right' }}>{airportLabel}</div>
      </div>
    </div>
  );
}
