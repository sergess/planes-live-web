import React from 'react';

import SearchFlight from '@/components/SearchFlight';
import SearchHeader from '@/components/Header/searchHeader';

import dynamic from 'next/dynamic';
import styles from './page.module.scss';

const CustomMap = dynamic(() => import('@/components/CustomMap'), { ssr: false });

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
        <CustomMap />
      </div>
    </>
  );
}
