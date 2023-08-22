import React from 'react';
import Link from 'next/link';

import styles from './link.module.css';

export default function LinkTo({
  href, children,
}) {
  return (
    <Link
      href={href}
      className={styles.showAll}
    >
      {children}
    </Link>
  );
}
