import React from 'react';

import styles from './status.module.css';

export default function Status() {
  return (
    <span className={styles.scheduledLabel}>
      SCHEDULED
    </span>
  );
}
