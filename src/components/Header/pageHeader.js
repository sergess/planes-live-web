import React from 'react';
import Link from 'next/link';

import Left from '@/assets/svg/chevronLeft';

import styles from './header.module.css';

export default function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <div>
        <Link href="/"><Left /></Link>
      </div>
    </header>
  );
}
