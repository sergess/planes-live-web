import React from 'react';

import Swipe from '@/components/Swipe';

import Features from '@/components/Banners/Landing/Features';
import Traffic from '@/components/Banners/Landing/Traffic';
import Slider from '@/components/Slider';
import NotificationBanner from '@/components/Banners/Landing/Notification';
import AirportBanner from '@/components/Banners/Landing/Airport';
import KnowMore from '@/components/Banners/Landing/KnowMore';
import Footer from '@/components/Footer';
import PageTemplate from '../pageTemplate';
import styles from './page.module.css';

export default async function Page({
  params,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.drawer}>
        <Swipe id={params.id}>
          <div className={styles.body}>
            <PageTemplate params={params} />
            <div className={styles.bannersContainer}>
              <Features isMobileView />
              <Traffic />
              <Slider />
              <NotificationBanner />
              <AirportBanner />
              <KnowMore />
            </div>
            <Footer />
          </div>
        </Swipe>
      </div>
    </div>
  );
}
