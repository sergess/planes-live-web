'use client';

import React from 'react';

import SmartBanner from 'react-smartbanner';

export default function Banner() {
  return (
    <SmartBanner
      title="Planes Live"
      button="GET"
      storeText={{
        ios: 'Get more from the app',
        android: 'Get more from the app',
      }}
      agentOSVersionCheck
    />
  );
}
