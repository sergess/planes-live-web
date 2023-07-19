import React from 'react';

import Phone from '@/assets/svg/phoneMd';
import styles from './airportContacts.module.css';

export default async function AirportContacts({ city, country, iata }) {
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
        <p>11:56 • GMT-7</p>
        <p>Mon, May 3</p>
      </div>
    </div>
  );
}
