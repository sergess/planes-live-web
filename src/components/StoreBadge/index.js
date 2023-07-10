import React from 'react';

import BadgeAS from '@/assets/svg/badgeAS';
import BadgeGP from '@/assets/svg/badgeGP';

import styles from './StoreBadge.module.css';

export default function StoreBadge() {
  return (
    <>
      <BadgeAS className={styles.space} />
      <BadgeGP />
    </>
  );
}
