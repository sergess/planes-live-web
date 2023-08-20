import React from 'react';
import dayjs from 'dayjs';

import { STATUS } from '@/constants/flight';
import { EMPTY_FIELD } from '@/constants/index';
import styles from './infoBlock.module.css';

export default function InfoBlock({
  departureTime,
  arrivalTime,
  status,
}) {
  return (
    <div className={`${styles.container} ${
      STATUS.CANCELLED && styles.cancel
    }`}
    >
      {{
        [STATUS.SCHEDULED]: (
          <>
            <p className={styles.label}>Departs</p>
            <p className={styles.value}>
              in
              {' '}
              {departureTime ? `${dayjs(departureTime).diff(dayjs(), 'minute')}m` : EMPTY_FIELD}
            </p>
          </>),
        [STATUS.ACTIVE]: (
          <>
            <p className={styles.label}>Arrives</p>
            <p className={styles.value}>
              in
              {' '}
              {arrivalTime ? `${dayjs(arrivalTime).diff(dayjs(), 'minute')}m` : EMPTY_FIELD}
            </p>
          </>),
        [STATUS.COMPLETED]: (
          <>
            <p className={styles.label}>Arrived</p>
            <p className={styles.value}>
              {arrivalTime ? `${dayjs(arrivalTime).diff(dayjs(), 'minute')}m` : EMPTY_FIELD}
              ago
            </p>
          </>),
        [STATUS.CANCELLED]: (
          <div className={styles.wrapper}>
            <div className={styles.svg}>
              svg
            </div>
            <div>
              <p className={styles.cancelLabel}>3 MIN AGO</p>
              <p className={styles.cancelText}>
                Flight canceled
              </p>
              <div>
                <p className={styles.cancelUpdates}>2 more updates</p>
              </div>
            </div>
          </div>),
      }[status]}
    </div>
  );
}
