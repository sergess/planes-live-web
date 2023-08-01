import React from 'react';
import dynamic from 'next/dynamic';

import SearchFlight from '@/components/SearchFlight';
import SearchHeader from '@/components/Header/searchHeader';
import styles from './page.module.css';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Search() {
  return (
    <>
      <div className={styles.mobile}>
        {/* mobile version */}
        <SearchFlight />
      </div>
      <div className={styles.desktop}>
        <div className={styles.desktopContainer}>
          {/* desktop version */}
          <SearchHeader />
        </div>
        <Map />
      </div>
    </>
  );
}
