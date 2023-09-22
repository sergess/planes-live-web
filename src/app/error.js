'use client';

import React from 'react';
import { ERROR_CODE } from '@/constants/index';
import ErrorPage from '@/components/ErrorPage';

export default function Error() {
  return <ErrorPage code={ERROR_CODE.SERVER} />;
}
