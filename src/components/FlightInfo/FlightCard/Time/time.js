import React from 'react';
import { formatDate } from '@/utils/date';
import dayjs from 'dayjs';
import { M_TIME_FORMAT } from '@/constants/date';
import styles from './time.module.css';

const orange = '#FF7E47';
const red = '#F33E3E';

const getColor = (isLater) => {
  if (isLater) {
    return red;
  }

  return orange;
};
export default function Time({
  actual,
  time,
}) {
  const actualDate = actual ? dayjs(actual) : null;
  const timeDate = time ? dayjs(time) : null;
  const diff = dayjs(actualDate).diff(dayjs(timeDate), 'minute');

  if (actual && diff !== 0) {
    const isLater = diff > 0;

    return (
      <div
        className={styles.timeInfo}
      >
        <p
          className={styles.onTime}
          style={{
            color: getColor(isLater),
          }}
        >
          {formatDate(actualDate, M_TIME_FORMAT)}
        </p>

        {isLater ? (
          <p
            className={styles.text}
            style={{
              color: red,
            }}
          >
            {diff}
            m
            {' '}
            late
          </p>
        )
          : (
            <p
              className={styles.text}
              style={{
                color: orange,
              }}
            >
              {diff}
              m
              {' '}
              earlier
            </p>
          )}
        <p className={styles.crossed}>{formatDate(timeDate, M_TIME_FORMAT)}</p>
      </div>
    );
  }

  return (
    <div className={styles.timeInfo}>
      <p className={styles.onTime}>{formatDate(timeDate, M_TIME_FORMAT)}</p>
      <p className={styles.text}>On time</p>
    </div>
  );
}
