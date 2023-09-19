'use client';

import React from 'react';
import { ERROR_CODE } from '@/constants/index';
import ErrorCode from '@/components/ErrorCode';

export default function Error() {
  return <ErrorCode code={ERROR_CODE.SERVER} />;
}
