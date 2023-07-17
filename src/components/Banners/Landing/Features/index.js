import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import Notification from '@/assets/svg/notification';
import Plane from '@/assets/svg/plane';
import Airport from '@/assets/svg/airport';
import Security from '@/assets/svg/security';
import StoreBadge from '@/components/StoreBadge';
import styles from './features.module.css';

const BANNER_MAP = [
  {
    text: 'Flight updates',
    Icon: () => <Notification />,
    description: 'If flights arrive earlier or later '
      + 'than expected, our flight tracker will '
      + 'send you change notifications. Customize them to your own needs.',
  },
  {
    text: 'Detailed plane information',
    Icon: () => <Plane />,
    description: 'Want to know it all? Get the plane model '
      + 'information with photo, age, call sign, '
      + 'registration number, and more.',
  },
  {
    text: 'Airport maps and timetables',
    Icon: () => <Airport />,
    description: 'Looking for a place to grab a snack before departure '
      + 'or a parking lot near the arrival '
      + 'gates? Find it all on the airport maps. '
      + 'Keep tabs on timetables, too.',
  },
  {
    text: 'Security wait times',
    Icon: () => <Security />,
    description: 'Pre-flight jitters? Know the airport\'s '
+ 'busy times to better plan your arrival and spend less time in the security lines.',
  },
];

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.rowWrapper}>
        {BANNER_MAP.map(({ text, Icon, description }) => (
          <div className={styles.row} key={text}>
            <Icon />
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
