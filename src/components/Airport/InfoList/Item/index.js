import React from 'react';

import { formatDate } from '@/utils/date';
import { DEFAULT_TIME_FORMAT } from '@/constants/date';
import styles from './item.module.css';

export default function Item({
  dateValue, actualDateValue, icao, airportLabel,
}) {
  const actual_date = actualDateValue ? new Date(actualDateValue) : null;
  const date = new Date(dateValue);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.timeLg}>
          {formatDate(actual_date || date, DEFAULT_TIME_FORMAT)}
        </p>
        {actual_date && (
        <p className={styles.timeSm}>
          {formatDate(date, DEFAULT_TIME_FORMAT)}
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
