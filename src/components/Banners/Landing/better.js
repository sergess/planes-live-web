import React from 'react';

import OutlineButton from '@/components/Buttons/outline';
import styles from './better.module.css';

export default function Better() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Planes Live is better
        {' '}
        <br />
        with the app
      </div>
      <OutlineButton>Find out why</OutlineButton>
    </div>
  );
}
