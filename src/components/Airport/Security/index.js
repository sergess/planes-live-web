import React from 'react';

import PrimaryButton from '@/components/Controls/Buttons/primaryWithModal';
import styles from './security.module.css';

export default function Security() {
  return (
    <div>
      <div className={styles.label}>
        <p>SECURITY WAIT TIMES</p>
      </div>
      <div className={styles.container}>
        <PrimaryButton>Open in the app</PrimaryButton>
      </div>
    </div>
  );
}
