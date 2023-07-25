'use client';

import React from 'react';
import Script from 'next/script';

export default function StyledComponentsRegistry({onLoaded}) {
  return <Script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" onLoad={onLoaded} />;
}
