import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import dynamic from 'next/dynamic';

import StoreBadge from '@/components/StoreBadge';
import styles from './knowMore.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primary'), { ssr: false });

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export default function KnowMore() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
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
        <StoreBadge />
      </div>
    </div>
  );
}
