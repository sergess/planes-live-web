'use client';

import React from 'react';
import Lottie from 'lottie-react';

import MobileSearch from '@/components/Controls/MobileSearch';
import useSearchFlight from '@/hooks/useSearchFlight';
import TrySearch from '@/components/TrySearch';
import styles from '@/components/Controls/DesktopSearch/desktopSearch.module.css';
import skeletonAnimation from '@/assets/skeleton/search-skeleton.json';

export default function SearchFlight() {
  const {
    onChange, onSelect, options, loading,
  } = useSearchFlight();

  return (
    <>
      <MobileSearch
        placeholder="Search by flight number, airline, or airport"
        onChange={onChange}
        options={options}
        onSelect={onSelect}
      />
      {loading ? (
        <div className={styles.lottie}>
          <Lottie animationData={skeletonAnimation} loop />
        </div>
      ) : (!options.length && <TrySearch />)}
    </>
  );
}
