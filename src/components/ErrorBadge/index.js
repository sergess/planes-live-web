'use client';

import React from 'react';

import Image from 'next/image';
import styles from './errorBadge.module.scss';

export default function ErrorBadge({ error }) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{error}</p>
      <div>
        <Image
          src="/svg/close_outlined.svg"
          width={16}
          height={16}
          alt="Close"
        />
      </div>
    </div>
  );
}
