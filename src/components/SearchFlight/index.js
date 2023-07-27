'use client';

import React from 'react';

import MobileSearch from '@/components/Controls/MobileSearch';
import useSearchFlight from '@/hooks/useSearchFlight';
import TrySearch from '@/components/TrySearch';

export default function SearchFlight() {
  const { onChange, onSelect, options } = useSearchFlight();

  return (
    <>
      <MobileSearch
        placeholder="Search by flight number, airline, or airport"
        onChange={onChange}
        options={options}
        onSelect={onSelect}
      />
      {!options.length && <TrySearch />}
    </>
  );
}
