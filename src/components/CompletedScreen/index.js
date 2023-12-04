'use client';

import React from 'react';
import Image from 'next/image';

import styles from './CompletedScreen.module.scss';

export default function CompletedScreen() {
  return (
    <div className={styles.successContainer}>
      <div className={styles.wrapper}>
        <Image
          src="/svg/check_filled.svg"
          width={24}
          height={24}
          className={styles.img}
          alt="Left arrow"
        />
        <h1>
          Your password has been
          successfully changed
        </h1>
      </div>
    </div>
  );
}
