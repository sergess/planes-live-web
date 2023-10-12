import React from 'react';

import { ANDROID_DOWNLOAD_LINK, IOS_DOWNLOAD_LINK } from '@/constants/index';
import Image from 'next/image';

import styles from './mapBadge.module.scss';

export default async function MapBadge() {
  return (
    <div className={styles.banner}>
      <a
        className={`${styles.link} analytic__app_store`}
        target="_blank"
        href={IOS_DOWNLOAD_LINK}
        rel="noreferrer"
      >
        <Image
          src="/svg/badge_apple_resting.svg"
          width="90"
          height="28"
          alt="Download on the App Store"
        />
      </a>
      <a
        className={`${styles.link} analytic__download_gp`}
        target="_blank"
        href={ANDROID_DOWNLOAD_LINK}
        rel="noreferrer"
      >
        <Image
          src="/svg/badge_google_resting.svg"
          width="90"
          height="28"
          alt="GET IT ON Google Play"
        />
      </a>
    </div>
  );
}
