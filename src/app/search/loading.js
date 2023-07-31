'use client';

import React from 'react';

import Lottie from 'lottie-react';
import skeletonAnimation from './skeleton.json';

export default function Loading() {
  return (
    <div style={{ padding: '2rem' }}>
      <Lottie animationData={skeletonAnimation} loop />
    </div>
  );
}
