import React from 'react';

import ErrorCode from '@/components/ErrorCode';
import { ERROR_CODE } from '@/constants/index';

export default function NotFound() {
  return (
    <ErrorCode code={ERROR_CODE.SERVER} buttonText="Go to main page" />
  );
}
