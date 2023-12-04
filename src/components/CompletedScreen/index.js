'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './CompletedScreen.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function CompletedScreen() {
  return (
    <div className={`${styles.successContainer} ${inter.className}`}>
      <div className={styles.wrapper}>
        <Image
          src="/svg/check_filled.svg"
          width={24}
          height={24}
          className={styles.img}
          alt="Left arrow"
        />
        <h1>
          Password changed
        </h1>
        <p className={styles.text}>
          You can now sign in using
          {' '}
          <br />
          your new password
        </p>
      </div>
    </div>
  );
}
