'use client';

import React from 'react';
import Image from 'next/image';

import styles from './Swipe.module.scss';

const minSwipeDistance = 1;
const DRAWER_STATE = {
  [-1]: styles.bottom,
  0: styles.middle,
  1: styles.top,
};

export default function Swipe({ children }) {
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const [drawerState, setDrawerState] = React.useState(0);

  return (
    <div className={`${styles.drawer} 
      ${DRAWER_STATE[drawerState]}`}
    >
      <div
        onPointerEnter={(e) => {
          setTouchEnd(null);
          setTouchStart(e.screenY);
        }}
        onPointerMove={(e) => {
          setTouchEnd(e.screenY);
        }}
        onPointerLeave={() => {
          if (!touchStart || !touchEnd) return;
          const distance = touchStart - touchEnd;
          const isTopSwipe = distance > minSwipeDistance;
          const isBottomSwipe = distance < -minSwipeDistance;

          setDrawerState((state) => {
            if (isTopSwipe && state !== 1) {
              return state + 1;
            }
            if (isBottomSwipe && state !== -1) {
              return state - 1;
            }

            return state;
          });
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
