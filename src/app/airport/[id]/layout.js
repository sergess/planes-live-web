import React from 'react';

import PageHeader from '@/components/Header/pageHeader';
import Footer from '@/components/Footer';
import Map from '@/components/Map';

import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <PageHeader />
        <main>
          {children}
        </main>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
      <Map />
    </>
  );
}
