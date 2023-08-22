import React from 'react';

import { formatDate } from '@/utils/date';
import { DAY_MONTH_DATE_FORMAT } from '@/constants/date';
import styles from './dateBlock.module.css';

export default function DateBlock() {
  const date = new Date();

  return (
    <p className={styles.label}>
      <span className={styles.date}>
        {formatDate(date, DAY_MONTH_DATE_FORMAT)}
      </span>
      <span className={styles.changeLabel}>
        Change date
      </span>
    </p>
  );
}
