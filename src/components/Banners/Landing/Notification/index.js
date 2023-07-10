import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import Notifications from '@/components/Notifications';
import localFont from 'next/font/local';
import styles from './notification.module.css';

const SF_PRO = localFont({
  src: './../../../../app/fonts/SanFranciscoProDisplay/SF-Pro-Display-Bold.otf',
  display: 'swap',
});
export default function Notification() {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.header} ${SF_PRO.className}`}>
        <span className={styles.primaryText}>Notifications</span>
        {' '}
        <br />
        when you need them
      </h3>
      <p className={styles.description}>Be the first to know when flights change</p>
      <Notifications />
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
