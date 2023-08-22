import React from 'react';

import MobileRedirectSearch from '@/components/Controls/MobileRedirectSearch';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <MobileRedirectSearch />
      <main>
        {children}
      </main>
    </div>
  );
}
