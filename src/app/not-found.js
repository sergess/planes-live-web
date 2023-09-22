import React from 'react';

import ErrorPage from '@/components/ErrorPage';
import { ERROR_CODE } from '@/constants/index';

export default function NotFound() {
  return (
    <ErrorPage code={ERROR_CODE.NOT_FOUND} />
  );
}
