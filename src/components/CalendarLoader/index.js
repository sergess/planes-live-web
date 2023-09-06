import React from 'react';

import styles from './CalendarLoader.module.scss';

export default function CalendarLoader() {
  return (
    <div className={styles.body}>
      <div className={styles.spinner} />
    </div>
  );
}
