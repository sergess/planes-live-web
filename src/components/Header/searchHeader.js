'use client';

import React from 'react';

import LogoSvg from '@/assets/svg/logo';
import DesktopSearch from '@/components/Controls/DesktopSearch';
import useSearchFlight from '@/hooks/useSearchFlight';

import NoResult from '@/components/NoResult';
import { MIN_SYMBOL_COUNT } from '@/constants/index';
import styles from './header.module.css';

export default function SearchHeader() {
  const {
    onChange, onSelect, options, setText, text,
  } = useSearchFlight();

  return (
    <>
      <header className={styles.searchContainer}>
        <LogoSvg />
        <DesktopSearch
          onChange={onChange}
          onSelect={onSelect}
          setText={setText}
          options={options}
          text={text}
          placeholder="Search flights and airports"
        />
      </header>
      {(!options.length || text.length <= MIN_SYMBOL_COUNT) && <NoResult />}
    </>
  );
}
