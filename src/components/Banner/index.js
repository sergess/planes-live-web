'use client';

import React from 'react';

import SmartBanner from 'react-smartbanner';
import Image from 'next/image';

import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <SmartBanner
      title="Planes Live"
      button={(
        <div className={styles.appleButtonContainer}>
          <Image
            src="/svg/ic_apple.svg"
            width={16}
            height={16}
            alt="Apple icon"
          />
          <p>
            Get
          </p>
        </div>
)}
      storeText={{
        ios: 'Get more from the app',
        android: 'Get more from the app',
      }}
    />
  );
}
