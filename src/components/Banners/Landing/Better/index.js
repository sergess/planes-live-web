import React from 'react';

import OutlineButton from '@/components/Buttons/outline';
import styles from './better.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Planes Live is better
        {' '}
        <br />
        with the app
      </h1>
      <OutlineButton>Find out why</OutlineButton>
    </div>
  );
}
