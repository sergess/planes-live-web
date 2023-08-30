'use client';

import React from 'react';
import Image from 'next/image';

import DesktopSearch from '@/components/Controls/DesktopSearch';
import useSearchFlight from '@/hooks/useSearchFlight';

import Link from 'next/link';
import styles from './header.module.scss';

export default function SearchHeader({ autoFocus = false }) {
  const {
    onChange, onSelect, options, setText, text, loading,
  } = useSearchFlight();

  return (
    <header className={styles.searchContainer}>
      <Link href="/">
        <Image
          src="/svg/app_icon.svg"
          priority
          width={40}
          height={41}
          alt="Planes Live - Flight Tracker app"
        />
      </Link>
      <DesktopSearch
        onChange={onChange}
        onSelect={onSelect}
        setText={setText}
        options={options}
        loading={loading}
        text={text}
        placeholder="Search flights and airports"
        autoFocus={autoFocus}
      />
    </header>
  );
}
