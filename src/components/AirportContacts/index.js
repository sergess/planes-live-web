import React from 'react';

import Phone from '@/assets/svg/phoneMd';
import styles from './airportContacts.module.css';

export default function AirportContacts({
  city, country, iata, phone,
}) {
  const date = new Date();
  const currentTimeZoneOffsetInHours = date.getTimezoneOffset() / 60;
  const [day, month] = date.toString().split(' ');

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
          {date.getHours()}
          :
          {date.getMinutes()}
          {' '}
          • GMT
          {currentTimeZoneOffsetInHours}
        </p>
        <p>
          {day}
          ,
          {' '}
          {month}
          {' '}
          {date.getDate()}
        </p>
      </div>
    </div>
  );
}
