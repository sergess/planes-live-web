'use client';

import React from 'react';
import Image from 'next/image';

import { ERROR_CODE } from '@/constants/index';
import styles from './errorCode.module.scss';

export default function Code({
  code,
}) {
  if (code === ERROR_CODE.NOT_FOUND) {
    return (
      <div className={styles.code}>
        <p className={styles.codeText}>4</p>
        <Image
          src="/img_error@2x.png"
          width={300}
          height={424}
          alt="Left arrow"
        />
        <p className={styles.codeText}>4</p>
      </div>
    );
  }

  if (code === ERROR_CODE.SERVER) {
    return (
      <div className={styles.code}>
        <p className={styles.codeText}>5</p>
        <Image
          src="/img_error@2x.png"
          width={300}
          height={424}
          alt="Left arrow"
        />
        <p className={styles.codeText}>0</p>
      </div>
    );
  }

  return (
    <div className={styles.code}>
      <p className={styles.codeText}>5</p>
      <Image
        src="/img_error@2x.png"
        width={300}
        height={424}
        alt="Left arrow"
      />
      <p className={styles.codeText}>0</p>
    </div>
  );
}
