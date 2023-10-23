'use client';

import React from 'react';
import Lottie from 'lottie-react';

import MobileSearch from '@/components/Controls/MobileSearch';
import useSearchFlight from '@/hooks/useSearchFlight';
import TrySearch from '@/components/TrySearch';
import styles from '@/components/Controls/DesktopSearch/desktopSearch.module.scss';
import skeletonAnimation from '@/assets/skeleton/search-skeleton.json';

export default function SearchFlight() {
  const {
    onChange, options, loading, text,
  } = useSearchFlight();

  return (
    <>
      <MobileSearch
        placeholder="Search by flight number or airport"
        onChange={onChange}
        options={options}
        text={text}
      />
      {loading ? (
        <div className={styles.lottie}>
          <Lottie animationData={skeletonAnimation} loop />
        </div>
      ) : (!options.length && <TrySearch />)}
    </>
  );
}
