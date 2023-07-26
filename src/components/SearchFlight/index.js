'use client';

import React from 'react';

import MobileSearch from '@/components/Controls/MobileSearch';
import useSearchFlight from '@/hooks/useSearchFlight';

export default function SearchFlight() {
  const { onChange, onSelect, options } = useSearchFlight();

  return (
    <MobileSearch
      placeholder="Search by flight number, airline, or airport"
      onChange={onChange}
      options={options}
      onSelect={onSelect}
    />
  );
}
