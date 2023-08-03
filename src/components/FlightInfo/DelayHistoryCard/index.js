import React from 'react';

import Link from 'next/link';
import styles from './delayHistoryCard.module.css';

export default function DelayHistoryCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>DELAY HISTORY</p>
      </div>
      <div className={styles.tabs}>
        <Link href="" className={`${styles.tab} ${true && styles.active}`}>Departures</Link>
        <Link href="" className={`${styles.tab} ${false && styles.active}`}>Arrivals</Link>
      </div>
    </div>
  );
}
