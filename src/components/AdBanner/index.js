'use client';

import React from 'react';

import { useCleateAdSlot } from '@/hooks/useCleateAdSlot';
import { AD_OPTIONS } from '@/constants/adOptions';

import styles from './AdBanner.module.scss';

export default function AdBanner({ adId, css = {} }) {
  const ad = AD_OPTIONS[adId];

  useCleateAdSlot({
    mapping: ad.mapping,
    sizes: ad.sizes,
    slot: ad.slot,
    id: adId,
  });

  return (<div style={css} className={`${styles.banner} ${styles[ad.selector]}`}>
    <div id={adId} />
  </div>);
}
