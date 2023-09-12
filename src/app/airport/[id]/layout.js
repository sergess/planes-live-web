import React from 'react';

import PageHeader from '@/components/Header/pageHeader';
import SearchHeader from '@/components/Header/searchHeader';

import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} airportPage`}>
      <div className={styles.mobile}>
        {/* Mobile version */}
        <PageHeader />
      </div>
      <div className={styles.desktop}>
        {/* desktop version */}
        <SearchHeader />
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}
