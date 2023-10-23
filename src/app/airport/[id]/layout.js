import React from 'react';

import PageHeader from '@/components/Header/pageHeader';
import SearchHeader from '@/components/Header/searchHeader';

import { Inter } from 'next/font/google';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
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
