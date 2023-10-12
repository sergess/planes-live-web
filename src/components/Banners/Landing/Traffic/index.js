import React from 'react';
import dynamic from 'next/dynamic';

import StoreBadge from '@/components/StoreBadge';

import styles from './traffic.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primaryWithModal'), { ssr: false });

export default function Traffic() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Check the
        {' '}
        <span className={styles.primaryText}>air traffic map</span>
      </h2>
      <p className={styles.text}>See flight routes across the globe in real time</p>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
        <StoreBadge
          iosAnalyticSelector="analytic__download_appstore_1_5"
          androidAnalyticSelector="analytic__download_gp_1_5"
        />
      </div>
    </div>
  );
}
