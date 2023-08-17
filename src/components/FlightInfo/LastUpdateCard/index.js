import React from 'react';

import PrimaryButton from '@/components/Controls/Buttons/primary';
import { BUTTON_SIZE } from '@/constants/index';
import styles from './lastUpdateCard.module.css';

export default function LastUpdateCard({ actions = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>LATEST UPDATE</p>
        <p>5 min ago</p>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <p>Gate changed to B4C</p>
        </div>
        <PrimaryButton size={BUTTON_SIZE.SM}>
          View all updates (
          {actions.length || 0}
          )
        </PrimaryButton>
      </div>
    </div>
  );
}
