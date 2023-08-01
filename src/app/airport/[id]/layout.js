import React from 'react';

import PageHeader from '@/components/Header/pageHeader';
import SearchHeader from '@/components/Header/searchHeader';

import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* Mobile version */}
      <PageHeader />
      {/* desktop version */}
      <SearchHeader />
      <main>
        {children}
      </main>
    </div>
  );
}
