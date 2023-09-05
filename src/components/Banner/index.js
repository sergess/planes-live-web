'use client';

import React from 'react';

import SmartBanner from 'react-smartbanner';
import Image from 'next/image';

import { PLATFORM } from '@/constants/index';
import { getMobileOperatingSystem } from '@/utils/index';
import styles from './Banner.module.scss';

export default function Banner() {
  const icon = getMobileOperatingSystem() === PLATFORM.IOS
    ? '/svg/ic_apple.svg'
    : '/svg/ic_google_play.svg';

  return (
    <SmartBanner
      title="Planes Live"
      button={(
        <div className={styles.appleButtonContainer}>
          <Image
            src={icon}
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
