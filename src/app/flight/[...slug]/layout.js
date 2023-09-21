import React from 'react';
import dynamic from 'next/dynamic';

import SearchHeader from '@/components/Header/searchHeader';
import MobileRedirectSearch from '@/components/Controls/MobileRedirectSearch';

import styles from './layout.module.scss';

const Banner = dynamic(() => import('@/components/Banner'), { ssr: false });

export default function Layout({ children }) {
  return (
    <>
      <Banner />
      <div className={`${styles.container} flight`}>
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
    </>
  );
}
