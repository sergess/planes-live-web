import React from 'react';

import styles from './dateBlock.module.css';

export default function DateBlock() {
  const date = new Date();
  const [day, month] = date.toString().split(' ');

  return (
    <p className={styles.label}>
      <span className={styles.date}>
        {day}
        ,
        {' '}
        {month}
        {' '}
        {date.getDate()}
      </span>
      <span className={styles.changeLabel}>
        Change date
      </span>
    </p>
  );
}
