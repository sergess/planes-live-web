import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { AD_OPTIONS } from '@/constants/adOptions';

export const useCleateAdSlot = ({
  mapping, sizes, slot, id,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { googletag } = window;

      googletag.cmd.push(() => {
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
    return () => {
      const { googletag } = window;
      googletag.cmd.push(function () {
        googletag.destroySlots();
      });
    };
  }, [mapping, sizes, id, pathname, searchParams]);
};

export default useCleateAdSlot;
