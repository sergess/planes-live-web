'use client';

import React from 'react';
import { SWRConfig } from 'swr';

export default function SWRProvider({ children }) {
  return <SWRConfig>{children}</SWRConfig>;
}
