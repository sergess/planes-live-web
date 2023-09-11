import React from 'react';
import Image from 'next/image';

import styles from './item.module.scss';

export default function Notifications({ children }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {children}
      </p>
      <Image
        src="/svg/img_switch.svg"
        priority
        width={51}
        height={31}
        alt="Switch button"
      />
    </div>
  );
}
