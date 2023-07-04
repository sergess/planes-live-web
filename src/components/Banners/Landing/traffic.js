import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import styles from './traffic.module.css';

export default function Traffic() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Check the
        {' '}
        <span className={styles.primaryText}>air traffic map</span>
      </div>
      <div className={styles.text}>See flight routes across the globe in real time</div>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
