import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

import { formatDate, getDateDifference } from '@/utils/date';
import { DEFAULT_TIME_FORMAT } from '@/constants/date';
import styles from './item.module.css';

const getFormattedCodes = (sharedCodes) => sharedCodes.split(',').map((code, index) => (
  <React.Fragment key={code}>
    {code}
    {index !== sharedCodes.length - 1 && <>&middot;</>}
  </React.Fragment>
));
export default function Item({
  dateValue, actualDateValue, icao, iata,
  airport, sharedCodes, tz, id, dateKey,
}) {
  const actual_date = actualDateValue ? dayjs(actualDateValue) : null;
  const date = dayjs(dateValue);
  const actualDateDifference = actual_date ? getDateDifference(dateValue, actualDateValue).minutes() : 0;
  const href = `/flight/${iata}/${id}`;

  return (
    <Link
      prefetch={false}
      href={href}
      className={`${styles.link} analytic__${dateKey}_flight`}
      data-analytic-code={iata}
    >
      <div className={styles.container}>
        <div className={styles.timeContainer}>
          <p className={styles.timeLg}>
            {formatDate(actual_date || date, DEFAULT_TIME_FORMAT, tz)}
          </p>
          {actualDateDifference !== 0 && (
          <p className={styles.timeSm}>
            {formatDate(date, DEFAULT_TIME_FORMAT, tz)}
          </p>
          )}
        </div>
        <div className={styles.title}>
          <p>
            {iata || icao}
          </p>
          {!!sharedCodes && (
          <p title={sharedCodes} className={styles.codes}>
            {getFormattedCodes(sharedCodes)}
          </p>
          )}
        </div>
        <div>
          <div className={styles.city}>
            {airport.city}
          </div>
          <div className={styles.cityIata}>{airport.iata}</div>
        </div>
      </div>
    </Link>
  );
}
