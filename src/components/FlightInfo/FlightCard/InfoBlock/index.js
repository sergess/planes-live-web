import React from 'react';
import dayjs from 'dayjs';

import { STATUS } from '@/constants/flight';
import styles from './infoBlock.module.css';

export default function InfoBlock({
  departureTime,
  arrivalTime,
  status,
}) {
  return (
    <div className={styles.container}>
      {{
        [STATUS.SCHEDULED]: (
          <>
            <p className={styles.label}>Departs</p>
            <p className={styles.value}>
              in
              {' '}
              {`${dayjs(departureTime).diff(dayjs(), 'minute')}m`}
            </p>
          </>),
        [STATUS.ACTIVE]: (
          <>
            <p className={styles.label}>Arrives</p>
            <p className={styles.value}>
              in
              {' '}
              {`${dayjs(arrivalTime).diff(dayjs(), 'minute')}m`}
            </p>
          </>),
        [STATUS.COMPLETED]: (
          <>
            <p className={styles.label}>Arrived</p>
            <p className={styles.value}>
              {`${dayjs(arrivalTime).diff(dayjs(), 'minute')}m`}
              ago
            </p>
          </>),
      }[status]}
    </div>
  );
}
