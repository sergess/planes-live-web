import React from 'react';

import Image from 'next/image';
import styles from './gate.module.css';

const DEPARTURE_ICON = '/svg/gate_departure_alt.svg';
const ARRIVE_ICON = '/svg/gate_arrival_alt.svg';

export default function Gate({ isDeparture = false, gate }) {
  return (
    <div className={styles.container}>
      <Image
        src={isDeparture ? DEPARTURE_ICON : ARRIVE_ICON}
        alt={isDeparture ? 'departure gate icon' : 'arrival gate icon'}
        width={16}
        height={16}
      />
      {gate}
    </div>
  );
}
