import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import StoreBadge from '@/components/StoreBadge';
import { FEATURES_ANCHOR } from '@/constants/index';
import styles from './features.module.css';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primary'), { ssr: false });

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
    description: 'Want to know it all? Get the plane model '
      + 'information with photo, age, call sign, '
      + 'registration number, and more.',
  },
  {
    text: 'Airport maps and timetables',
    icoURL: '/svg/ic_airport.svg',
    icoAlt: 'Airport symbol',
    description: 'Looking for a place to grab a snack before departure '
      + 'or a parking lot near the arrival '
      + 'gates? Find it all on the airport maps. '
      + 'Keep tabs on timetables, too.',
  },
  {
    text: 'Security wait times',
    icoURL: '/svg/ic_security_time.svg',
    icoAlt: 'Airport symbol',
    description: 'Pre-flight jitters? Know the airport\'s '
+ 'busy times to better plan your arrival and spend less Time in the security lines.',
  },
];

export default function Features() {
  return (
    <div className={styles.container} id={FEATURES_ANCHOR}>
      <div className={styles.rowWrapper}>
        {BANNER_MAP.map(({
          text, icoURL, icoAlt, description,
        }) => (
          <div className={styles.row} key={text}>
            <Image
              src={icoURL}
              width={29}
              height={29}
              alt={icoAlt}
            />
            <div className={styles.title}>
              {text}
            </div>
            <div className={styles.description}>
              {description}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <PrimaryButton>Download app</PrimaryButton>
        <StoreBadge />
      </div>
    </div>
  );
}
