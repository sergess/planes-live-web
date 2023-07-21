import React from 'react';

import Phone from '@/assets/svg/phoneMd';
import styles from './airportContacts.module.css';

export default async function AirportContacts({ city, country, iata }) {
  const date = new Date();
  const currentTimeZoneOffsetInHours = date.getTimezoneOffset() / 60;
  const [day, month] = date.toString().split(' ');

  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <Phone />
        <p>
          +1 (800) 897-1910
        </p>
      </div>
      <div className={styles.name}>
        <h3>{iata}</h3>
        <p>
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
