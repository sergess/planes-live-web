import React from 'react';
import dayjs from 'dayjs';

import { STATUS } from '@/constants/flight';
import { EMPTY_FIELD } from '@/constants/index';
import Image from 'next/image';
import { getDateDifferenceHM } from '@/utils/date';
import styles from './infoBlock.module.css';

export default function InfoBlock({
  departureTime,
  arrivalTime,
  status,
  countOfUpdates = 0,
}) {
  return (
    <div className={`${styles.container} ${
      status === STATUS.CANCELLED && styles.cancel
    }`}
    >
      {{
        [STATUS.SCHEDULED]: (
          <>
            <p className={styles.label}>Departure</p>
            <p className={styles.value}>
              in
              {' '}
              {departureTime ? `${getDateDifferenceHM(departureTime, dayjs())}` : EMPTY_FIELD}
            </p>
          </>),
        [STATUS.ACTIVE]: (
          <>
            <p className={styles.label}>Arrival</p>
            <p className={styles.value}>
              in
              {' '}
              {arrivalTime ? `${getDateDifferenceHM(arrivalTime, dayjs())}` : EMPTY_FIELD}
            </p>
          </>),
        [STATUS.COMPLETED]: (
          <>
            <p className={styles.label}>Arrived</p>
            <p className={styles.value}>
              {arrivalTime ? `${getDateDifferenceHM(dayjs(), arrivalTime)}` : EMPTY_FIELD}
              {' '}
              ago
            </p>
          </>),
        [STATUS.CANCELLED]: (
          <div className={styles.wrapper}>
            <div className={styles.svg}>
              <Image
                src="/svg/close_squared.svg"
                width={24}
                height={24}
                alt="Close"
              />
            </div>
            <div>
              <p className={styles.cancelLabel}>3 MIN AGO</p>
              <p className={styles.cancelText}>
                Flight canceled
              </p>
              <div>
                <p className={styles.cancelUpdates}>
                  {countOfUpdates - 1 > 0 && (
                  <>
                    {`${countOfUpdates - 1} `}
                    more updates
                    <Image
                      src="/svg/chevron_right.svg"
                      width={12}
                      height={12}
                      alt="Right arrow"
                    />
                  </>
                  )}
                </p>
              </div>
            </div>
          </div>),
      }[status]}
    </div>
  );
}
