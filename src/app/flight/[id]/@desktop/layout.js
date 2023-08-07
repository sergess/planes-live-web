import React from 'react';

import SearchHeader from '@/components/Header/searchHeader';

import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div>
        <SearchHeader />
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}
