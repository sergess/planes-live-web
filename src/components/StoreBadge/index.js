import React from 'react';

import BadgeAppStore from '@/assets/svg/badgeAppStore';
import BadgeGooglePlay from '@/assets/svg/badgeGooglePlay';

import { ANDROID_DOWNLOAD_LINK, IOS_DOWNLOAD_LINK } from '@/constants/index';
import styles from './StoreBadge.module.css';

export default function StoreBadge() {
  return (
    <div>
      <a
        className={styles.link}
        target="_blank"
        href={IOS_DOWNLOAD_LINK}
        rel="noreferrer"
      >
        <BadgeAppStore className={styles.space} />
      </a>
      <a
        className={styles.link}
        target="_blank"
        href={ANDROID_DOWNLOAD_LINK}
        rel="noreferrer"
      >
        <BadgeGooglePlay />
      </a>
    </div>
  );
}
