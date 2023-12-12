import React from 'react';
import dynamic from 'next/dynamic';

import SearchFlight from '@/components/SearchFlight';
import SearchHeader from '@/components/Header/searchHeader';
import MapBadge from '@/components/Map/MapBadge';
import AdBanner from '@/components/AdBanner';

import { Inter } from 'next/font/google';
import styles from './page.module.scss';

const CustomMap = dynamic(() => import('@/components/CustomMap'), { ssr: false });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Search for a Flight or Airport - Planes Live',
  description: 'Search for detailed aircraft and flight data. Track live flights worldwide on a map, check real time flight status and airport information.',
  colorScheme: 'light dark',
};

export default function Search() {
  return (
    <>
      <div className={`${styles.mobile} ${inter.className}`}>
        {/* mobile version */}
        <SearchFlight />
      </div>
      <div className={`${styles.desktop} ${inter.className}`}>
        <div className={styles.desktopContainer}>
          {/* desktop version */}
          <SearchHeader autoFocus />
        </div>
        <CustomMap />
        <MapBadge />
        <AdBanner adId="div-gpt-ad-1702388746229-0" />
      </div>
      <AdBanner adId="div-gpt-ad-1702398586595-0" />
    </>
  );
}
