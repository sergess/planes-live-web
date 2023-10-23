import React from 'react';
import Image from 'next/image';

import styles from './FlightProgress.module.scss';

const IMG_SIZE = 16;
const SPACE_RIGHT = 1;
const SPACE_LEFT = 2.5;

export default function FlightProgress({ value = 0 }) {
  const style = value < IMG_SIZE
    ? { left: `calc(${value}% - ${SPACE_LEFT}px)`, top: '0.5px' }
    : { left: `calc(${value}% - ${IMG_SIZE - SPACE_RIGHT}px)`, top: '0.5px' };

  return (
    <div className={styles.container}>
      <div className={styles.passed} style={{ width: `${value}%` }}>.</div>
      <Image
        src="/svg/plane.svg"
        priority
        width={IMG_SIZE}
        height={IMG_SIZE}
        alt="Plane symbol"
        className={styles.plane}
        style={style}
      />
    </div>
  );
}
