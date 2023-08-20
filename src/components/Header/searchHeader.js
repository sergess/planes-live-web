'use client';

import React from 'react';
import Image from 'next/image';

import DesktopSearch from '@/components/Controls/DesktopSearch';
import useSearchFlight from '@/hooks/useSearchFlight';

import styles from './header.module.css';

export default function SearchHeader() {
  const {
    onChange, onSelect, options, setText, text, loading,
  } = useSearchFlight();

  return (
    <header className={styles.searchContainer}>
      <Image
        src="/svg/app_icon.svg"
        priority
        width={40}
        height={41}
        alt="Planes Live - Flight Tracker app"
      />
      <DesktopSearch
        onChange={onChange}
        onSelect={onSelect}
        setText={setText}
        options={options}
        loading={loading}
        text={text}
        placeholder="Search flights and airports"
      />
    </header>
  );
}
