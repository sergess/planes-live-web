import React from 'react';

import PlaneSvg from '@/assets/svg/plane';
import TrafficBanner from '@/components/Banners/Landing/Traffic';
import BetterBanner from '@/components/Banners/Landing/Better';
import FeaturesBanner from '@/components/Banners/Landing/Features';
import NotificationBanner from '@/components/Banners/Landing/Notification';
import AirportBanner from '@/components/Banners/Landing/Airport';
import Slider from '@/components/Slider';
import KnowMore from '@/components/Banners/Landing/KnowMore';
import { Inter } from 'next/font/google';
import SearchFlight from '@/components/SearchFlight';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h4 className={styles.searchWrapper}>
        Track
        {' '}
        <span className={styles.svg}><PlaneSvg /></span>
        <span className={styles.primaryText}>
          flights
        </span>
        {' '}
        <br />
        worldwide
      </h4>
      <SearchFlight />
      <BetterBanner />
      <TrafficBanner />
      <Slider />
      <FeaturesBanner />
      <NotificationBanner />
      <AirportBanner />
      <KnowMore />
    </main>
  );
}
