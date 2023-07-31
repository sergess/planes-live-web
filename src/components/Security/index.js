import React from 'react';

import LinkTo from '@/components/Link';
import styles from './security.module.css';

export default function Security() {
  return (
    <div>
      <div className={styles.label}>
        <p>SECURITY WAIT TIMES</p>
      </div>
      <div className={styles.container}>
        <LinkTo href="">Open in the app</LinkTo>
      </div>
    </div>
  );
}
