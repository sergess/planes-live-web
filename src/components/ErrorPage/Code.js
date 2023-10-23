'use client';

import React from 'react';
import Image from 'next/image';

import styles from './errorPage.module.scss';

export default function Code({
  firstSymbol, lastSymbol,
}) {
  return (
    <div className={styles.code}>
      <p className={styles.codeText}>{firstSymbol}</p>
      <Image
        src="/img_error@2x.png"
        width={300}
        height={424}
        alt="Left arrow"
      />
      <p className={styles.codeText}>{lastSymbol}</p>
    </div>
  );
}
