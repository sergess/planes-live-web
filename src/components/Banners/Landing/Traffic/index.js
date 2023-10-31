import React from 'react';
import dynamic from 'next/dynamic';

import StoreBadge from '@/components/StoreBadge';

import styles from './traffic.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primaryWithModal'), { ssr: false });

export default function Traffic({ isHome = true }) {
  const positionNumber = isHome ? 1 : 2;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Check the
        {' '}
        <span className={styles.primaryText}>air traffic map</span>
      </h2>
      <p className={styles.text}>See flight routes across the globe in real time</p>
      <div className={styles.buttonContainer}>
        <PrimaryButton analyticSelector={`analytic__download_app_${positionNumber}`}>Download app</PrimaryButton>
        <StoreBadge
          iosAnalyticSelector={`analytic__download_appstore_${positionNumber}`}
          androidAnalyticSelector={`analytic__download_gp_${positionNumber}`}
        />
      </div>
    </div>
  );
}
