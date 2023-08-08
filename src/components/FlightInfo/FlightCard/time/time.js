import React from 'react';
import styles from './time.module.css';

const formatDate = (date) => {
  const d = new Date(date);

  return d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};
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
  const actualDate = new Date(actual);
  const timeDate = new Date(time);
  if (actual) {
    const isLater = new Date(actualDate) < new Date(timeDate);

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
          {formatDate(actual)}
        </p>

        {isLater ? (
          <p
            className={styles.text}
            style={{
              color: red,
            }}
          >
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
        <p className={styles.crossed}>{formatDate(time)}</p>
      </div>
    );
  }

  return (
    <div className={styles.timeInfo}>
      <p className={styles.onTime}>{formatDate(time)}</p>
      <p className={styles.text}>On time</p>
    </div>
  );
}