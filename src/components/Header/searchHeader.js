'use client';

import React from 'react';

import LogoSvg from '@/assets/svg/logo';
import DesktopSearch from '@/components/Controls/DesktopSearch';
import useSearchFlight from '@/hooks/useSearchFlight';

import styles from './header.module.css';

export default function SearchHeader() {
  const {
    onChange, onSelect, options, setText,
  } = useSearchFlight();

  return (
    <header className={styles.searchContainer}>
      <LogoSvg />
      <DesktopSearch
        onChange={onChange}
        onSelect={onSelect}
        setText={setText}
        options={options}
      />
    </header>
  );
}
