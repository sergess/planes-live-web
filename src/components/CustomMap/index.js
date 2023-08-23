'use client';

import React, { useEffect, useRef } from 'react';

import MapBox from '@/components/Map';
import useScreenWidthSmallerThan from '@/hooks/useScreenWidthSmallerThan';

export default function CustomMap() {
  const { isSmaller: isScreenMob, screenWidth } = useScreenWidthSmallerThan(600);

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.resize();
    }
  }, [isScreenMob, screenWidth]);

  return (
    !isScreenMob && <MapBox mapRef={mapRef} />
  );
}
