import React from 'react';

import OutlineButton from '@/components/Controls/Buttons/outline';
import { FEATURES_ANCHOR } from '@/constants/index';
import styles from './better.module.scss';

export default function Better() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Planes Live is better
        {' '}
        <br />
        with the app
      </h1>
      <OutlineButton href={`#${FEATURES_ANCHOR} analytic__find_out`}>Find out why</OutlineButton>
    </div>
  );
}
