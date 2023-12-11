import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

import TrafficBanner from '@/components/Banners/Landing/Traffic';
import BetterBanner from '@/components/Banners/Landing/Better';
import FeaturesBanner from '@/components/Banners/Landing/Features';
import NotificationBanner from '@/components/Banners/Landing/Notification';
import AirportBanner from '@/components/Banners/Landing/Airport';
import Slider from '@/components/Slider';
import KnowMore from '@/components/Banners/Landing/KnowMore';
import SearchRedirect from '@/components/SearchRedirect';
import LandingHeader from '@/components/Header/landingHeader';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import ModalProvider from '@/contexts/modal/ModalContextProvider';

import styles from './page.module.scss';

const ClientAnchorScript = dynamic(() => import('@/components/ClientScript'), { ssr: false });

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export default async function Home() {
  return (
    <ModalProvider>
      <div className="landingBanners">
        <LandingHeader />
        <AdBanner adId="div-gpt-ad-1702304851401-0" />
        <AdBanner adId="div-gpt-ad-1702305175369-0" />
        <main className={`${styles.main} ${inter.className}`}>
          <AdBanner adId="div-gpt-ad-1702305328903-0" />
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
          <AdBanner adId="div-gpt-ad-1702305273711-0" />
          <BetterBanner />
          <TrafficBanner />
          <Slider />
          <FeaturesBanner />
          <NotificationBanner />
          <AirportBanner />
          <KnowMore />
        </main>
        <Footer />
        <ClientAnchorScript />
      </div>
    </ModalProvider>
  );
}
