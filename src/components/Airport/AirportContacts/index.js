import React from 'react';
import Image from 'next/image';

import { formatDate } from '@/utils/date';
import { DAY_MONTH_DATE_FORMAT, DEFAULT_TIME_FORMAT, MIN_TO_HOUR } from '@/constants/date';
import styles from './airportContacts.module.css';

export default function AirportContacts({
  city, country, iata, phone,
}) {
  const date = new Date();
  const currentTimeZoneOffsetInHours = date.getTimezoneOffset() / MIN_TO_HOUR;

  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <Image
          src="/svg/phone.svg"
          width={16}
          height={16}
          alt=""
        />
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
          {formatDate(date, DEFAULT_TIME_FORMAT)}
          {' '}
          • GMT
          {currentTimeZoneOffsetInHours}
        </p>
        <p>
          {formatDate(date, DAY_MONTH_DATE_FORMAT)}
        </p>
      </div>
    </div>
  );
}
