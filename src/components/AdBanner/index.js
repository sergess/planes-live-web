'use client';

import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { AD_OPTIONS } from '@/constants/adOptions';

import styles from './AdBanner.module.scss';

const adSlots = {};

if (typeof window !== 'undefined') {
  window.googletag = window.googletag || { cmd: [] };
  const { googletag } = window;
  googletag.cmd.push(() => {
    googletag.pubads().disableInitialLoad();
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
}

// eslint-disable-next-line func-style
export function AdBanner({ adId, css = {} }) {
  const ad = AD_OPTIONS[adId];
  const { mapping } = ad;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { googletag } = window;

      googletag.cmd.push(() => {
        const adMapping = googletag.sizeMapping();
        Object.keys(mapping).forEach((breakpoint) => {
          adMapping.addSize([Number(breakpoint), 0], mapping[breakpoint]);
        });

        const map = adMapping.build();
        const slot = googletag.defineSlot(ad.slot, ad.sizes, adId);
        if (slot) {
          slot.defineSizeMapping(map);
          slot.addService(googletag.pubads());
          googletag.display(slot);
          adSlots[adId] = slot;
        }
      });
    }

    return () => {
      const { googletag } = window;
      googletag.cmd.push(() => {
        if (adSlots[adId]) {
          googletag.destroySlots([adSlots[adId]]);
          delete adSlots[adId];
        }
      });
    };
  }, []);

  return (
    <div style={css} className={`${styles.banner} ${styles[ad.selector]}`}>
      <div id={adId} />
    </div>
  );
}

export const RequestAds = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { googletag } = window;
      googletag.cmd.push(() => {
        const slots = Object.values(adSlots);
        googletag.pubads().refresh(slots);
      });
    }
  }, [pathname, searchParams]);
};
