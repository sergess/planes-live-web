'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import ErrorPage from '@/components/ErrorPage';
import { ERROR_CODE } from '@/constants/index';

export default function NotFound(props) {
  const router = useRouter();

  return (
    <ErrorPage
      {...props}
      code={ERROR_CODE.NOT_FOUND}
      onClick={
      () => router.push('/')
    }
    />
  );
}
