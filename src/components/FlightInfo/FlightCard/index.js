import React from 'react';

import VertLine from '@/assets/svg/vertLine';
import HorLine from '@/assets/svg/horLine';

import styles from './flightCard.module.css';

export default function FlightCard() {
  return (
    <div className={styles.boxBody}>
      <div className={styles.line}>
        <VertLine />
      </div>
      <div className={styles.container}>
        <div className={styles.block}>
          <div>
            <p className={styles.title}>Miami</p>
            <p className={styles.description}>MIA — Miami International Airport</p>
            <p className={styles.info}>Terminal 1 • Check-in 7236 • Gate B4C</p>
          </div>
          <div className={styles.timeInfo}>
            <p className={styles.time}>11:27 AM</p>
            <p className={styles.onTime}>On time</p>
          </div>
        </div>
        <div className={styles.middle}>
          <HorLine />
          <p className={styles.timeDiff}>Total 1h 40m</p>
          <HorLine />
        </div>
        <div className={styles.block}>
          <div>
            <p className={styles.title}>Miami</p>
            <p className={styles.description}>MIA — Miami International Airport</p>
            <p className={styles.info}>Terminal 1 • Check-in 7236 • Gate B4C</p>
          </div>
          <div className={styles.timeInfo}>
            <p className={styles.time}>11:27 AM</p>
            <p className={styles.onTime}>On time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
