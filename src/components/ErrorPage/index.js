'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Code from '@/components/ErrorPage/Code';
import { ERROR_CODE, ERROR_TEXT } from '@/constants/index';
import styles from './errorPage.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function ErrorPage({
  reset,
  code = ERROR_CODE.SERVER,
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
          {ERROR_TEXT[code].getText(styles)}
        </p>
        <button type="button" onClick={onClick || (() => reset())} className={styles.button}>
          {ERROR_TEXT[code].buttonText}
        </button>
        <button
          type="button"
          className={styles.copyWrapper}
          onClick={() => {
            navigator.clipboard.writeText('support@planeslive.com');
          }}
        >
          <Image
            src="/svg/copy.svg"
            width={20}
            height={20}
            alt="Copy"
          />
          <span>support@planeslive.com</span>
        </button>
      </div>
    </div>
  );
}
