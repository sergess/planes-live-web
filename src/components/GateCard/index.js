import React from 'react';

import Image from 'next/image';
import styles from './gate.module.css';

const DEPARTURE_ICON = '/svg/notifications/gate_departure_alt.svg';
const ARRIVE_ICON = '/svg/notifications/gate_arrival_alt.svg';

export default function Gate({ isDeparture = false, gate }) {
  return (
    <div className={styles.container}>
      <Image
        src={isDeparture ? DEPARTURE_ICON : ARRIVE_ICON}
        alt={isDeparture ? 'departure gate icon' : 'arrival gate icon'}
        width={21}
        height={20}
      />
      {gate}
    </div>
  );
}
