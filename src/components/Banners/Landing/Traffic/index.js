import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import StoreBadge from '@/components/StoreBadge';
import styles from './traffic.module.css';

export default function Traffic() {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>
        Check the
        {' '}
        <span className={styles.primaryText}>air traffic map</span>
      </h3>
      <p className={styles.text}>See flight routes across the globe in real time</p>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
        <StoreBadge />
      </div>
    </div>
  );
}