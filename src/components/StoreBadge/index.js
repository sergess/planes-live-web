import React from 'react';

import BadgeAppStore from '@/assets/svg/badgeAppStore';
import BadgeGooglePlay from '@/assets/svg/badgeGooglePlay';

import styles from './StoreBadge.module.css';

export default function StoreBadge() {
  return (
    <>
      <BadgeAppStore className={styles.space} />
      <BadgeGooglePlay />
    </>
  );
}
