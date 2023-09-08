import React from 'react';
import dynamic from 'next/dynamic';

import SearchHeader from '@/components/Header/searchHeader';
import MobileRedirectSearch from '@/components/Controls/MobileRedirectSearch';

import styles from './layout.module.scss';

const Banner = dynamic(() => import('@/components/Banner'), { ssr: false });
export const generateMetadata = ({ params }) => ({
  // title: `${departureAirport.city} - ${destinationAirport.city} (${flight.iata}) [airline name] Flight Tracker |
  // Planes Live.`,
  // description: `Instantly track the status of an [[airline name]] airline flight
  // [${flight.iata}], route from ${departureAirport.city} to ${destinationAirport.city}. (61 wo flight details)`,
  themeColor: '#292838',
  itunes: {
    appId: process.env.IOS_STORE_ID,
    appArgument: `/flight/${params?.id}`,
  },
  icons: {
    apple: '/svg/app_icon_with_bg.svg',
    other: {
      rel: 'android-touch-icon',
      url: '/svg/app_icon_with_bg.svg',
    },
  },
  other: {
    'smartbanner:disable-positioning': true,
    'google-play-app': `app-id=${process.env.ANDROID_STORE_ID}, app-argument=${`/flight/${params?.id}`}}`,
  },
});
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
