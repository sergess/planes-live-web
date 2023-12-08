import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { AD_OPTIONS } from '@/constants/adOptions';

export const useCleateAdSlot = ({
  mapping, sizes, slot, id,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const destroySlots = useCallback((slots) => {
    window.googletag.cmd.push(() => {
      window.googletag.destroySlots(slots);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { googletag } = window;

      googletag.cmd.push(() => {
        const adIds = Object.keys(AD_OPTIONS);
        const removeSlots = googletag
          .pubads()
          .getSlots()
          .filter((item) => adIds.includes(item.getSlotElementId()));
        if (destroySlots.length > 0) {
          destroySlots(removeSlots);
        }

        const adMapping = googletag.sizeMapping();
        Object.keys(mapping).forEach((breakpoint) => {
          adMapping.addSize([Number(breakpoint), 0], mapping[breakpoint]);
        });

        const map = adMapping.build();

        googletag
          .defineSlot(
            slot,
            sizes,
            id,
          )
          .defineSizeMapping(map)
          .setTargeting('test', 'event')
          .addService(googletag.pubads());

        googletag.enableServices();
      });

      googletag.cmd.push(() => {
        googletag.display(id);
      });
    }
  }, [mapping, sizes, id, pathname, searchParams]);
};

export default useCleateAdSlot;
