import React from 'react';
import Link from 'next/link';

import LogoSvg from '@/assets/svg/logo';
import Search from '@/assets/svg/search';
import styles from './mobileRedirectSearch.module.css';

export default function MobileRedirectSearch() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoSvg />
        <p className={styles.label}>Planes Live</p>
      </div>
      <Link
        href="/search"
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Search />
      </Link>
    </header>
  );
}
