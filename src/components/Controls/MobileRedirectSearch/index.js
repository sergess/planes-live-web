import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './mobileRedirectSearch.module.css';

export default function MobileRedirectSearch() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/svg/app_icon.svg"
          priority
          width={40}
          height={41}
          alt="Planes Live - Flight Tracker app"
        />
        <p className={styles.label}>Planes Live</p>
      </div>
      <Link
        href="/search"
        className={styles.link}
      >
        <Image
          src="/svg/ic_search.svg"
          priority
          width={28}
          height={28}
          alt="Search"
        />
      </Link>
    </header>
  );
}
