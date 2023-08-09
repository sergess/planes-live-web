import React from 'react';
import { formatDate } from '@/utils/date';
import dayjs from 'dayjs';
import styles from './time.module.css';

const orange = '#FF7E47';
const red = '#F33E3E';
const DATE_FORMAT = 'H:MM A';

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
  const actualDate = new Date(actual);
  const timeDate = new Date(time);
  if (actual) {
    const isLater = new Date(actualDate) > new Date(timeDate);
    const diff = dayjs(actualDate).diff(dayjs(timeDate), 'minute');

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
          {formatDate(actual, DATE_FORMAT)}
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
              earlier
            </p>
          )}
        <p className={styles.crossed}>{formatDate(time, DATE_FORMAT)}</p>
      </div>
    );
  }

  return (
    <div className={styles.timeInfo}>
      <p className={styles.onTime}>{formatDate(time, DATE_FORMAT)}</p>
      <p className={styles.text}>On time</p>
    </div>
  );
}
