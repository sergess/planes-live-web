import React from 'react';

import { STATUS_LABELS } from '@/constants/flight';
import styles from './status.module.css';

const getStyles = (status) => {
  if (status === 1) {
    return styles.scheduled;
  }
  if (status === 2) {
    return styles.filed;
  }
  if (status === 3) {
    return styles.active;
  }
  if (status === 4) {
    return styles.completed;
  }
  if (status === 5) {
    return styles.cancelled;
  }

  return '';
};
export default function Status({ status }) {
  return (
    <span className={`${styles.scheduledLabel} ${getStyles(status)}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
