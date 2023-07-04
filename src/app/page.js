import React from 'react';

import PlaneSvg from '@/assets/svg/plane';
import Input from '@/components/Input';
import TrafficBanner from '@/components/Banners/Landing/traffic';
import BetterBanner from '@/components/Banners/Landing/better';
import FeaturesBanner from '@/components/Banners/Landing/features';
import Notification from '@/components/Banners/Landing/notification';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h4 className={styles.searchWrapper}>
        Track
        {' '}
        <PlaneSvg />
        <span className={styles.primaryText}>
          flights
        </span>
        {' '}
        <br />
        worldwide
      </h4>
      <Input placeholder="Search by flight number, airline, or airport" />
      <BetterBanner />
      <TrafficBanner />
      <FeaturesBanner />
      <Notification />
    </main>
  );
}
