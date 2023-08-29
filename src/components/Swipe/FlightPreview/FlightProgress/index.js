import React from 'react';
import Image from 'next/image';

import styles from './FlightProgress.module.scss';

export default function FlightProgress() {
  return (
    <div className={styles.container}>
      <div className={styles.passed} style={{ width: `${30}%` }}>.</div>
      <Image
        src="/svg/plane.svg"
        priority
        width={16}
        height={16}
        alt="Plane icon"
        className={styles.plane}
        style={{ left: `${30}%` }}
      />
    </div>
  );
}
