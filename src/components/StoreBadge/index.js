import React from 'react';
import Image from 'next/image';

import { ANDROID_DOWNLOAD_LINK, IOS_DOWNLOAD_LINK } from '@/constants/index';
import styles from './StoreBadge.module.css';

export default function StoreBadge({
  iosAnalyticSelector = '',
  androidAnalyticSelector = '',
}) {
  return (
    <div>
      <a
        className={`${styles.link} ${styles.space} ${iosAnalyticSelector}`}
        target="_blank"
        href={IOS_DOWNLOAD_LINK}
        rel="noreferrer"
      >
        <Image
          src="/svg/badge_apple_resting.svg"
          width="172"
          height="52"
          alt="Download on the App Store"
        />
      </a>
      <a
        className={`${styles.link} ${androidAnalyticSelector}`}
        target="_blank"
        href={ANDROID_DOWNLOAD_LINK}
        rel="noreferrer"
      >
        <Image
          src="/svg/badge_google_resting.svg"
          width="172"
          height="52"
          alt="GET IT ON Google Play"
        />
      </a>
    </div>
  );
}
