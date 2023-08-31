import React from 'react';
import Image from 'next/image';

import styles from './FlightProgress.module.scss';

const IMG_SIZE = 16;
export default function FlightProgress({ value = 0 }) {
  return (
    <div className={styles.container}>
      <div className={styles.passed} style={{ width: `${value}%` }}>.</div>
      <Image
        src="/svg/plane.svg"
        priority
        width={IMG_SIZE}
        height={IMG_SIZE}
        alt="Plane icon"
        className={styles.plane}
        style={{ left: `calc(${value}% - (${IMG_SIZE}px / 2))` }}
      />
    </div>
  );
}
