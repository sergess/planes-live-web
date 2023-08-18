import React from 'react';
import Image from 'next/image';

import TrafficBanner from '@/components/Banners/Landing/Traffic';
import BetterBanner from '@/components/Banners/Landing/Better';
import FeaturesBanner from '@/components/Banners/Landing/Features';
import NotificationBanner from '@/components/Banners/Landing/Notification';
import AirportBanner from '@/components/Banners/Landing/Airport';
import Slider from '@/components/Slider';
import KnowMore from '@/components/Banners/Landing/KnowMore';
import { Inter } from 'next/font/google';
import SearchRedirect from '@/components/SearchRedirect';
import LandingHeader from '@/components/Header/landingHeader';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.searchWrapper}>
          Track
          {' '}
          <span className={styles.svg}>
            <Image
              src="/svg/ic_plane.svg"
              width={28}
              height={29}
              alt="Plane"
            />
          </span>
          <span className={styles.primaryText}>
            flights
          </span>
          {' '}
          <br />
          worldwide
        </h1>
        <SearchRedirect />
        <BetterBanner />
        <TrafficBanner />
        <Slider />
        <FeaturesBanner />
        <NotificationBanner />
        <AirportBanner />
        <KnowMore />
      </main>
      <Footer />
    </>
  );
}
