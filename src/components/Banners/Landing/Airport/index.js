import React from 'react';

import PrimaryButton from '@/components/Controls/Buttons/primary';
import StoreBadge from '@/components/StoreBadge';
import styles from './airport.module.css';
import Card from './Card';

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
