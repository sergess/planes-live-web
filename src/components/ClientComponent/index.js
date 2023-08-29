'use client';

import React from 'react';

import { formatDate } from '@/utils/date';

export default function ClientFormatDate({ date, format }) {
  return (
    <>
      {formatDate(date, format)}
    </>
  );
}
