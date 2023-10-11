'use client';

import React, { useRef, useCallback } from 'react';
import Image from 'next/image';

import styles from './Swipe.module.scss';

const minSwipeDistance = 1;
const DRAWER_STATE = {
  [-1]: styles.bottom,
  0: styles.middle,
  1: styles.top,
};

const MIN_SCROLL_VALUE = 30;

export default function Swipe({ children }) {
  const [touchStart, setTouchStart] = React.useState(null);
  const [drawerState, setDrawerState] = React.useState(0);

  const scrollRef = useRef(null);

  const onScroll = useCallback(() => {
    if (scrollRef.current) {
      const scrollBlock = scrollRef.current;
      const { scrollTop } = scrollBlock;
      const scrolled = scrollTop > MIN_SCROLL_VALUE;
      if (scrolled) {
        setDrawerState(1);
      } else {
        setDrawerState(0);
      }
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className={`${styles.drawer} 
      ${DRAWER_STATE[drawerState]}`}
    >
      <div
        onPointerDown={(e) => {
          e.stopPropagation();
          e.target.setPointerCapture(e.pointerId);
          setTouchStart(e.clientY);
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          e.target.releasePointerCapture(e.pointerId);
          const touchEnd = e.clientY;
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
