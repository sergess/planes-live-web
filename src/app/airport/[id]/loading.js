'use client';

import React from 'react';
import Lottie from 'lottie-react';

import skeletonAnimation from '@/assets/skeleton/skeleton_airport.json';
import styles from './layout.module.scss';

export default function Loading() {
  return (
    <div className={styles.lottieContainer}>
      <Lottie animationData={skeletonAnimation} loop />
    </div>
  );
}
