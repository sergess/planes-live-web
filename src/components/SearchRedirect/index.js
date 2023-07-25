'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';

export default function SearchRedirect() {
  const router = useRouter();

  const onClick = () => {
    router.push('search');
  };

  return (
    <Input
      placeholder="Search by flight number, airline, or airport"
      onClick={onClick}
    />
  );
}
