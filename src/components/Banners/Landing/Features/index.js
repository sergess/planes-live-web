import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import Notification from '@/assets/svg/notification';
import Plane from '@/assets/svg/plane';
import Airport from '@/assets/svg/airport';
import Security from '@/assets/svg/security';
import styles from './features.module.css';

const BANNER_MAP = [
  {
    text: 'Flight updates',
    Icon: () => <Notification />,
  },
  { text: 'Detailed plane information', Icon: () => <Plane /> },
  { text: 'Airport maps and timetables', Icon: () => <Airport /> },
  { text: 'Security wait times', Icon: () => <Security /> },
];

export default function Features() {
  return (
    <div className={styles.container}>
      <div>
        {BANNER_MAP.map(({ text, Icon }) => (
          <div className={styles.row}>
            <Icon />
            <div>
              {text}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
