import React from 'react';
import Image from 'next/image';

import styles from './FlightProgress.module.scss';

export default function FlightProgress({ value = 0 }) {
  return (
    <div className={styles.container}>
      <div className={styles.passed} style={{ width: `${value}%` }}>.</div>
      <Image
        src="/svg/plane.svg"
        priority
        width={16}
        height={16}
        alt="Plane icon"
        className={styles.plane}
        style={{ left: `${value}%` }}
      />
    </div>
  );
}
