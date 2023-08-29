import React from 'react';

import SearchHeader from '@/components/Header/searchHeader';
import MobileRedirectSearch from '@/components/Controls/MobileRedirectSearch';

import styles from './layout.module.scss';

export default async function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <MobileRedirectSearch />
      </div>
      <div className={styles.desktop}>
        <SearchHeader />
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}
