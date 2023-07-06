import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import styles from './traffic.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>
        Check the
        {' '}
        <span className={styles.primaryText}>air traffic map</span>
      </p>
      <p className={styles.text}>See flight routes across the globe in real time</p>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
