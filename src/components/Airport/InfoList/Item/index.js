import React from 'react';
import dayjs from 'dayjs';

import { formatDate, getDateDifference } from '@/utils/date';
import { DEFAULT_TIME_FORMAT } from '@/constants/date';
import ClientComponent from '@/components/ClientComponent';
import styles from './item.module.css';

const getFormattedCodes = (sharedCodes) => sharedCodes.split(',').map((code, index) => (
  <>
    {code}
    {index !== sharedCodes.length - 1 && <>&middot;</>}
  </>
));
export default function Item({
  dateValue, actualDateValue, icao, airport, sharedCodes,
}) {
  const actual_date = actualDateValue ? dayjs(actualDateValue) : null;
  const date = dayjs(dateValue);
  const actualDateDifference = getDateDifference(dateValue, actualDateValue).minutes();

  return (
    <div className={styles.container}>
      <div className={styles.timeContainer}>
        <p className={styles.timeLg}>
          <ClientComponent>
            {formatDate(actual_date || date, DEFAULT_TIME_FORMAT)}
          </ClientComponent>
        </p>
        {actualDateDifference > 0 && (
        <p className={styles.timeSm}>
          <ClientComponent>
            {formatDate(date, DEFAULT_TIME_FORMAT)}
          </ClientComponent>
        </p>
        )}
      </div>
      <div className={styles.title}>
        <p>
          {icao}
        </p>
        {!!sharedCodes && (
        <p className={styles.codes}>
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
  );
}
