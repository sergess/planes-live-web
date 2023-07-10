import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import localFont from 'next/font/local';
import styles from './airport.module.css';
import Card from './Card';

const SF_PRO = localFont({
  src: './../../../../app/fonts/SanFranciscoProDisplay/SF-Pro-Display-Regular.otf',
  display: 'swap',
});
export default function Airport() {
  return (
    <div className={`${styles.container} ${SF_PRO.className}`}>
      <h3 className={styles.title}>
        Be an
        {' '}
        <span className={styles.primaryText}>airport</span>
        {' '}
        insider
      </h3>
      <p className={styles.description}>
        Check detailed airport maps
        <br />
        {' '}
        and security wait times
      </p>
      <Card />
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
