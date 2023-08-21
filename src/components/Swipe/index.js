'use client';

import React, {useEffect} from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import styles from './Swipe.module.css';

const minSwipeDistance = 1;

export default function Swipe({ children }) {
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const [opened, setOpened] = React.useState(false);

  return (
      <div className={styles.drawer} style={{backgroundColor: opened ? 'auto' : 'red'}}>
    <div
      onTouchStart={(e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientY);
      }}
      onTouchMove={(e) => {
        setTouchEnd(e.targetTouches[0].clientY);
      }}
      onTouchEnd={() => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isTopSwipe = distance > minSwipeDistance;
        const isBottomSwipe = distance < -minSwipeDistance;
        if (isTopSwipe) {
          setOpened(false);
        } else if (isBottomSwipe) {
          setOpened(true);
        }
      }}
      className={styles.gripWrapper}
    >
      <Image
        src="/svg/card_grip.svg"
        width={32}
        height={4}
        alt=""
      />
    </div>
        {children}
      </div>
  );
}
