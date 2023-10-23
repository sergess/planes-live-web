import React from 'react';
import Link from 'next/link';

import styles from '@/components/Controls/Input/input.module.scss';

export default function SearchRedirect() {
  return (
    <Link
      href="/search"
      className={`${styles.link} analytic__search_window`}
    >
      <p
        className={styles.text}
      >
        Search by flight number or airport
      </p>
    </Link>
  );
}
