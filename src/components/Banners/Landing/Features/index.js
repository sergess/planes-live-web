import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import StoreBadge from '@/components/StoreBadge';
import { FEATURES_ANCHOR } from '@/constants/index';
import styles from './features.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primaryWithModal'), { ssr: false });

const BANNER_MAP = [
  {
    text: 'Flight updates',
    icoURL: '/svg/ic_notification.svg',
    icoAlt: 'Notifications',
    description: 'If flights arrive earlier or later '
      + 'than expected, our flight tracker will '
      + 'send you change notifications. Customize them to your own needs.',
  },
  {
    text: 'Detailed plane information',
    icoURL: '/svg/ic_plane.svg',
    icoAlt: 'Plane',
    description: (
      <>
        Want to know it all? Get the plane model
        information with photo, age,
        call sign, registration number, and&nbsp;more.
      </>),
  },
  {
    text: 'Airport maps and timetables',
    icoURL: '/svg/ic_airport.svg',
    icoAlt: 'Airport symbol',
    description: (
      <>
        Looking for a place to grab a snack before departure
        or a parking lot near the arrival gates?
        Find it all on&nbsp;the&nbsp;airport&nbsp;maps. Keep tabs
        on&nbsp;timetables, too.
      </>),
  },
  {
    text: 'Security wait times',
    icoURL: '/svg/ic_security_time.svg',
    icoAlt: 'Airport symbol',
    description: (
      <>
        Pre-flight jitters? Know the airport&#39;s busy
        times to better plan your arrival
        and spend less time in&nbsp;the&nbsp;security&nbsp;lines.
      </>),
  },
];

export default function Features({ id, isHome = true }) {
  const positionNumber = isHome ? 2 : 1;

  return (
    <div className={styles.container}>
      <div className={styles.anchor} id={FEATURES_ANCHOR} />
      <div className={styles.flightInfo}>
        <p>
          See more flight
          {' '}
          <span className={styles.id}>{id}</span>
          {' '}
          info
        </p>
        <p>in the Planes Live app</p>
      </div>
      <div className={styles.rowWrapper}>
        {BANNER_MAP.map(({
          text, icoURL, icoAlt, description,
        }) => (
          <div className={styles.row} key={text}>
            <Image
              src={icoURL}
              width={28}
              height={28}
              alt={icoAlt}
            />
            <h3 className={styles.title}>
              {text}
            </h3>
            <div className={styles.description}>
              {description}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <PrimaryButton analyticSelector={`analytic__download_app_${positionNumber}`}>Download app</PrimaryButton>
        <StoreBadge
          iosAnalyticSelector={`analytic__download_appstore_${positionNumber}`}
          androidAnalyticSelector={`analytic__download_gp_${positionNumber}`}
        />
      </div>
    </div>
  );
}
