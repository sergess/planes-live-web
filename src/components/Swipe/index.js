'use client';

import React from 'react';
import Image from 'next/image';

import styles from './Swipe.module.css';

const minSwipeDistance = 1;
const getDrawerState = (state = 0) => {
  if (+state === 0) {
    return styles.middle;
  }
  if (+state === 1) {
    return styles.top;
  }
  if (+state === -1) {
    return styles.bottom;
  }

  return '';
};

export default function Swipe({ children }) {
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const [drawerState, setDrawerState] = React.useState(0);

  return (
    <div className={`${styles.drawer} ${getDrawerState(drawerState)}`}>
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
          let newState;
          if (isTopSwipe) {
            newState = drawerState === 1 ? drawerState : drawerState + 1;
          } else if (isBottomSwipe) {
            newState = drawerState === -1 ? -1 : drawerState - 1;
          }
          setDrawerState(newState);
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
