import React from 'react';
import dynamic from 'next/dynamic';

import SearchHeader from '@/components/Header/searchHeader';
import MobileRedirectSearch from '@/components/Controls/MobileRedirectSearch';

import BannerMetaTags from '@/components/BannerMetaTags';
import styles from './layout.module.scss';

const Banner = dynamic(() => import('@/components/Banner'), { ssr: false });

export default function Layout({ children, params }) {
  return (
    <>
      <BannerMetaTags path={`/flight/${params?.id}`} />
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
