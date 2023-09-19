'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Code from '@/components/ErrorCode/Code';
import styles from './errorCode.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function ErrorCode({
  error,
  reset,
  code,
}) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Code code={code} />
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>
          Houston,
          {' '}
          <br className={styles.br} />
          we have
          a problem
        </h1>
        <p className={styles.description}>
          {error?.message}
        </p>
        <button type="button" onClick={() => reset()} className={styles.button}>
          <Image
            src="/svg/arrow_up_right.svg"
            alt="Arrow up right"
            width={16}
            height={16}
            style={{
              marginRight: '10px',
            }}
          />
          Go back
        </button>
      </div>
    </div>
  );
}
