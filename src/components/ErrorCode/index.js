'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Code from '@/components/ErrorCode/Code';
import { ERROR_TEXT } from '@/constants/index';
import styles from './errorCode.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function ErrorCode({
  reset,
  code = 500,
  onClick,
}) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Code
        firstSymbol={ERROR_TEXT[code].firstSymbol}
        lastSymbol={ERROR_TEXT[code].lastSymbol}
      />
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>
          {ERROR_TEXT[code].title}
          <br className={styles.br} />
          {ERROR_TEXT[code].subTitle}
        </h1>
        <p className={styles.description}>
          {ERROR_TEXT[code].text}
        </p>
        <button type="button" onClick={onClick || (() => reset())} className={styles.button}>
          {ERROR_TEXT[code].buttonText}
        </button>
        <button
          type="button"
          className={styles.copyWrapper}
          onClick={() => {
            navigator.clipboard.writeText('support@planeslive.app');
          }}
        >
          <Image
            src="/svg/copy.svg"
            width={20}
            height={20}
            alt="Copy"
          />
          <span>support@planeslive.app</span>
        </button>
      </div>
    </div>
  );
}
