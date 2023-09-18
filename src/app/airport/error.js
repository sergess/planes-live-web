'use client';

import React from 'react';

import PrimaryButton from '@/components/Controls/Buttons/primary';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './error.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Error({
  error,
  reset,
}) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.code}>
        <p className={styles.codeText}>4</p>
        <Image
          src="/zero_cloud.gif"
          width={300}
          height={424}
          alt="Left arrow"
        />
        <p className={styles.codeText}>4</p>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>
          Houston,
          {' '}
          <br className={styles.br} />
          we have
          a problem
        </h1>
        <p className={styles.description}>
          I don’t know which text should we put on
          an error page but
          definitely not that one
        </p>
        <PrimaryButton onClick={() => reset()}>
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
        </PrimaryButton>
      </div>
    </div>
  );
}
