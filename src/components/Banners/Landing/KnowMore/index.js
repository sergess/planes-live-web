import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import dynamic from 'next/dynamic';

import StoreBadge from '@/components/StoreBadge';
import styles from './knowMore.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primaryWithModal'), { ssr: false });

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export default function KnowMore() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <p className={`${styles.logoText} ${bebas.className}`}>PLANES LIVE</p>
      </div>
      <div className={styles.knowMore}>
        Know more.
        <br />
        Guess less.
      </div>
      <p className={styles.description}>
        Track flights in real time
        {' '}
        <br />
        with the Planes Live app
      </p>
      <div className={styles.buttonContainer}>
        <PrimaryButton analyticSelector="analytic__download_app_5">Download app</PrimaryButton>
        <StoreBadge
          androidAnalyticSelector="analytic__download_gp_5"
          iosAnalyticSelector="analytic__download_appstore_5"
        />
      </div>
    </div>
  );
}
