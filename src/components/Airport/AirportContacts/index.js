import React from 'react';

import Phone from '@/assets/svg/phoneMd';
import { formatDate } from '@/utils/date';
import styles from './airportContacts.module.css';

const DATE_FORMAT = 'HH:MM';
const MONTH_DATE_FORMAT = 'ddd, MMM D';

export default function AirportContacts({
  city, country, iata, phone,
}) {
  const date = new Date();
  const currentTimeZoneOffsetInHours = date.getTimezoneOffset() / 60;

  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <Phone />
        <p>
          {phone}
        </p>
      </div>
      <div className={styles.name}>
        <h3 className={styles.iata}>{iata}</h3>
        <p className={styles.location}>
          {city}
          ,
          {' '}
          {country}
        </p>
      </div>
      <div className={styles.date}>
        <p>
          {formatDate(date, DATE_FORMAT)}
          {' '}
          • GMT
          {currentTimeZoneOffsetInHours}
        </p>
        <p>
          {formatDate(date, MONTH_DATE_FORMAT)}
        </p>
      </div>
    </div>
  );
}
