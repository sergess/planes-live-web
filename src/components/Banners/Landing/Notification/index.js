import React from 'react';
import dynamic from 'next/dynamic';

import Notifications from '@/components/Notifications';
import StoreBadge from '@/components/StoreBadge';

import styles from './notification.module.css';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primary'), { ssr: false });

export default function Notification() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        <span className={styles.primaryText}>Notifications</span>
        {' '}
        <br />
        when you need them
      </h2>
      <p className={styles.description}>Be the first to know when flights change</p>
      <Notifications />
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
        <StoreBadge />
      </div>
    </div>
  );
}
