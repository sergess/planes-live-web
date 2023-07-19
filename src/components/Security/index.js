import React from 'react';

import Button from '@/components/Buttons/primary';
import styles from './security.module.css';

export default function Security() {
  return (
    <div>
      <div className={styles.label}>
        <p>Security</p>
      </div>
      <div className={styles.container}>
        <Button>Open in the app</Button>
      </div>
    </div>
  );
}
