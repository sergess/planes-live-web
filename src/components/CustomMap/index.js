'use client';

import React, { useEffect, useRef } from 'react';

import MapBox from '@/components/Map';
import useScreenWidthSmallerThan from '@/hooks/useScreenWidthSmallerThan';

const DESKTOP_WIDTH = 701;

export default function CustomMap(props) {
  const { isSmaller: isScreenMob, screenWidth } = useScreenWidthSmallerThan(DESKTOP_WIDTH);

  const mapRef = useRef(null);

  useEffect(() => {
    if (!isScreenMob && mapRef.current) {
      mapRef.current.resize();
    }
  }, [isScreenMob, screenWidth]);

  return (
    !isScreenMob && <MapBox mapRef={mapRef} {...props} />
  );
}
