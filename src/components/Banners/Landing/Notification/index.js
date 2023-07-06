import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import Notifications from '@/components/Notifications';
import styles from './notification.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.primaryText}>Notifications</span>
        {' '}
        <br />
        when you need them
      </div>
      <p className={styles.description}>Be the first to know when flights change</p>
      <Notifications />
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
