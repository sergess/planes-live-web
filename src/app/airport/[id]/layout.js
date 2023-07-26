import React from 'react';

import PageHeader from '@/components/Header/pageHeader';
import SearchHeader from '@/components/Header/searchHeader';
import Footer from '@/components/Footer';

import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <PageHeader />
      <SearchHeader />
      <main>
        {children}
      </main>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
