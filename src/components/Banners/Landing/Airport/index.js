import React from 'react';
import dynamic from 'next/dynamic';

import StoreBadge from '@/components/StoreBadge';
import Card from './Card';
import styles from './airport.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primary'), { ssr: false });

export default function Airport() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Be an
        {' '}
        <span className={styles.primaryText}>airport</span>
        {' '}
        insider
      </h2>
      <p className={styles.description}>
        Check detailed airport maps
        <br />
        {' '}
        and security wait times
      </p>
      <div className={styles.cardWrapper}>
        <Card />
        <div className={`${styles.buttonContainer} ${styles.localButtonContainer}`}>
          <PrimaryButton>Download app</PrimaryButton>
          <StoreBadge />
        </div>
      </div>
    </div>
  );
}
