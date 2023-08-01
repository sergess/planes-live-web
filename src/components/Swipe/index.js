'use client';

import React from 'react';
import CardGrip from '@/assets/svg/cardGrip';

import { useRouter } from 'next/navigation';
import styles from './Swipe.module.css';

const minSwipeDistance = 1;

export default function Swipe({ id, state = 0 }) {
  const router = useRouter();
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  return (
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
          router.replace(`/flight/${id}?drawer=${state + 1}`);
        } else if (isBottomSwipe) {
          const newState = state === -1 ? -1 : state - 1;
          router.replace(`/flight/${id}?drawer=${newState}`);
        }
      }}
      className={styles.gripWrapper}
    >
      <CardGrip />
    </div>
  );
}
