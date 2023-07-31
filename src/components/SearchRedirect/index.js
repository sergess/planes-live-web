import React from 'react';
import Link from 'next/link';

import styles from '@/components/Controls/Input/input.module.css';

export default function SearchRedirect() {
  return (
    <Link
      href="/search"
      style={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input
        disabled
        type="text"
        placeholder="Search by flight number, airline, or airpor"
        className={styles.input}
      />
    </Link>
  );
}
