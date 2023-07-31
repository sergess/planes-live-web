import React from 'react';

import OutlineButton from '@/components/Buttons/outline';
import { FEATURES_ANCHOR } from '@/constants/index';
import styles from './better.module.css';

export default function Better() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Planes Live is better
        {' '}
        <br />
        with the app
      </h1>
      <OutlineButton href={`#${FEATURES_ANCHOR}`}>Find out why</OutlineButton>
    </div>
  );
}
