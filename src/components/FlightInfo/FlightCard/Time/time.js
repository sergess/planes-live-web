import React from 'react';
import { formatDate, getDateDifference } from '@/utils/date';
import dayjs from 'dayjs';
import { M_TIME_FORMAT } from '@/constants/date';
import {
  EARLIER_COLOR, LATER_COLOR, DARK_COLOR, ACTIVE_COLOR,
} from '@/constants/colors';
import { STATUS } from '@/constants/flight';
import UnknownTime from '@/components/UnknownTime';
import styles from './time.module.css';

const getColor = (isLater) => {
  if (isLater) {
    return LATER_COLOR;
  }

  return EARLIER_COLOR;
};
export default function Time({
  actual,
  time,
  tz,
  status,
}) {
  const actualDate = actual ? dayjs(actual) : null;
  const timeDate = time ? dayjs(time) : null;
  const diff = getDateDifference(actualDate, timeDate).minutes();
  const isCancelled = status === STATUS.CANCELLED;

  if (!timeDate) {
    return (
      <div className={styles.noDateContainer}>
        <p className={styles.noDate}>--</p>
        <UnknownTime />
      </div>
    );
  }

  if (actual && +diff !== 0) {
    const isLater = diff > 0;

    return (
      <div
        className={styles.timeInfo}
      >
        <p
          className={styles.onTime}
          style={{ color: isCancelled ? DARK_COLOR : getColor(isLater) }}
        >
          {formatDate(actualDate, M_TIME_FORMAT, tz)}
        </p>

        {!isCancelled && (isLater ? (
          <p
            className={styles.text}
            style={{
              color: LATER_COLOR,
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
                color: EARLIER_COLOR,
              }}
            >
              {Math.abs(diff)}
              m
              {' '}
              earlier
            </p>
          ))}
        <p className={styles.crossed}>{formatDate(timeDate, M_TIME_FORMAT, tz)}</p>
      </div>
    );
  }

  return (
    <div className={styles.timeInfo}>
      <p
        className={styles.onTime}
        style={{
          color: isCancelled ? DARK_COLOR : ACTIVE_COLOR,
        }}
      >
        {formatDate(timeDate, M_TIME_FORMAT, tz)}
      </p>
      {!isCancelled && <p className={styles.text}>On time</p>}
    </div>
  );
}
