import React from 'react';

import Left from '@/assets/svg/chevronLeft';

import styles from './header.module.css';

export default function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <div>
        <Left />
      </div>
    </header>
  );
}
