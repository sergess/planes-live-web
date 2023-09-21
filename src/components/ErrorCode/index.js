'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Code from '@/components/ErrorCode/Code';
import { ERROR_TEXT } from '@/constants/index';
// import Footer from '@/components/Footer';
import styles from './errorCode.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function ErrorCode({
  reset,
  code = 500,
}) {
  return (
    <>
      <div className={`${styles.container} ${inter.className}`}>
        <Code code={code} />
        <div className={styles.textWrapper} data-test="asdfaskdflkasd fasdkfads fklasd faskdf lasdkf asldkf asdf sadf asdf ads fas df sdaasdlfkas dlfkas dflksad flksad f" data-a="asdf">
          <h1 className={styles.title}>
            {ERROR_TEXT[code].title}
          </h1>
          <p className={styles.description}>
            {ERROR_TEXT[code].text}
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
      {/* <Footer /> */}
    </>
  );
}
