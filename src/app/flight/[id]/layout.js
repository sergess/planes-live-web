import React from 'react';
import dynamic from 'next/dynamic';

import SearchHeader from '@/components/Header/searchHeader';
import MobileRedirectSearch from '@/components/Controls/MobileRedirectSearch';

import BannerMetaTags from '@/components/BannerMetaTags';
import styles from './layout.module.scss';

const Banner = dynamic(() => import('@/components/Banner'), { ssr: false });

export const metadata = {
  title: 'Planes Live - Flight Tracker in Real Time',
  description: 'Track planes on an air traffic map, check aircraft flights, airline '
    + 'flight delays & cancellations, airport arrival & departure times and other flight info!',
};

export default function Layout({ children }) {
  return (
    <>
      <BannerMetaTags />
      <Banner />
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
    </>
  );
}
