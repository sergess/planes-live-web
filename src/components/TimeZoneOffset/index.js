'use client';

import React from 'react';

import { MIN_TO_HOUR } from '@/constants/date';

export default function TimeZoneOffset() {
  const date = new Date();

  return (
    <>
      {' '}
      • GMT
      {date.getTimezoneOffset() / MIN_TO_HOUR}
    </>
  );
}
