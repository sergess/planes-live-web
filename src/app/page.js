import React from 'react';

import PlaneSvg from '@/assets/svg/plane';
import Input from '@/components/Input';
import TrafficBanner from '@/components/Banners/Landing/traffic';
import BetterBanner from '@/components/Banners/Landing/better';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.searchWrapper}>
        Track
        {' '}
        <PlaneSvg />
        <span className={styles.primaryText}>
          flights
        </span>
        {' '}
        <br />
        worldwide
      </div>
      <Input placeholder="Search by flight number, airline, or airport" />
      <BetterBanner />
      <TrafficBanner />
    </main>
  );
}
