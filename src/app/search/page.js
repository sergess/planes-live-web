import React from 'react';

import SearchFlight from '@/components/SearchFlight';
import SearchHeader from '@/components/Header/searchHeader';
import Map from '@/components/Map';
import styles from './page.module.css';

export default async function Page() {
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
