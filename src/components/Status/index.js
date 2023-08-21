import React from 'react';

import { STATUS, STATUS_LABELS } from '@/constants/flight';
import styles from './status.module.css';

const getStyles = (status) => {
  if (status === STATUS.SCHEDULED) {
    return styles.scheduled;
  }
  if (status === STATUS.FILED) {
    return styles.filed;
  }
  if (status === STATUS.ACTIVE) {
    return styles.active;
  }
  if (status === STATUS.COMPLETED) {
    return styles.completed;
  }
  if (status === STATUS.CANCELLED) {
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
