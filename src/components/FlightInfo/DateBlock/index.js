import React from 'react';

import { formatDate } from '@/utils/date';
import styles from './dateBlock.module.css';

const MONTH_DATE_FORMAT = 'ddd, MMM D';

export default function DateBlock() {
  const date = new Date();

  return (
    <p className={styles.label}>
      <span className={styles.date}>
        {formatDate(date, MONTH_DATE_FORMAT)}
      </span>
      <span className={styles.changeLabel}>
        Change date
      </span>
    </p>
  );
}
