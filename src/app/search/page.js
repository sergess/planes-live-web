import React from 'react';

import SearchFlight from '@/components/SearchFlight';
import styles from './page.module.css';

export default async function Page() {
  return (
    <div className={styles.container}>
      <SearchFlight />
    </div>
  );
}
