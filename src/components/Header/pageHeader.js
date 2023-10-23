import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.scss';

export default function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <div>
        <Link href="/">
          <Image
            src="/svg/ic_chevron_left.svg"
            width={24}
            height={24}
            alt="Left arrow"
          />
        </Link>
      </div>
    </header>
  );
}
