import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import LogoSvg from '@/assets/svg/logo';
import { Bebas_Neue } from 'next/font/google';
import styles from './knowMore.module.css';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export default function KnowMore() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoContainer}>
          <LogoSvg />
        </div>
        <p className={`${styles.logoText} ${bebas.className}`}>PLANES LIVE</p>
      </div>
      <h3 className={styles.knowMore}>
        Know more.
        <br />
        Guess less.
      </h3>
      <p className={styles.description}>
        Track flights in real time
        {' '}
        <br />
        with the Planes Live app
      </p>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
