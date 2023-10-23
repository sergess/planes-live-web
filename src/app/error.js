'use client';

import React from 'react';
import { ERROR_CODE } from '@/constants/index';
import ErrorPage from '@/components/ErrorPage';

export default function Error(props) {
  return <ErrorPage {...props} code={ERROR_CODE.SERVER} />;
}
